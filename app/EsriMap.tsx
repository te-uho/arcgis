'use client'
import React, { useRef, useEffect, useState } from "react"
import Map from "@arcgis/core/Map.js"
import MapView from "@arcgis/core/views/MapView"

const EsriMap = () => {

    const mapRef = useRef<any>(null);
    const viewRef = useRef<any>(null);

    useEffect(() => {

        if (!mapRef.current) return

        const baseMap = new Map({
            basemap: "satellite",
        });

        const view = new MapView({
            container: mapRef.current,
            map: baseMap,
            center: [174.8860, -40.9006], // Longitude, latitude
            zoom: 6, // Zoom level
        });

        viewRef.current = view

    }, [mapRef]);

    return (
        <div id="viewDiv" className="mapDivDev" ref={mapRef}></div>
    )
}

export default EsriMap