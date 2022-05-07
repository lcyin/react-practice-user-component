import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModel from '../UI/ErrorModel ';

import classes from './AddUsers.module.css';
/**
 * Handle User Input
 */
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
    props.onAddUser(inputUsername, inputAge);
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
    <div>
      <ErrorModel title="Error occured!" message="something wrong" />
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
    </div>
  );
};

export default AddUser;
