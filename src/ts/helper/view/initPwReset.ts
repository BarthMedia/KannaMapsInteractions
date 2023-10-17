// + Imports +

// Custom
import * as config from '../../config';

// + Exports +
export default function (state: any) {
  // Elements
  const modul = document.querySelector(
    '[c-el="forgot-password-modul"]'
  ) as HTMLElement;
  const form = modul?.querySelector('form');
  const modulCloser = modul?.querySelector('.pop--up_x') as HTMLElement;
  const resetModul = document.querySelector(
    '[c-el="new-password-modul"]'
  ) as HTMLElement;
  const email = document.getElementById('security_email') as HTMLInputElement;

  // Values
  const studioForm =
    StudioForm[
      parseFloat(form?.parentElement?.getAttribute('data-sf-id') || '-1')
    ];

  // Guard
  if (!modulCloser || !modul || !form || !studioForm || !email || !resetModul)
    throw new Error(
      `KannaMapsInteractions -> initPwReset.ts: Coulnd't find required elements!`
    );

  // + Events +

  // Submit
  studioForm.events.afterSubmit(() => {
    // Set value
    email.value = studioForm.data.payload[0].value;

    // Timeout
    setTimeout(() => {
      modulCloser.click();
      resetModul.classList.add('cc-active');
    }, studioForm.animationData.timeBoth * 1000 + 300);
  });
}
