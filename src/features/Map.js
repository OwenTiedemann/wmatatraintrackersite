import {useEffect, useRef, useState} from "react";
import {GeoJSON, MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Icon} from "leaflet";
import metrolinedata from "../data/data";

const Map = () => {

    const giveColor = (name) => {
        if (name === 'blue') {
            return "#0795d3"
        } else if (name === 'red') {
            return '#be1337'
        } else if (name === 'orange') {
            return '#da8707'
        } else if (name === 'green') {
            return '#00b050'
        } else if (name === 'silver') {
            return '#a2a4a1'
        } else if (name === 'yellow') {
            return '#f5d415'
        }
    }

    let style = feature => {
        const {
            properties: { NAME }
        } = feature;
        return {
            color: giveColor(NAME),
        };
    };

    return (
        <MapContainer center={[38.889484, -77.035278]} zoom={12}>
            <TileLayer
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            />
            <GeoJSON data={metrolinedata} style={style}/>
        </MapContainer>
    )
}

export default Map;
