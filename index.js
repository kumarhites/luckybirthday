const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky_no");
const checkBtn = document.querySelector("#checkBtn");
const outputText = document.querySelector("#outputText");

checkBtn.addEventListener('click', checkBirthdateIslucky);

function compareValues(sum, lucky){
    
    if(sum%lucky === 0){
        outputText.innerText = "Your birthday is lucky 🚀";
    }
    else{
        outputText.innerText = "Your birthday is not lucky 😥";
    }
}

function checkBirthdateIslucky() {
    const birthDate = dob.value;
    const lucky = luckyNumber.value;
    if(Number(lucky) <= 0 || birthDate === ""){
        outputText.innerText = "Please enter all the details!"
    }
    else{
        const dateSum = calculateSum(birthDate);
        compareValues(dateSum, lucky)    
    }

}

function calculateSum(date){
    let sum = 0; 
    const formattedDate = date.replaceAll("-", "");
    for(let i = 0; i < formattedDate.length; i++){
        sum = sum + Number(formattedDate.charAt(i));
    }
    return sum;
}