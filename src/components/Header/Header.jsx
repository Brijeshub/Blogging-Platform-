import React from 'react'
import{Container,Logo,LogoutBtn} from "../index"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
     const authStatus=useSelector((state)=>state.auth.status)
     const navigate=useNavigate()

     const navItems=[
        {
            className:"Home",
            slug:'/',
            active:true
        },
        {
            className: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            className: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            className: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            className: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
     ]
  return (
   <header className='py-2 w-full bg-gray-800 text-stone-300 font-semibold'>
    <Container>
        <nav className='flex'>
            <div className='mr-4'>
                <Link to='/'>
                <Logo/> 
                </Link>
            </div>
            <ul className='flex ml-auto'>
                {navItems.map((item)=>
                item.active?(
                    <li key={item.className}>
                     <button
                     onClick={()=>navigate(item.slug)}
                     className='inline-block px-6 py-2
                     duration-200 hover:bg-blue-500 rounded-full'
                     > {item.className}
                     </button>
                    </li>
                ):null
                )}
                {authStatus && (
                    <li>
                        <LogoutBtn/>
                    </li>
                )}
            </ul>
        </nav>
    </Container>
   </header>
  )
}

export default Header