import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './ComicPage.module.css';

const ComicPage = (props) => {
  const [ singleComic, setSingleComic ] = useState([]);

  useLayoutEffect(() => {
    // console.log('useEffect')
    fetchComic();
  }, [])
  
  const fetchComic = () => {
    let uuid = (window.location.pathname).slice(11)
    console.log(uuid);
    let url = "https://gateway.marvel.com:443/v1/public/comics/" + uuid + "?apikey=6ac68c640e567a0be876ac9a65ba411f"

    fetch(url)
      .then(res => res.json())
      .then(res => {setSingleComic(res); console.log(res)})
      .catch(err => console.error({ message: err })) 
}

  return(
    <div className={styles.ComicPage}>
      Hello this is the Comic Page!
    </div>
  );

};

ComicPage.propTypes = {};

ComicPage.defaultProps = {};

export default ComicPage;
