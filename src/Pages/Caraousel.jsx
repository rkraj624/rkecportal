import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Caraousel = () => {
  return (
    <>
    <div className="flex mx-auto bg-white ">
  
  <div
    className=" w-full lg:block"
    style={{clipPath:"polygon( 0 0, 100% 0, 100% 59%, 24% 100%, 0 80%)" ,height:"650px"}}
  >
<div className="object-cover h-full ">
  <Carousel
    autoPlay={true}
    infiniteLoop={true}
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
    showArrows={false}
  >
    <div>
      <img src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=" myNotes "   />
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80" alt=" ground"   />
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=" students"  />
    </div>
    <div>
      <img src="https://images.unsplash.com/photo-1589801258579-18e091f4ca26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80" alt=" students"  />
    </div>
  </Carousel>
  </div>
    </div>
  </div>
    </>
  )
}

export default Caraousel