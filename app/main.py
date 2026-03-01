from fastapi import FastAPI
from joblib import load
from src.Schemas.CarFeatures import CarFeatures
from src.utility import input_perprocessing
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["OPTIONS", "POST", "GET"],
    allow_headers=["*"],
)

linear_regression_model = load('./models/linear_regression_model.pkl')
scaler = load('./models/scaler.pkl')
random_forest_model = load('./models/random_forest_model.pkl')

@app.post('/predict')
def predict(features: CarFeatures):
    X = input_perprocessing(features)
    X_scaled = scaler.transform(X)
    prediction = linear_regression_model.predict(X_scaled)
    return {"predicted_price": float(prediction[0])}