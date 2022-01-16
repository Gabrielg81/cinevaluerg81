import type { NextComponentType } from 'next'
import NextLink from 'next/link'
import * as C from './styles'

import  GithubIcon from '../../assets/img/github.svg'

const Navbar:NextComponentType = () => {
    return (
    <C.Navbar>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <NextLink href={'/'} ><h1>Filmes e Séries G81</h1></NextLink>
                <a
                    href="https://github.com/g81tech"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="dsmovie-contact-container">
                        <GithubIcon />
                        <p className="dsmovie-contact-link">
                            /G81
                        </p>
                    </div>
                </a>
            </div>
        </nav>
    </C.Navbar>
    )}

export default  Navbar
