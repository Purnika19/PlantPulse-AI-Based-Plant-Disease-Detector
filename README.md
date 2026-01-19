**PlantPulse – AI-Based Plant Disease Detector**

🔗 Live App: https://plantpulse-ai.netlify.app/

⚠️ This is the official deployment of the project by Purnika Malhotra.

PlantPulse is an AI-powered web application that detects plant leaf diseases using Convolutional Neural Networks (CNNs). The model is trained on ~70,000 images from the PlantVillage dataset and can classify 38 plant disease classes with high accuracy.

**1.  Features**

A. Detects 38 plant leaf diseases

B. Supports crops like tomato, potato, corn, apple, grape, and more

C. Real-time prediction using JPG/PNG images

D. High validation accuracy (~96%)

E. Clean and user-friendly interface


**2.  Model & Training**__

A. Custom CNN with 5 convolutional blocks

B. Dense layer with 1500 neurons + Dropout

C. Image size: 128 × 128 × 3

D. Optimizer: Adam (LR = 0.0001)

E. Epochs: 10


3. 📁 Project Structure
project_folder/
│── dataset/
│── plant_disease_70k.keras
│── training_history.csv
│── app.py
│── requirements.txt
│── README.md


**4. 📊 Results**__

A. Training Accuracy: ~97%

B. Validation Accuracy: ~96.2%

C. Evaluated using confusion matrix and classification report


**5. 🛠️ Tech Stack**

A.Frontend: HTML, CSS, JavaScript
B. Backend: Flask (REST API)
C.ML: TensorFlow / Keras (CNN)
D. Dataset: PlantVillage (~70k images)

**6. 🚀 Deployment**

Frontend: Netlify-> https://plantpulse-ai.netlify.app/

Backend & Model API: Hugging Face Spaces (Docker-based Flask API)



**Architecture:
**
User → Netlify Frontend → Hugging Face API → CNN Model


**🏁 Conclusion**

PlantPulse is an end-to-end AI project demonstrating model training, evaluation, and real-world deployment using modern ML and web technologies.







LICENSE
This project is intended for academic and research purposes only.
