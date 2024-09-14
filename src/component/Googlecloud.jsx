import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import axios from 'axios';
import axiosInstance from '../axiosInstance';

const MyComponent = () => {
  const [location, setLocation] = useState(null);

  // useEffect(() => {
  //   latFetch();
  // }, [])
  

  const handleSelect = async (selectedOption) => {
    console.log(selectedOption);
    // Extract place_id from selectedOption
    const placeId = selectedOption.value.place_id || selectedOption.place_id;
    // console.log('Place ID:', placeId);

    const PROXY_URL = 'https://thingproxy.freeboard.io/fetch/';
     const TARGET_URL = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${'AIzaSyBRDlvJOTJYDmVsm3HKGeUjoZjgvlAxquE'}`
    const URL = PROXY_URL + encodeURIComponent(TARGET_URL);

    try {
      const response = await axios.get(URL, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your-token',
        }
      });
      
      const data = response.data.result.geometry.location;
      console.log(data)
      const resData = await axios.post('https://b5a8-102-88-68-33.ngrok-free.app/api/memo/memgeotemp', {lat:`${data.lat}`,lng:`${data.lng}`},{
        headers: {
          "ngrok-skip-browser-warning": '69420',
          'Content-Type': 'application/json',
        }
      })
      console.log(resData);
      
      // console.log('Latitude:', lat);
      // console.log('Longitude:', lng);

      // Update state with lat and lng
    } catch (error) {
      console.error('Error fetching place details:', error);
    }
  };

  const latFetch = async() => {
    try {
    } catch (error) {
      console.log(error);
    }
  }

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

      {location && (
        <div>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
