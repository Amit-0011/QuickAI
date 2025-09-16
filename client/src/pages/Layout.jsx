// import React, { useState } from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import { Menu, X } from 'lucide-react'
// import Sidebar from '../components/Sidebar'
// import { useUser, SignIn } from '@clerk/clerk-react'

// const Layout = () => {

//   const navigate = useNavigate()
//   const [sidebar, setSidebar] = useState(false)
//   const {user} = useUser()

//   return user ? (
//     <div className='flex flex-col items-start justify-start h-screen'>

//       <nav className='w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200 '>
//         <img className='cursor-pointer w-32 sm:w-44' src={assets.logo} alt="logo" onClick={() => navigate('/')} />
//         {
//           sidebar ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden' />
//             : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden' />
//         }
//       </nav>

//       <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
//         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
//         <div className='flex-1 bg-[#F4F7FB]'>
//           <Outlet />
//         </div>
//       </div>

//     </div>
//   ) : (
//     <div className='flex items-center justify-center h-screen'>
//       <SignIn />
//     </div>
//   )
// }

// export default Layout




// Scroller removing code review and use it 
import React, { useState, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { useUser, SignIn } from '@clerk/clerk-react'

const Layout = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const [sidebar, setSidebar] = useState(false)
  const {user} = useUser()

  // Check if current route is dashboard/AI page
  const isDashboard = location.pathname.startsWith('/ai') || location.pathname === '/'

  useEffect(() => {
    const body = document.body
    const html = document.documentElement
    
    if (isDashboard && user) {
      // Apply no-scroll styles for dashboard when user is logged in
      body.style.height = '100vh'
      body.style.overflow = 'hidden'
      html.style.height = '100vh'
      html.style.overflow = 'hidden'
    } else {
      // Remove no-scroll styles for other pages
      body.style.height = ''
      body.style.overflow = ''
      html.style.height = ''
      html.style.overflow = ''
    }
    
    // Cleanup on unmount
    return () => {
      body.style.height = ''
      body.style.overflow = ''
      html.style.height = ''
      html.style.overflow = ''
    }
  }, [isDashboard, user])

  return user ? (
    <div className='flex flex-col items-start justify-start h-screen overflow-hidden'>

      <nav className='w-full px-8 h-14 flex items-center justify-between border-b border-gray-200 flex-shrink-0'>
        <img className='cursor-pointer w-32 sm:w-44' src={assets.logo} alt="logo" onClick={() => navigate('/')} />
        {
          sidebar ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden' />
            : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden' />
        }
      </nav>

      <div className='flex-1 w-full flex overflow-hidden'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='flex-1 bg-[#F4F7FB] overflow-y-auto overflow-x-hidden'>
          <Outlet />
        </div>
      </div>

    </div>
  ) : (
    <div className='flex items-center justify-center min-h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout