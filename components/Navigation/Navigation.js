import { AdjustmentsIcon, CubeTransparentIcon, FireIcon, LightningBoltIcon, MusicNoteIcon, TrendingUpIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navigation = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col h-full w-1/4 bg-gray-100 p-7">
      <h1 className="text-2xl font-bold pb-8 flex">
        <LightningBoltIcon className='w-10 h-10' />
        Dashapp4
      </h1>

      <div className="flex flex-col justify-between item-center">
        <Link href="/admin/dashboard">
          <button className={"flex items-center py-3 px-3 my-2 hover:bg-slate-200 rounded-md " + (router.pathname.indexOf("/admin/dashboard") !== -1 ? "bg-slate-200" : "bg-transparent")}>
            <i className='fas fa-tools text-sm'></i>
            <AdjustmentsIcon className="h-5 w-5 text-gray-500 mr-5" />
            <p>Dashboard</p>
          </button>
        </Link>

        <Link href="/admin/overview">
          <button className={"flex items-center py-3 px-3 my-2 hover:bg-slate-200 hover:rounded-md " + (router.pathname.indexOf("/admin/overview") !== -1 ? "bg-slate-200" : "bg-transparent")}>
            <CubeTransparentIcon className="h-5 w-5 text-gray-500 mr-5" />
            <p>Overview</p>
          </button>
        </Link>
      </div>

      <h3 className='text-lg font-semibold pt-10 pb-5'>My Campaign</h3>

      <div className="flex flex-col justify-between item-center">
        <Link href="/admin/earnings">
          <button className={"flex items-center py-3 px-3 my-2 hover:bg-slate-200 hover:rounded-md " + (router.pathname.indexOf("/admin/earnings") !== -1 ? "bg-slate-200" : "bg-transparent")}>
            <TrendingUpIcon className="h-5 w-5 text-gray-500 mr-5" />
            <p>Earnings</p>
          </button>
        </Link>

        <Link href="/admin/social">
          <button className={"flex items-center py-3 px-3 my-2 hover:bg-slate-200 hover:rounded-md " + (router.pathname.indexOf("/admin/social") !== -1 ? "bg-slate-200" : "bg-transparent")}>
            <FireIcon className="h-5 w-5 text-gray-500 mr-5" />
            <p>Social Stats</p>
          </button>
        </Link>

        <Link href="/admin/music">
          <button className={"flex items-center py-3 px-3 my-2 hover:bg-slate-200 hover:rounded-md " + (router.pathname.indexOf("/admin/music") !== -1 ? "bg-slate-200" : "bg-transparent")}>
            <MusicNoteIcon className="h-5 w-5 text-gray-500 mr-5" />
            <p>Audio / Music</p>
          </button>
        </Link>

        <Link href="/admin/media">
          <button className={"flex items-center py-3 px-3 my-2 hover:bg-slate-200 hover:rounded-md " + (router.pathname.indexOf("/admin/media") !== -1 ? "bg-slate-200" : "bg-transparent")}>
            <LightningBoltIcon className="h-5 w-5 text-gray-500 mr-5" />
            <p>Media Kit</p>
          </button>
        </Link>

      </div>



      <div className='bg-yellow-200 rounded-md justify-center items-center align-middle text-center p-5 mt-10'>
        <h1 className='text-3xl'>40% Off</h1>
        <h5 className='text-lg'>On every Courses</h5>
      </div>

    </div>
  )
}

export default Navigation