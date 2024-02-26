from pydantic import BaseModel

class req(BaseModel):
    height: float
    weight: float
    gender: int