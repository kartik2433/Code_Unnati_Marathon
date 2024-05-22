# Heart Risk Prediction Model

# Overview
- Introducing our Heart Risk Prediction Model, a comprehensive web application developed to assess cardiovascular risk using state-of-the-art machine learning techniques. The frontend, crafted with HTML, CSS, and JavaScript, provides a user-friendly interface for inputting patient data. The backend leverages FastAPI, alongside Pickle, Numpy, Pandas, and a Random Forest Classifier to deliver accurate predictions. By analyzing key health parameters such as chest pain type, resting blood pressure, serum cholesterol levels, fasting blood sugar, resting electrocardiographic results, maximum heart rate achieved, and the slope of the peak exercise ST segment, our model offers valuable insights into heart health, aiding in early detection and prevention of heart disease.

## Features

- **User-Friendly Interface**: A clean and intuitive interface for inputting patient data.
- **Accurate Predictions**: Utilizes a Random Forest Classifier to predict heart disease risk.
- **FastAPI Backend**: Ensures fast and reliable API performance.
- **Comprehensive Analysis**: Considers multiple health parameters for thorough risk assessment.

## Parameters

The model predicts heart disease risk based on the following parameters:

- Chest Pain Type (0-3)
- Resting Blood Pressure
- Serum Cholesterol (mg/dl)
- Fasting Blood Sugar (if > 120 mg/dl then Yes, else No)
- Resting Electrocardiographic Results (0-2)
- Maximum Heart Rate Achieved
- Slope of the Peak Exercise ST Segment (0-2)

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: FastAPI
- **Machine Learning**: Numpy, Pandas, Random Forest Classifier
- **Model Serialization**: Pickle

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/heart-risk-prediction.git
   cd heart-risk-prediction

2. Set up a virtual environment:

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt

4. Run the FastAPI Server:

   ```bash
   uvicorn main:app
