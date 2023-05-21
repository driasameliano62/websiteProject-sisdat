<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $category = $_POST["income_category"];
  $amount = $_POST["income_amount"];

  // Implementasikan penyimpanan data ke database atau penyimpanan data lainnya
  
  // Respon sukses atau gagal ke JavaScript
  echo "success";
}
?>
