import React from 'react'

interface Props{
    params : {photoId :number};
}

const PhotosDetailPage = (props : Props) => {
  return (
    <div>PhotosDetailPage {props.params.photoId}</div>
  )
}

export default PhotosDetailPage