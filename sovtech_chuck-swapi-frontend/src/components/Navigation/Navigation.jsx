import React
, { useRef }
  from 'react';

import { Link, useHistory } from 'react-router-dom';

import styles from './Navigation.module.css';

export default function Navigation(props) {

  const searchInput = useRef(null);

  let history = useHistory();

  const handleSearch = () => {
    props.setSearchInput(searchInput.current.value);
    console.log(searchInput.current.value);
    history.push(`/search`);
  }

  const searchBtn = useRef(null);

  const keyHandler = (e) => {
    if (e.keyCode === 13) {
      searchBtn.current.click();
    }
  }

  return (
    <>
      <nav className={styles.navContainer}>
        <Link className={styles.navElements} to='/jokes'>🤠Chuck Norris Jokes</Link>
        <Link className={styles.navElements} to='/characters'>🌘Star Wars Characters</Link>
        <input className={styles.searchInput} type="text" placeholder="Jokes and Characters" ref={searchInput} onKeyUp={keyHandler} required />
        <input className={styles.searchButton} type="button" placeholder="Search API's" ref={searchBtn} onClick={handleSearch} value="Search" />
      </nav >
    </>
  )
}