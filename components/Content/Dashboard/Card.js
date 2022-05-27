import { PaperAirplaneIcon } from '@heroicons/react/solid'
import CardStats from '../../Cards/CardStats'

const Card = ({ bgColor, textColor, upTitle, subTitle, title }) => {
  return (
    <div className='w-full flex gap-4'>
      <div className='flex justify-between items-center w-1/3'>
        <div className='bg-gray-800 rounded-lg p-5 flex w-full items-center'>
          <div className='bg-yellow-300 p-2 rounded-lg items-center h-14'>
            <PaperAirplaneIcon className='w-10 h-10 text-gray-800' />
          </div>
          <div className='flex-1 ml-5 space-y-2'>
            <p className='text-yellow-300 text-sm'>{upTitle}</p>
            <h2 className='text-4xl text-white'>{title}</h2>
            <p className='text-yellow-500 text-sm'>{subTitle}</p>
          </div>
        </div>
      </div>

      {/* <div className='flex justify-between items-center w-1/3'>
        <div className='bg-yellow-300 rounded-lg p-5 flex w-full items-center'>
          <div className='bg-gray-800 p-2 rounded-lg items-center h-14'>
            <PaperAirplaneIcon className='w-10 h-10 text-yellow-300' />
          </div>
          <div className='flex-1 ml-5 space-y-2'>
            <p className='text-gray-800 text-sm'>Total Followers</p>
            <h2 className='text-4xl text-gray-800'>198,777</h2>
            <p className='text-gray-800 text-sm'>+8% Growth Last Week</p>
          </div>
        </div>
      </div> */}

      <CardStats
        statTitle='Status Title'
        statData='900,222'
        statSubtitle='+900% since last year'
        statTextColor='text-gray-800'
        statIconColor='bg-gray-800'
        statBgColor='bg-yellow-300'
      />

      <div className='flex justify-between items-center w-1/3'>
        <div className='bg-gray-800 rounded-lg p-5 flex w-full items-center'>
          <div className='bg-yellow-300 p-2 rounded-lg items-center h-14'>
            <PaperAirplaneIcon className='w-10 h-10 text-gray-800' />
          </div>
          <div className='flex-1 ml-5 space-y-2'>
            <p className='text-yellow-300 text-sm'>Total Followers</p>
            <h2 className='text-4xl text-white'>198,777</h2>
            <p className='text-yellow-500 text-sm'>+8% Growth Last Week</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card