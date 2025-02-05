
"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"
import "mapbox-gl/dist/mapbox-gl.css"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const userLocationMarker = useRef<mapboxgl.Marker | null>(null)
  const [lng, setLng] = useState(-70.9)
  const [lat, setLat] = useState(42.35)
  const [zoom, setZoom] = useState(9)

  useEffect(() => {
    if (map.current) return // initialize map only once
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
      })

      // Add directions control
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken || '',
        unit: "metric",
        profile: "mapbox/driving",
      })

      map.current.addControl(directions, "top-left")

      // Add geolocate control
      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
      map.current.addControl(geolocate, "bottom-right")

      // Trigger geolocation on map load
      map.current.on("load", () => {
        geolocate.trigger()
      })
    }
  }, [lng, lat, zoom])

  useEffect(() => {
    if (!map.current) return // wait for map to initialize
    map.current.on("move", () => {
      if (map.current) {
        setLng(Number.parseFloat(map.current.getCenter().lng.toFixed(4)))
        setLat(Number.parseFloat(map.current.getCenter().lat.toFixed(4)))
        setZoom(Number.parseFloat(map.current.getZoom().toFixed(2)))
      }
    })
  }, [])

  useEffect(() => {
    if (!map.current) return

    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLat(latitude)
          setLng(longitude)

          // Update or create the user location marker
          if (userLocationMarker.current) {
            userLocationMarker.current.setLngLat([longitude, latitude])
          } else {
            userLocationMarker.current = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map.current!)
          }
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    } else {
      console.log("Geolocation is not available in your browser.")
    }
  }, [])

  const centerOnUserLocation = () => {
    if (map.current && userLocationMarker.current) {
      map.current.flyTo({
        center: userLocationMarker.current.getLngLat(),
        zoom: 14,
      })
    }
  }

  return (
    <div className="h-[600px] relative">
      <div ref={mapContainer} className="h-full" />
      <div className="absolute bottom-0 left-0 bg-white p-2 m-2 z-10 rounded shadow">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <button
        onClick={centerOnUserLocation}
        className="absolute top-0 right-0 bg-blue-500 text-white p-2 m-2 z-10 rounded shadow hover:bg-blue-600 transition-colors"
      >
        Center on My Location
      </button>
    </div>
  )
}



