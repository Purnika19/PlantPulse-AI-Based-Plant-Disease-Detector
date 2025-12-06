# PlantPulse-AI-Based-Plant-Disease-Detector
Plant Disease Detection Using Convolutional Neural Networks (CNN)

This project implements a deep learning–based image classification system to detect plant leaf diseases. The model is trained using a Convolutional Neural Network (CNN) on a dataset of approximately 70,000 leaf images across 38 disease classes, including both healthy and infected leaves. The final trained model can classify a given leaf image and return the predicted disease name and confidence score.

***FEATURES***

Detects 38 plant leaf diseases

Supports multiple crops including tomato, potato, corn, apple, and grape

High accuracy on training, validation, and unseen test sets

Built using TensorFlow and Keras

Supports real-time prediction using JPG/PNG images

***PROJECT STRUCTURE***
project_folder/
│── dataset/
│ ├── train/
│ ├── valid/
│ └── test/
│── plant_disease_70k.keras
│── training_history.csv
│── prediction_script.py
│── README.txt
│── requirements.txt
│── app.py (optional for Flask deployment)

*MODEL ARCHITECTURE SUMMARY*

Five convolutional blocks (Conv2D + ReLU + MaxPooling)

Flatten layer to convert feature maps to a 1D vector

Dense layer with 1500 neurons

Dropout layers for regularization

Softmax output layer for 38-class classification

***HYPERPARAMETERS USED***
Image Size: 128 × 128 × 3
Optimizer: Adam
Learning Rate: 0.0001
Batch Size: 32
Epochs: 10

***RESULTS***
Training Accuracy: High(97%)
Validation Accuracy: High(96.2%)
Testing Accuracy: High

Evaluation tools:

Classification Report

Confusion Matrix

Training vs Validation Accuracy Plot

**Tech Stack**
🌐 *Frontend*

HTML5 – UI structure

CSS3 – Styling & responsive design

JavaScript (Vanilla JS) – Client-side logic

Custom Chatbot UI with crop tips & seasonal suggestions

🧠 _Machine Learning_

Convolutional Neural Network (CNN)

TensorFlow / Keras – Model building & training

Dropout Regularization – Prevent overfitting

Learning Rate Optimizer (Adam, LR=0.001)

Image Preprocessing (128×128 RGB)

🔙 _Backend_

Flask (Python) – Model serving API

REST API – /predict endpoint

Flask-CORS – Cross-origin support

NumPy & Pillow (PIL) – Image handling

🗂️ _Dataset_

PlantVillage Dataset (≈70,000 images)

38 disease classes across multiple crops

Train/Validation split with balanced sampling

Subset creation using random proportional sampling

🚀 _Deployment & Tools_

Jupyter Notebook – Model training

Google Colab – GPU training

ngrok / Localhost – Development testing

GitHub – Version control








LICENSE
This project is intended for academic and research purposes only.
