import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VenueSelection from "../components/VenueSelection"; // Importing the existing VenueSelection component

export default function SelectVenue() {
  const { title_id } = useParams();
  const navigate = useNavigate();
  const [selectedVenue, setSelectedVenue] = useState(null);

  const handleVenueSelect = (venue) => {
    setSelectedVenue(venue);
  };

  const handleConfirmSelection = () => {
    if (selectedVenue) {
      localStorage.setItem("selectedVenue", JSON.stringify(selectedVenue));
      navigate("/cart");
    }
  };

  return (
    <section className="bg-white lg:mt-5">
      <div className="container px-6 py-10 mx-auto">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold">
          Select Venue for {title_id}
        </h2>

        <hr className="my-8 border-gray-200" />

        {/* Using VenueSelection Component */}
        <VenueSelection onSelectVenue={handleVenueSelect} selectedVenue={selectedVenue} />

        {selectedVenue && (
          <div className="mt-8 flex justify-center">
            <button onClick={handleConfirmSelection} className="px-6 py-3 text-white bg-green-500 rounded-lg">
              Confirm Venue Selection
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
