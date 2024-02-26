function showInput(e) {


    const nameValue = document.getElementById("name").value;
    const ageValue = document.getElementById("age").value;
    const selectedGender = document.getElementById("gender").value
    const localityValue = document.getElementById("locality").value;
    const heightValue = document.getElementById("height").value;
    const weightValue = document.getElementById("weight").value;

  const final = document.getElementById("display").innerHTML = `Name : ${nameValue} <br> Age : ${ageValue} <br> Gender : ${selectedGender} <br> Locality : ${localityValue} <br> Height : ${heightValue} <br> Weight : ${weightValue} <br> `;

    e.preventDefault(final);
}
