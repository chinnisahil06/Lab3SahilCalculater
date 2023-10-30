// References to form elements
const billTotalInput = document.getElementById("billTotal");
const tipSlider = document.getElementById("tipSlider");
const tipPercentageInput = document.getElementById("tipPercentage");
const tipAmountInput = document.getElementById("tipAmount");
const totalBillWithTipInput = document.getElementById("totalBillWithTip");

// Event listener for form inputs
document.getElementById("tipCalculator").addEventListener("input", function() {
    const billTotal = parseFloat(billTotalInput.value);
    const tipPercentage = parseFloat(tipSlider.value);

    if (isNaN(billTotal)) {
        alert("Please enter a valid number for Bill Total!");
        return;
    }

    // Calculate tip amount and total bill with tip
    const tipAmount = (tipPercentage / 100) * billTotal;
    const totalBillWithTip = billTotal + tipAmount;

    // Display calculated values
    tipPercentageInput.value = tipPercentage + "%";
    tipAmountInput.value = tipAmount.toFixed(2);
    totalBillWithTipInput.value = totalBillWithTip.toFixed(2);
});
