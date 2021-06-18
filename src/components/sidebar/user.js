import React, { memo } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'


const User = ({username, fullName}) => 
!username || !fullName ? (
    <Skeleton count={1} height={61} />
) : (
    <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-6 items-center">
        <div className="flex items-center justify-between col-span-1 ">
            <img src={`/images/avatars/${username}.jpg`} alt={username} className="rounded-full h-14 w-14 flex mr-3"/>
        </div>
        <div className="col-span-3">
            <p className="font-bold text-sm">{username}</p>
            <p className="text-sm">{fullName}</p>
        </div>
    </Link>
)

export default memo(User);

User.propTypes = {
    username: PropTypes.string,
    fullName: PropTypes.string
}

User.whyDidYouRender = true