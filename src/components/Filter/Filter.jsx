import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import { FilterComponent, FilterLabel, FilterInput } from './Filter.styled';

const filterInputId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FilterComponent>
      <FilterLabel>Filter</FilterLabel>
      <FilterInput
        id={filterInputId}
        type="text"
        name="filter"
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </FilterComponent>
  );
};

// ========================== варіант css-модулі ==================

// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
// import css from './Filter.module.css';

// const filterInputId = nanoid();

// export const Filter = ({ onChange, filter }) => {
//   return (
//     <div className={css.wrap}>
//       <label htmlFor={filterInputId}>Filter</label>
//       <input
//         id={filterInputId}
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={onChange}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </div>
//   );
// };

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired,
// };
