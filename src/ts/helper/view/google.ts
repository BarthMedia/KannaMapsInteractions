// + Imports +

// Custom
import * as config from '../../config';
import * as model from '../../model';

// Values
var login_path = location.pathname;
var redirect_uri = 'https://' + location.host + '/anmeldung';
var xano_oauth_init_url =
  'https://app.kannamaps.de/api:U0aE1wpF/oauth/google/init';
var xano_oauth_continue_url =
  'https://app.kannamaps.de/api:U0aE1wpF/oauth/google/continue';
var formHeaders = [];
var formResponse = [];

var authState = false;

//initialize the authentication API

function initOauth() {
  var fetchURL: URL | string = new URL(xano_oauth_init_url);
  fetchURL.searchParams.set('redirect_uri', redirect_uri);
  fetchURL = fetchURL.toString();

  fetch(fetchURL, {
    headers: formHeaders,
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => (formResponse = data))
    .then(() => loginResponse(formResponse))

    .catch(error => {
      console.error('Error:', error);
      //responsePanel('error')
    });
}

function loginResponse(res: any) {
  window.location.href = res.authUrl;
}

//when code is available attempt to login/signup. make sure to include

function continueOauth(code: string) {
  var fetchURL: URL | string = new URL(xano_oauth_continue_url);
  fetchURL.searchParams.set('redirect_uri', redirect_uri);
  fetchURL.searchParams.set('code', code);
  fetchURL = fetchURL.toString();
  localStorage.removeItem('googleOAuthCode');

  fetch(fetchURL, {
    headers: formHeaders,
    method: 'GET',
  })
    .then(res => res.json())
    .then(data => (formResponse = data))
    .then(() => saveToken(formResponse))
    .catch(error => {
      console.error('Error:', error);
    });
}

//save the generated token in the local storage as a cookie
function saveToken(res: any) {
  ls.set('userToken', res.token, { ttl: 86400 * 30 });
  ls.set('user', {
    email: res.email,
    name: res.name,
  });
  model.state.buttonState();
}

// + Exports +
export const onClick = function () {
  initOauth();
  //   console.log(ls.get('userToken'), ls.get('user'));
};

export const onLoad = function () {
  var code = localStorage.getItem('googleOAuthCode');
  if (code) {
    continueOauth(code);
  }
};
