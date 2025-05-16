import json
import csv
import re

# Function to fix encoding issues and clean text
def fix_encoding_issues(text):
    if not isinstance(text, str):
        return text

    try:
        # Attempt to fix mojibake issues
        text_bytes = text.encode('latin1', errors='strict')
        fixed = text_bytes.decode('utf-8', errors='strict')
    except (UnicodeEncodeError, UnicodeDecodeError):
        fixed = text

    # Remove non-printable/control characters
    fixed = re.sub(r'[^\x20-\x7E]+', ' ', fixed)

    # Replace common encoding issues
    replacements = {
        'â€™': "'",
        'â€“': '-',
        'â€œ': '"',
        'â€': '"',
        'Â°': '°'  # Degree symbol
    }
    for wrong, right in replacements.items():
        fixed = fixed.replace(wrong, right)

    return fixed.strip()

# Define topic-to-ID map
topic_to_id = {
    "Data Interpretation": 1,
    "Logical Reasoning": 2,
    "Quantitative Aptitude": 3,
    "Verbal Ability": 4
}

# Input and output file paths
input_file = 'logical_reasoning.json'  # Input JSON file
output_file = 'questions.csv'  # Output CSV

try:
    with open(input_file, 'r', encoding='utf-8') as file:
        json_data = json.load(file)
except json.JSONDecodeError as e:
    print(f"JSON decode error: {e}")
    exit(1)

# Define CSV headers
header = [
    'id', 'subject_id', 'question_text', 'options', 
    'correct_index', 'solution', 'question_url', 'solution_url'
]

try:
    with open(output_file, 'w', encoding='utf-8', newline='') as csvfile:
        csvwriter = csv.writer(csvfile)
        csvwriter.writerow(header)

        for idx, item in enumerate(json_data, start=1):
            topic = item.get('type', '').strip()
            subject_id = topic_to_id.get(topic, None)

            question_text = fix_encoding_issues(item.get('Question', ''))
            options = item.get('options', [])
            if isinstance(options, list):
                options = [fix_encoding_issues(opt) for opt in options]

            solution = fix_encoding_issues(item.get('solution', ''))
            correct_index = item.get('answer_index', None)  # Get correct index directly

            row = [
                idx,  # Sequential ID
                subject_id,  # Mapped subject ID
                question_text,  # Cleaned question text
                options,  # Cleaned options as a list
                correct_index,  # Correct index from JSON
                solution,  # Cleaned solution
                None,  # question_url (null for now)
                None   # solution_url (null for now)
            ]
            csvwriter.writerow(row)
    print(f"CSV with correct index saved to {output_file}")

except IOError as e:
    print(f"Error writing CSV: {e}")
