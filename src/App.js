import React, { useEffect } from 'react'

const App = () => {
  
  useEffect(()=>{
    const container = document.getElementById('map');
    const options = {      
      center: new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };

    const map = new window.kakao.maps.Map(container, options);
    const markerPosition  = new window.kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
    const marker = new window.kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])
  
  return (
    <>
      <div id="map" style={{width:"500px", height:"400px"}}></div>
    </>
  );
}

export default App;
