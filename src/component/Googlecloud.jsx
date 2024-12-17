import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Googlecloud = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handlePlaceSelect = (data) => {
    alert("hello")
    if (data) {
      console.log('Selected place:', data.label);
      if (data.value && data.value.geometry && data.value.geometry.location) {
        const lat = data.value.geometry.location.lat();
        const lng = data.value.geometry.location.lng();

        setSelectedPlace(data.label);
        setLatitude(lat);
        setLongitude(lng);

        console.log('Latitude:', lat);
        console.log('Longitude:', lng);
      } else {
        console.log('Geometry data not available');
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <GooglePlacesAutocomplete
        placeholder="Search for a location"
        ref={(val)=>{
          console.log(val)
        }}
      selectProps={{
        onChange: (val)=>{
          console.log(val)
        },

      }}
        
        
        
        query={{
          key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
        fetchDetails={true}
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
      {selectedPlace && (
        <div className="mt-4">
          <h2>Selected Place:</h2>
          <p>{selectedPlace}</p>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}
    </div>
  );
};

export default Googlecloud;
