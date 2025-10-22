
import React, { useState, useEffect } from 'react';
import './DivisionDashboard.css';
import allTeams from '../data/wiaa_2025_matrix_all_divisions.json';

const AllDivisionsDashboard = () => {
  const [selectedDivision, setSelectedDivision] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTeams, setFilteredTeams] = useState([]);

  useEffect(() => {
    const teams = allTeams
      .filter(team => team.Division === selectedDivision)
      .filter(team => team.Team.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredTeams(teams);
  }, [selectedDivision, searchTerm]);

  return (
    <div className="dashboard-container">
      <h2>2025 WIAA Football Matrix</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="division-select">Select Division:</label>
        <select
          id="division-select"
          value={selectedDivision}
          onChange={(e) => setSelectedDivision(parseInt(e.target.value))}
          style={{ marginLeft: '0.5rem' }}
        >
          {[...Array(7)].map((_, i) => (
            <option key={i + 1} value={i + 1}>Division {i + 1}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search team..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginLeft: '1rem', padding: '0.25rem' }}
        />

        <button
          onClick={() => setSearchTerm('')}
          style={{ marginLeft: '0.5rem', padding: '0.25rem 0.5rem' }}
        >
          ❌ Clear Search
        </button>
      </div>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Team</th>
            <th>Record</th>
            <th>Tier 1 AVG</th>
            <th>Tier 2 AVG</th>
            <th>Total Points</th>
            <th>Seed</th>
            <th>Playoff</th>
            <th>Completed Games</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeams.map((team, i) => (
            <tr key={i} className={team.Playoff === '✅ Qualified' ? 'qualified' : 'not-qualified'}>
              <td>{team.Team}</td>
              <td>{team.Record}</td>
              <td>{team["Tier 1 AVG"].toFixed(2)}</td>
              <td>{team["Tier 2 AVG"].toFixed(2)}</td>
              <td>{team["Total Points"].toFixed(2)}</td>
              <td className={`seed-${team.Seed}`}>{team.Seed}</td>
              <td>{team.Playoff}</td>
              <td>{team["Completed Games"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDivisionsDashboard;
