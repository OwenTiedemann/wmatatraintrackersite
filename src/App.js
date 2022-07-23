import './App.css';
import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {Icon} from "leaflet";
import Map from "./features/Map";

function App() {
    return (
        <Map/>
    );
}

export default App;
