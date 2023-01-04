import randomizer from "./randomizer";

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '&api_key=d0c4988b1da4c2069b74d84b85cfd8cb';

const getData = async (endpoint) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}${API_KEY}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
}

const searchMovie = async (movieName) => {
    const movies = await getData(`/search/multi?language=en-US&query=${movieName}&page=1&include_adult=false`);
    return movies;
}

const getBanner = async () => {
    const hero = await getData('/trending/all/week?language=pt-BR');
    const indexRandom = randomizer(hero.length);
    return hero[indexRandom];
}

const getRuntime = async (id, type) => {
    if (type === 'tv') {
        const response = await fetch(`${API_URL}/tv/${id}?api_key=d0c4988b1da4c2069b74d84b85cfd8cb`);
        const data = await response.json();
        return data.last_episode_to_air.season_number > 1 ? `${data.last_episode_to_air.season_number} Temporadas` : `${data.last_episode_to_air.season_number} Temporada`;
    } else {
        const response = await fetch(`${API_URL}/movie/${id}?api_key=d0c4988b1da4c2069b74d84b85cfd8cb`);
        const data = await response.json();
        return `${data.runtime} Minutos`;
    }
}

const getTraillerId = async (movie_id) => {
    const trailerId = await getData(`/movie/${movie_id}/videos?language=en-US`);
    if (trailerId && trailerId.length > 0) return trailerId[trailerId.length -1].key;;
    return false;
}

const getMovieList = async () => {
    return [
        {
            title: 'Original Netfrix',
            items: await getData('/discover/tv?with_network-213&language=pt-BR')
        },
        {
            title: 'Em Alta',
            items: await getData('/movie/top_rated?language=pt-BR')
        },
        {
            title: 'Tendência',
            items: await getData('/trending/all/week?language=pt-BR')
        },
        {
            title: 'Ação',
            items: await getData('/discover/movie?with_genres=28&language=pt-BR')
        },
        {
            title: 'Terror',
            items: await getData('/discover/movie?with_genres=27&language=pt-BR')
        },
        {
            title: 'Aventura',
            items: await getData('/discover/movie?with_genres=12&language=pt-BR')
        },
        {
            title: 'Animação',
            items: await getData('/discover/movie?with_genres=16&language=pt-BR')
        },
        {
            title: 'Comédia',
            items: await getData('/discover/movie?with_genres=35&language=pt-BR')
        },
        {
            title: 'Ficção Científica',
            items: await getData('/discover/movie?with_genres=878&language=pt-BR')
        },
        {
            title: 'Romance',
            items: await getData('/discover/movie?with_genres=10749&language=pt-BR')
        },
        {
            title: 'Documentário',
            items: await getData('/discover/movie?with_genres=99&language=pt-BR')
        }
    ]
}

export {
    getMovieList,
    getBanner,
    getTraillerId,
    searchMovie,
    getRuntime
};