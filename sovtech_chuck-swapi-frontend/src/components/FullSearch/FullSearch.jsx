import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function FullSearch(props) {
  const [chuckResults, setChuckResults] = useState([]);
  const [swResults, setSwResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (props.searchInput) {
      fetchData(props.searchInput);
    } else {
    }
  }, [props.searchInput]);

  function fetchData(searchVal) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
    }
    axios.get(`https://localhost:5001/search?query=${searchVal}`, config)
      .then(res => {
        setChuckResults(res.data[0].chuck);
        setSwResults(res.data[0].swapi);
        setLoading(false);

        console.log(res.data[0].swapi);
        console.log(res.data[0].chuck);
      }).catch(err => {
        setChuckResults();
        setSwResults();
        setLoading('error');

        console.error(err);
      })
  }

  return (
    <div style={{
      margin: '40px 60px', overflow: 'hidden'
    }}>
      {loading === false &&
        (
          swResults['results'] ? (
            swResults['results'].map((characters, index) => {
              return (
                <div>
                  <p key={index}>🌘{characters.name}</p>
                </ div>
              )
            })
          )
            : <h1>Star Wars: No results</h1>
        )
      }
      {
        loading === true ?
          <center>
            <p>Loading...</p>
          </center>
          :
          (
            chuckResults['result'] ? (
              chuckResults['result'].map((norisses, index) => {
                return (
                  <div>
                    <p key={index}>🤠{norisses.value}</p>
                  </ div>
                )
              })
            )
              : <h1>Chuck Norris: Norrisults</h1>
          )
      }
    </div >
  )
}
