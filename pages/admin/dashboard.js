import { AdjustmentsIcon, BeakerIcon, CalendarIcon, CubeTransparentIcon, FireIcon, LightningBoltIcon, MusicNoteIcon, PaperAirplaneIcon, SearchCircleIcon, TrendingUpIcon } from '@heroicons/react/solid'
import CardStats from '../../components/Cards/CardStats'


import Card from '../../components/Content/Dashboard/Card'
import Title from '../../components/Content/Dashboard/Title'

import Admin from '../../layouts/Admin'

const Dashboard = () => {
  return (
    <>

      <Title
        title="Account Statistic"
        subTitle="This is subtitle"
        dateFilter="Last 7 Days"
      />

      <div className='w-full flex gap-4 py-4'>
        <CardStats
          statTitle='Total Followers'
          statData='900,222'
          statSubtitle='+900% since last year'
          statTextColor='text-yellow-300'
          statIconBgColor='bg-yellow-300'
          statIconColor='text-gray-800'
          statBgColor='bg-gray-800'
          statDataColor='text-white'
        />

        <CardStats
          statTitle='Total Followers'
          statData='900,222'
          statSubtitle='+900% since last year'
          statTextColor='text-gray-800'
          statIconBgColor='bg-gray-800'
          statIconColor='text-yellow-300'
          statBgColor='bg-yellow-300'
          statDataColor='text-gray-800'
        />

        <CardStats
          statTitle='Total Followers'
          statData='900,222'
          statSubtitle='+900% since last year'
          statTextColor='text-yellow-300'
          statIconBgColor='bg-yellow-300'
          statIconColor='text-gray-800'
          statBgColor='bg-gray-800'
          statDataColor='text-white'
        />

      </div>


      <Title
        title="Latest Transaction"
        dateFilter="Last 7 Days"
      />

      <div className='pb-20'>
        <h5 className='text-base text-orange-500 font-bold mb-6'>August, 2021</h5>

        <div className='flex-col flex gap-6 divide-y divide-dashed'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center'>
              <div className='bg-black p-2 rounded-lg mr-4'>
                <AdjustmentsIcon className='w-6 h-6 text-white' />
              </div>
              <div className='flex-col'>
                <h4 className='text-base font-bold'>Apple Pay</h4>
                <p className='text-sm text-gray-500'>Shopping</p>
              </div>
            </div>
            <p className='text-sm text-gray-500'>8 Aug, 4:32 PM</p>
            <h3 className='text-2xl font-bold'>$50</h3>
          </div>

          <div className='flex w-full items-center justify-between pt-6'>
            <div className='flex items-center'>
              <div className='bg-black p-2 rounded-lg mr-4'>
                <AdjustmentsIcon className='w-6 h-6 text-white' />
              </div>
              <div className='flex-col'>
                <h4 className='text-base font-bold'>Apple Pay</h4>
                <p className='text-sm text-gray-500'>Shopping</p>
              </div>
            </div>
            <p className='text-sm text-gray-500'>8 Aug, 4:32 PM</p>
            <h3 className='text-2xl font-bold'>$50</h3>
          </div>

          <div className='flex w-full items-center justify-between pt-6'>
            <div className='flex items-center'>
              <div className='bg-black p-2 rounded-lg mr-4'>
                <AdjustmentsIcon className='w-6 h-6 text-white' />
              </div>
              <div className='flex-col'>
                <h4 className='text-base font-bold'>Apple Pay</h4>
                <p className='text-sm text-gray-500'>Shopping</p>
              </div>
            </div>
            <p className='text-sm text-gray-500'>8 Aug, 4:32 PM</p>
            <h3 className='text-2xl font-bold'>$50</h3>
          </div>
        </div>

      </div>


      <div className='pb-20'>
        <h5 className='text-base text-orange-500 font-bold mb-6'>August, 2021</h5>

        <div className='flex-col flex gap-6 divide-y divide-dashed'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center'>
              <div className='bg-black p-2 rounded-lg mr-4'>
                <AdjustmentsIcon className='w-6 h-6 text-white' />
              </div>
              <div className='flex-col'>
                <h4 className='text-base font-bold'>Apple Pay</h4>
                <p className='text-sm text-gray-500'>Shopping</p>
              </div>
            </div>
            <p className='text-sm text-gray-500'>8 Aug, 4:32 PM</p>
            <h3 className='text-2xl font-bold'>$50</h3>
          </div>

          <div className='flex w-full items-center justify-between pt-6'>
            <div className='flex items-center'>
              <div className='bg-black p-2 rounded-lg mr-4'>
                <AdjustmentsIcon className='w-6 h-6 text-white' />
              </div>
              <div className='flex-col'>
                <h4 className='text-base font-bold'>Apple Pay</h4>
                <p className='text-sm text-gray-500'>Shopping</p>
              </div>
            </div>
            <p className='text-sm text-gray-500'>8 Aug, 4:32 PM</p>
            <h3 className='text-2xl font-bold'>$50</h3>
          </div>

          <div className='flex w-full items-center justify-between pt-6'>
            <div className='flex items-center'>
              <div className='bg-black p-2 rounded-lg mr-4'>
                <AdjustmentsIcon className='w-6 h-6 text-white' />
              </div>
              <div className='flex-col'>
                <h4 className='text-base font-bold'>Apple Pay</h4>
                <p className='text-sm text-gray-500'>Shopping</p>
              </div>
            </div>
            <p className='text-sm text-gray-500'>8 Aug, 4:32 PM</p>
            <h3 className='text-2xl font-bold'>$50</h3>
          </div>
        </div>

      </div>

    </>
  )
}

export default Dashboard

Dashboard.layout = Admin