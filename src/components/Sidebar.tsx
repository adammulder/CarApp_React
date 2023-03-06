import { useState } from 'react'
import image from "../assets/images/car_png4.png"
import { Transition } from '@headlessui/react'
import { Link } from "react-router-dom"
import LoginButton from './LoginButton'



function Sidebar() {
    const [isOpen, setIsopen] = useState(false)

   



  return (
    <>
    <div className="flex items-center justify-between flex-wrap bg-[#191e22] h-full">
        <div className="flex items-center ">
            <img className="h-[11vh] pb-3" src={image} alt="" />
            <Link to="/">
            <h1 className="text-red-500 tracking-widest uppercase font-mono p-3 text-center text-3xl px-9">Car Inventory+</h1>
            </Link>
        </div>
    </div>
            <button onClick={() => setIsopen((isOpen) => !isOpen)} className="fixed flex items-center cursor-pointer hover:text-red-100 right-10 top-6 py-3 px-4 text-red-500 border rounded border-red-500 hover:border-red-100">
                <i className="fa-solid fa-bars"></i>
            </button>
          <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
            <div onClick={() => setIsopen(!isOpen)} className="top-0 right-0 fixed bg-[#cbc2c6] w-[15vw] h-full">
                <button className='top-0 right-0 fixed px-4 hover:text-white text-lg'>
                <i className="fa-solid fa-xmark"></i>
                </button>
                <div className='h-full block flex-row items-center'>
                    <ul>
                        <li>
                            <button className="p-4 m-5 justify-center">
                            <div>
                                <Link to='/' className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                 text-red-400 hover:text-white mr-4 text-2xl hover:animate-pulse'>
                                    Home
                                </Link>
                            </div>
                            </button>
                        </li>
                        <li>
                            <button className="p-4 m-5 justify-center">
                                <div>
                                    <Link to='/About' className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-red-400 hover:text-white mr-4 text-2xl hover:animate-pulse'>
                                    About
                                </Link>
                                 </div>
                            </button>
                        </li>
                        <li>
                            <button className="p-4 m-5 justify-center">
                                <div>
                                    <Link to='/Dashboard' className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                    text-red-400 hover:text-white mr-4 text-2xl hover:animate-pulse'>
                                    Dashboard
                                </Link>
                                 </div>
                            </button>
                        </li>
                        <li>
                            <LoginButton />
                        </li>
                      

                    </ul>
                </div>
                
            </div>
      </Transition>
    </>
    
    
  )
}

export default Sidebar