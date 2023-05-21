<?php
session_start();

// Fungsi untuk menambah pemasukan
function addIncome($category, $amount) {
  $_SESSION['totalIncome'] += $amount;
}

// Fungsi untuk menambah pengeluaran
function addExpense($category, $detail, $amount) {
  $_SESSION['totalExpenses'] += $amount;
  
  // Menyimpan data pengeluaran ke dalam array
  $expenseData = [
    'category' => $category,
    'detail' => $detail,
    'amount' => $amount,
    'date' => date('Y-m-d')
  ];
  
  $_SESSION['expenses'][] = $expenseData;
}

// Fungsi untuk menghitung sisa saldo di wallet
function calculateBalance() {
  return $_SESSION['totalIncome'] - $_SESSION['totalExpenses'];
}

// Memeriksa apakah sesi sudah dimulai
if (!isset($_SESSION['totalIncome'])) {
  // Jika sesi belum dimulai, inisialisasi data awal
  $_SESSION['totalIncome'] = 0;
  $_SESSION['totalExpenses'] = 0;
  $_SESSION['expenses'] = [];
}

// Memproses permintaan form
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_POST['addIncome'])) {
    // Menambah pemasukan
    $incomeCategory = $_POST['incomeCategory'];
    $incomeAmount = $_POST['incomeAmount'];

    addIncome($incomeCategory, $incomeAmount);
  } elseif (isset($_POST['addExpense'])) {
    // Menambah pengeluaran
    $expenseCategory = $_POST['expenseCategory'];
    $expenseDetail = $_POST['expenseDetail'];
    $expenseAmount = $_POST['expenseAmount'];

    addExpense($expenseCategory, $expenseDetail, $expenseAmount);
  }
}
?>
