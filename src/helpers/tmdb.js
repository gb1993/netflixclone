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

const getBanner = async () => {
    const hero = await getData('/trending/all/week?language=pt-BR');
    const indexRandom = randomizer(hero.length);
    return hero[indexRandom];
}

const getTraillerId = async (movie_id) => {
    try {
        const response = await fetch(`${API_URL}/movie/${movie_id}/videos?api_key=d0c4988b1da4c2069b74d84b85cfd8cb&language=en-US`);
        const trailerId = await response.json();
        if (!trailerId.results) return false;
        return trailerId.results[trailerId.results.length -1].key;
    } catch (error) {
        console.log(error);
    }
}

const getMovieList = async () => {
    return [
        {
            title: 'Original NetFlix',
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
    getTraillerId
};