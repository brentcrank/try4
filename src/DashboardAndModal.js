
import React from 'react';

const teamMap = {
  "5-1": "Cadott Hornets",
  "5-2": "Stanley-Boyd Orioles",
  "5-3": "Bloomer Blackhawks",
  "1-1": "Arrowhead Warhawks",
  "1-2": "Muskego Warriors",
  "1-3": "Franklin Sabers"
};

const Dashboard = ({ teams }) => {
  return (
    <div>
      <h2>Team Dashboard</h2>
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

const SimulationModal = ({ teams, onClose }) => {
  return (
    <div className="modal">
      <button onClick={onClose}>Close</button>
      <h3>Simulated Matchups</h3>
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

export { Dashboard, SimulationModal };
