
import PaginaBase from 'components/PaginaBase'
import Favoritos from 'pages/Favoritos'
import Inicio from 'pages/Inicio'
import NaoEncontrada from 'pages/NaoEncontrada'
import Player from 'pages/Player'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path=":id" element={<Player />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )
}