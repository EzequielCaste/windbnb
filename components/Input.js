import React, {useState} from 'react';
import styles from './Input.module.scss';
import {Search} from './search';

export const Input = () => {
  const initialForm = {
    location: 'Helsinki, Finland',
    guests: 0,
  };
  const [values, setValues] = useState(initialForm);
  3;

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  let {location, guests} = values;

  const [search, setSearch] = useState(false);

  const toggleCustomSearch = () => {
    setSearch(() => !search);
  };
  const changeLocation = (e) => {
    setValues((prev) => ({
      ...prev,
      location: e.target.innerText,
    }));
  };

  return (
    <>
      <div className={styles['input-container']}>
        <input
          onFocus={toggleCustomSearch}
          placeholder="Helsinki, Finland"
          name="location-input"
          className={styles['input-location']}
          defaultValue={location && location}
        />
        <input
          onFocus={toggleCustomSearch}
          name="guests-input"
          className={styles['input-guests']}
          placeholder="Add guests"
          defaultValue={guests == 0 ? 'Add guests' : guests}
        />
        <div className={styles['search-btn']}>
          <Search />
        </div>
      </div>
      {/* Custom Search */}
      <div
        className={styles['custom-search']}
        style={{display: search ? 'block' : 'none'}}
      >
        <div className={styles['custom-search_title']}>
          <h4>Edit your search</h4>
          <img
            onClick={toggleCustomSearch}
            src="/images/times-solid.svg"
            alt="times-solid.svg"
            width={14}
            className={styles['custom-search_toggle']}
          />
        </div>
        <div className={styles['custom-search_container']}>
          <label htmlFor="location">location</label>
          <input
            placeholder="Placeholder"
            onChange={handleChange}
            name="location"
            className={styles['input-location']}
            value={location && location}
          />
          <label htmlFor="custom-guests-input">guests</label>
          <input
            placeholder="Placeholder"
            onChange={handleChange}
            name="guests"
            type="number"
            min="1"
            className={styles['input-guests']}
            value={guests && guests}
          />
        </div>
        <div>
          <ul>
            <li onClick={changeLocation}>Helsinki, Finland</li>
            <li onClick={changeLocation}>Turku, Finland</li>
            <li onClick={changeLocation}>Oulu, Finland</li>
            <li onClick={changeLocation}>Vaasa, Finland</li>
          </ul>
        </div>
        <div
          onClick={toggleCustomSearch}
          className={styles['custom-search_button']}
        >
          <Search /> Search
        </div>
      </div>
    </>
  );
};
