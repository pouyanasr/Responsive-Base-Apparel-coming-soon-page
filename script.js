"use strict";
const errorIcon = document.querySelector("#error-icon");
const errorMassage = document.querySelector("#error-massage");

const inputEmail = document.getElementById("email-input");

const btnSubmit = document.querySelector("#submit-btn");

const theForm = document.testform;

const displayError = function () {
  if (
    testform.email.value == "" ||
    testform.email.value == null ||
    testform.email.value.length < 6
  ) {
    errorIcon.classList.remove("hidden");
    errorMassage.classList.remove("hidden");
    document
      .querySelector(".container__email-input")
      .classList.add("add-border");
  } else {
    errorMassage.classList.remove("hidden");
    errorMassage.textContent = "Subscribed";
    errorMassage.style.color = "green";
    errorIcon.classList.add("hidden");
    document
      .querySelector(".container__email-input")
      .classList.remove("add-border");
  }
};

btnSubmit.addEventListener("click", displayError);
