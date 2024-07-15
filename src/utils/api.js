import axios from  'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTRjZjE5MjgwY2YxOTA5ZmFkMmE4ZGI5MTVlYzExOCIsInN1YiI6IjY1ZDk4ZjkxZmNiOGNjMDE2MmNhZTI0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cDLOFY8Q2LpVIm_nDhepfYYfk4UntCauZbTYMxvwisI';

const headers = {
    Authorization: 'bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}