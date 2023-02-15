"use strict";
const x = document.querySelector("#input01");
const y = document.querySelector("#input02");
const button = document.querySelector("#button");
const copyButton = document.querySelector("#copy-button");
const paragraph = document.querySelector("#result");
function calculateExpression(a, b) {
    return BigInt(BigInt(x.valueAsNumber) ** BigInt(y.valueAsNumber));
}
button.onclick = () => {
    if (x.value === "" || y.value === "") {
        alert("Type a value");
    }
    else if (x.valueAsNumber === 0) {
        alert("No");
    }
    else if (y.valueAsNumber === 0) {
        paragraph.textContent = "1";
    }
    else if (y.valueAsNumber === 1) {
        paragraph.textContent = `${x.valueAsNumber}`;
    }
    else {
        paragraph.textContent = `${calculateExpression(BigInt(x.valueAsNumber), BigInt(y.valueAsNumber))}`;
    }
};
copyButton.onclick = () => {
    navigator.clipboard.writeText(paragraph.textContent).then(() => alert("Content copied"));
};
