import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { countriesList } from './data';     

const CountryList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filter countries based on the search query
  const filteredCountries = countriesList.filter((country) =>
    country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle selecting a country
  const handleSelectCountry = (country) => {
    console.log(country);
    
    setSearchQuery(country);
    setDropdownOpen(false); // Close the dropdown when a country is selected
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-md ">
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 border border-gray-300">
          <BsSearch className="text-gray-500" />
          <input
            className="ml-2 w-full bg-transparent outline-none text-gray-700"
            type="text"
            placeholder="Search for a country..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setDropdownOpen(true);
            }}
            onClick={() => setDropdownOpen(true)} // Open dropdown when input is clicked
          />
        </div>

        {/* Dropdown for filtered countries */}
        {dropdownOpen && searchQuery && (
          <div className="absolute bg-white w-full mt-2 max-h-64 overflow-y-auto shadow-md rounded-lg border border-gray-300 z-10">
            {filteredCountries.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {filteredCountries.map((country, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSelectCountry(country)} // Set selected country to the input
                  >
                    {country}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-4 text-gray-500">No countries found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryList;
