import { SearchCircleIcon } from '@heroicons/react/solid'

const SearchBar = () => {
  return (
    <div className='flex rounded-lg h-10 items-center w-full'>
      <SearchCircleIcon className='w-10 h-10 text-gray-500 inline-flex items-center' />
      <input
        type="text"
        name="search"
        className="block w-full flex-1 border-0 ring-0 focus:border-0"
        placeholder="Search Anything"
      />
    </div>
  )
}

export default SearchBar