import React from 'react'
import PropTypes from "prop-types"
import { PaperAirplaneIcon } from '@heroicons/react/solid'

const CardStats = ({ statTitle, statData, statDataColor, statSubtitle, statBgColor, statIconColor, statTextColor, statIconBgColor }) => {
  return (
    <div className='flex justify-between items-center w-1/3'>
      <div className={statBgColor + " rounded-lg p-5 flex w-full items-center"}>
        <div className={statIconBgColor + " p-2 rounded-lg items-center h-14"}>
          <PaperAirplaneIcon className={'w-10 h-10 ' + statIconColor} />
        </div>
        <div className='flex-1 ml-5 space-y-2'>
          <p className={statTextColor + " text-sm"}>{statTitle}</p>
          <h2 className={statDataColor + ' text-4xl'}>{statData}</h2>
          <p className={statTextColor + " text-sm"}>{statSubtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default CardStats

CardStats.propTypes = {
  statUptitle: PropTypes.string,
  statTitle: PropTypes.string,
  statIcon: PropTypes.string,
  statSubtitle: PropTypes.string,
  statBgColor: PropTypes.string,
  statTextColor: PropTypes.string,
  statIconColor: PropTypes.string,
  statDataColor: PropTypes.string,
  statIconBgColor: PropTypes.string
}