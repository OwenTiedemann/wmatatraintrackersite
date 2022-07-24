import {Grid} from "@mui/material";

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

const StationLinesDisplay = ({lines}) => {

    return (
        <>
            <Grid container justifyContent="flex-end">
                {lines.map((line) => (
                    <Grid item xs={12 / lines.length}>
                        <div style={{ borderRadius: 45, height: 24, width: 24, zIndex: 1050, backgroundColor: getLineColor(line) }}/>
                    </Grid>
                ))}
            </Grid>

        </>
    )
}

export default StationLinesDisplay;
