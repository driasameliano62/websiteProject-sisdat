// Data awal
let wallet = 0;
let expenses = [];

// Mengupdate saldo wallet dan pengeluaran
function updateTotals() {
  document.getElementById("wallet").textContent = "Rp " + wallet;
}

// Menambah pemasukan
document.getElementById("add-income").addEventListener("click", function() {
  const category = document.getElementById("income-category").value;
  const amount = parseFloat(document.getElementById("income-amount").value);

  if (isNaN(amount)) {
    alert("Jumlah harus berupa angka");
    return;
  }

  wallet += amount;
  updateTotals();

  // Menampilkan detail pemasukan
  const incomeItems = document.getElementById("income-items");
  const listItem = document.createElement("li");
  listItem.textContent = `${category} - Rp ${amount}`;
  incomeItems.appendChild(listItem);

  // Reset form
  document.getElementById("income-category").value = "";
  document.getElementById("income-amount").value = "";
});

// Menambah pengeluaran
document.getElementById("add-expense").addEventListener("click", function() {
  const category = document.getElementById("expense-category").value;
  const detail = document.getElementById("expense-detail").value;
  const amount = parseFloat(document.getElementById("expense-amount").value);

  if (isNaN(amount)) {
    alert("Jumlah harus berupa angka");
    return;
  }

  if (amount > wallet) {
    alert("Saldo tidak mencukupi");
    return;
  }

  wallet -= amount;
  updateTotals();

  // Menambahkan detail pengeluaran beserta tanggal dan bulannya
  const date = new Date();
  const expense = {
    category: category,
    detail: detail,
    amount: amount,
    date: date.toLocaleDateString(),
    month: date.toLocaleString("default", { month: "long" })
  };
  expenses.push(expense);

  // Menampilkan detail pengeluaran
  const expenseItems = document.getElementById("expense-items");
  const listItem = document.createElement("li");
  listItem.textContent = `${expense.category}: ${expense.detail} - Rp ${expense.amount} (${expense.date}, ${expense.month})`;
  expenseItems.appendChild(listItem);

  // Reset form
  document.getElementById("expense-category").value = "";
  document.getElementById("expense-detail").value = "";
  document.getElementById("expense-amount").value = "";
});

// Memanggil fungsi updateTotals() saat halaman dimuat
updateTotals();
