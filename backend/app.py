from flask import Flask, request, jsonify
from flask_cors import CORS
from joblib import load

app = Flask(__name__)
CORS(app)

# In-memory storage for form submissions
submissions = []
# Request is a flask library that recieves a request object sent from the frontend

logistic_model = load("logistic_model.pkl")

@app.route('/api/submit', methods=['POST'])
def submit_form():
    try:
        data = request.get_json()
        age = data.get('age')
        gender = 0 if data.get('gender') == 'male' else 1
        tenure = data.get('tenure')
        monthlycharges = data.get('monthlycharges')
        
        # Validate data
        if (not (age and str(gender) and tenure and monthlycharges)):
            return jsonify({
                'success': False,
                'message': 'All fields are required'
            }), 400
        
        submission = {
            'age': age,
            'gender': gender,
            'tenure': tenure,
            'monthlycharges': monthlycharges
        } 
        
        submissions.append(submission)
        
        return jsonify({
            'success': True,
            'message': 'Form submitted successfully',
            'prediction': logistic_model.predict([[age, gender, tenure, monthlycharges]]),
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Server error occurred',
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)