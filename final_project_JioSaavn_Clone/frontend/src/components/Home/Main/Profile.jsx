import React from 'react'
import usericon from '../../../assets/usericon.jpg'
import { NavLink } from 'react-router-dom'

const Profile = () => {
    return (
        <>
            <div className='flex flex-col gap-4'>
                <div className='text-3xl font-bold text-[var(--text)]'>
                    My Profile
                </div>
                <div className='flex items-center justify-center lg:justify-start gap-10'>
                    <div>
                        <img src={usericon} alt="" className='ml-7 rounded-full shadow-2xl w-[250px] max-w-20 lg:max-w-none' draggable="false" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-3xl lg:text-[50px] font-bold text-[var(--text)]'>
                            {JSON.parse(localStorage.getItem('user')).name}
                        </div>
                        <div className='text-lg text-[var(--textSoft)]'>
                            User . 0 Liked Songs
                        </div>
                        <div className='mt-5'>
                            <NavLink className={`px-4 bg-[rgb(57,190,170)] hover:bg-[#62a099] py-4 rounded-full text-white`} draggable="false">
                                <button className='text-lg'>Edit Profile</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='mt-8 flex flex-col'>
                    <div className='text-2xl font-semibold text-[var(--text)]'>
                        Liked Songs
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile