from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from request import req
import pickle
import pandas as pd
import numpy as np

app = FastAPI()
pickle_in = open("classifier.pkl", "rb")
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
def predict(req: req):
    print(req)
    height = req.height
    weight = req.weight
    gender = req.gender
    print(height, weight, gender)
    values = np.array([height, weight, gender])
    print(values)
    prediction = classifier.predict([values])
    print(prediction)
    return {"BMI Prediction": prediction}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)