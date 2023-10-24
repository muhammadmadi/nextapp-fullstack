import React from 'react'

interface props {
    params:{
        id:number    }

}
const UserDetailPage = ({params:{id}}:props) => {
  return (
    <div>UserDetailPage {id} </div>
  )
}

export default UserDetailPage