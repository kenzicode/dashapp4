import { AdjustmentsIcon, BeakerIcon, CalendarIcon, CubeTransparentIcon, FireIcon, LightningBoltIcon, MusicNoteIcon, PaperAirplaneIcon, SearchCircleIcon, TrendingUpIcon } from '@heroicons/react/solid'
import Card from './Card'
import SearchBar from './SearchBar'
import Title from './Title'

const IndexContent = () => {
  return (
    <div className="flex flex-col h-full w-full p-7 overflow-auto">

      <SearchBar />

      <Title
        title="Account Statistic"
        subTitle="This is subtitle"
        dateFilter="Last 7 Days"
      />

      <Card
        upTitle="Total Followers"
        title="256,344"
        subTitle="+7% growth from last week"
        bgColor="bg-gray-800"
      />

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

    </div>
  )
}

export default IndexContent