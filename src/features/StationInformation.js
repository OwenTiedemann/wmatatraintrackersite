import {useEffect, useState} from "react";
import {Grid, Typography} from "@mui/material";
import StationLinesDisplay from "../components/StationLinesDisplay";
import {getTrainPredictions} from "../api";
import StationUpcomingTrainsDisplay from "./StationUpcomingTrainsDisplay";


const StationInformation = ({ station }) => {



    if (station) {
        return (
            <>
                <Grid container style={{ paddingTop: 20}}>
                    <Grid item xs={8} style={{maxWidth: '75%'}}>
                        <Typography style={{ fontSize: 16}}>{station.Name}</Typography>

                    </Grid>

                    <Grid item container xs={4} style={{maxWidth: '25%'}}>
                        <StationLinesDisplay lines={station.Lines}/>
                    </Grid>
                </Grid>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }


}

export default StationInformation
