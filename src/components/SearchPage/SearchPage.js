import React from 'react';
import './SearchPage.css';
import SearchInput from '../SearchInput/SearchInput';
import { useStateValue } from '../../StateProvider';
import useGoogleSearch from '../../GoogleSerach';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import DescIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{term}, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);

    return (
        <div className="search-page">
            <div className="search-page__header">
                <Link to="/">
                    <img className="search-page__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Googl" />
                </Link>
                <div className="search-page__header-body">
                    <SearchInput hideButtons value={term} />
                    <div className="search-page__options">
                        <div className="search-page__options-left">
                            <div className="search-page__option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="search-page__option">
                                <DescIcon />
                                <Link to="/news">news</Link>
                            </div>
                            <div className="search-page__option">
                                <ImageIcon />
                                <Link to="/images">images</Link>
                            </div>
                            <div className="search-page__option">
                                <LocalOfferIcon />
                                <Link to="/shopping">shopping</Link>
                            </div>
                            <div className="search-page__option">
                                <RoomIcon />
                                <Link to="/maps">maps</Link>
                            </div>
                            <div className="search-page__option">
                                <MoreVertIcon />
                                <Link to="/more">more</Link>
                            </div>
                        </div>  
                        <div className="search-page__options-right">
                            <div className="search-page__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="search-page__option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { term && (
                <div className="search-page__body">
                    <p className="search-page__result-count">
                        About {data?.searchInformation.formattedTotalResults} results 
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map((item, index) => (
                        <div key={index} className="search-page__result">
                            <a className="search-page__result-link" href={item.link}>
                                {item.pagemap?.cse_image?.length > 0
                                    && item.pagemap?.cse_image[0]?.src 
                                    && (
                                        <img className="search-page__result-img" src={ item.pagemap?.cse_image?.length > 0
                                            && item.pagemap?.cse_image[0]?.src}
                                        alt=""/>
                                    )}
                                {item.displayLink}
                            </a>
                            <a href={item.link} className="search-page__result-title">
                                <h3>{item.title}</h3>
                            </a>
                            <p className="search-page__result-snippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div> 
            )}
        </div>
    )
}

export default SearchPage;
