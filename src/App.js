import './App.css';
import React, {useEffect, useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {Icon} from "leaflet";
import Map from "./features/Map";
import StationFinder from "./features/StationFinder";
import {getStationList} from "./api";


function combineStations(stations) {
    let newStationsObject = {}
    let newStationsList = []
    stations.map((station) => {

        let newStation = {}

        if (newStationsObject[station.Name]) {
            newStationsObject[station.Name].Codes.push(station.Code)
            if (station.LineCode1 != null && !newStationsObject[station.Name].Lines.includes(station.LineCode1)) {
                newStationsObject[station.Name].Lines.push(station.LineCode1)
            }
            if (station.LineCode2 != null && !newStationsObject[station.Name].Lines.includes(station.LineCode2)) {
                newStationsObject[station.Name].Lines.push(station.LineCode2)
            }
            if (station.LineCode3 != null && !newStationsObject[station.Name].Lines.includes(station.LineCode3)) {
                newStationsObject[station.Name].Lines.push(station.LineCode3)
            }
            if (station.LineCode4 != null && !newStationsObject[station.Name].Lines.includes(station.LineCode4)) {
                newStationsObject[station.Name].Lines.push(station.LineCode4)
            }

            if (newStationsObject[station.Name].Codes.includes(station.StationTogether1)) {
                if (station.StationTogether2 !== '' && [station.Name].Codes.includes(station.StationTogether2)) {
                    newStationsList.push(newStationsObject[station.Name])
                } else if (station.StationTogether2 === '') {
                    newStationsList.push(newStationsObject[station.Name])
                }
            }
        } else {
            newStation.Name = station.Name
            newStation.Address = station.Address
            newStation.Lat = station.Lat
            newStation.Lon = station.Lon
            newStation.label = station.Name

            newStation.Codes = []
            newStation.Codes.push(station.Code)
            newStation.Lines = []
            if (station.LineCode1 != null) {
                newStation.Lines.push(station.LineCode1)
            }
            if (station.LineCode2 != null) {
                newStation.Lines.push(station.LineCode2)
            }
            if (station.LineCode3 != null) {
                newStation.Lines.push(station.LineCode3)
            }
            if (station.LineCode4 != null) {
                newStation.Lines.push(station.LineCode4)
            }

            if (station.StationTogether1 === '') {
                newStationsList.push(newStation)
            } else {
                newStationsObject[station.Name] = newStation
            }
        }


    })

    return newStationsList
}

function App() {

    const [selectedStation, setSelectedStation] = useState(null)
    const [stations, setStations] = useState([])

    const setSelectedStationFromStationName = (stationName) => {
        stationName = stationName.replace("|", " ")
        stationName = stationName.replace(" - ", "-")
        stationName = stationName.replace('Church VT/UVA', 'Church-VT/UVA')
        stationName = stationName.replace('Vienna Fairfax', 'Vienna/Fairfax')
        stationName = stationName.replace('Loring Merrifield', 'Loring-Merrifield')
        stationName = stationName.replace('Bottom GWU', 'Bottom-GWU')
        stationName = stationName.replace('Road Seat', 'Road-Seat')
        stationName = stationName.replace('Stadium Armory', 'Stadium-Armory')
        stationName = stationName.replace('Archives-Navy Mem\'l', 'Archives-Navy Memorial-Penn Quarter')
        stationName = stationName.replace('Mt Vernon Sq-7th St Convention Center', 'Mt Vernon Sq 7th St-Convention Center')
        stationName = stationName.replace('Shaw-Howard Univ', 'Shaw-Howard U')
        stationName = stationName.replace('U St/', 'U Street/')
        stationName = stationName.replace('Ave Petworth', 'Ave-Petworth')
        stationName = stationName.replace('Park-Zoo Adams', 'Park-Zoo/Adams')
        stations.every((station) => {
            if (station.Name.includes(stationName)) {
                setSelectedStation(station)
                return false
            }
            return true
        })
    }

    useEffect(() => {
        getStationList()
            .then((r) => {
                setStations(combineStations(r.data.Stations))
            })
    }, [])

    return (
        <div>
            <StationFinder selectedStation={selectedStation} setSelectedStation={setSelectedStation} stations={stations} />
            <Map setSelectedStationFromName={setSelectedStationFromStationName}/>
        </div>
    );
}

export default App;
