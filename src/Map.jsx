import React, { useEffect } from 'react';

function Map() {
  const { kakao } = window;
  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.56782, 126.99107), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
        mapTypeId: kakao.maps.MapTypeId.ROADMAP, // 지도종류
      };

    // 지도를 생성한다
    var map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);
  return <div>Map</div>;
}

export default Map;
