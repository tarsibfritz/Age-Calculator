const calculateButton = document.getElementById("start-btn");
const birthdayDate = document.getElementById("birthday");

function calculateAge(){
    const birthdayValue = birthdayDate.value;

    if (birthdayValue == ""){
        alert("Please enter a valid date");
    } else{
        const age = getAge(birthdayValue);
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

calculateButton.addEventListener("click", calculateAge);