import { tipCalculation } from './math';

const entry = document.getElementById('entry') as HTMLInputElement;
const output = document.getElementById('output') as HTMLInputElement;
const tip10 = document.getElementById('tip10') as HTMLInputElement;
const tip15 = document.getElementById('tip15') as HTMLInputElement;
const tip20 = document.getElementById('tip20') as HTMLInputElement;

const txtTipAmount = document.getElementById('txtTipAmount') as HTMLDivElement;
const sumBillAmount = document.getElementById('sumBillAmount') as HTMLUListElement;
const sumTipPercentage = document.getElementById('sumTipPercentage') as HTMLUListElement;
const sumAmountOfTip = document.getElementById('sumAmountOfTip') as HTMLUListElement;
const sumTotalToBePaid = document.getElementById('sumTotalToBePaid') as HTMLUListElement;

let tipPercent = .10;

export function runApp() {
    entry.addEventListener('keydown', function (evt) {
        if (evt.key === 'e' || evt.key === 'E' || evt.key === '-' || evt.key === '+') {
            evt.preventDefault();
        }
        calc();
    });
    tip10.addEventListener('click', () => {
        tipPercent = .10;
        calc();
        tip10.disabled = true;
        tip15.disabled = false;
        tip20.disabled = false;
    });
    tip15.addEventListener('click', () => {
        tipPercent = .15;
        calc();
        tip10.disabled = false;
        tip15.disabled = true;
        tip20.disabled = false;
    });
    tip20.addEventListener('click', () => {
        tipPercent = .20;
        calc();
        tip10.disabled = false;
        tip15.disabled = false;
        tip20.disabled = true;
    });
}

function calc() {
    if (entry.valueAsNumber < 0) {
        entry.classList.add('error');
        output.innerText = 'ERROR!!';
    } else {
        const tip = (Math.round((entry.valueAsNumber * tipPercent) * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);

        txtTipAmount.innerText = 'You are tipping ' + (tipPercent * 100) + '%';
        sumTipPercentage.innerText = 'Tip Percentage: ' + (tipPercent * 100) + '%';
        sumBillAmount.innerText = 'Bill Amount: $' + entry.valueAsNumber;
        sumAmountOfTip.innerText = 'Amount of tip: $' + tip.toString();
        sumTotalToBePaid.innerHTML = `Total to be Paid: $${(entry.valueAsNumber * tipPercent + entry.valueAsNumber).toString()}.00`;
        entry.classList.remove('error');
        output.innerText = '';
    }
}
