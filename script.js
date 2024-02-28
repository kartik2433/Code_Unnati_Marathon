async function predict(){
    const nameValue = document.getElementById("name").value;
    const ageValue = document.getElementById("age").value;
    const selectedGender = document.getElementById("gender").value;
    const chestValue = document.getElementById("chest").value;
    const restingValue = document.getElementById("resting").value;
    const cholersterolValue = document.getElementById("serum").value;
    const bloodsugarValue = document.getElementById("blood sugar").value;
    const electrocardiographicValue = document.getElementById("electrocardiographic").value;
    const heartrateValue = document.getElementById("heart rate").value;
    const anginaValue = document.getElementById("angina").value;
    const STValue = document.getElementById("ST").value;
    const STsegmentValue = document.getElementById("ST segment").value;
    const STflouroscopyValue = document.getElementById("ST flouroscopy").value;
    const thalValue = document.getElementById("thal").value;

    GEN = selectedGender === "male" ? 1 : 0;

    const data = {
      age: parseInt(ageValue),
      gender: parseInt(GEN),
      chest_pain: parseInt(chestValue),
      resting_blood_pressure: parseInt(restingValue),
      cholesterol: parseInt(cholersterolValue),
      sugar: parseInt(bloodsugarValue),
      electrocardiographic_result: parseInt(electrocardiographicValue),
      max_heart_rate: parseInt(heartrateValue),
      exercise_induced_angina: parseInt(anginaValue),
      ST_depression: parseInt(STValue),
      slope: parseInt(STsegmentValue),
      major_vessels: parseInt(STflouroscopyValue),
      thalassemia: parseInt(thalValue),
    };
    console.log(data)

      let prediction = null;

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      prediction = await res.json();
      console.log(prediction);
    } catch (error) {
      console.log(error);
    }

    if (!isNaN(prediction)){
      console.log("Server is Not Responding...!");
    }
    let result ;
    if(prediction === 1){
      result = "You have a Heart Disease";
    }
    else{
      result = "No, You don't have a Heart Disease";
    }


    


    document.getElementById(
      "display"
    ).innerHTML = `Prediction : ${result} <br> Name : ${nameValue} <br> Age : ${ageValue} <br> Gender : ${selectedGender} <br> Chest Value : ${chestValue} <br> Resting Blood Pressure : ${restingValue} <br> Serum Cholestrol Value : ${cholersterolValue} <br> Fasting blood sugar : ${bloodsugarValue} <br> Resting Electrocardiographic : ${electrocardiographicValue} <br> Maximum Heart Rate : ${heartrateValue} <br> Angina Exercise : ${anginaValue} <br> ST depression : ${STValue} <br> ST Segment : ${STsegmentValue} <br>  Flouroscopy Value : ${STflouroscopyValue} <br> Thal Value : ${thalValue} <br>`;


    // Show the loader
document.getElementById('loader').style.display = 'block';

fetch('your-api-url')
    .then(response => response.json())
    .then(data => {
        // Process your data here

        // Then hide the loader
        document.getElementById('loader').style.display = 'none';
    })
    .catch(error => {
        console.error('Error:', error);

        // Don't forget to hide the loader in case of error too
        document.getElementById('loader').style.display = 'none';
    });

  }
  
  

  
  
  

  
//   // Fetch data
//   (async () => {
//     const data = {
//       // your data
//     };
    
//     console.log(data);
//     try {
//       const res = await fetch("http://localhost:8000/predict", {
//         // your fetch options
    
//       });


//       $(window).on("load", function() {
//           $(".loader").fadeOut("slow");
//       });

//   } catch (error) {
//     // Don't forget to hide the loader in case of error too
//     document.getElementById('loader').style.display = 'Loading...!!';

//     // Handle error
//   }
// })();






// loader on page 




// (async () => {
//   const data = {
//     age: 53,
//     gender: 1,
//     chest_pain: 0,
//     resting_blood_pressure: 125,
//     cholesterol: 212,
//     sugar: 0,
//     electrocardiographic_result: 1,
//     max_heart_rate: 168,
//     exercise_induced_angina: 0,
//     ST_depression: 1,
//     slope: 2,
//     major_vessels: 2,
//     thalassemia: 3,
//   };

//   console.log(data);

//   try {
//     const res = await fetch("http://localhost:8000/predict", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     const prediction = await res.json();
//     console.log(prediction);
//   } catch (error) {
//     console.log(error);
//   }
// });