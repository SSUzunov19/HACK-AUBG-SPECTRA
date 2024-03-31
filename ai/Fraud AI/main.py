import tensorflow as tf
import numpy as np
import calc

# Define the model
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(18,)),
    tf.keras.layers.Dense(32, activation='relu'),
    tf.keras.layers.Dense(16, activation='relu'),
    tf.keras.layers.Dense(1, activation='sigmoid')  # Sigmoid activation for binary classification
])

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Generate sample training data
def generate_training_data(num_samples):
    X_train = []
    y_train = []

    for _ in range(num_samples):
        # Generate random scores for each question
        scores = np.random.randint(0, 101, size=(10,))
        water_used = [np.random.randint(10, 1201)]  # Convert to list
        energy_used = [np.random.randint(500, 12001)]  # Convert to list
        greenhouse_gas = [np.random.randint(1, 21)]  # Convert to list
        waste = [np.random.randint(5, 151)]  # Convert to list

        # Generate random values for boolean questions
        boolean_values = np.random.randint(0, 2, size=(4,))

        # Combine scores and boolean values
        my_list = list(scores[:3]) + water_used + energy_used + list(scores[3:5]) + greenhouse_gas + list(scores[5:6]) + waste + list(scores[6:7]) + [boolean_values[0]] + list(scores[7:]) + list(boolean_values[1:])
        print(my_list)

        # Calculate final result (0-10), which could be derived from the scores
        final_result = calc.calculate_score(my_list)
        # Determine if scores are genuine or fake based on final result (e.g., if final result > 5, scores are genuine)
        label = 1 if final_result > 1.2 and final_result < 9.6 else 0
        # Append sample and label to training data
        X_train.append(np.array(my_list))
        y_train.append(label)

    return np.array(X_train), np.array(y_train)

# Generate training data
X_train, y_train = generate_training_data(1000)

# Normalize features to range [0, 1] (optional but often recommended)
X_train_normalized = X_train / 100.0

# Train the model
model.fit(X_train_normalized, y_train, epochs=10, batch_size=32, validation_split=0.2)

# Function to predict if scores are fake or genuine
def predict_scores(input_scores):
    # Normalize input scores
    input_scores_normalized = np.array(input_scores) / 100.0
    # Predict the probability of being genuine
    probability = model.predict(np.array([input_scores_normalized]))
    return probability[0][0]

# Example usage
input_scores = [85, 90, 80, 120, 150, 95, 85, 130, 90, 92, 85, 1, 80, 88, 89, 1, 0, 1]
probability = predict_scores(input_scores)
print("Probability of scores being genuine:", probability)
