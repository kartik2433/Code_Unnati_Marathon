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

nameInput.addEventListener('input', showInput)
ageInput.addEventListener('input', showInput)
selectedGenderInput.addEventListener('input', showInput)
chestInput.addEventListener('input', showInput)
restingInput.addEventListener('input', showInput)
cholersterolInput.addEventListener('input', showInput)
bloodsugarInput.addEventListener('input', showInput)
electrocardiographicInput.addEventListener('input', showInput)
heartrateInput.addEventListener('input', showInput)
anginaInput.addEventListener('input', showInput)
STInput.addEventListener('input', showInput)
STsegmentInput.addEventListener('input', showInput)
STflouroscopyInput.addEventListener('input', showInput)
thalInput.addEventListener('input', showInput)

function showInput() {


  const nameValue = nameInput.value;
  const ageValue = ageInput.value;
  const selectedGender = selectedGenderInput.value
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



  document.getElementById("display").innerHTML = `Name : ${nameValue} <br> Age : ${ageValue} <br> Gender : ${selectedGender} <br> Chest Value : ${chestValue} <br> Resting Blood Pressure : ${restingValue} <br> Serum Cholestrol Value : ${cholersterolValue} <br> Fasting blood sugar : ${bloodsugarValue} <br> Resting Electrocardiographic : ${electrocardiographicValue} <br> Maximum Heart Rate : ${heartrateValue} <br> Angina Exercise : ${anginaValue} <br> ST depression : ${STValue} <br> ST Segment : ${STsegmentValue} <br>  Flouroscopy Value : ${STflouroscopyValue} <br> Thal Value : ${thal} <br>`;
}

