const startButton = document.getElementById("start-btn");
const birthdayDate = document.getElementById("birthday");
const userAge = document.getElementById("result");
const resetButton = document.getElementById("reset-btn")


function calculateAge(){
    const birthdayValue = birthdayDate.value;

    if (birthdayValue == ""){
        alert("Please enter a valid date");
    } else{
        startButton.style.display = "none";
        const age = getAge(birthdayValue);
        userAge.innerText = `You are ${age} ${age > 1 ? "years" : "year"} old`;
        resetButton.style.display = "inline-block"
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue)
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
        age--;
    }

    return age;
}

// Reset Button Function
resetButton.addEventListener("click", () => {
    birthdayDate.value = '';
    userAge.innerText = '';
    resetButton.style.display = "none";
    startButton.style.display = "inline-block"
})

startButton.addEventListener("click", calculateAge);