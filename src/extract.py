import json
import os

# Function to extract desired fields from a JSON file
def extract_fields_from_json(json_file):
    with open(json_file, 'r') as file:
        data = json.load(file)
    
    feature = data['features'][0]  # Assuming each file contains a single feature
    properties = feature['properties']
    
    max_concentration = properties['Max Plume Concentration (ppm m)']
    utc_time_observed = properties['UTC Time Observed']
    latitude = properties['Latitude of max concentration']
    longitude = properties['Longitude of max concentration']
    concentration_uncertainty = properties['Concentration Uncertainty (ppm m)']
    
    return max_concentration, utc_time_observed, latitude, longitude, concentration_uncertainty

# Directory containing the JSON files (where they are unzipped)
json_files_directory = 'directory_containing_unzipped_json_files'

# List of JSON files in the directory
json_files = [os.path.join(json_files_directory, filename) for filename in os.listdir(json_files_directory) if filename.endswith('.json')]

# Output file to write the extracted data
output_file = 'output.csv'

# Write the header to the output file
with open(output_file, 'w') as outfile:
    outfile.write('Max Plume Concentration (ppm m),UTC Time Observed,Latitude of max concentration,Longitude of max concentration,Concentration Uncertainty (ppm m)\n')

# Iterate through JSON files and extract the desired fields
for json_file in json_files:
    max_concentration, utc_time_observed, latitude, longitude, concentration_uncertainty = extract_fields_from_json(json_file)
    
    # Append the extracted data to the output file
    with open(output_file, 'a') as outfile:
        outfile.write(f'{max_concentration},{utc_time_observed},{latitude},{longitude},{concentration_uncertainty}\n')

print(f'Data extracted and saved to {output_file}')
