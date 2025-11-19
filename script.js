body {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
}
header {
  background-color: #2c3e50;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}
main {
  padding: 20px;
}
h2 {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
  display: inline-block;
  padding-bottom: 5px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
th {
  background-color: #34495e;
  color: #fff;
}
.total {
  margin-top: 20px;
  font-size: 18px;
}
button {
  background-color: #27ae60;
  color: #fff;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background-color: #219150;
}

script.js

function hitungTotal() {
  let total = 0;
  document.querySelectorAll("table").forEach(table => {
    table.querySelectorAll("tr").forEach((row, i) => {
      if (i === 0) return;
      let harga = parseInt(row.cells[1].innerText);
      let jumlah = parseInt(row.cells[2].querySelector("input").value);
      let subtotal = harga * jumlah;
      row.cells[3].innerText = subtotal;
      total += subtotal;
    });
  });
  document.getElementById("totalBayar").innerText = total;
  hitungKembalian();
}

function hitungKembalian() {
  let total = parseInt(document.getElementById("totalBayar").innerText);
  let uang = parseInt(document.getElementById("uangKonsumen").value);
  let kembali = uang - total;
  document.getElementById("kembalian").innerText = kembali >= 0 ? kembali : 0;
}

function resetForm() {
  document.querySelectorAll("input[type='number']").forEach(i => i.value = 0);
  document.querySelectorAll(".subtotal").forEach(s => s.innerText = "0");
  document.getElementById("totalBayar").innerText = "0";
  document.getElementById("kembalian").innerText = "0";
}
