const API_KEY = '38c007f28d5b66f36b9c3cf8d8452a4b';
const API_BASE= 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json =await req.json();
    return json
}
export default {
    getHomeList: async()=>{
        return[
            {

                slug:'Originais',
                title:'Originais do Netflix',
                items:await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_KEY=${API_KEY}`)
            },
            {
                
                slug:'Trending',
                title:'Recomendados para você',
                items:await basicFetch(`/trending/all/week?language=pt-BR&api_KEY=${API_KEY}`)
            },
            {
                
                slug:'Toprated',
                title:'Em alta',
                items:await basicFetch(`/movie/top_rated?language=pt-BR&api_KEY=${API_KEY}`)
            },
            {
                
                slug:'Action',
                title:'Ação',
                items:await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_KEY=${API_KEY}`)
            },
            {

                slug:'Comedy',
                title:'Comédia',
                items:await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_KEY=${API_KEY}`)
            },
            {

                slug:'Horror',
                title:'terror',
                items:await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_KEY=${API_KEY}`)
            },
            {

                slug:'Romance',
                title:'Romance',
                items:await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_KEY=${API_KEY}`)
            },
            {

                slug:'Documentary',
                title:'Documentário',
                items:await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_KEY=${API_KEY}`)
            },
        ];
    }
}