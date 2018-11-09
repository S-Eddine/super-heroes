import axios from 'axios';
import { BASE_URL, URI, getRequestParams } from '../api/params';


export const fetchHeroes = async () => {
    console.log("fetching...");
    const URL = `${BASE_URL}${URI}`;
    const params = getRequestParams();

    const result = await axios.get(URL, {params});
    const heroes = [...result.data.data.results];
    
    return heroes;
}

