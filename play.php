<?php
 $server = "sql210.epizy.com";
 $username = "epiz_33356570";
 $password = "9qu0XofOOZgz3j";
 $dbname = "epiz_33356570_typong";
// $server = "localhost";
// $username = "root";
// $password = "";
// $dbname = "speeddb";

echo "<p class='nameclass' hidden></p>";
$con = mysqli_connect($server, $username, $password, $dbname);

if(!$con){
  echo "connection to this database failed due to ";
}else {
  echo "connection established";
}

if(isset($_POST['name']))  //when name comes in from the form
{
  $name = $_POST['name'];
  echo "<script> document.querySelector('.nameclass').innerText = '{$name}'</script";
  //echo "<p class='nameclass' hidden>{$name}</p>";
  echo "Got the name";
}

if(isset($_POST['namejs']))
{
  $name = $_POST['namejs'];
  $wpm = $_POST['wpm'];
  $accuracy = $_POST['accuracy'];
  $topspeed = $_POST['topspeed'];

  //  $sql = "INSERT INTO `$dbname`.`speedtable` (`name`,`dt`) VALUES ('$name',current_timestamp());";
    $sql = "INSERT INTO `$dbname`.`speedtable` (`name`,`wpm`,`accuracy`,`topspeed`,`dt`) VALUES ('$name','$wpm','$accuracy','$topspeed',current_timestamp());";

  if($con->query($sql) ==true){
    echo "inserted data $name $wpm";
    $inserted = true;
  }
  else{
    echo "Error: $sql <br> $con->error";
  }

  $con->close();
}

// if(isset($_POST['wpm']))
//   {
//   //echo "Success connecting to the db";
//   $wpm = $_POST['wpm'];
//   echo "<script> alert('something') </script>";
//
//   $sql = "UPDATE `$dbname`.`speedtable` SET `wpm` = '$wpm' WHERE `wpm`='';";
//
//   if($con->query($sql) ==true){
//     $inserted = true;
//   }
//   else{
//     echo "Error: $sql <br> $con->error";
//   }
// }
//
// if(isset($_POST['accuracy']))
//   {
//
//   $accuracy = $_POST['accuracy'];
//
//    $sql = "UPDATE `$dbname`.`speedtable` SET `accuracy` = '$accuracy' WHERE `accuracy`='';";
//
//   if($con->query($sql) ==true){
//     //echo "Successfully inserted";
//     $inserted = true;
//   }
//   else{
//     echo "Error: $sql <br> $con->error";
//   }
// }
// if(isset($_POST['topspeed']))
//   {
//
//   $topspeed = $_POST['topspeed'];
//
//    $sql = "UPDATE `$dbname`.`speedtable` SET  `topspeed` = '$topspeed' WHERE `topspeed`='';";
//
//   if($con->query($sql) ==true){
//     //echo "Successfully inserted";
//     $inserted = true;
//   }
//   else{
//     echo "Error: $sql <br> $con->error";
//   }
//   $con->close();
// }

 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Typing Speed Test</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous">

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link rel="stylesheet" href="css/master.css">
  </head>

  <body>
    <section id="Header">
      <div class="welcome">
        <h1>Welcome to my Typing Speed Test</h1>
      </div>
    </section>

    <div class="no_name" hidden style="padding: 10%;">
      <h2 style="color:red">You have not entered your name ;)</h2>
      <a href="index.html" class="btn btn-lg btn-danger">Go Back</a>
    </div>

    <section id="Content" >

      <div class="limit">
        <h3>Take test for: </h3>
        <br>
        <h1 class="choice thirty" onclick="thirty()">30s</h1>
        <h1 class="choice sizty" onclick="sixty()">60s</h1>
      </div>


        <div class="card mycard" style="display:none;">
          <h1>Time left <br> <h4>press start and begin copying text below</h4></h1>
        </div>


      <div class="test" style="display:none;">
        <h4>Kire bhai kamon achis</h4>
      </div>

      <div class="writing-area" style="display:none">
        <textarea name="name" rows="1" cols="40" id="textarea" oninput="processText()"></textarea>
      </div>

      <div class="buttons" style="display: none">
        <a type="button" onclick="work()" class="btn btn-lg btn-primary" >Press to Start</a>

      </div>

    </section>

    <footer id="footer">
      <i class="fab fa-twitter social-icon"></i>
      <a class="fab fa-facebook-f social-icon" href="https://www.facebook.com/profile.php?id=100069996437777" target="_blank"></a>
      <i class="fab fa-instagram social-icon"></i>
      <i class="fas fa-envelope social-icon" style="
      padding-bottom: 40px;"></i>
      <p class="copyright">© Copyright 2021 Janu</p>

    </footer>
  </body>
  <script src="appp.js" charset="utf-8"></script>
</html>
