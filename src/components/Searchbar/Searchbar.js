import { useState } from 'react';
import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [tagName, setTagName] = useState('');

  const handelTagNameChange = e => {
    setTagName(e.currentTarget.value.toLowerCase());
    
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (tagName.trim() === '') {
      alert('Enter a value');
      return;
    }
    onSubmit(tagName);
    setTagName('');
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handelSubmit}>
        <SearchFormButton type="submit">
          <CiSearch />
        </SearchFormButton>

        <SearchFormInput
          onChange={handelTagNameChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="tagName"
          value={tagName}
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default Searchbar;


