import React, { useEffect, useState } from 'react'
import left_image1 from '../../assets/leftimage1.png'
import left_image2 from '../../assets/leftimage2.png'
import left_image3 from '../../assets/leftimage3.png'
import left_image4 from '../../assets/leftimage4.png'
import left_image5 from '../../assets/leftimage5.png'
import left_image6 from '../../assets/leftimage6.png'
import left_image7 from '../../assets/leftimage7.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { toast } from "react-toastify";


const Signup = () => {
    const [signupMethod, setSignupMethod] = useState("phone")

    const navigate = useNavigate()

    const [showpassmobile, setShowpassmobile] = useState(true)
    const [showcpassmobile, setShowcpassmobile] = useState(true)
    const [showpassemail, setShowpassemail] = useState(true)
    const [showcpassemail, setShowcpassemail] = useState(true)

    const [passwordmobile, setpasswordmobile] = useState("")
    const [cpasswordmobile, setcpasswordmobile] = useState("")
    const [passwordemail, setpasswordemail] = useState("")
    const [cpasswordemail, setcpasswordemail] = useState("")

    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")

    const leftstyle = [
        {
            singerphoto: left_image1,
            backgroundColorLeft: 'rgb(49,92,134)',
            textColorLeft: 'rgb(60,141,218)'
        },
        {
            singerphoto: left_image2,
            backgroundColorLeft: 'rgb(100,60,106)',
            textColorLeft: 'rgb(193,116,205)'
        },
        {
            singerphoto: left_image3,
            backgroundColorLeft: 'rgb(120,37,59)',
            textColorLeft: 'rgb(210,65,103)'
        },
        {
            singerphoto: left_image4,
            backgroundColorLeft: 'rgb(186,96,83)',
            textColorLeft: 'rgb(244,177,153)'
        },
        {
            singerphoto: left_image5,
            backgroundColorLeft: 'rgb(142,34,37)',
            textColorLeft: 'rgb(255,89,94)'
        },
        {
            singerphoto: left_image6,
            backgroundColorLeft: 'rgb(81,78,77)',
            textColorLeft: 'rgb(142,129,122)'
        },
        {
            singerphoto: left_image7,
            backgroundColorLeft: 'rgb(24,32,50)',
            textColorLeft: 'rgb(71,88,125)'
        }
    ]

    const [color_number, setcolor_number] = useState(0)

    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 7)
        setcolor_number(randomNumber)
    }, [])

    const handleSignupMobile = () => {
        fetch("http://localhost:5000/signupwithphone", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                phone: phoneNumber,
                password: passwordmobile,
                cpassword: cpasswordmobile
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error == "Please fill all the fields") {
                    toast.info("Please fill all the fields")
                    return
                }
                else if (data.error == "Passwords do not match") {
                    toast.info("Password and Confirm Password should be same")
                    return
                }
                else if (data.error == "Enter Strong Password") {
                    toast.info("Password must be atleast 8 character long and must contain alteast one uppercase letter, one lowercase letter, one number and one special character!")
                    return
                }
                else if (data.error == "User already exists with that phone number. Try loging in") {
                    toast.info("User already exists with that phone number. Try loging in")
                    return
                }
                else if (data, error == "Sign Up Successful") {
                    toast.success("Sign Up Successful")
                    navigate("/signin")
                    return
                }
                else {
                    toast.error("Sign Up Failed")
                    return
                }
            })
    }

    const handleSignupEmail = () => {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!(emailRegex.test(email))) {
            notify.info("Enter a correct Email")
            return
        }
        fetch("http://localhost:5000/signupwithemail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: passwordemail,
                cpassword: cpasswordemail
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error == "Please fill all the fields") {
                    toast.info("Please fill all the fields")
                    return
                }
                else if (data.error == "Passwords do not match") {
                    toast.info("Password and Confirm Password should be same")
                    return
                }
                else if (data.error == "User already exists with that email. Try loging in") {
                    toast.info("User already exists with that email. Try loging in")
                    return
                }
                else if (data.error == "Enter Strong Password") {
                    toast.info("Password must be atleast 8 character long and must contain alteast one uppercase letter, one lowercase letter, one number and one special character!")
                    return
                }
                else if (data.Status == "Sign Up Successful") {
                    toast.success("Sign Up Successful")
                    navigate("/signin")
                    return
                }
                else {
                    toast.error("Sign Up Failed")
                    return
                }
            })
    }

    return (
        <div className='relative'>
            <div className='flex h-[10vh] bg-none w-full items-center justify-between px-5 z-10 absolute top-0'>
                <NavLink to={"/"} draggable="false">
                    <div className='flex items-center gap-2'>
                        <img src={Logo} alt="" className='w-10' draggable="false" />
                        <div className='text-xl font-semibold text-white'>JioSaavn</div>
                    </div>
                </NavLink>
                <div className='flex gap-4 items-center justify-center'>
                    <div className='text-xs'>Already have an account?</div>
                    <NavLink to={"/signin"} draggable="false">
                        <button className='bg-none text-black font-semibold py-1 px-5 rounded-3xl text-sm border border-black hover:text-white hover:bg-black'>Login</button>
                    </NavLink>
                </div>
            </div>
            <div className='flex w-full h-full'>
                <div className={`left hidden lg:block w-1/2  min-h-screen`} style={{ backgroundColor: `${leftstyle[color_number].backgroundColorLeft}` }}>
                    <div className='flex flex-col items-center justify-center h-full'>
                        <img src={leftstyle[color_number].singerphoto} alt="" className='w-1/2 mb-5' draggable="false" />
                        <h2 className='text-4xl text-white font-semibold'>All Your Music.</h2>
                        <h2 className={`text-2xl italic font-semibold`} style={{ color: `${leftstyle[color_number].textColorLeft}` }}>Anytime, anywhere.</h2>
                    </div>
                </div>
                <div className="right mt-32 lg:mt-0 w-full lg:w-1/2 bg-[rgb(246,246,246)]">
                    <div className='flex flex-col items-center justify-center h-full'>
                        <div className='flex flex-col items-start justify-center w-4/5 lg:w-1/2'>
                            <h1 className='text-4xl font-semibold'>Welcome to JioSaavn.</h1>
                            <h4>Sign up with your {(signupMethod == "phone") ? "mobile number." : "email address."}</h4>
                        </div>
                        <div className='flex flex-col items-start justify-center w-4/5 lg:w-1/2 mt-7'>
                            {(signupMethod == "phone") ?
                                <form action="" className='w-full'>
                                    <div className='relative w-full flex items-center flex-col justify-center gap-4'>
                                        <PhoneInput className='bg-white text-black font-semibold py-3 px-3 rounded-3xl' placeholder='Enter your mobile number'
                                            country={"in"}
                                            inputStyle={{ border: 'none' }}
                                            dropdownStyle={{ border: 'none', borderRadius: '10px', boxShadow: '0 0 5px 0 rgba(0,0,0,0.2)', backgroundColor: 'white', color: 'black' }}
                                            buttonStyle={{ border: 'none', borderRadius: '10px', boxShadow: '0 0 0px 0 rgba(0,0,0,0.2)', backgroundColor: 'white', color: 'black', padding: '0px 0px', margin: '0' }}
                                            value={phoneNumber}
                                            onChange={setPhoneNumber}
                                        />
                                        <div className='relative flex items-center w-full'>
                                            {(showpassmobile) ?
                                                <>
                                                    <input type="password" className='bg-white text-black font-semibold py-3 pl-2 pr-10 rounded-3xl w-full text-left' placeholder='Password' value={passwordmobile} onChange={(e) => setpasswordmobile(e.target.value)} />
                                                    <VisibilityOffIcon onClick={() => setShowpassmobile(false)} className='absolute right-2 z-10' style={{ color: '', cursor: 'pointer' }} />
                                                </>
                                                :
                                                <>
                                                    <input type="text" className='bg-white text-black font-semibold py-3 pl-2 pr-10 rounded-3xl w-full text-left' placeholder='Password' value={passwordmobile} onChange={(e) => setpasswordmobile(e.target.value)} />
                                                    <VisibilityIcon onClick={() => setShowpassmobile(true)} className='absolute right-2 z-10' style={{ color: '', cursor: 'pointer' }} />
                                                </>
                                            }
                                        </div>
                                        <div className='relative w-full flex items-center'>
                                            {(showcpassmobile) ?
                                                <>
                                                    <input type="password" className='bg-white text-black font-semibold py-3 pl-2 pr-10 rounded-3xl w-full text-left' placeholder='Confirm Password' value={cpasswordmobile} onChange={(e) => setcpasswordmobile(e.target.value)} />
                                                    <VisibilityOffIcon onClick={() => setShowcpassmobile(!showcpassmobile)} className='absolute right-2 z-10' style={{ color: '', cursor: 'pointer' }} />
                                                </>
                                                :
                                                <>
                                                    <input type="text" className='bg-white text-black font-semibold py-3 pl-2 pr-10 rounded-3xl w-full text-left' placeholder='Confirm Password' value={cpasswordmobile} onChange={(e) => setcpasswordmobile(e.target.value)} />
                                                    <VisibilityIcon onClick={() => setShowcpassmobile(!showcpassmobile)} className='absolute right-2 z-10' style={{ color: '', cursor: 'pointer' }} />
                                                </>
                                            }
                                        </div>
                                    </div>
                                    <NavLink draggable="false">
                                        <button className='bg-[rgb(43,197,180)] text-white font-semibold py-2 px-5 rounded-3xl mt-5 text-xl w-full' onClick={() => handleSignupMobile()}>Continue</button>
                                    </NavLink>
                                </form>
                                :
                                <form action="" className='w-full'>
                                    <div className='relative w-full flex flex-col gap-4 items-center'>
                                        <input type="text" className='bg-white text-black font-semibold py-3 pl-3 pr-3 rounded-3xl w-full' placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <div className='relative flex items-center w-full'>
                                            {(showpassemail) ?
                                                <>
                                                    <input type="password" className='bg-white text-black font-semibold py-3 pl-2 pr-3 rounded-3xl w-full text-left' placeholder='Password' value={passwordemail} onChange={(e) => setpasswordemail(e.target.value)} />
                                                    <VisibilityOffIcon className='absolute right-2 z-10' style={{ cursor: 'pointer' }} onClick={() => setShowpassemail(!showpassemail)} />
                                                </>
                                                :
                                                <>
                                                    <input type="text" className='bg-white text-black font-semibold py-3 pl-2 pr-3 rounded-3xl w-full text-left' placeholder='Password' value={passwordemail} onChange={(e) => setpasswordemail(e.target.value)} />
                                                    <VisibilityIcon className='absolute right-2 z-10' style={{ cursor: 'pointer' }} onClick={() => setShowpassemail(!showpassemail)} />
                                                </>

                                            }
                                        </div>
                                        <div className='relative flex items-center w-full'>
                                            {(showcpassemail) ?
                                                <>
                                                    <input type="password" className='bg-white text-black font-semibold py-3 pl-2 pr-3 rounded-3xl w-full text-left' placeholder='Confirm Password' value={cpasswordemail} onChange={(e) => setcpasswordemail(e.target.value)} />
                                                    <VisibilityOffIcon className='absolute right-2 z-10' style={{ cursor: 'pointer' }} onClick={() => setShowcpassemail(!showcpassemail)} />
                                                </>
                                                :
                                                <>
                                                    <input type="text" className='bg-white text-black font-semibold py-3 pl-2 pr-3 rounded-3xl w-full text-left' placeholder='Confirm Password' value={cpasswordemail} onChange={(e) => setcpasswordemail(e.target.value)} />
                                                    <VisibilityIcon className='absolute right-2 z-10' style={{ cursor: 'pointer' }} onClick={() => setShowcpassemail(!showcpassemail)} />
                                                </>

                                            }
                                        </div>
                                    </div>
                                    <NavLink draggable="false">
                                        <button className='bg-[rgb(43,197,180)] text-white font-semibold py-2 px-5 rounded-3xl mt-5 text-xl w-full' onClick={(e) => handleSignupEmail()}>Continue</button>
                                    </NavLink>
                                </form>
                            }
                            <p className='w-full italic text-xs my-4'>
                                {(signupMethod == "phone") ?
                                    "Select ‘Continue’ to give consent to JioSaavn’s Terms of Service and acknowledge that you have read and understood the Privacy Policy. An SMS may be sent to authenticate your account, and message and data rates may apply."
                                    :
                                    "By selecting ‘Continue’, you agree to JioSaavn’s Terms of Service and Privacy Policy."
                                }
                            </p>
                            <div className='w-full flex'>
                                <div className='w-1/4'>
                                    <div className='h-1/2 border-b border-[rgb(169,169,169)]'></div>
                                    <div className='h-1/2'></div>
                                </div>
                                <div className='w-1/2 text-center text-sm text-[rgb(169,169,169)]'>OR CONTINUE WITH</div>
                                <div className='w-1/4'>
                                    <div className='h-1/2 border-b border-[rgb(169,169,169)]'></div>
                                    <div className='h-1/2'></div>
                                </div>
                            </div>
                            <div className="w-full flex gap-2">
                                {(signupMethod == "phone") ?
                                    <button className='bg-black text-white py-2 px-5 rounded-3xl mt-5 text-lg w-1/2' onClick={() => setSignupMethod("email")}>Email</button>
                                    :
                                    <button className='bg-black text-white py-2 px-5 rounded-3xl mt-5 text-lg w-1/2' onClick={() => setSignupMethod("phone")}>Mobile Number</button>
                                }
                                <button className='bg-[rgb(61,87,152)] text-white font-semibold py-2 px-5 rounded-3xl mt-5 text-lg w-1/2'>Facebook</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Signup