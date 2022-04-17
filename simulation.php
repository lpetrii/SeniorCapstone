<?php
if(isset($_POST['padres'])){
  $padres = $_POST['padres'];
  echo "You selected the following players:<br/>";
  foreach ($padres as $key => $value) {
    echo "$value<br/>"
  }
}
else{
  echo "You must select at leat one player";
}
?>
