import mapboxgl from 'mapbox-gl';
import { mapBox } from '../../api/_keys';

function addMap(lat, lng) {
  mapboxgl.accessToken = mapBox;
  const map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [lng, lat], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });

  map.addControl(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      attributionControl: false,
      logoPosition: 'top-left',
    }),
  );

  map.addControl(new mapboxgl.NavigationControl());
  const marker = new mapboxgl.Marker();
  marker.setLngLat([lng, lat]);
  marker.addTo(map);
}

export default addMap;
