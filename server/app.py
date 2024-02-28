from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import pandas as pd
import numpy as np
from request import RequestModel

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load the dataset (replace 'heart.csv' with your dataset)
data = pd.read_csv('./model/heart.xls')

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
    print(type(values))
    user_data = scaler.transform([values])
    prediction = model.predict([values])
    print(prediction)
    return {"Prediction": int(prediction[0])}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)