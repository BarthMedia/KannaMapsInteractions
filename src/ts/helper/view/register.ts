// + Imports +

// Custom
import * as config from '../../config';

// + Exports +
export default function (state: any) {
  // Elements
  const modul = document.querySelector('[c-el="sign-up-modul"]') as HTMLElement;
  const form = modul?.querySelector('form');
  const googleBtn = modul?.querySelector('.google-sign-up-btn');
  const modulCloser = modul?.querySelector('.pop--up_x') as HTMLElement;
  const reviewButton = document?.querySelector(
    '[c-el="review-opener"]'
  ) as HTMLElement | null;

  // Values
  const studioForm =
    StudioForm[
      parseFloat(form?.parentElement?.getAttribute('data-sf-id') || '-1')
    ];

  // Guard
  if (!modulCloser || !modul || !form || !studioForm || !googleBtn)
    throw new Error(
      `KannaMapsInteractions -> register.ts: Coulnd't find required elements!`
    );

  // + Events +

  // Submit
  studioForm.events.afterSubmit(() => {
    // Values
    const token = studioForm.data?.response?.authToken;

    // Guard
    if (!token)
      throw new Error(
        `KannaMapsInteractions -> register.ts: Coulnd't find token!`
      );

    // Set
    modul.style.pointerEvents = 'none';
    ls.set('userToken', token, { ttl: 86400 * 30 });
    ls.set('user', {
      email: studioForm.data.payload.email,
      name: studioForm.data.payload.name,
    });
    state.buttonState();
    setTimeout(() => {
      modulCloser.click();
      reviewButton?.click();
    }, studioForm.animationData.timeBoth * 1000 + 300);
  });

  // Google
  googleBtn.addEventListener('click', () => {
    state.googleAuth();
  });
}
