from pydantic import BaseModel
from typing import Literal

class CarFeatures(BaseModel):
    year: int
    km_driven: int
    owner: Literal["First Owner", "Second Owner", "Third Owner", "Fourth & Above Owner", "Test Drive Car"]
    mileage: float
    engine: float
    max_power: float
    seats: float
    fuel: Literal["Diesel", "LPG", "Petrol", "CNG"]
    seller_type: Literal["Individual", "Trustmark Dealer", "Dealer"]
    transmission: Literal["Manual", "Automatic"]