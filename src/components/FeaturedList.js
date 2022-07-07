import React from "react";
import './FeaturedList.css'
import * as moment from 'moment'

export default ({ item }) => {
    //pega a data e converte
    let firstDate = new Date(item.first_air_date);
    let ConvertedDate = moment(firstDate).format('MMM YYYY').replace('Feb', 'Fev').replace('Apr', 'Abr').replace('May', 'Mai').replace('Aug', 'Ago').replace('Sep', 'Set').replace('Oct', 'Out').replace('Dec', 'Dez')
    

    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`

        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">{item.overview}</div>

                    <div className="featured--data">
                        <div className="featured--points">{item.vote_average} pontos </div>
                        <div className="featured--years">{ConvertedDate}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons != 1 && 's'}</div>

                    </div>

                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`} className="featured--play"> ▶ Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featured--plus"> + Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong> Gêneros: </strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );
}