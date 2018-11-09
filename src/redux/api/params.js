import md5 from 'md5';

export const BASE_URL = "http://gateway.marvel.com";
export const URI = "/v1/public/characters";
const API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5";
const API_RIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";

export function getRequestParams() {
    const ts = Date.now();
    const apikey =  API_PUBLIC;
    const concatenatedString = `${ts}${API_RIVATE}${API_PUBLIC}`;
    const hash = md5(concatenatedString);

    return {ts, apikey, hash};
} 

