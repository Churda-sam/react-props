import React from "react";

const Player = ({
  name = "Unknown Player",
  team = "Unknown Team",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  image = "https://via.placeholder.com/150",
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-80 mx-auto my-4">
      <img className="w-full h-60 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-sm">
          <strong>Team:</strong> {team}
        </p>
        <p className="text-sm">
          <strong>Nationality:</strong> {nationality}
        </p>
        <p className="text-sm">
          <strong>Jersey Number:</strong> {jerseyNumber}
        </p>
        <p className="text-sm">
          <strong>Age:</strong> {age}
        </p>
      </div>
    </div>
  );
};

export default Player;
