import React, { useState } from 'react';
import './SearchInput.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../Reducer';

function SearchInput({hideButtons = false, value}) {

    const [searchText, setSearchText] = useState(value || '');
    const history = useHistory();
    const [{}, dispatch] = useStateValue();

    const onSearchClick = e => {
        e.preventDefault();
        if(searchText){
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: searchText
            });
            history.push('/search');
        }
    };

    const onSearchTextChange = e => {
        setSearchText(e.target.value);
    }

    return (
        <form className="search-input">
            <div className="search-input__box">
                <SearchIcon className="search-input__icon" />
                <input value={searchText} onChange={onSearchTextChange} />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className="search-input__buttons">
                    <Button type="submit" onClick={onSearchClick} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className="search-input__buttons">
                    <Button className="search-input__button--hidden" type="submit" onClick={onSearchClick} variant="outlined">Google Search</Button>
                    <Button className="search-input__button--hidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
                ) }
            
        </form>
    )
}

export default SearchInput;
