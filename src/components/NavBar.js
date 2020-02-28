import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <p>Navigation</p>
      <p><NavLink to="/about">AboutPage</NavLink></p>
      <p><NavLink to="/discover">DiscoverMoviePage</NavLink></p>
      <p><NavLink to="/">HomePage</NavLink></p>
    </nav>
  )
}
