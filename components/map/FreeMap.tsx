import { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import Map from 'react-map-gl/maplibre';

import 'maplibre-gl/dist/maplibre-gl.css';
import './style.css';

// const TOKEN = `pk.eyJ1IjoibWF0aW5ub3JvenBvdXIiLCJhIjoiY2xhZjZyMzY1MTIxdDN2czQycjNsdXdxbyJ9.SAwQhE_inq9Syo1F3boUCA`;
const TOKEN = `pk.eyJ1IjoiZWlzYS1yZXoiLCJhIjoiY2w4enY5d2N2MDY4aDN3cWhuZ3RkbnV5byJ9.9BG9JcUD0Fn3J3XN1bPbYA`;

// interface FreeMapProps {
//   filter: any;
//   selectedFilterItems: Array<FilterItemConfig>;
//   setMapData: any;
// }
const FreeMap = () => {
  const mapRef = useRef(undefined);
  const mapContainerRef = useRef(null);
  // const [locationsData, setlocationsData] = useState<any>([]);
  // const [ChangeZoom, setChangeZoom] = useState<any>();

  // const [currectLocation, setcurrectLocation] = useState<any>();
  // const [isMove, setIsMove] = useState(false);

  // const setRef = useCallback(
  //   (mapRef: any) => {
  //     let loc = mapRef?.getBounds();

  //     if (loc) {
  //       setcurrectLocation({
  //         nw: { lng: loc?._ne?.lng, lat: loc?._sw?.lat },
  //         se: { lng: loc?._sw?.lng, lat: loc?._ne?.lat },
  //       });
  //     }
  //     setIsMove(false);
  //   },
  //   [isMove]
  // );

  useEffect(() => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiZWlzYS1yZXoiLCJhIjoiY2w4enY5d2N2MDY4aDN3cWhuZ3RkbnV5byJ9.9BG9JcUD0Fn3J3XN1bPbYA';
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return <div id="map-container" ref={mapContainerRef} />;
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=<Maptiler access token>"
    />
  );
  return (
    <Map
      ref={setRef}
      initialViewState={{
        latitude: 35.755428556765054,
        longitude: 51.723633655982574,
        zoom: 5,
        bearing: 0,
        pitch: 0,
      }}
      onZoom={(e) => {
        setChangeZoom(e);
      }}
      onMoveEnd={(e) => setIsMove(true)}
      onZoomEnd={(e) => setIsMove(true)}
      mapStyle="mapbox://styles/matinnorozpour/cla7tphmp000l14melgwvbob8"
      mapboxAccessToken={TOKEN}
    >
      {/* <Pins
        selectedFilterItems={selectedFilterItems}
        data={locationsData}
        ChangeZoom={ChangeZoom}
        filter={filter}
      /> */}
    </Map>
  );
};

export default FreeMap;
