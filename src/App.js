import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import './app.css'

const custom_zoom_control = styled.div`
  position:absolute;
  top:50px;
  right:10px;
  width:36px;
  height:80px;
  overflow:hidden;
  z-index:1;
  background-color:#f5f5f5;
`

const App = () => {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [map, setMap] = useState(null)
  const [roadMapFlag, setRoadMapFlag] = useState(true)
  useEffect(()=>{
    const container = document.getElementById('map');
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude)
      setLongitude(pos.coords.longitude)
    });
    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 3
    };

    setMap(new window.kakao.maps.Map(container, options))

    const markerPosition  = new window.kakao.maps.LatLng(latitude, longitude);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
    console.log('map', map)
    console.log('marker', marker)
    // const geocoder = new window.kakao.maps.services.Geocoder();
    //
    // geocoder.addressSearch('서울 용산구 청파로 286', function(result, status) {
    //
    //   // 정상적으로 검색이 완료됐으면
    //   if (status === window.kakao.maps.services.Status.OK) {
    //
    //     let coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
    //
    //     // 결과값으로 받은 위치를 마커로 표시합니다
    //     let marker = new window.kakao.maps.Marker({
    //       map: map,
    //       position: coords
    //     });
    //
    //     // 인포윈도우로 장소에 대한 설명을 표시합니다
    //     let infowindow = new window.kakao.maps.InfoWindow({
    //       content: '<div style="width:150px;text-align:center;padding:6px 0;">가로판매점제55호</div>'
    //     });
    //     infowindow.open(map, marker);
    //
    //     // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
    //     map.setCenter(coords);
    //   }
    // });

  }, [])

  // const zoomIn = () => (map.setLevel(map.getLevel() - 1))
  // const zoomOut = () => (map.setLevel(map.getLevel() + 1))

  return (
    <div className={"map_wrap"}>
      <div id={"map"} style={{width:"500px", height:"400px"}}>
        {/*<div className={"custom_zoom_control radius_border"}>*/}
        {/*  <span onClick={zoomIn}>*/}
        {/*    <img src={"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"} alt={"확대"}/>*/}
        {/*  </span>*/}
        {/*  <span onClick={zoomOut}>*/}
        {/*    <img src={"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"} alt={"축소"}/>*/}
        {/*  </span>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default App;
