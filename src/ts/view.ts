// + Imports +

// Custom
import * as config from './config';
import register from './helper/view/register';
import login from './helper/view/login';
import logout from './helper/view/logout';
import review from './helper/view/review';
import * as google from './helper/view/google';
import initPwReset from './helper/view/initPwReset';
import submitPwReset from './helper/view/submitPwReset';

// + Exports +
export default function init(state: any) {
  // Elements
  const registerBtn = document.querySelector(
    '[c-el="register"]'
  ) as HTMLElement | null;
  const signinBtn = document.querySelector(
    '[c-el="login"]'
  ) as HTMLElement | null;
  const logoutBtn = document.querySelector(
    '[c-el="logout"]'
  ) as HTMLElement | null;
  const reviewCloser = document.querySelector(
    '[c-el="review-closer"]'
  ) as HTMLElement | null;
  const reviewModul = document.querySelector(
    '[c-el="review-modul"]'
  ) as HTMLElement | null;

  // Guard
  if (!registerBtn || !signinBtn || !logoutBtn)
    throw new Error(
      `KannaMapsInteractions -> view.ts: Coulnd't find required elements!`
    );

  // Button state
  const btns = [registerBtn, signinBtn, logoutBtn];
  state.buttonState = () => {
    // Hide
    btns.forEach(btn => btn.classList.add('cc-inactive'));

    // Show logic
    if (ls.get('userToken')) logoutBtn.classList.remove('cc-inactive');
    else if (ls.get('user')) signinBtn.classList.remove('cc-inactive');
    else registerBtn.classList.remove('cc-inactive');

    // Confirm
    const banner = document.querySelector(
      '[c-el="complete-setup"]'
    ) as HTMLElement;
    if (ls.get('userToken') && !ls.get('user').confirmed) {
      if (banner) banner.classList.remove('cc-inactive');
    } else {
      if (banner) banner.classList.add('cc-inactive');
    }
  };

  // Google auth
  state.googleAuth = google.onClick;
  google.onLoad();

  // Init
  state.buttonState();
  register(state);
  login(state);
  logout(state);
  review(state);
  initPwReset(state);
  submitPwReset(state);

  // Review buttons event listener
  const reviewButtons = document?.querySelectorAll('[c-el="review-opener"]');
  reviewButtons.forEach(btn =>
    btn.addEventListener('click', () => {
      // Show logic
      if (ls.get('userToken')) return;
      else if (ls.get('user')) {
        signinBtn.click();
        if (reviewModul) reviewModul.style.opacity = '0';
        setTimeout(() => {
          reviewCloser?.click();
          if (reviewModul) reviewModul.style.opacity = '';
        }, 100);
      } else {
        registerBtn.click();
        if (reviewModul) reviewModul.style.opacity = '0';
        setTimeout(() => {
          reviewCloser?.click();
          if (reviewModul) reviewModul.style.opacity = '';
        }, 100);
      }
    })
  );
}
