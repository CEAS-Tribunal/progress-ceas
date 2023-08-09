
const discloseContactInfoYes = document.querySelector(".intro #contact-yes");
const discloseContactInfoNo = document.querySelector(".intro #contact-no");

const formUserInfo = document.querySelector(".intro #user-info");
const formFullName = document.querySelector(".intro #full-name");
const formMajor = document.querySelector(".intro #major");
const formGradYear = document.querySelector(".intro #grad-year");
const formEmail = document.querySelector(".intro #email");
const formConcerns = document.querySelector(".intro #concerns");

const academicEnvironmentSatisfied = document.querySelector(".intro #academic-satisfied");
const academicEnvironmentSomewhatSatisfied = document.querySelector(".intro #academic-somewhat-satisfied");
const academicEnvironmentUnsatisfied = document.querySelector(".intro #academic-unsatisfied");
const coopEnvironmentSatisfied = document.querySelector(".intro #coop-satisfied");
const coopEnvironmentSomewhatSatisfied = document.querySelector(".intro #coop-somewhat-satisfied");
const coopEnvironmentUnsatisfied = document.querySelector(".intro #coop-unsatisfied");

const formAcademicComment = document.querySelector(".intro #academic-comment");
const formCoopComment = document.querySelector(".intro #coop-comment");
const formChanges = document.querySelector(".intro #changes");
const formAcademicResources = document.querySelector(".intro #academic-resources");
const formCoopResources = document.querySelector(".intro #coop-resources");

const studentLedYes = document.querySelector(".intro #student-led-yes");
const studentLedNo = document.querySelector(".intro #student-led-no");
const followUpYes = document.querySelector(".intro #follow-up-yes");
const followUpNo = document.querySelector(".intro #follow-up-no");
const formSubmitButton = document.querySelector(".intro #submit-button");

/**
 *  Show user information fields
 */
discloseContactInfoYes.onclick = function discloseContactInfoYesOnClick() {
  discloseContactInfoNo.checked = false;
  formUserInfo.style.visibility = "visible";
  formUserInfo.style.height = "532px";
  formUserInfo.style.overflow = "visible";
  formUserInfo.style.opacity = "1";
  formUserInfo.style.margin = "40px auto";
  formUserInfo.style.padding = "10px";
};

/**
 * Hide user information fields
 */
discloseContactInfoNo.onclick = function discloseContactInfoNoOnClick() {
  discloseContactInfoYes.checked = false;
  formUserInfo.style.visibility = "hidden";
  formUserInfo.style.height = "0px";
  formUserInfo.style.overflow = "hidden";
  formUserInfo.style.opacity = "0";
  formUserInfo.style.margin = "-20px";
  formUserInfo.style.padding = "0px";
};

/**
 * Handling academic experience results
 */
academicEnvironmentSatisfied.onclick = function academicEnvironmentSatisfiedOnClick() {
  academicEnvironmentSomewhatSatisfied.checked = false;
  academicEnvironmentUnsatisfied.checked = false;
};
academicEnvironmentSomewhatSatisfied.onclick = function academicEnvironmentSomewhatSatisfiedOnClick() {
  academicEnvironmentSatisfied.checked = false;
  academicEnvironmentUnsatisfied.checked = false;
};
academicEnvironmentUnsatisfied.onclick = function academicEnvironmentUnsatisfiedOnClick() {
  academicEnvironmentSatisfied.checked = false;
  academicEnvironmentSomewhatSatisfied.checked = false;
};

/**
 * Handling co-op experience results
 */
coopEnvironmentSatisfied.onclick = function coopEnvironmentSatisfiedOnClick() {
  coopEnvironmentSomewhatSatisfied.checked = false;
  coopEnvironmentUnsatisfied.checked = false;
};
coopEnvironmentSomewhatSatisfied.onclick = function coopEnvironmentSomewhatSatisfiedOnClick() {
  coopEnvironmentSatisfied.checked = false;
  coopEnvironmentUnsatisfied.checked = false;
};
coopEnvironmentUnsatisfied.onclick = function coopEnvironmentUnsatisfiedOnClick() {
  coopEnvironmentSatisfied.checked = false;
  coopEnvironmentSomewhatSatisfied.checked = false;
};

/**
 * Closing questions
 */

studentLedYes.onclick = function studentLedYesOnClick() {
  studentLedNo.checked = false;
};
studentLedNo.onclick = function studentLedNoOnClick() {
  studentLedYes.checked = false;
};

followUpYes.onclick = function followUpYesOnClick() {
  followUpNo.checked = false;
};

followUpNo.onclick = function followUpNoOnClick() {
  followUpYes.checked = false;
};

