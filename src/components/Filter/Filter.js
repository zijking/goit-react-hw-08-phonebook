import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/contacts/contacts-actions';
import TextField from '@material-ui/core/TextField';
// import s from './Filter.module.css';

function Filter({ onChange, value }) {
  return (
    <>
      {/* <label className={s.filter}>
        <span>Filter:</span>
        <input
          className={s.input}
          type="text"
          name="filter"
          onChange={onChange}
          value={value}
        />
      </label> */}
      <TextField
        name="filter"
        onChange={onChange}
        id="filter"
        label="Find contacts"
        value={value}
        variant="outlined"
        placeholder="Enter contact filter"
        size="small"
      />
    </>
  );
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(actions.changeFilter(value.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
