function showHiddenValue() {
  alert(document.getElementById("custId").value);
}

function updateQuantityRangeStep(idBase, value, decimals = 0) {
  document.getElementById(`${idBase}-value`).innerText =
    "Valor: " + parseFloat(value).toFixed(decimals);
}

updateQuantityRangeStep(
  "quantity-range",
  document.getElementById("quantity-range").value
);
updateQuantityRangeStep(
  "quantity-range-step",
  document.getElementById("quantity-range-step").value,
  4
);
