import { tipCalculation } from './math';

const txtBillAmount = document.getElementById('txtBillAmount') as HTMLInputElement;
const btnTipPercent = document.getElementById('btnTipPercent') as HTMLButtonElement;

const txtTipAmount = document.getElementById('txtTipAmount') as HTMLDivElement;
const sumBillAmount = document.getElementById('sumBillAmount') as HTMLUListElement;
const sumTipPercentage = document.getElementById('sumTipPercentage') as HTMLUListElement;
const sumAmountOfTip = document.getElementById('sumAmountOfTip') as HTMLUListElement;
const sumTotalToBePaid = document.getElementById('sumTotalToBePaid') as HTMLUListElement;

export function runApp() {
    txtBillAmount.addEventListener('input', function () {
        const sum = tipCalculation(txtBillAmount.valueAsNumber, .1);

        txtTipAmount.innerText = `You are tipping 10%`;
        sumBillAmount.innerText = `Bill Amount: $${txtBillAmount.valueAsNumber.toString()}.00`;
        sumTipPercentage.innerText = `Tip Percentage: 10%`;
        sumAmountOfTip.innerText = `Amount of tip: $${sum}.00`;
        sumTotalToBePaid.innerHTML = `Total to be Paid: $${sum + txtBillAmount.valueAsNumber}.00`;
    });


}



