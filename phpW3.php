// Looping through and printing all values of an indexed arrays
<?php
$genres = array("Jungle," "House", "Techno");
$arrlength = count($genres);

for($x = 0; $x < $arrlength; $x++) {
  echo $genres[$x];
  echo "<br>"
}
 ?>

 //Associative array
 <?php
$callerId = array("Cindy"=>"1", "Dad"=>"2", "Kit"=>"3");
echo "Kit is " . $callerId['Kit'] . "on the phone.";
  ?>

<?php
//auth for A form
$fName=$lName=$email=$password=$fNameErr=$lNameErr=$emailErr=$passwordErr="";

if($_SERVER["Request Method"] == "POST") {
  if(empty($_POST["fName"])) {
    $fNameErr = "Name is Required";
  } else {
    $lName = test_input($_POST["lName"]);
  }
  if(empty($_POST["email"])) {
    $emailErr = "Name is Required";
  } else {
    $name = test_input($_POST["email"]);
  }
  if(empty($_POST["password"])) {
    $passwordErr = "Name is Required";
  } else {
    $name = test_input($_POST["password"]);
  }
}
  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
      return $data;
  }

?>
