import displayWarning from "./warning-view.js";

/**
 * Checks if a field is missing
 * @param {Element} field - The field to check
 * @returns {boolean} - true if field is missing, false otherwise
 */
const checkField = function checkForMissingField(field) {
  let isFieldMissing = false;

  if (field.value === "" || field === "") {
    //field.classList.add("missing");
    isFieldMissing = true;
  }
  // else if (field.classList.contains("missing")) {
  //   field.classList.remove("missing");
  // }

  return isFieldMissing;
};

export default function reserveTicket(
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
) {
  let isFieldMissing = false;
  let missingItems = [];

  if (discloseContact === undefined) {
    displayWarning("Please choose whether to disclose your contact information or not.");
  }

  if (discloseContact.value === "yes") {
    missingItems.push(checkField(fullName));
    missingItems.push(checkField(major));
    missingItems.push(checkField(gradYear));
    missingItems.push(checkField(email));
    missingItems.push(checkField(studentLed));
    missingItems.push(checkField(followUp));
  }
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
    displayWarning("You have not completed the form.");
  }

  if (!isFieldMissing) {
    displayWarning("complete!");
  }
}
