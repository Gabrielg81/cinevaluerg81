import type { NextComponentType } from 'next'
import NextLink from 'next/link'
import * as C from './styles'

import  StarFull from '../../assets/img/star-full.svg'
import  StarHalf from '../../assets/img/star-half.svg'
import  StarEmpty from '../../assets/img/star-empty.svg'

const MovieStars:NextComponentType = () => {
    return (
    <C.MovieStars>
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    </C.MovieStars>
    )}

export default MovieStars
