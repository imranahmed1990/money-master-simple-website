document.getElementById('calculator-button').addEventListener('click', function () {

    const myIncomeInput = document.getElementById('monthly-income');

    const myIncomeAmt = myIncomeInput.value;


    // console.log(myIncomeAmt)

    myIncomeInput.value = '';
    // my Expenes area coding in here...........
    const foodCost = document.getElementById('food-cost');
    const foodCostAmount = foodCost.value;
    const foodCostValue = parseFloat(foodCostAmount);
    // console.log(foodCostAmount)
    foodCost.value = '';
    const houseRant = document.getElementById('house-rant');
    const houseRantAmount = houseRant.value;
    const houseCost = parseFloat(houseRantAmount);
    houseRant.value = '';
    // console.log(houseRantAmount)
    const clothesCost = document.getElementById('clothes-cost');
    const clotheAmount = clothesCost.value;
    const clothCost = parseFloat(clotheAmount);

    // console.log(clotheAmount)
    clothesCost.value = '';
    const totalCost = foodCostValue + houseCost + clothCost;
    // console.log(totalCost);

    // total Expances sum area...........
    const totalExpanses = document.getElementById('total-expances');
    const previousTotalExp = totalExpanses.innerText;
    const previousExpancesTotal = parseFloat(previousTotalExp);


    totalExpanses.innerText = previousExpancesTotal + totalCost;

    // console.log(expansesTotal)

    const blance = document.getElementById('blance-amount');
    const blanceText = blance.innerText;
    const blanceAmount = parseFloat(blanceText)
    const blanceWithoutSaving = blanceAmount + myIncomeAmt - totalCost;
    blance.innerText = blanceAmount + myIncomeAmt - totalCost;

    // console.log(blanceText)
});

// function calculator() {
//     // get my income input field with function
//     const myIncomeInput = document.getElementById('monthly-income');

//     const myIncomeAmt = myIncomeInput.value;


//     // console.log(myIncomeAmt)

//     myIncomeInput.value = '';
//     // my Expenes area coding in here...........
//     const foodCost = document.getElementById('food-cost');
//     const foodCostAmount = foodCost.value;
//     const foodCostValue = parseFloat(foodCostAmount);
//     // console.log(foodCostAmount)
//     foodCost.value = '';
//     const houseRant = document.getElementById('house-rant');
//     const houseRantAmount = houseRant.value;
//     const houseCost = parseFloat(houseRantAmount);
//     houseRant.value = '';
//     // console.log(houseRantAmount)
//     const clothesCost = document.getElementById('clothes-cost');
//     const clotheAmount = clothesCost.value;
//     const clothCost = parseFloat(clotheAmount);

//     // console.log(clotheAmount)
//     clothesCost.value = '';
//     const totalCost = foodCostValue + houseCost + clothCost;
//     // console.log(totalCost);

//     // total Expances sum area...........
//     const totalExpanses = document.getElementById('total-expances');
//     const previousTotalExp = totalExpanses.innerText;
//     const previousExpancesTotal = parseFloat(previousTotalExp);


//     totalExpanses.innerText = previousExpancesTotal + totalCost;

//     // console.log(expansesTotal)

//     const blance = document.getElementById('blance-amount');
//     const blanceText = blance.innerText;
//     const blanceAmount = parseFloat(blanceText)
//     blance.innerText = blanceAmount + myIncomeAmt - totalCost;

//     // console.log(blanceText)
// }

// saveing handle event listener
document.getElementById('save-Button').addEventListener('click', function () {
    const saveInputPersantage = document.getElementById('save-input');
    const saveInputPersantageText = saveInputPersantage.value;
    const saveInput = parseFloat(saveInputPersantageText);
    // console.log(saveInputPersantageText);
    const perviousBlance = document.getElementById('blance-amount');
    const previousBlanceAmount = perviousBlance.innerText;
    const previousTotal = parseFloat(previousBlanceAmount);
    const parsentageTotal = previousTotal * saveInput / 100;
    console.log(parsentageTotal)


    const savingTotal = document.getElementById('seving-total');
    const savingTotalText = savingTotal.innerText;
    const finalSaving = parseFloat(savingTotalText);
    savingTotal.innerText = parsentageTotal;

});
