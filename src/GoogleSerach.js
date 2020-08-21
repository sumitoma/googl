import { useState, useEffect } from 'react';
import { SEARCH_API_KEY, CONTEXT_KEY } from './config';


const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async()=>{
            fetch(`https://www.googleapis.com/customsearch/v1?key=
            ${SEARCH_API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => {
                    setData(result);
                })
                .catch(error=>{
                    console.log(error);
                });
        };
        if(term)
            fetchData();
        // return () => {
        //     cleanup
        // }
    }, [term]);

    return { data };
};

export default useGoogleSearch;
