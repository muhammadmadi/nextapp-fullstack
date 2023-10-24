import { log } from 'console';
import React from 'react'
interface props {
    params:{
        id:number ; photoId:number;   }

}
//<td className="btn btn-primary flex-wrap "> {user.email}</td>

const PhotosId = ({params :{id , photoId }}:props) => {
  return (
    <div>PhotosId id {id} . photoId {photoId} .</div>
  )
}


export default PhotosId