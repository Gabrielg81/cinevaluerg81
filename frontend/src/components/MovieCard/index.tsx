import type { NextComponentType } from 'next'
import NextLink from 'next/link'
import MovieScore from '../MovieScore'
import * as C from './styles'

const MovieCard:NextComponentType = () => {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
    <C.MovieCard>
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <NextLink href={{
                        pathname: `/form/`,
                        query: {slug: movie.id}
                    }}
                >
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </NextLink>
            </div>
        </div>
    </C.MovieCard>
    )}

export default MovieCard
