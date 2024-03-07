import React from 'react'

interface Props{
    params : {slug : string[]};
    searchParams : {sort : string};
}



const ProductPage = (props : Props) => {
  return (
    <div>ProductPage {props.params.slug} {props.searchParams.sort}</div>
  )
}

export default ProductPage