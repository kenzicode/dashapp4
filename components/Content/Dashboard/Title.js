import { CalendarIcon } from '@heroicons/react/solid'

const Title = ({ title, subTitle, dateFilter }) => {
  return (
    <div className='flex justify-between py-10 items-center'>
      <div className=''>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <h5 className='text-base text-gray-400'>{subTitle}</h5>
      </div>
      <div className='flex items-center'>
        <p className='text-gray-5000 mr-3'>{dateFilter}</p>
        <CalendarIcon className='w-5 h-5 text-gray-500' />
      </div>
    </div>
  )
}

export default Title