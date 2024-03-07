'use client'

import React, { useState } from 'react'
import { CldImage, CldUploadWidget } from 'next-cloudinary'

interface cloudinaryResult{
  public_id : string;
}

const UploadPage = () => {
  const [publicId , setPublicId] = useState("");
  return (<>

  {publicId && <CldImage src={publicId} width={240} height={120} alt='Img'/>}
    <CldUploadWidget uploadPreset='applepie' onSuccess={(result ,widget)=>{
      console.log(result);

      if(result.event !== "success") return;

      const info  = result.info as cloudinaryResult
      setPublicId(info.public_id);

    }}>
      {({open})=>
        <button className="btn btn-primary" onClick={()=>open()}>Upload</button>
      }
    </CldUploadWidget>
  </>

  )
}

export default UploadPage