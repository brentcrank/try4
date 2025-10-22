
import React from 'react';
import teamMap from './data/team_map.json'; // Adjust path as needed

const TeamList = ({ teams }) => {
  return (
    <div>
      <h2>Team List</h2>
      <ul>
        {teams.map((team, index) => {
          const teamId = `${team.division}-${team.teamNumber}`;
          const teamName = teamMap[teamId] || `Team ${team.teamNumber} - Division ${team.division}`;
          return <li key={index}>{teamName}</li>;
        })}
      </ul>
    </div>
  );
};

export default TeamList;
