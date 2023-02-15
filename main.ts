const x = document.querySelector("#input01") as HTMLInputElement
const y = document.querySelector("#input02") as HTMLInputElement
const button = document.querySelector("#button") as HTMLButtonElement
const copyButton = document.querySelector("#copy-button") as HTMLButtonElement
const paragraph = document.querySelector("#result") as HTMLParagraphElement

function calculateExpression(a: bigint, b: bigint) {
	return BigInt(BigInt(x.valueAsNumber) ** BigInt(y.valueAsNumber))
}

button.onclick = () => {
	if (x.value === "" || y.value === "") {
		alert("Type a value")
	} else if (x.valueAsNumber === 0) {
		alert("No")
	} else if (y.valueAsNumber === 0) {
		paragraph.textContent = "1"
	} else if (y.valueAsNumber === 1) {
		paragraph.textContent = `${x.valueAsNumber}`
	} else {
		paragraph.textContent = `${calculateExpression(BigInt(x.valueAsNumber), BigInt(y.valueAsNumber))}`
	}
}

copyButton.onclick = () => {
	navigator.clipboard.writeText(paragraph.textContent as string).then(() => alert("Content copied"))
}