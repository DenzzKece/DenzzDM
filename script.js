function hitungTotal() {
  let total = 0;

  document.querySelectorAll("table").forEach(table => {
    table.querySelectorAll("tr").forEach((row, i) => {
      if (i === 0) return; // Lewati baris header

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

/* Menghitung kembalian */
function hitungKembalian() {
  let total = parseInt(document.getElementById("totalBayar").innerText);
  let uang = parseInt(document.getElementById("uangKonsumen").value);
  let kembali = uang - total;

  document.getElementById("kembalian").innerText = kembali >= 0 ? kembali : 0;
}

/* Mereset form */
function resetForm() {
  document.querySelectorAll("input[type='number']").forEach(input => input.value = 0);
  document.querySelectorAll(".subtotal").forEach(sub => sub.innerText = "0");
  document.getElementById("totalBayar").innerText = "0";
  document.getElementById("kembalian").innerText = "0";
}
