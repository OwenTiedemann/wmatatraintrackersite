import {Avatar, Card, CardHeader, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

function getLineColor(line) {
    if (line === 'RD') {
        return '#be1337'
    } else if (line === 'BL') {
        return '#0795d3'
    } else if (line === 'OR') {
        return '#da8707'
    } else if (line === 'SV') {
        return '#a2a4a1'
    } else if (line === 'YL') {
        return '#f5d415'
    } else if (line === 'GR') {
        return '#00b050'
    }
}

function boardingInformation(min) {
    if (min !== "BRD" && min !== "ARR") {
        return (`${min} min`)
    } else {
        return min
    }
}

const UpcomingTrainInformationCard = ({ train }) => {

    return (
        <ListItem>
            <div style={{ borderRadius: 45, height: 24, width: 24, zIndex: 1050, backgroundColor: getLineColor(train.Line), marginRight: 5 }}/>
            <ListItemText>
                <Typography>{train.DestinationName}</Typography>
            </ListItemText>
            <Typography style={{ display: 'flex', justifyContent: 'flex-end', textAlign: 'right'}}>{boardingInformation(train.Min)}</Typography>
        </ListItem>
    )
}

export default UpcomingTrainInformationCard
