import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup/Signup'
import MusicContext from './context/MusicContext'
import Signin from './components/Signin/Signin'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home'
import PlaylistsContainer from './components/Home/Main/PlaylistsContainer'
import Playlist from './components/Home/Main/Playlist'
import Profile from './components/Home/Main/Profile'


function App() {
  const [currentAudio, setCurrentAudio] = useState([])
  const [currentsong, setCurrentsong] = useState("")
  const [currentPlaylist, setCurrentPlaylist] = useState("")
  const [isplaying, setIsplaying] = useState(false)
  const [songnumber, setSongnumber] = useState(0)
  const [searchquery, setSearchquery] = useState("")

  return (
    <>
      <MusicContext.Provider value={{ currentAudio, setCurrentAudio, currentPlaylist, setCurrentPlaylist, isplaying, setIsplaying, currentsong, setCurrentsong, songnumber, setSongnumber, searchquery, setSearchquery }}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />}>
              <Route path='' element={<PlaylistsContainer />} />
              <Route path='profile' element={<Profile />} />
              <Route path=':playlistid' element={<Playlist />} />
            </Route>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
          </Routes>
          <ToastContainer />
        </BrowserRouter>
      </MusicContext.Provider>
    </>
  )
}

export default App
