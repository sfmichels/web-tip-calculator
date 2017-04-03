calculateButton.onclick = function(event)  {
  event.preventDefault();
  
  var billAmount = Number(document.getElementById("bill-amount").value);
  var tipPercent = Number(document.getElementById("tip-percent").value);
  
  var tipAmount = tipPercent * 0.01 * billAmount;
  var totalBill = billAmount + tipAmount; 
  
  var div = document.getElementById('tip-amount');
  div.innerHTML = "$" + tipAmount.toFixed(2);
  
  var div = document.getElementById('total-bill')
  div.innerHTML = "$" + totalBill.toFixed(2);
};

clearButton.onclick = function(event)  {
  event.preventDefault();
  
  document.getElementById('bill-amount').value = "";
  document.getElementById('tip-percent').value = "";
  document.getElementById('tip-amount').innerHTML = "";
  document.getElementById('total-bill').innerHTML = "";
}