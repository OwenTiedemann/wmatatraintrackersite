import {Autocomplete, IconButton, InputAdornment, Paper, TextField} from "@mui/material";
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@material-ui/icons/Cancel';


const Search = ({searchableData, setResponse}) => {

    return (
        <Autocomplete
            disablePortal
            freeSolo={true}
            id="search-bar"
            options={searchableData}
            sx={{width: '100%', backgroundColor: 'white', borderRadius: 45}}
            onChange={(event, newValue) => {
                setResponse(newValue);
            }}
            renderInput={(params) => {
                return (
                    <TextField {...params} variant={'standard'}
                        InputProps={{
                            ...params.InputProps,
                            style: {
                                borderRadius: 45,
                                paddingLeft: 10
                            },
                            disableUnderline: true
                        }}
                    />
                )
            }}
            autoComplete
            ListboxProps={{ style:{ maxHeight: '150px'}}}
        />
    )
}

export default Search
