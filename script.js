let transactions = JSON.parse(localStorage.getItem("data")) || [];
updateUI();
let transactions = [];

function addTransaction() {
  let desc = document.getElementById("desc").value;
  let amount = parseFloat(document.getElementById("amount").value);
  let type = document.getElementById("type").value;

  if (desc === "" || isNaN(amount)) {
    alert("Please fill all fields");
    return;
  }

  let transaction = {
    id: Date.now(),
    desc,
    amount,
    type
  };

  transactions.push(transaction);
  updateUI();
}

function updateUI() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  let income = 0;
  let expense = 0;

  transactions.forEach(t => {
    let li = document.createElement("li");
    li.textContent = `${t.desc} - $${t.amount} (${t.type})`;
    list.appendChild(li);

    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;
    }
  });

  document.getElementById("income").textContent = income;
  document.getElementById("expense").textContent = expense;
  document.getElementById("balance").textContent = income - expense;
}