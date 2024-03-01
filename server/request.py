from pydantic import BaseModel

class RequestModel(BaseModel):
    chest_pain : float
    resting_blood_pressure : float
    cholesterol : float
    sugar : float
    electrocardiographic_result : float
    max_heart_rate : float
    slope : float