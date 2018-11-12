import axios from 'axios';
import { BASE_URL, URI, getRequestParams } from '../api/params';

const URL = `${BASE_URL}${URI}`;
const params = getRequestParams();

export const fetchHeroes = async () => {
    console.log("Fetching fetchHeroes !");
    const result = await axios.get(URL, {params});
    const heroes = [...result.data.data.results];
    
    return heroes;
}

export const fetchHeroId = async (id) => {
    console.log("Fetching hero id : ",id);
    const url = `${URL}/${id}`;
    const result = await axios.get(url, {params});
    const heroId = result.data.data.results[0];
    return heroId;
}

