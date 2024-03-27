// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Understanding TypeScript</title>
//     <script src="dist/app.js" defer></script>
//   </head>
//   <body>
//     <h1>This is a pop up window page</h1>
//     <button id="popupBtn">Open Popup</button>
//     <br />

//     <div class="overlay" id="overlay"></div>
//     <div class="popup" id="popup" hidden>
//       <h2>I love Maia Yabo</h2>
//       <p>סיט פוקיט חרבנית.</p>
//       <button id="closeBtn">Close</button>
//     </div>
//   </body>
// </html>

// const userInput = <HTMLInputElement>document.getElementById("user-input"); ==> Same result as below:
// const userInput = document.getElementById("user-input")! as HTMLInputElement;

// function userInputAlert() {
//   alert(userInput.value);
// }

// const button = document.getElementById("popupBtn")! as HTMLButtonElement;
// button.addEventListener("click", userInputAlert);

// ---------------------------------------------------------------------------------------------------------------------------------- \\

// {email: 'Not a valid email', username: 'Must start with a capital character!'}
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

document.addEventListener("DOMContentLoaded", function () {
  const popupBtn = document.getElementById("popupBtn")!;
  const overlay = document.getElementById("overlay")!;
  const popup = document.getElementById("popup")!;
  const closeBtn = document.getElementById("closeBtn")!;

  function showPopup() {
    overlay.style.display = "block";
    popup.style.display = "block";
  }

  function hidePopup() {
    overlay.style.display = "none";
    popup.style.display = "none";
  }

  popupBtn.addEventListener("click", showPopup);
  closeBtn.addEventListener("click", hidePopup);
  overlay.addEventListener("click", hidePopup);
});
