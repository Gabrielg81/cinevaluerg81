import type { NextComponentType } from 'next'
import NextLink from 'next/link'
import MovieStars from '../MovieStars';

import * as C from './styles'

const MovieScore:NextComponentType = () => {
    const score:number = 5;
    const count:number = 21;
    return (
    <C.MovieScore>
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    </C.MovieScore>
    )}

export default MovieScore
