import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './RandomCategoryJoke.module.css';

export default function RandomCategoryJoke({ match }) {
  const [randomJoke, setRandomJoke] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  const fetchRandomJoke = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    }
    setLoading(true);
    const response = await axios(`https://api.chucknorris.io/jokes/random?category=${match.params.category}`, config);
    setRandomJoke(response.data.value);
    console.log(response.data);
    setLoading(false);
  }

  return (
    <center>
      <div className="App" style={{ alignItems: 'center', margin: '40px 60px' }}>
        {loading ? <p>Loading...</p> : <><h2>🤠{randomJoke}</h2><button className={styles.buttonAnother} onClick={fetchRandomJoke}>Another</button></>}
      </div >
    </center>
  )
}