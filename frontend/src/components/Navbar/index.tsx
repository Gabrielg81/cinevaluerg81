import type { NextPage } from 'next'
import * as C from './styles'

import  GithubIcon from '../../assets/img/github.svg'

const Navbar:NextPage = () => {
    return (
    <C.Navbar>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
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
