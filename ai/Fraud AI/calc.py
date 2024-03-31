weights_perfect_values = [
    (8, 60), (12, 80), (8, 70), (0.5, None), (0.5, None), (2, 80), 
    (15, 60), (20, 5), (10, 70), (4, None), (6, 50), (10, None), 
    (6, 80), (10, 80), (8, 90), (1, True), (1, True), (2, True)
]

def calculate_score(answers):
    total_weighted_deviation = 0
    total_weight = 0

    for i, (weight, perfect_value) in enumerate(weights_perfect_values):
        response = answers[i]
        
        # Calculate deviation
        if perfect_value is None:
            deviation = 0  # No perfect value provided
        elif isinstance(perfect_value, bool):
            deviation = weight if response != perfect_value else 0
        else:
            deviation = abs(response - perfect_value)

        # Calculate maximum possible deviation
        if perfect_value is None:
            max_deviation = 0  # No perfect value provided
        elif isinstance(perfect_value, bool):
            max_deviation = weight
        else:
            max_deviation = abs(100 - perfect_value)

        # Calculate normalized weighted deviation
        if max_deviation == 0:
            normalized_weighted_deviation = 0
        else:
            normalized_weighted_deviation = (weight * deviation) / (weight * max_deviation)

        # Accumulate total weighted deviation and total weight
        total_weighted_deviation += normalized_weighted_deviation
        total_weight += weight

    # Calculate overall score
    if total_weight == 0:
        score = 0
    else:
        score = 10 * (1 - (total_weighted_deviation / total_weight))
    
    return score

answers = [70, 90, 60, 450, 5500, 75, 50, 4.5, 75, 40, 60, True, 80, 85, 90, True, False, True]

score = calculate_score(answers)
