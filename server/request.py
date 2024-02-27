from pydantic import BaseModel

class RequestModel(BaseModel):
    age : int
    gender : int
    chest_pain : int
    resting_blood_pressure : int
    cholesterol : int
    sugar : int
    electrocardiographic_result : int
    max_heart_rate : int
    exercise_induced_angina : int
    ST_depression : int
    slope : int
    major_vessels : int
    thalassemia : int