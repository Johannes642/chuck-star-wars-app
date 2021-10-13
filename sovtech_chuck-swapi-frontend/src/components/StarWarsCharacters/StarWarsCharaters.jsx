import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StarWarsCharaters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Access-Control-Allow-Origin': '*'
      }
    }
    setLoading(true);
    const response = await axios.get('http://localhost:5000/swapi/people', config);
    setCharacters(response.data.results);
    setLoading(false);
  }

  return (
    <center>
      <div style={{ margin: '40px 60px', textTransform: 'capitalize' }}>
        {loading && <p>Loading...</p>}
        {
          characters && characters.map(character => {
            return (
              <h4 key={character.name}>🌘{character.name}</h4>
            );
          })
        }
      </div>
    </center>
  )
}