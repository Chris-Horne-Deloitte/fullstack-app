import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get('/api/entries')
      .then(response => setEntries(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Entries</h1>
      <Link to="/create">Create New Entry</Link>
      <ul>
        {entries.map(entry => (
          <li key={entry._id}>
            <Link to={`/edit/${entry._id}`}>{entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;