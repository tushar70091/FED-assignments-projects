import React from 'react'
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'
import Player from './Player/Player'
import './Home.css'

const Home = () => {
    return (
        <div className='theme'>
            <Navbar />
            <Main />
            <Player />
        </div>
    )
}

export default Home