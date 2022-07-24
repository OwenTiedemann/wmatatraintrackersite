import {useEffect, useRef, useState} from "react";
import {CircleMarker, GeoJSON, MapContainer, Marker, Popup, TileLayer, ZoomControl} from "react-leaflet";
import {Icon} from "leaflet";
import MetroStationData from "../data/Metro_Stations_Regional.json";
import MetroLineData from "../data/Metro_Lines_Regional.json"
import L from 'leaflet'
import MetroIcon from '../icons/MetroIcon.png'

const Map = ({ setSelectedStationFromName }) => {

    const [map, setMap] = useState(null)

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

    let MetroLineStyle = feature => {
        const {
            properties: {NAME}
        } = feature;
        return {
            color: giveColor(NAME),
        };
    };

    let MetroStationStyle = feature => {
        return {}
    }

    let metroStationIcon = new L.icon({
        iconUrl: MetroIcon,
        iconSize: [16, 16],
        backgroundColor: 'white'
    })

    const pointToLayerStations = (feature, latlng) => {
        return L.marker(latlng, {icon: metroStationIcon}).bindTooltip(feature.properties.NAME, {permanent: false, opacity: 0.7, direction: 'top'}).openTooltip();
    }


    return (
        <MapContainer center={[38.889484, -77.035278]} zoom={12} whenCreated={setMap} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            />
            <ZoomControl position={'topright'}/>
            <GeoJSON data={MetroLineData} style={MetroLineStyle}/>
            <GeoJSON
                pointToLayer={pointToLayerStations}
                data={MetroStationData} style={MetroStationStyle}
                eventHandlers={{
                    click: (e) => {
                        setSelectedStationFromName(e.layer.feature.properties.NAME)
                    },
                }}
            />


        </MapContainer>
    )
}

export default Map;
