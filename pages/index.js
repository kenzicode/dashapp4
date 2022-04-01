import { AdjustmentsIcon, BeakerIcon, CalendarIcon, CubeTransparentIcon, FireIcon, LightningBoltIcon, MusicNoteIcon, PaperAirplaneIcon, SearchCircleIcon, TrendingUpIcon } from '@heroicons/react/solid'
import IndexContent from '../components/Content/Dashboard/Index'
import Navigation from '../components/Navigation/Navigation'


const IndexPage = () => {
  return (
    <div className="h-screen max-w-full flex justify-between">

      <Navigation />

      <IndexContent />

      <div className="flex h-full w-1/4 bg-gray-100">
        aside
      </div>
    </div>
  )
}

export default IndexPage