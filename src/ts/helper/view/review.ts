// + Imports +

// Custom
import * as config from '../../config';

// + Exports +
export default function (state: any) {
  // Elements
  const modul = document.querySelector(
    '[c-el="review-modul"]'
  ) as HTMLElement | null;
  const form = modul?.querySelector('form');
  const modulCloser = modul?.querySelector('.pop--up_x') as HTMLElement | null;
  const reviewButton = document?.querySelector(
    '[c-el="review-opener"]'
  ) as HTMLElement | null;

  // Values
  const studioForm =
    StudioForm[
      parseFloat(form?.parentElement?.getAttribute('data-sf-id') || '-1')
    ];

  // Guard
  if (!modulCloser || !modul || !form || !studioForm) {
    console.warn(
      `KannaMapsInteractions -> review.ts: Coulnd't find required elements!`
    );
    return;
  }

  // + Initialize functionality +

  // + Events +

  // Submit
  studioForm.events.onSubmit(() => {
    // Add auth token
    form.setAttribute('data-auth-token', ls.get('userToken'));
  });
}
