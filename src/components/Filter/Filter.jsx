import React from "react";
import { useDispatch} from "react-redux";
import {filteredContacts} from "redux/filterSlice"
import css from "./Filter.module.css"

const Filter = () =>{
    const dispatch = useDispatch();

    // const onFilterChange = ({target: {value}}) => {
    //     const filterValue = value;
    //     dispatch(filteredContacts(filterValue));
    // }
    const onFilterChange = e => {
        dispatch(filteredContacts(e.target.value));
    };
    
    return (
    <label className={css.label}>Find contacts by name
        <input className={css.input}
            id="contacts-filter"
            type="text"
            name="filter"
            onChange={onFilterChange}
        />
    </label>
    
    )
}

export default Filter;
