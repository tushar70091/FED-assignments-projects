import React from 'react'
import logo from '../../../assets/logo.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='bg-[rgb(246,246,246)] flex items-center justify-between px-5 py-3 border-none lg:border fixed top-0 left-0 w-full z-20'>
                <div className='flex flex-col lg:flex-row justify-between items-center mx-auto lg:mx-0 gap-4'>
                    <NavLink to={"/"} draggable="false">
                        <div className='flex items-center'>
                            <img src={logo} alt="" className='w-10' draggable="false" />
                            <div className='text-xl font-bold text-black'>JioSaavn</div>
                        </div>
                    </NavLink>
                    <div className='hidden lg:flex text-[24px] lg:text-[15px] gap-5 text-gray-600 font-semibold h-full'>
                        <li className='list-none '>Music</li>
                        <li className='list-none '>Podcasts</li>
                        <li className='list-none '>Go Pro</li>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <input type="text" name="search" id="search" className='py-2 rounded-full w-[40vw] outline-none text-center border text-black' placeholder='Search for songs' />
                </div>

                <div className='flex justify-between items-center gap-4'>
                    <div className='hidden lg:flex justify-center gap-2'>
                        <div className='flex flex-col text-sm'>
                            <span className='text-[14px] text-gray-600 font-semibold'>Music Languages</span>
                            <span className='text-[12px] text-gray-500'>Hindi</span>
                        </div>
                        <MdKeyboardArrowDown className='text-xl text-gray-500 mt-2' />
                    </div>
                    <div className='flex text-[15px] text-gray-600 font-semibold gap-5'>
                        {(localStorage.getItem('jwt')) ?
                            <>
                                <NavLink to={'/profile'} draggable="false">
                                    <li className='list-none'>{JSON.parse(localStorage.getItem('user')).name}</li>
                                </NavLink>
                                <NavLink to={'/signin'} onClick={() => {
                                    localStorage.removeItem('jwt')
                                    localStorage.removeItem('user')
                                }} draggable="false">
                                    <li className='list-none text-red-500'>Log Out</li>
                                </NavLink>
                            </>
                            :
                            <>
                                <NavLink to={'/signin'} draggable="false">
                                    <li className='list-none'>Log In</li>
                                </NavLink>
                                <NavLink to={'/signup'} draggable="false">
                                    <li className='list-none'>Sign Up</li>
                                </NavLink>
                            </>
                        }
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar