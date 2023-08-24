import reserveTicket from "./reserve";

const discloseContactInfoYes = document.querySelector(".intro #contact-yes");
const discloseContactInfoNo = document.querySelector(".intro #contact-no");

const formUserInfo = document.querySelector(".intro #user-info");
const fullName = document.querySelector(".intro #full-name");
const major = document.querySelector(".intro #major");
const gradYear = document.querySelector(".intro #grad-year");
const email = document.querySelector(".intro #email");

const concern = document.querySelector(".intro #concern");
const academicEnvironmentSatisfied = document.querySelector(".intro #academic-satisfied");
const academicEnvironmentSomewhatSatisfied = document.querySelector(".intro #academic-somewhat-satisfied");
const academicEnvironmentUnsatisfied = document.querySelector(".intro #academic-unsatisfied");
const coopEnvironmentSatisfied = document.querySelector(".intro #coop-satisfied");
const coopEnvironmentSomewhatSatisfied = document.querySelector(".intro #coop-somewhat-satisfied");
const coopEnvironmentUnsatisfied = document.querySelector(".intro #coop-unsatisfied");

const academicComment = document.querySelector(".intro #academic-comment");
const coopComment = document.querySelector(".intro #coop-comment");
const specificChanges = document.querySelector(".intro #specific-changes");
const academicResources = document.querySelector(".intro #academic-resources");
const coopResources = document.querySelector(".intro #coop-resources");

const divStudentLed = document.querySelector(".intro #student-led");
const studentLedYes = document.querySelector(".intro #student-led-yes");
const studentLedNo = document.querySelector(".intro #student-led-no");

const divFollowUp = document.querySelector(".intro #follow-up");
const followUpYes = document.querySelector(".intro #follow-up-yes");
const followUpNo = document.querySelector(".intro #follow-up-no");

const formSubmitButton = document.querySelector(".intro #submit-button");

/**
 *  Show user information fields
 */
discloseContactInfoYes.onclick = function discloseContactInfoYesOnClick() {
  discloseContactInfoYes.checked = true;
  discloseContactInfoNo.checked = false;
  formUserInfo.style.visibility = "visible";
  formUserInfo.style.height = "410px";
  formUserInfo.style.overflow = "visible";
  formUserInfo.style.opacity = "1";
  formUserInfo.style.margin = "40px auto";
  formUserInfo.style.padding = "10px";

  divStudentLed.style.visibility = "visible";
  divStudentLed.style.height = "156px";
  divStudentLed.style.overflow = "visible";
  divStudentLed.style.opacity = "1";

  divFollowUp.style.visibility = "visible";
  divFollowUp.style.height = "156px";
  divFollowUp.style.overflow = "visible";
  divFollowUp.style.opacity = "1";
};

/**
 * Hide user information fields
 */
discloseContactInfoNo.onclick = function discloseContactInfoNoOnClick() {
  discloseContactInfoNo.checked = true;
  discloseContactInfoYes.checked = false;
  formUserInfo.style.visibility = "hidden";
  formUserInfo.style.height = "0px";
  formUserInfo.style.overflow = "hidden";
  formUserInfo.style.opacity = "0";
  formUserInfo.style.margin = "-20px";
  formUserInfo.style.padding = "0px";

  divStudentLed.style.visibility = "hidden";
  divStudentLed.style.height = "0px";
  divStudentLed.style.overflow = "hidden";
  divStudentLed.style.opacity = "0";

  divFollowUp.style.visibility = "hidden";
  divFollowUp.style.height = "0px";
  divFollowUp.style.overflow = "hidden";
  divFollowUp.style.opacity = "0";
};

/**
 * Handling academic experience results
 */
