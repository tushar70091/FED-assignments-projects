import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const PlaylistsContainer = () => {

    const [playlist_array, setPlaylist_array] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/getallplaylists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setPlaylist_array(data)
            })
    }, [])
    return (
        <>
            <div>
                <div className='flex flex-col gap-2'>
                    <div className='text-2xl font-bold text-gray-700 mb-2'>Playlists</div>
                    <div className='album-container flex justify-center items-center flex-wrap gap-3 mb-56 lg:mb-3'>
                        {
                            playlist_array.map((playlist, index) => {
                                return (
                                    // <div key={index} className='w-[200px] h-[200px]'>
                                    <div key={index} className='flex flex-col'>
                                        <NavLink to={`/${playlist._id}`}>
                                            <img src={playlist.cover_image} alt="Album Cover" className='w-[200px] h-[200px] rounded-md' draggable="false" />
                                            <div className='text-center font-semibold'>{playlist.name}</div>
                                            <div className='text-center'>{playlist.artist}</div>
                                        </NavLink>
                                    </div>
                                )
                            })
                        }



                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaylistsContainer