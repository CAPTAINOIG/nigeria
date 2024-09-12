import React, { useState } from 'react';
import  GooglePlacesAutocomplete  from 'react-google-places-autocomplete';
import axios from 'axios';

const MyComponent = () => {
  const [location, setLocation] = useState(null);

  const handleSelect = async (selectedOption) => {
    console.log(selectedOption);
    // Extract place_id from selectedOption
    const placeId = selectedOption.value.place_id || selectedOption.place_id;
    
    console.log('Place ID:', placeId);

    // Make a request to the Google Places Details API
    // https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${}&fields=geometry

    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const TARGET_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${'AIzaSyBRDlvJOTJYDmVsm3HKGeUjoZjgvlAxquE'}`
const URL = PROXY_URL + TARGET_URL

    try {
      const response = await axios.get(URL,{
        headers: {
          'Content-Type': 'application/json',
          // You can't set Access-Control-Allow-Origin here; it's handled by the server
          'Authorization': 'Bearer your-token',
        }});
      
      console.log(response);
      

      // Extract latitude and longitude from the response
      const { lat, lng } = response.data.result.geometry.location;

      console.log('Latitude:', lat);
      console.log('Longitude:', lng);

      // Update state with lat and lng
      setLocation({ lat, lng });
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };

  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyBRDlvJOTJYDmVsm3HKGeUjoZjgvlAxquE" // Replace with your actual API key
        selectProps={{
          onChange: handleSelect,
        }}
        placeholder="Search for a location"
        styles={{
          container: {
            flex: 1,
            width: '100%',
          },
          textInputContainer: {
            backgroundColor: 'transparent',
            borderRadius: '0.375rem',
            borderWidth: '1px',
            borderColor: '#d1d5db',
            width: '100%',
            maxWidth: '100%',
            margin: '0 auto',
          },
          textInput: {
            height: '2.75rem',
            borderColor: '#d1d5db',
            borderWidth: '1px',
            borderRadius: '0.375rem',
            paddingHorizontal: '1rem',
            width: '100%',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
      
      {/* {location && (
        <div>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      )} */}
    </div>
  );
};

export default MyComponent;
