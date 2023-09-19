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

  if (field === "N/A" || field.value === "N/A") {
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

  let fullName = "N/A";
  let major = "N/A";
  let gradYear = "N/A";
  let email = "N/A";
  let studentLed = "N/A";
  let followUp = "N/A";

  if (discloseContact.value === "Yes") {
    let isFieldMissing = false;
    let missingItems = [];
    fullName = formFullName.value;
    major = formMajor.value;
    gradYear = formGradYear.value;
    email = formEmail.value;

    if (studentLedYes.checked) {
      studentLed = studentLedYes.value;
    } else if (studentLedNo.checked) {
      studentLed = studentLedNo.value;
    }

    if (followUpYes.checked) {
      followUp = followUpYes.value;
    } else if (followUpNo.checked) {
      followUp = followUpNo.value;
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
      displayWarning("You have not filled out your contact info and/or the last 2 mc questions.");

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
    fullName: fullName,
    major: major,
    gradYear: gradYear,
    email: email,
    concern: concern.value,
    academicSatisfiedLevel: academicSatisfiedLevel.value,
    coopSatisfiedLevel: coopSatisfiedLevel.value,
    academicComment: academicComment.value,
    coopComment: coopComment.value,
    specificChanges: specificChanges.value,
    academicResources: academicResources.value,
    coopResources: coopResources.value,
    studentLed: studentLed,
    followUp: followUp,
  };

  const submissionFormData = new FormData();

  Object.keys(submissionData).forEach((data) => {
    submissionFormData.append(data, submissionData[data]);
  });

  fetch("api/send_request.php", {
    method: "POST",
    body: submissionFormData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        document.querySelector(".intro .progress-ceas-form").style.display = "none";
        document.querySelector(".reserved-ticket").style.display = "block";
        if (discloseContact.value === "Yes" && studentLed === "Yes" && followUp === "Yes") {
          document.querySelector(".reserved-ticket .extra").textContent = "One of the CEAS Tribunal Academic Affairs chairs may reach out to you!";
        }
      } else {
        displayWarning(data.message);
        formLoader.style.display = "none";
        formSubmitButton.style.display = "block";
      }
    })
    .catch(() => {
      displayWarning("Something went wrong while sending your information. Please check your network connection and try again.");
      formLoader.style.display = "none";
      formSubmitButton.style.display = "block";
    });
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
      displayWarning("You have not completed the main form.");
    }

    if (!isFieldMissing) {
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
