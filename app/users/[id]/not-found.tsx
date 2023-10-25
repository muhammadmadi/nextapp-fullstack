import React from 'react'

interface props {

        id:number   
}

const NotFoundUser = ({id}:props) => {
  return (
    <div className="alert alert-warning">This user {id} doesn&apos;t exist </div>
  )
}

export default NotFoundUser