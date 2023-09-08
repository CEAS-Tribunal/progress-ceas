<?php
error_reporting(-1);
ini_set('display_errors', '1');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// set_include_path("./includes/");
require_once("./includes/mysqli.php");
require_once("./includes/PHPMailer/src/Exception.php");
require_once("./includes/PHPMailer/src/PHPMailer.php");

$disclose_contact = '';

// initialize contact info variables
$name = '';
$major = '';
$grad_year = '';
$email = '';
$student_led = '';
$follow_up = '';


// initialize main form variables
$concern = '';
$academic_satisfied_level = '';
$coop_satisfied_level = '';
$academic_comment = '';
$coop_comment = '';
$specific_changes = '';
$academic_resources = '';
$coop_resources = '';

// initialize all variables with values from Progress CEAS form (available from API POST request)
$disclose_contact = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["discloseContact"])));
$name = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["fullName"])));
$major = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["major"])));
$grad_year = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["gradYear"])));
$email = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["email"])));
$concern = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["concern"])));
$academic_satisfied_level = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["academicSatisfiedLevel"])));
$coop_satisfied_level = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["coopSatisfiedLevel"])));
$academic_comment = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["academicComment"])));
$coop_comment = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["coopComment"])));
$specific_changes = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["specificChanges"])));
$academic_resources = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["academicResources"])));
$coop_resources = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["coopResources"])));
$student_led = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["studentLed"])));
$follow_up = mysqli_real_escape_string($mysqli, strip_tags(trim($_POST["followUp"])));

if (!isset($result_data))
{
    $result_data = new stdClass();
}
$result_data->status = "error";
$result_data->message = "";

// regex form input validation
if ($disclose_contact == "Yes"){
    // check name
    if (!($name == "") && !preg_match("/^[\w\ \'\.\/]{1,128}$/", $name)) {
        $result_data->message = 'Your name is invalid. Please only use latin characters a-z with an optional '
            . 'apostrophe or period. Your name is also limited to 128 characters.';
        echo json_encode($result_data);
        die();
    }

    // check major
    if (!($major == "") && !preg_match("/^[\w\ \'\.\/]{1,128}$/", $major)) {
        $result_data->message = 'Your major is invalid. Please only use latin characters a-z with an optional '
            . 'apostrophe or period. Your major is also limited to 128 characters.';
        echo json_encode($result_data);
        die();
    }

    // check graduation year
    if (!($grad_year == "") && !preg_match("/^[0-9_\/]{4}$/", $grad_year)) {
        $result_data->message = 'Your graduation year is invalid. Please only use only four numerical characters';
        echo json_encode($result_data);
        die();
    }

    // Check email address
    if(!($email == "") && !preg_match('/^[\w\W]+@[\w\W\d\/]{1,254}$/', $email)) {
        $result_data->message = 'Your email address is invalid. Please use an email in the following format: <>@<>. '
            . 'Your email is also limited to 254 characters.';
            $result_data->message = 'this is your email: ' . $email;
        echo json_encode($result_data);
        die();
    }

    // check concern
    if (!preg_match("/^[A-Za-z0-9\.\!\@\#\$\%\^\& \*\(\)\-\_\+\=\`\~\,\.\?\/\<\>\;\:\.]{1,500}$/", $concern)) { 
        $result_data->message = 'Your concern(s) are invalid. Please only use latin characters a-z with an optional \'!@#$%^&*()_-+=:;?.`~<>, \',.'
            . 'apostrophe, or period. Your response is also limited to 500 characters.';
        echo json_encode($result_data);
        die();
    }

    // check academic comments
    if (!preg_match("/^[A-Za-z0-9\.\!\@\#\$\%\^\& \*\(\)\-\_\+\=\`\~\,\.\?\/\<\>\;\:\.]{1,500}$/", $academic_comment)) { 
        $result_data->message = 'Your comments on academics is invalid. Please only use latin characters a-z with an optional \'!@#$%^&*()_-+=:;?.`~<>, \',.'
            . 'apostrophe, or period. Your response is also limited to 500 characters.';
        echo json_encode($result_data);
        die();
    }

    // check coop comments
    if (!preg_match("/^[A-Za-z0-9\.\!\@\#\$\%\^\& \*\(\)\-\_\+\=\`\~\,\.\?\/\<\>\;\:\.]{1,500}$/", $coop_comment)) { 
        $result_data->message = 'Your comments on co-ops is invalid. Please only use latin characters a-z with an optional \'!@#$%^&*()_-+=:;?.`~<>, \',.'
            . 'apostrophe, or period. Your response is also limited to 500 characters.';
        echo json_encode($result_data);
        die();
    }

    // check specific changes
    if (!preg_match("/^[A-Za-z0-9\.\!\@\#\$\%\^\& \*\(\)\-\_\+\=\`\~\,\.\?\/\<\>\;\:\.]{1,500}$/", $specific_changes)) { 
        $result_data->message = 'Your response regarding specific changes is invalid. Please only use latin characters a-z with an optional \'!@#$%^&*()_-+=:;?.`~<>, \',.'
            . 'apostrophe, or period. Your response is also limited to 500 characters.';
        echo json_encode($result_data);
        die();
    }

    // check academic resources response
    if (!preg_match("/^[A-Za-z0-9\.\!\@\#\$\%\^\& \*\(\)\-\_\+\=\`\~\,\.\?\/\<\>\;\:\.]{1,500}$/", $academic_resources)) { 
        $result_data->message = 'Your response regarding academic resources is invalid. Please only use latin characters a-z with an optional \'!@#$%^&*()_-+=:;?.`~<>, \',.'
            . 'apostrophe, or period. Your response is also limited to 500 characters.';
        echo json_encode($result_data);
        die();
    }

    // check co-op resources response
    if (!preg_match("/^[A-Za-z0-9\.\!\@\#\$\%\^\& \*\(\)\-\_\+\=\`\~\,\.\?\/\<\>\;\:\.]{1,500}$/", $coop_resources)) { 
        $result_data->message = 'Your response regarding co-op resources is invalid. Please only use latin characters a-z with an optional \'!@#$%^&*()_-+=:;?.`~<>, \',.'
            . 'apostrophe, or period. Your response is also limited to 500 characters.';
        echo json_encode($result_data);
        die();
    }
}

