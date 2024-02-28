# Importing necessary libraries
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load the dataset (replace 'heart.xls' with your dataset)
data = pd.read_csv('C:/Users/jaina/Desktop/CU Marathon/Code_Unnati_Marathon/server/model/heart.xls')  # Update the file path here

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
def predict_heart_disease(age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal):
    user_data = np.array([[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])
    user_data = scaler.transform(user_data)
    prediction = model.predict(user_data)
    if prediction[0] == 0:
        return "No heart disease detected."
    else:
        return "Heart disease detected."

# Example usage
age = int(input("Enter age: "))
sex = int(input("Enter sex (0 for female, 1 for male): "))
cp = int(input("Enter chest pain type (0-3): "))
trestbps = int(input("Enter resting blood pressure (mm Hg): "))
chol = int(input("Enter serum cholestoral (mg/dl): "))
fbs = int(input("Enter fasting blood sugar (> 120 mg/dl, 1 for true, 0 for false): "))
restecg = int(input("Enter resting electrocardiographic results (0-2): "))
thalach = int(input("Enter maximum heart rate achieved: "))
exang = int(input("Enter exercise induced angina (1 for yes, 0 for no): "))
oldpeak = float(input("Enter ST depression induced by exercise relative to rest: "))
slope = int(input("Enter the slope of the peak exercise ST segment (0-2): "))
ca = int(input("Enter number of major vessels (0-3) colored by flourosopy: "))
thal = int(input("Enter thal (3 = normal; 6 = fixed defect; 7 = reversable defect): "))

result = predict_heart_disease(age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal)
print(result)

import pickle
pickle_out = open("classifier.pkl","wb")
pickle.dump(model,pickle_out)
pickle_out.close()
