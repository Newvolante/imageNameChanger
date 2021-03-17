
let transformButton = document.getElementById('transformButton');
transformButton.addEventListener('click', convertToLowerCase);

function convertToLowerCase () {
    let input = document.getElementById('input').value;
    let resultDiv = document.getElementById('result');

    tempStr = input.replace(/ /g, '-').replace(/-{2,}/g, '-');
    console.log(tempStr);

    resultDiv.textContent = tempStr.toLowerCase();

}





