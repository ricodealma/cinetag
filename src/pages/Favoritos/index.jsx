import styles from './Favoritos.module.scss'
import React from 'react'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import { useFavoritoContext } from 'contextos/Favoritos'
import Card from 'components/Card'

export default function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
          {favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />
          })}
      </section>
    </>
  )
}
