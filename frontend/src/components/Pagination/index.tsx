import type { NextComponentType } from 'next'
import NextLink from 'next/link'
import * as C from './styles'

import  Arrow from '../../assets/img/arrow.svg'

const Pagination:NextComponentType = () => {
    return (
    <C.Pagination>
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    </C.Pagination>
    )}

export default  Pagination