// get admin data
$chair_1_name  = '';
$chair_1_email = '';
$chair_2_name  = '';
$chair_2_email = '';

$super_email = '';

$sql  ='SELECT `chair_1_name`, `chair_1_email`, `chair_2_name`, `chair_2_email`, `super_email` FROM `progress_ceas_admin`';
$result = $mysqli->query($sql);

if ($result) {
    while ($row = $result->fetch_assoc()) {
        $chair_1_name  = $row["chair_1_name"];
        $chair_1_email = $row["chair_1_email"];
        $chair_2_name  = $row["chair_2_name"];
        $chair_2_email = $row["chair_2_email"];

        $super_email = $row["super_email"];
    }
}

if ($chair_1_name === "" || $chair_1_email === "" || $chair_2_name === "" || $chair_2_email === "" || $super_email === "") {
    $result_data->message = "Error occurred while retrieving admin information. Please try again. "
    . "If the error persists, email the admin in the description.";
    echo json_encode($result_data);
    die();
}

// get the current date and time
date_default_timezone_set("America/New_York");
$currentDateTime = new DateTime('now');
$currentDate = $currentDateTime->format('l, F j, Y h:i:sa');

// insert form data into database
$sql = "INSERT INTO `progress_ceas_main` (`date`, `disclose_contact`, `name`, `major`, `grad_year`, `email`, `concern`,
`academic_satisfied_level`, `coop_satisfied_level`, `academic_comment`, `coop_comment`, `specific_changes`,
`academic_resources`, `coop_resources`, `student_led`, `follow_up`) VALUES ('".$currentDate."', '".$disclose_contact."', '".$name."', '".$major."', '".$grad_year."', '".$email."',
'".$concern."', '".$academic_satisfied_level."', '".$coop_satisfied_level."', '".$academic_comment."', '".$coop_comment."', 
'".$specific_changes."', '".$academic_resources."', '".$coop_resources."', '".$student_led."', '".$follow_up."')";

// REIMBURSEMENT VERSION
// $sql = 'INSERT INTO `reimbursement_main` (`name`, `position`, `email`, `mid`, `date`, `vendor`, `amount`, `description`, `status`,`type`,
// `receipt_name`,`document_name`,`officer_name`,`officer_position`,`address`)'
// . "VALUES ('".$name."','".$position."','".$email."','".$m_id."','".$date."','".$vendor."','".$amount."','".$description."','".$budgeted."',
// '".$direct."','".$receiptText."','".$docsText."','".$officer_name."','".$officer_position."','".$address."')";

$result = $mysqli->query($sql);

if (!$result) {
    $result_data->message = 'Error occurred while submitting your reimbursement request. Please try again. '
    . 'If the error persists, email the admin in the description.';
    echo json_encode($result_data);
    die();
}

$result_data->message = $chair_1_email;
echo json_encode($result_data);
die();

// TODO: Write emails next
?>
