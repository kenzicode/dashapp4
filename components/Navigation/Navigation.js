import { AdjustmentsIcon, CubeTransparentIcon, FireIcon, LightningBoltIcon, MusicNoteIcon, TrendingUpIcon } from '@heroicons/react/solid'

const Navigation = () => {
  return (
    <div className="flex flex-col h-full w-1/4 bg-gray-100 p-7">
      <h1 className="text-2xl font-bold pb-8 flex">
        <LightningBoltIcon className='w-10 h-10' />
        Dashapp4
      </h1>

      <div className="flex flex-col justify-between item-center">
        <button className="flex items-center py-3 px-3 my-2 bg-slate-200 rounded-md">
          <AdjustmentsIcon className="h-5 w-5 text-gray-500 mr-5" />
          <p>Dashboard</p>
        </button>

        <button className="flex items-center py-3 px-3 my-2 hover:bg-slate-200 hover:rounded-md">
          <CubeTransparentIcon className="h-5 w-5 text-gray-500 mr-5" />
          <p>Overview</p>
        </button>
      </div>

      <h3 className='text-lg font-semibold pt-10 pb-5'>My Campaign</h3>

      <div className="flex flex-col justify-between item-center">
        <button className="flex items-center py-3 px-3 my-2 hover:bg-slate-200 hover:rounded-md">
          <TrendingUpIcon className="h-5 w-5 text-gray-500 mr-5" />
          <p>Earnings</p>
        </button>

        <button className="flex items-center py-3 px-3 my-2 hover:bg-slate-200 hover:rounded-md">
          <FireIcon className="h-5 w-5 text-gray-500 mr-5" />
          <p>Social Stats</p>
        </button>

        <button className="flex items-center py-3 px-3 my-2 hover:bg-slate-200 hover:rounded-md">
          <MusicNoteIcon className="h-5 w-5 text-gray-500 mr-5" />
          <p>Audio / Music</p>
        </button>

        <button className="flex items-center py-3 px-3 my-2 hover:bg-slate-200 hover:rounded-md">
          <LightningBoltIcon className="h-5 w-5 text-gray-500 mr-5" />
          <p>Media Kit</p>
        </button>
      </div>



      <div className='bg-yellow-200 rounded-md justify-center items-center align-middle text-center p-5 mt-10'>
        <h1 className='text-3xl'>40% Off</h1>
        <h5 className='text-lg'>On every Courses</h5>
      </div>

    </div>
  )
}

export default Navigation