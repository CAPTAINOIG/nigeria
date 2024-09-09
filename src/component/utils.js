import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import ReactGooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import 'react-google-places-autocomplete/lib/styles.css'; 

const Googlecloud = () => {
    return (
        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyBHvnA7YyT8A4FqGJzv2cmK1GJPk5QP-lc',
            language: 'en',
          }}
        />
      );
    };

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     maxWidth: '600px',
//     margin: '0 auto',
//   },
// };

export default Googlecloud;
