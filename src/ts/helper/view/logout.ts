// + Imports +

// Custom
import * as config from '../../config';

// + Exports +
export default function (state: any) {
  // Elements
  const logoutBtns = document.querySelectorAll('[c-el="logout"]');

  // Guard
  if (!logoutBtns.length)
    throw new Error(
      `KannaMapsInteractions -> logout.ts: Coulnd't find required elements!`
    );

  // + Events +

  // Submit
  logoutBtns.forEach(btn =>
    btn.addEventListener('click', () => {
      // Reset
      ls.remove('userToken');
      state.buttonState();
      window.location.reload();
    })
  );
}
