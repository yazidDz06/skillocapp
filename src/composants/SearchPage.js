import React, { useState } from 'react';
import './SearchPage.css';

const mockResults = [
  { id: 1, name: 'John Doe', region: 'Paris', startTime: '09:00', contact: 'john@example.com' },
  { id: 2, name: 'Jane Smith', region: 'Lyon', startTime: '10:00', contact: 'jane@example.com' },
  { id: 3, name: 'Alice Brown', region: 'Marseille', startTime: '08:30', contact: 'alice@example.com' },
];

function SearchPage() {
  const [region, setRegion] = useState('');
  const [startTime, setStartTime] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = mockResults.filter(r => {
      const regionMatch = region ? r.region.toLowerCase().includes(region.toLowerCase()) : true;
      const timeMatch = startTime ? r.startTime >= startTime : true;
      return regionMatch && timeMatch;
    });
    setResults(filtered);
    setSearched(true);
  };

  return (
    <div className="search-page-container">
      <h1 className="welcome-header">Welcome to SkillApp</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Work region (e.g. Paris)"
          value={region}
          onChange={e => setRegion(e.target.value)}
        />
        <input
          type="time"
          value={startTime}
          onChange={e => setStartTime(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searched && (
        <div className="results-list">
          {results.length === 0 ? (
            <p>No results found.</p>
          ) : (
            results.map(r => (
              <div key={r.id} className="result-item">
                <span>{r.name} - {r.region} - Starts at {r.startTime}</span>
                <a href={`mailto:${r.contact}`} className="contact-btn">Contact</a>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
