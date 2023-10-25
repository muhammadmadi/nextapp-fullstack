'use client';
import React from 'react'
interface Props {
  error : Error;
  reset : ()=>void;
}
const error = ({error ,reset}:Props) => {
  console.log('Error' , error );
  
  return (
    <>
    <div>An unexpected Error has orcured</div>
    <button className='btn' onClick={()=> reset()}>  retry</button>
    </>
  )
}

export default error