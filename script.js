const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const selectedGenderInput = document.getElementById("gender")
const chestInput = document.getElementById("chest");
const restingInput = document.getElementById("resting");
const cholersterolInput = document.getElementById("serum");
const bloodsugarInput = document.getElementById("blood sugar");
const electrocardiographicInput = document.getElementById("electrocardiographic");
const heartrateInput = document.getElementById("heart rate");
const anginaInput = document.getElementById("angina");
const STInput = document.getElementById("ST");
const STsegmentInput = document.getElementById("ST segment");
const STflouroscopyInput = document.getElementById("ST flouroscopy");
const thalInput = document.getElementById("thal");
const submitButton = document.getElementById("submit");

// nameInput.addEventListener('input', showInput)
// ageInput.addEventListener('input', showInput)
// selectedGenderInput.addEventListener('input', showInput)
// chestInput.addEventListener('input', showInput)
// restingInput.addEventListener('input', showInput)
// cholersterolInput.addEventListener('input', showInput)
// bloodsugarInput.addEventListener('input', showInput)
// electrocardiographicInput.addEventListener('input', showInput)
// heartrateInput.addEventListener('input', showInput)
// anginaInput.addEventListener('input', showInput)
// STInput.addEventListener('input', showInput)
// STsegmentInput.addEventListener('input', showInput)
// STflouroscopyInput.addEventListener('input', showInput)
// thalInput.addEventListener('input', showInput)

submitButton.addEventListener('click', async () => {

  const nameValue = nameInput.value;
  const ageValue = ageInput.value;
  const selectedGender = selectedGenderInput.value.toLowerCase()
  const chestValue = chestInput.value;
  const restingValue = restingInput.value;
  const cholersterolValue = cholersterolInput.value;
  const bloodsugarValue = bloodsugarInput.value;
  const electrocardiographicValue = electrocardiographicInput.value;
  const heartrateValue = heartrateInput.value;
  const anginaValue = anginaInput.value;
  const STValue = STInput.value;
  const STsegmentValue = STsegmentInput.value;
  const STflouroscopyValue = STflouroscopyInput.value;
  const thal = thalInput.value;

  GEN = (selectedGender === 'male') ? 1 : 0;

  const data = {
    "age": parseInt(ageValue),
    "gender": parseInt(GEN),
    "chest_pain": parseInt(chestValue),
    "resting_blood_pressure": parseInt(restingValue),
    "cholesterol": parseInt(cholersterolValue),
    "sugar": parseInt(bloodsugarValue),
    "electrocardiographic_result": parseInt(electrocardiographicValue),
    "max_heart_rate": parseInt(heartrateValue),
    "exercise_induced_angina": parseInt(anginaValue),
    "ST_depression": parseInt(STValue),
    "slope": parseInt(STsegmentValue),
    "major_vessels": parseInt(STflouroscopyValue),
    "thalassemia": parseInt(thal),
  };

  try {
    const res = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const prediction = await res.json();
    console.log(prediction);
  } catch (error) {
    console.log(error);
  }

  document.getElementById("display").innerHTML = `Name : ${nameValue} <br> Age : ${ageValue} <br> Gender : ${selectedGender} <br> Chest Value : ${chestValue} <br> Resting Blood Pressure : ${restingValue} <br> Serum Cholestrol Value : ${cholersterolValue} <br> Fasting blood sugar : ${bloodsugarValue} <br> Resting Electrocardiographic : ${electrocardiographicValue} <br> Maximum Heart Rate : ${heartrateValue} <br> Angina Exercise : ${anginaValue} <br> ST depression : ${STValue} <br> ST Segment : ${STsegmentValue} <br>  Flouroscopy Value : ${STflouroscopyValue} <br> Thal Value : ${thal} <br>`;
}
)

(async () => {
  const data = {
    age: 53,
    gender: 1,
    chest_pain: 0,
    resting_blood_pressure: 125,
    cholesterol: 212,
    sugar: 0,
    electrocardiographic_result: 1,
    max_heart_rate: 168,
    exercise_induced_angina: 0,
    ST_depression: 1,
    slope: 2,
    major_vessels: 2,
    thalassemia: 3,
  };

  console.log(data);

  try {
    const res = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const prediction = await res.json();
    console.log(prediction);
  } catch (error) {
    console.log(error);
  }
})();
