import { useDispatch , useSelector} from "react-redux";
import {filteredContacts} from "redux/filterSlice"
import css from "./Filter.module.css"
import {selectFilter, selectFilteredContacts} from "redux/selectors";



const Filter = () =>{
    const dispatch = useDispatch();
    const filter = useSelector(selectFilteredContacts)

    // const onFilter = e => {
    //     dispatch(filteredContacts(e.target.value.toLowerCase()))
    // };
    


    return (
    <>
    <label className={css.label}>Find contacts by name
        <input className={css.input}
            type="text"
            //name="name"
            value= {filter}
            onChange={selectFilteredContacts}
        />
    </label>
    </>
    )
}

export default Filter;
