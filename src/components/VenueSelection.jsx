import React from "react";

const venues = [
  {
    id: 1,
    name: "Sunset Banquet Hall",
    location: "Chennai, Tamil Nadu",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Royal Garden Lawn",
    location: "Bangalore, Karnataka",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Ocean View Resort",
    location: "Goa",
    image: "https://via.placeholder.com/300",
  },
];

const VenueSelection = ({ onSelectVenue, selectedVenue }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Select a Venue</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className={`border rounded-lg p-4 shadow-md bg-white ${
              selectedVenue?.id === venue.id ? "border-green-500" : ""
            }`}
          >
            <img
              src={venue.image}
              alt={venue.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{venue.name}</h3>
            <p className="text-gray-600">{venue.location}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => onSelectVenue(venue)}
            >
              {selectedVenue?.id === venue.id ? "Selected" : "Select"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueSelection;
