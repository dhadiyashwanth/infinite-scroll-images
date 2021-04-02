import React, {useEffect} from 'react';

function UnsplashImage({ url, key }) {

  return (
    <div className="image-item" key={key} >
    <img  src={url} />
    </div>
    );
  }
  
  export default UnsplashImage



