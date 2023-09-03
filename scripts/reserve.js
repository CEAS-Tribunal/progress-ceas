import displayWarning from "./warning-view.js";

/**
 * Checks if a field is missing
 * @param {Element} field - The field to check
 * @returns {boolean} - true if field is missing, false otherwise
 *
 * TODO: Figure out how the "field.classList.add/contains()" works. It is helpful for styling the fields that are missing
 */
const checkField = function checkForMissingField(field) {
  let isFieldMissing = false;

  if (field === "" || field.value === "") {
    //field.classList.add("missing");
    isFieldMissing = true;
  }
  // else if (field.classList.contains("missing")) {
  //   field.classList.remove("missing");
  // }

  return isFieldMissing;
};

const sendRequest = function sendRequest(
  discloseContact,
  concern,
  academicSatisfiedLevel,
  coopSatisfiedLevel,
  academicComment,
  coopComment,
  specificChanges,
  academicResources,
  coopResources
) {
  // hide form and show loading screen
  const formSubmitButton = document.querySelector(".intro #submit-button");
  const formLoader = document.querySelector(".intro .loader");
  formSubmitButton.style.display = "none";
  formLoader.style.display = "block";

  // get values from response-dependent questions
  const formUserInfo = document.querySelector(".intro #user-info");
  const formFullName = document.querySelector(".intro #full-name");
  const formMajor = document.querySelector(".intro #major");
  const formGradYear = document.querySelector(".intro #grad-year");
  const formEmail = document.querySelector(".intro #email");

  const studentLedYes = document.querySelector(".intro #student-led-yes");
  const studentLedNo = document.querySelector(".intro #student-led-no");
  const followUpYes = document.querySelector(".intro #follow-up-yes");
  const followUpNo = document.querySelector(".intro #follow-up-no");

  let fullName = "";
  let major = "";
  let gradYear = "";
  let email = "";
  let studentLed = "";
  let followUp = "";

  if (discloseContact.value === "yes") {
    let isFieldMissing = false;
    let missingItems = [];
    fullName = formFullName.value;
    major = formMajor.value;
    gradYear = formGradYear.value;
    email = formEmail.value;

    if (studentLedYes.checked) {
      studentLed = studentLedYes;
    } else if (studentLedNo.checked) {
      studentLed = studentLedNo;
    }

    if (followUpYes.checked) {
      followUp = followUpYes;
    } else if (followUpNo.checked) {
      followUp = followUpNo;
    }

    missingItems.push(checkField(fullName));
    missingItems.push(checkField(major));
    missingItems.push(checkField(gradYear));
    missingItems.push(checkField(email));
    missingItems.push(checkField(studentLed));
    missingItems.push(checkField(followUp));

    if (missingItems.includes(true)) {
      isFieldMissing = true;
      //TODO: count number of 'true' elements in the array and add that to the warning message: https://www.geeksforgeeks.org/count-occurrences-of-all-items-in-an-array-in-javascript/#
      // Use backticks (` `) when injecting a variable into displayWarning (rather than concatenation)
      displayWarning("You have not filled out your contact info or the last 2 mc questions.");

      setTimeout(() => {
        formSubmitButton.style.display = "block";
        formLoader.style.display = "none";
      }, 500);

      return;
    }
  }
  displayWarning("preparing to send data to php backend");

  const submissionData = {
    discloseContact: discloseContact.value,
    fullName: fullName.value,
    major: major.value,
    gradYear: gradYear.value,
    email: email.value,
    concern: concern.value,
    academicSatisfiedLevel: academicSatisfiedLevel.value,
    coopSatisfiedLevel: coopSatisfiedLevel.value,
    academicComment: academicComment.value,
    coopComment: coopComment.value,
    specificChanges: specificChanges.value,
    academicResources: academicResources.value,
    coopResources: coopResources.value,
    studentLed: studentLed.value,
    followUp: followUp.value,
  };

  //TODO: API POST call to send_request.php!
  // See ceas-reimbursement vscode stuff for how to do it
};

export default function reserveTicket(
  discloseContact,
  concern,
  academicSatisfiedLevel,
  coopSatisfiedLevel,
  academicComment,
  coopComment,
  specificChanges,
  academicResources,
  coopResources
) {
  // TODO: put everything after this if statement in an else block
  if (discloseContact === undefined) {
    displayWarning("Please choose whether to disclose your contact information or not.");
  } else {
    let isFieldMissing = false;
    let missingItems = [];

    missingItems.push(checkField(concern));
    missingItems.push(checkField(academicSatisfiedLevel));
    missingItems.push(checkField(coopSatisfiedLevel));
    missingItems.push(checkField(academicComment));
    missingItems.push(checkField(coopComment));
    missingItems.push(checkField(specificChanges));
    missingItems.push(checkField(academicResources));
    missingItems.push(checkField(coopResources));

    if (missingItems.includes(true)) {
      isFieldMissing = true;
      //TODO: count number of 'true' elements in the array and add that to the warning message: https://www.geeksforgeeks.org/count-occurrences-of-all-items-in-an-array-in-javascript/#
      // Use backticks (` `) when injecting a variable into displayWarning (rather than concatenation)
      displayWarning("You have not completed the form.");
    }

    if (!isFieldMissing) {
      displayWarning("main form is good");
      sendRequest(
        discloseContact,
        concern,
        academicSatisfiedLevel,
        coopSatisfiedLevel,
        academicComment,
        coopComment,
        specificChanges,
        academicResources,
        coopResources
      );
    }
  }
}
