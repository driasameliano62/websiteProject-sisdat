// data awal
let totalIncome = 0;
let totalExpenses = 0;

// Mengupdate total pemasukan, total pengeluaran, dan sisa saldo
function updateSummary() {
    const totalIncome = parseFloat(document.getElementById("total-income").textContent);
    const totalExpense = parseFloat(document.getElementById("total-expense").textContent);
    const balance = totalIncome - totalExpense;
    
    document.getElementById("balance").textContent = balance.toFixed(2);
  }
  
  // Menambah pemasukan
  document.getElementById("add-income").addEventListener("click", function(e) {
    e.preventDefault();
    
    const category = document.getElementsByName("income_category")[0].value;
    const amount = parseFloat(document.getElementsByName("income_amount")[0].value);
  
    if (isNaN(amount)) {
      alert("Jumlah harus berupa angka");
      return;
    }

    totalIncome += amount;
  updateSummary();
  
    // Kirim data pemasukan ke server menggunakan PHP
    // Implementasikan di file add_income.php
  
    // Mengupdate total pemasukan dan sisa saldo
    document.getElementById("total-income").textContent = (parseFloat(document.getElementById("total-income").textContent) + amount).toFixed(2);
    updateSummary();
  
    // Reset form
    document.getElementsByName("income_category")[0].value = "";
    document.getElementsByName("income_amount")[0].value = "";
  });
  
  // Menambah pengeluaran
  document.getElementById("add-expense").addEventListener("click", function(e) {
    e.preventDefault();
    
    const category = document.getElementsByName("expense_category")[0].value;
    const amount = parseFloat(document.getElementsByName("expense_amount")[0].value);
  
    if (isNaN(amount)) {
      alert("Jumlah harus berupa angka");
      return;
    }
  
    // Kirim data pengeluaran ke server menggunakan PHP
    // Implementasikan di file add_expense.php
  
    // Mengupdate total pengeluaran, total pemasukan, dan sisa saldo
    document.getElementById("total-expense").textContent = (parseFloat(document.getElementById("total-expense").textContent) + amount).toFixed(2);
    updateSummary();
  
    // Reset form
    document.getElementsByName("expense_category")[0].value = "";
    document.getElementsByName("expense_amount")[0].value = "";
  });
  
  // Memanggil fungsi updateSummary() saat halaman dimuat
  updateSummary();
  