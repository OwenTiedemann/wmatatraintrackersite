import {List, Typography} from "@mui/material";
import UpcomingTrainInformationCard from "../components/UpcomingTrainInformationCard";


const StationUpcomingTrainsDisplay = ({ upcomingTrains }) => {

    return (
        <div style={{ maxHeight: 200, width: '100%', overflow: "auto"}}>
            <List style={{ width: '100%'}}>
                {upcomingTrains.map((train) => {
                    return (
                        <UpcomingTrainInformationCard train={train}/>
                    )
                } )}
            </List>
        </div>
    )
}

export default StationUpcomingTrainsDisplay;
