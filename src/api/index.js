import axios from 'axios'

export const getStationList = async () => {
    try {
        return await axios.get(`https://api.wmata.com/Rail.svc/json/jStations?api_key=${process.env.REACT_APP_WMATA_KEY}`)
    } catch (error) {
        console.log(error)
        return error.response
    }
}

export const getTrainPredictions = async (stationCodes) => {
    try {
        return await axios.get(`https://api.wmata.com/StationPrediction.svc/json/GetPrediction/${stationCodes}?api_key=${process.env.REACT_APP_WMATA_KEY}`)
    } catch (error) {
        console.log(error)
        return error.response
    }
}
