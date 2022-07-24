import Search from "../components/Search";
import {Avatar, Card, CardContent, CardHeader, Divider, Grid} from "@mui/material";
import MetroIcon from '../icons/MetroIcon.png'
import StationInformation from "./StationInformation";
import StationUpcomingTrainsDisplay from "./StationUpcomingTrainsDisplay";
import {useEffect, useState} from "react";
import {getTrainPredictions} from "../api";


const StationFinder = ({selectedStation, setSelectedStation, stations}) => {

    const [incomingTrains, setIncomingTrains] = useState([])
    const [intervalId, setIntervalId] = useState(0)

    useEffect(() => {
        if (selectedStation) {
            clearInterval(intervalId)
            setIntervalId(setInterval(function() {getTrainPredictions(selectedStation.Codes)
                .then((r) => {
                    setIncomingTrains(r.data.Trains)
                })}, 30000))

        }
    }, [selectedStation])

    return (
        <Card style={{
            width: 300,
            backgroundColor: 'lightgray',
            height: 400,
            zIndex: 1000,
            position: 'absolute',
            margin: 10,
            border: "5px solid black",
            borderRadius: 45
        }}>
            <CardHeader
                avatar={<Avatar src={MetroIcon} variant={'rounded'}/>}
                title={'WMATA Train Tracker'}
            />
            <CardContent style={{paddingTop: 0}}>
                <Search searchableData={stations} setResponse={setSelectedStation}/>
                <Divider style={{paddingTop: 0, paddingBottom: 7, borderBottomWidth: 5}}/>
                <StationInformation station={selectedStation}/>
                <Divider style={{paddingTop: 0, paddingBottom: 7, borderBottomWidth: 5}}/>

            </CardContent>
            <CardContent style={{padding: 0}}>
                <StationUpcomingTrainsDisplay upcomingTrains={incomingTrains}/>
            </CardContent>
        </Card>
    )
}

export default StationFinder;
