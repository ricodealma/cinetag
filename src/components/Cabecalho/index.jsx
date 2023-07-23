import { Link } from "react-router-dom"
import logo from './logo.png'
import styles from './Cabecalho.module.scss'
import React from 'react'
import CabecalhoLink from "components/CabecalhoLink"

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag" />
            </Link>

            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>

    )
}
