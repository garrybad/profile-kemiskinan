import Image from 'next/image'
import React, { useState } from 'react'
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700']
})

export default function Login() {
    let [isSignIn, setSignIn] = useState(true);
    let toggleChnage = () => {
        setSignIn(!isSignIn);
    };
    // console.log(isSignIn);

    return (
        <dialog id="modal_login" className="modal">

            <div className={`${inter.className} modal-box w-[25vw] bg-neutral-50 p-[6vh]`}>
                <div className='font-bold text-black mb-7 text-2xl text-center'>PKDI</div>
                {
                    isSignIn ? (
                        <div>
                            <div>
                                <div className='mb-7'>
                                    <div className='font-semibold text-gray-500 mb-3 text-sm'>Username</div>
                                    <input type="text" placeholder="" className="input input-sm input-bordered w-full bg-white text-black" />
                                </div>
                                <div className='mb-2'>
                                    <div className='font-semibold text-gray-500 mb-3 text-sm'>Password</div>
                                    <input type="password" placeholder="" className="input input-sm input-bordered w-full bg-white text-black" />
                                </div>
                            </div>

                            <div className='flex justify-between items-center mb-7'>
                                <div className='flex items-center'>
                                    <input type="checkbox" className="checkbox" />
                                    <div className='font-semibold text-gray-500 ml-1 text-sm'>Remember me</div>
                                </div>
                                <div className='font-semibold text-black cursor-pointer text-sm'>Forgot password?</div>
                            </div>

                            <button className="btn btn-active w-full mb-2 text-black bg-white btn-sm hover:bg-gray-200">Sign In</button>

                            <div className='font-semibold text-gray-500 text-sm'>Don't have an account? <span className='cursor-pointer text-black' onClick={toggleChnage}>Sign up</span></div>
                        </div>
                    ) : (
                        <div>
                            <div>
                            <div className='mb-7'>
                                    <div className='font-semibold text-gray-500 mb-3 text-sm'>Name</div>
                                    <input type="text" placeholder="" className="input input-sm input-bordered w-full bg-white text-black" />
                                </div>
                                <div className='mb-7'>
                                    <div className='font-semibold text-gray-500 mb-3 text-sm'>Username</div>
                                    <input type="text" placeholder="" className="input input-sm input-bordered w-full bg-white text-black" />
                                </div>
                                <div className='mb-7'>
                                    <div className='font-semibold text-gray-500 mb-3 text-sm'>Email</div>
                                    <input type="text" placeholder="" className="input input-sm input-bordered w-full bg-white text-black" />
                                </div>
                                <div className='mb-7'>
                                    <div className='font-semibold text-gray-500 mb-3 text-sm'>Password</div>
                                    <input type="password" placeholder="" className="input input-sm input-bordered w-full bg-white text-black" />
                                </div>
                            </div>

                            <button className="btn btn-active w-full mb-2 text-black bg-white btn-sm hover:bg-gray-200">Register</button>

                            <div className='font-semibold text-gray-500 text-sm'>Have an account? <span className='cursor-pointer text-black' onClick={toggleChnage}>Sign In</span></div>
                        </div>
                    )
                }

            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
