import React from 'react'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const CardSkeleton = ({cards}) => {
    return Array(cards).fill(0).map((item,i)=>(
        <div className='card-skeleton' key={i}>
        <div className='left-col'>
            <Skeleton circle width={100} height={100}/>
        </div>
        <div className='right-col'>
            <Skeleton count={4} style={{marginBottom:"0.5rem"}}/>
        </div>
    </div>
    ));
  
}

export default CardSkeleton