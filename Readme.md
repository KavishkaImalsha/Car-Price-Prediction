# 🚗 Car Price Prediction System

An end-to-end Machine Learning project that predicts used car prices using Linear Regression and is deployed using FastAPI.

---

## 📌 Project Overview

The goal of this project is to predict the selling price of a used car based on features such as year, kilometers driven, fuel type, engine capacity, and power etc.

This project demonstrates:
- Data preprocessing
- Linear Regression and Ensemble learning
- Model comparison
- API deployment
- Frontend + Backend integration

---

## 🧠 Machine Learning Workflow

### 1️⃣ Data Preprocessing
- Handled missing values
- Encoded categorical variables
- Train-test split

### 2️⃣ Baseline Model
- Model: Linear Regression
- Test R² Score: **0.67**
- RMSE: ~463,000

### 3️⃣ Improved Model
- Model: Random Forest Regressor
- Test R² Score: **0.90**
- RMSE: ~253,000

Random Forest significantly improved performance by capturing nonlinear relationships between features.

---

## 📊 Model Comparison

| Model | R² Score | RMSE |
|-------|----------|-------|
| Linear Regression | 0.67 | 463k |
| Random Forest | 0.90 | 253k |

---

## 🏗 Tech Stack

- Python
- Scikit-learn
- FastAPI
- Uvicorn
- React + Tailwind css

---

## 🚀 How to Run Locally

## 01. Clone Repository
git clone https://github.com/KavishkaImalsha/Car-Price-Prediction.git
cd car-price-prediction

## 02. Install Dependencies
pip install -r requirements.txt

## 03. Build models
cd src
python train.py
cd ../

## 04. Run Backend Server
uvicorn app.main:app --reload --port 8000

## 05.Run Frontend
Open another terminal while running backend.

cd frontend
npm install
npm run dev

## 🔎 Additional Notes

Detailed model evaluation and experimentation can be found in the `notebooks/` directory.

In this project, Random Forest Regressor significantly outperformed Linear Regression by capturing nonlinear relationships in the data.

This implementation does not include advanced feature engineering or extensive outlier treatment. Incorporating those techniques may further improve the performance of Linear Regression and potentially reduce prediction error.

The purpose of this project was to demonstrate:
- Baseline model development
- Model comparison
- Performance evaluation
- End-to-end deployment using FastAPI