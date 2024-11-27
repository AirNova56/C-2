document.getElementById('checkButton').addEventListener('click', function () {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');

    if (number % 2 === 0) {
        resultElement.textContent = `Число ${number} є парним.`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `Число ${number} є непарним.`;
        resultElement.style.color = "red";
    }
});