async function predict(){
    const chestValue = document.getElementById("chest").value;
    const restingValue = document.getElementById("resting").value;
    const cholersterolValue = document.getElementById("serum").value;
    const bloodsugarValue = document.getElementById("blood sugar").value;
    const electrocardiographicValue = document.getElementById("electrocardiographic").value;
    const heartrateValue = document.getElementById("heart rate").value;
    const STsegmentValue = document.getElementById("ST segment").value;

    const data = {
      chest_pain: chestValue,
      resting_blood_pressure: restingValue,
      cholesterol: cholersterolValue,
      sugar: bloodsugarValue,
      electrocardiographic_result: electrocardiographicValue,
      max_heart_rate: heartrateValue,
      slope: STsegmentValue,
    };
    console.log(data)

      let prediction = null;

    document.getElementById('loader').style.visibility = 'visible';

    try {
      const res = await fetch("https://code-unnati-marathon.onrender.com/predict", {
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

    document.getElementById("loader").style.visibility = "hidden"; 

    document.getElementById(
      "display"
    ).innerHTML = `${result}`;
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