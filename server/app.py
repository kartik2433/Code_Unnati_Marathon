from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import pandas as pd
import numpy as np
from request import RequestModel

app = FastAPI()
pickle_in = open("./model/heartModel.pkl", "rb")
classifier = pickle.load(pickle_in)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["null"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get('/{name}')
def hello(name: str):
    print("Name", name)
    return {"Hello": f"{name}"}

@app.post('/predict')
def predict(req : RequestModel):
    # print(req.dict())
    values = np.array([
        req.age,
        req.gender,
        req.chest_pain,
        req.resting_blood_pressure,
        req.cholesterol,
        req.sugar,
        req.electrocardiographic_result,
        req.max_heart_rate,
        req.exercise_induced_angina,
        req.ST_depression,
        req.slope,
        req.major_vessels,
        req.thalassemia
    ])
    prediction = classifier.predict([values])
    print(prediction)
    return {"Prediction": int(prediction[0])}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)