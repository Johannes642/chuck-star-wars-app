import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios';

export default function JokeCategories() {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    }
    const response = await axios.get('https://localhost:5001/chuck/categories', config);
    setCategories(response.data);
    setLoading(false);
  }

  return (
    <center>
      <div className="App" style={{ margin: '40px 60px 40px 60px', textTransform: 'capitalize' }}>
        {loading && <p>Loading...</p>}
        {
          categories && categories.map((category, index) => {
            return (
              <Link to={`jokes/${category}`} key={index}>
                <h4 key={index}>🤠{category}</h4>
              </Link>
            );
          })
        }
      </div >
    </center>
  );
}
