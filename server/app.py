from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import pandas as pd
import numpy as np
from request import RequestModel 
from fastapi.staticfiles import StaticFiles
from fastapi.responses import RedirectResponse
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load the dataset (replace 'heart.csv' with your dataset)
data = pd.read_csv('./model/heart5.xls')

# Preprocessing the data
X = data.drop('target', axis=1)
y = data['target']

# Splitting the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Feature scaling
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Training the model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Predicting on user input data
def predict_heart_disease(cp, trestbps, chol, fbs, restecg, thalach, slope):
    user_data = np.array([[cp, trestbps, chol, fbs, restecg, thalach, slope]])
    user_data = scaler.transform(user_data)
    prediction = model.predict(user_data)
    return prediction


app = FastAPI()
app.mount("/static", StaticFiles(directory="../", html=True), name="static")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["null"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return RedirectResponse(url='/static/index.html')

@app.get('/{name}')
def hello(name: str):
    print("Name", name)
    return {"Hello": f"{name}"}

@app.post('/predict')
def predict(req : RequestModel):
    prediction = predict_heart_disease(req.chest_pain ,
        req.resting_blood_pressure ,
        req.cholesterol ,
        req.sugar ,
        req.electrocardiographic_result ,
        req.max_heart_rate ,
        req.slope ,)
    print(prediction)
    return {"Prediction": int(prediction[0])}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)