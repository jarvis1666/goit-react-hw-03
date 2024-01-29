import css from '../SearchBox/SearchBox.module.css'

export const SearchBox = ({ valueIn, onChange }) => {
    return (
        <div className={ css.containerSearchBox}>
            <label htmlFor="SearchBar">
                Find contacts by name
                 </label>
            <input type="text" name="SearchBar" placeholder="Enter name..." className={ css.inputForm} value={valueIn} onChange={onChange} />
        </div>
    )
 }