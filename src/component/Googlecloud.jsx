import React, { useEffect } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Googlecloud = () => {
  useEffect(() => {
    console.log('Google Maps API script should be loaded');
  }, []);

  return (
    <div className="w-full max-w-md mx-auto my-4">
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
          language: 'en',
        }}
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
    </div>
  );
};

export default Googlecloud;
