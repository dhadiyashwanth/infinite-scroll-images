import React, {useState, useEffect} from 'react';
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroll-component';
import UnsplashImage from './UnsplashImage';
import './App.css'
import Button from './Button';
import Logo from './Logo';
import Navigation from './Navigation';




function App() {

  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);

useEffect(() => {
    fetchImages();
}, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = "Xptp6UfUmHbxhss1vmnxZGN9nwyLCm9_3l-DLCjJ2hY";

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then (res => {
        setImages([...images, ...res.data]);
        setIsLoaded(true);
      });
};

  return (
   
    <>
    <div className='navigation-bar'>
    <Logo />
    <Navigation />
    <Button />
    </div>

    <div className="hero is-fullheight is-bold is-info">
      <div className="hero-body">
        <div className="container">
          <div className="header content">
            <h2 className="title is-6">internship project</h2>
            <h1 className="subtitle is-1">
              Infinite Scroll with Unsplash 
            </h1>
          </div>
          <InfiniteScroll
          dataLength={images}
          next={() => fetchImages(5)}
          hasMore={true}
          loader={
           <img
              src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
              alt="loading..."
           />}
      >
          <div className="image-grid" style={{ marginTop: "30px" }}>
             {loaded ?
                 images.map((image, index) => (
                     <UnsplashImage url={image.urls.regular} key={index} />
                 )): ""}
         </div>
     </InfiniteScroll>
        </div>
      </div>
    </div>
    </>
  );
};


export default App;
