async function predict(e) {
  
  e.preventDefault();

  const nameValue = document.getElementById("name").value;
  const ageValue = document.getElementById("age").value;
  const selectedGender = document.getElementById("gender").value.toLowerCase();
  const localityValue = document.getElementById("locality").value;
  const heightValue = document.getElementById("height").value;
  const weightValue = document.getElementById("weight").value;
  
  if (selectedGender === "" || heightValue === "" || weightValue === "") {
    alert("All Fileds are required");
  }
  
  const gender = (selectedGender == "male" ? 1 : 0)
  
  const data = {
    "gender" : parseInt(gender),
    "height" : parseFloat(heightValue),
    "weight" : parseFloat(weightValue),
  };

  console.log(data);

  try {
    const res = await fetch("http://localhost:8000/predict",{
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: data,
    });
    const prediction = await res.json();
    console.log(prediction);
  } catch (error) {
    console.log(error);
  }
  
  const final = document.getElementById("display").innerHTML = `Name : ${nameValue} <br> Age : ${ageValue} <br> Gender : ${selectedGender} <br> Locality : ${localityValue} <br> Height : ${heightValue} <br> Weight : ${weightValue} <br> `;
}