academicEnvironmentSatisfied.onclick = function academicEnvironmentSatisfiedOnClick() {
  academicEnvironmentSatisfied.checked = true;
  academicEnvironmentSomewhatSatisfied.checked = false;
  academicEnvironmentUnsatisfied.checked = false;
};
academicEnvironmentSomewhatSatisfied.onclick = function academicEnvironmentSomewhatSatisfiedOnClick() {
  academicEnvironmentSomewhatSatisfied.checked = true;
  academicEnvironmentSatisfied.checked = false;
  academicEnvironmentUnsatisfied.checked = false;
};
academicEnvironmentUnsatisfied.onclick = function academicEnvironmentUnsatisfiedOnClick() {
  academicEnvironmentUnsatisfied.checked = true;
  academicEnvironmentSatisfied.checked = false;
  academicEnvironmentSomewhatSatisfied.checked = false;
};

/**
 * Handling co-op experience results
 */
coopEnvironmentSatisfied.onclick = function coopEnvironmentSatisfiedOnClick() {
  coopEnvironmentSatisfied.checked = true;
  coopEnvironmentSomewhatSatisfied.checked = false;
  coopEnvironmentUnsatisfied.checked = false;
};
coopEnvironmentSomewhatSatisfied.onclick = function coopEnvironmentSomewhatSatisfiedOnClick() {
  coopEnvironmentSomewhatSatisfied.checked = true;
  coopEnvironmentSatisfied.checked = false;
  coopEnvironmentUnsatisfied.checked = false;
};
coopEnvironmentUnsatisfied.onclick = function coopEnvironmentUnsatisfiedOnClick() {
  coopEnvironmentUnsatisfied.checked = true;
  coopEnvironmentSatisfied.checked = false;
  coopEnvironmentSomewhatSatisfied.checked = false;
};

/**
 * Closing questions
 */

studentLedYes.onclick = function studentLedYesOnClick() {
  studentLedYes.checked = true;
  studentLedNo.checked = false;
};
studentLedNo.onclick = function studentLedNoOnClick() {
  studentLedNo.checked = true;
  studentLedYes.checked = false;
};

followUpYes.onclick = function followUpYesOnClick() {
  followUpYes.checked = true;
  followUpNo.checked = false;
};

followUpNo.onclick = function followUpNoOnClick() {
  followUpNo.checked = true;
  followUpYes.checked = false;
};

/**
 * Submit button on-click
 */
formSubmitButton.onclick = function formSubmitButtonOnClick() {
  let discloseContact;
  let academicSatisfiedLevel;
  let coopSatisfiedLevel;
  let studentLed;
  let followUp;

  // true means user inputs contact info. the user is also prompted an academic affairs question and a follow up question
  // false means user does NOT input contact info. respective variables are set to empty strings.
  if (discloseContactInfoYes.checked) {
    disclose_contact = "Yes";

    if (studentLedYes.checked) {
      student_led = "Yes";
    } else {
      student_led = "No";
    }

    if (followUpYes.checked) {
      follow_up = "Yes";
    } else {
      follow_up = "No";
    }
  } else {
    disclose_contact = "No";
    fullName = "";
    major = "";
    gradYear = "";
    email = "";
    student_led = "No";
    follow_up = "No";
  }

  if (academicEnvironmentSatisfied.checked) {
    academic_satisfied_level = "Satisfied";
  } else if (academicEnvironmentSomewhatSatisfied.checked) {
    academic_satisfied_level = "Somewhat satisfied";
  } else {
    academic_satisfied_level = "Unsatisfied";
  }

  if (coopEnvironmentSatisfied.checked) {
    coop_satisfied_level = "Satisfied";
  } else if (coopEnvironmentSomewhatSatisfied.checked) {
    coop_satisfied_level = "Somewhat satisfied";
  } else {
    coop_satisfied_level = "Unsatisfied";
  }

  reserveTicket(
    discloseContact,
    fullName,
    major,
    gradYear,
    email,
    concern,
    academicSatisfiedLevel,
    coopSatisfiedLevel,
    academicComment,
    coopComment,
    specificChanges,
    academicResources,
    coopResources,
    studentLed,
    followUp
  );
};
