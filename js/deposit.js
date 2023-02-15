// Step 01: Add event listener to the deposit butotn
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step 02: Get the deposit amount from deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // Step 03: Get the current deposit total amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step 04: Add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // Set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // Step 05: Get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step 06: Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // Step 07: Clear the deposit value
    depositField.value = '';
})