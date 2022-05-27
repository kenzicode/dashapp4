import { BellIcon, LockClosedIcon, TruckIcon } from '@heroicons/react/solid'
import React from 'react'
import SearchBar from '../components/Content/Dashboard/SearchBar'
import Navigation from '../components/Navigation/Navigation'
import Image from 'next/image'



const Admin = ({ children }) => {
  return (
    <>
      <div className="h-screen max-w-full flex justify-between">

        <Navigation />

        <div className="flex flex-col h-full w-full p-7 overflow-auto">

          <SearchBar />
          {children}
        </div>



        <div className="h-full w-1/4 bg-gray-100 p-7">
          <div className='flex justify-between items-center'>
            <div className='w-8'>

            </div>
            <div className='flex items-center'>
              <Image
                src='/person.png'
                className='w-full rounded-full'
                width={50}
                height={50}
              />
              <div className='flex-col block p-2'>
                <p className='text-sm font-bold text-gray-700'>Albert Cook</p>
                <p className='text-sm text-gray-500'>Admin</p>
              </div>
            </div>
          </div>

          <div className='flex justify-between py-10'>
            <h5 className='font-bold text-xl'>Activities</h5>
            <LockClosedIcon className='w-5 h-5' />
          </div>

          <div className='flex inline-block justify-between'>
            <TruckIcon className='w-5 h-5' />
            <div className='flex-col'>
              <h5>Tiktok Music</h5>
              <p>2 Hours Ago</p>
            </div>
            <button className='px-4 py-8 bg-yellow-300'>Join</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin