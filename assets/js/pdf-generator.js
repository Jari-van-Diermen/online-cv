function print() {
  const printWindow = window.open(new URL("print", window.location.href).href, "_blank");
  printWindow.onload = function () {
    printWindow.print();
    // Close the print window after a delay
    setTimeout(() => printWindow.close(), 500);
  };
}
