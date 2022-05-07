import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUsers.module.css';

const AddUser = (props) => {
  const [inputUsername, setInputUsername] = useState('');
  const [inputAge, setInputAge] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (inputUsername.trim().length === 0 || inputAge.trim().length === 0) {
      return;
    }
    // add + to ensure number
    if (+inputAge < 1) {
      return;
    }
    setInputUsername('');
    setInputAge('');
  };

  const usernameChangeHandler = (event) => {
    setInputUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={inputUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={inputAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
