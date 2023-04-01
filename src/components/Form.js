import { useState } from 'react'
import axios from 'axios'
import DisplayOptions from './DisplayOptions'

const Form = () => {
    // initialize useState variables as string/array
    const [searchQuery, setSearchQuery] = useState('')
    const [gifArray, setGifArray] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        //   Start
            // const params = new URLSearchParams();
            // params.append("limit", 10);
            // params.append("offset", 0);
            // params.append("rating", "pg");
            // params.append("lang", "en");
        
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${searchQuery}&limit=10&offset=0&rating=pg&lang=en`)
            .then(response => {
                setGifArray(response.data.data)
            })
        // End
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor=""></label>
                <input onChange={(e) => setSearchQuery(e.target.value)} type="text" />

                <button>Api call</button>
            </form>
            <DisplayOptions gifArray={gifArray}/>
            
        </>
    )
}

export default Form