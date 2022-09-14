
function checkValidation(number) {
    if (isNaN(number) === true || number < 0 || number === '') {

        return true;
    }
}


function getInputValue(inputvalueId) {
    const getInputValue = document.getElementById(inputvalueId);
    const inputValueString = getInputValue.value;
    const inputValue = parseFloat(inputValueString);
    // checkValidation(inputValue);
    return inputValue;
}




function setValueTextField(elementId, value) {
    const getElementId = document.getElementById(elementId);
    getElementId.innerText = value;
    return value;

}
function getTextValue(elementId) {
    const getElementId = document.getElementById(elementId);
    const elementTextvalueString = getElementId.innerText;
    const elementTextvalue = parseFloat(elementTextvalueString);
    return elementTextvalue;
}





document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeFieldValue = getInputValue('income-field');
    const foodInputValue = getInputValue('food-field');
    const rentInputValue = getInputValue('rent-field');
    const clothInputValue = getInputValue('clothes-field');

    const incomeResult = checkValidation(incomeFieldValue);
    const foodResult = checkValidation(foodInputValue);
    const rentResult = checkValidation(rentInputValue);
    const clothResult = checkValidation(clothInputValue);

    if (incomeResult === true || foodResult === true || rentResult === true || clothResult === true) {
        alert('Please enter a number')
        return;
    }
    else {
        const totalExpenses = foodInputValue + rentInputValue + clothInputValue;
        const balance = incomeFieldValue - totalExpenses;


        // const totalExpensesElementId = document.getElementById('total-expenses-field');
        // totalExpensesElementId.innerText = totalExpenses;

        if (totalExpenses > incomeFieldValue) {
            alert('You can not expend more your Income!! ')
            return;
        }


        setValueTextField('total-expenses-field', totalExpenses);
        setValueTextField('balance-field', balance);

    }



})


document.getElementById('save-btn').addEventListener('click', function () {
    const incomeFieldValue = getInputValue('income-field');
    const saveFieldValue = getInputValue('save-field');
    const saveFieldValuePercent = saveFieldValue / 100;
    const savingAmount = incomeFieldValue * saveFieldValuePercent;


    const saveFieldResult = checkValidation(savingAmount);

    if (saveFieldResult === true) {
        return;
    }
    else {
        const balanceElement = getTextValue('balance-field');

        if (savingAmount > balanceElement) {
            alert('You can not Save more your Balance!! ')
            return;
        }




        const saveAmount = setValueTextField('saving-amount', savingAmount)

        const remainingAmount = balanceElement - saveAmount;

        const remainingBalance = document.getElementById('remaining-amount');
        remainingBalance.innerText = remainingAmount;




    }




})
