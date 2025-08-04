from flask import Flask, request, jsonify
from flask_cors import CORS
from joblib import load

app = Flask(__name__)
CORS(app)

# In-memory storage for form submissions
submissions = []
# Request is a flask library that recieves a request object sent from the frontend

# Load different models
logistic_model = load("logistic_model.pkl")
# Add other models as needed
svc_model = load("svm_model.pkl")
dtc_model = load("dtc_model.pkl")
rfc_model = load("rfc_model.pkl")
knn_model = load("knn_model.pkl")

@app.route('/api/submit', methods=['POST'])
def submit_form():
    try:
        data = request.get_json()
        age = data.get('age')
        gender = data.get('gender')
        tenure = data.get('tenure')
        monthlycharges = data.get('monthlycharges')
        model_type = data.get('model', 'logistic_regression')  # Default to logistic regression
        
        # Validate data
        if not all([age, gender, tenure, monthlycharges]):
            return jsonify({
                'success': False,
                'message': 'All fields are required'
            }), 400
        
        # Convert data types for ML model
        age = int(age)
        tenure = int(tenure)
        monthlycharges = float(monthlycharges)
        gender_numeric = 0 if gender == 'male' else 1
        
        # Select model based on model_type
        if model_type == 'logistic_regression':
            model = logistic_model
        elif model_type == 'svc_model':
            model = logistic_model  # Placeholder - replace with actual SVC model
        elif model_type == 'dtc_model':
            model = logistic_model  # Placeholder - replace with actual DTC model
        elif model_type == 'rfc_model':
            model = logistic_model  # Placeholder - replace with actual RFC model
        elif model_type == 'knn_model':
            model = logistic_model  # Placeholder - replace with actual KNN model
        else:
            model = logistic_model  # Default to logistic regression
        
        submission = {
            'age': age,
            'gender': gender_numeric,
            'tenure': tenure,
            'monthlycharges': monthlycharges
        } 
        
        submissions.append(submission)
        
        return jsonify({
            'success': True,
            'message': 'Form submitted successfully',
            'input': submission,
            'prediction': model.predict([[age, gender_numeric, tenure, monthlycharges]]).tolist(),
            'model_used': model_type
        }), 200
        
    except Exception as e:
        print(f"Error in submit_form: {str(e)}")
        import traceback
        traceback.print_exc()
        return jsonify({
            'success': False,
            'message': 'Server error occurred',
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)