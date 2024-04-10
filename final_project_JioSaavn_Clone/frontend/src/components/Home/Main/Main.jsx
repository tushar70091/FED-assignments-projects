import React, { useState, useEffect } from 'react'
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone';
import AlbumIcon from '@mui/icons-material/Album';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { GiMicrophone } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6"
import {Outlet} from 'react-router-dom'
import axios from 'axios'

const Main = () => {
  return (
    <>
      <div className='w-full h-[100vh] flex relative'>
        <div className="left w-[15%] h-[100vh] px-10 py-24 border-2 fixed border-gray-300 hidden md:px-4 lg:block">
          <div className='flex flex-col gap-3'>
            <div className='font-bold text-gray-400'>Browse</div>
            <div className='flex flex-col pl-9 gap-2'>
              <li className='list-none font-semibold text-gray-700'>New Releases</li>
              <li className='list-none font-semibold text-gray-700'>Top Charts</li>
              <li className='list-none font-semibold text-gray-700'>Top Playlists</li>
              <li className='list-none font-semibold text-gray-700'>Podcasts</li>
              <li className='list-none font-semibold text-gray-700'>Top Artists</li>
              <li className='list-none font-semibold text-gray-700'>Radio</li>
            </div>
          </div>
          <div className='flex flex-col gap-3 mt-3'>
            <div className='font-bold text-gray-400'>Library</div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-4 items-center'>
                <HistoryRoundedIcon fontSize='small'/>
                <div className='text-left font-semibold text-gray-700'>History</div>
              </div>
              <div className='flex gap-4 items-center'>
                <MusicNoteTwoToneIcon fontSize='small'/>
                <div className='text-left font-semibold text-gray-700'>Liked Songs</div>
              </div>
              <div className='flex gap-4 items-center'>
                <AlbumIcon fontSize='small'/>
                <div className='text-left font-semibold text-gray-700'>Albums</div>
              </div>
              <div className='flex gap-4 items-center'>
                <PodcastsIcon fontSize='small'/>
                <div className='text-left font-semibold text-gray-700'>Podcasts</div>
              </div>
              <div className='flex gap-4 items-center'>
                <GiMicrophone/>
                <div className='text-left pl-1 font-semibold text-gray-700'>Artists</div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex gap-2 items-center justify-center mt-3 border border-[rgb(43,197,180)] rounded-full p-2'>
              <FaPlus className='text-[rgb(43,197,180)]' />
              <div className='text-left pl-1 font-semibold text-[rgb(43,197,180)]'>New Playlist</div>
            </div>
          </div>
        </div>
        <div className="right w-[80%] h-[100vh] px-10 py-24 lg:absolute lg:left-60">
            <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Main