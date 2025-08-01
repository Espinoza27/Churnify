Churn Predictor Web App

## Description:

Predict customer churn using a machine learning model trained on a Kaggle dataset. This full-stack app combines a React (Vite) frontend with a Flask backend serving a Python ML model for churn prediction. Coupled with SQL log keeping and authentication. 


## DEMO

Add live demo here later.

---

## Features

- Churn prediction using ML classification models 
- Modern React + Tailwind frontend  
- Flask backend   
- API communication with Flask routes  
- Error handling and validation on frontend and backend  

---

## Installation / Setup

1. Clone the repository

git clone https://github.com/Espinoza27/churnify

cd churn-predictor

2. Setup the backend (start the Flask server)

cd backend
python -m venv venv
# Activate virtual environment:
source venv/bin/activate      # macOS/Linux
# or
venv\Scripts\activate         # Windows

pip install -r requirements.txt
python app.py

3. Setup the frontend (React + Vite)
cd ../frontend
npm install
npm run dev