import React from 'react'
import banner from "../img/banner.jpg";

type Props = {}

const Banner = (props: Props) => {
    return (
        <div >
            <img src={banner} alt="" className='container' />
        </div>
    )
}

export default Banner