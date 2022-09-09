import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import './style.scss'

const SearchInput = ({placeholder, value, onChange}) => {
    return (
        <TextField
            className={'search-input'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            size={'small'}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            variant="outlined"
        />
    )
}

export default SearchInput