import SearchIcon from '@mui/icons-material/Search';
import { Box, Toolbar } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from 'app/styles/mui';
import classes from './SearchForm.module.css';
import { FC } from 'react';

interface Props {
    handleSearch: (event: any) => void;
}

export const SearchForm: FC<Props> = ({ handleSearch }) => {
    return (
        <Box sx={{ padding: '0' }}>
            <Toolbar sx={{ padding: '0' }} className={classes.search}>
                <Search onKeyDown={handleSearch}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase placeholder='Поиск по ID…(Press Enter to search)' inputProps={{ 'aria-label': 'search' }} />
                </Search>
            </Toolbar>
        </Box>
    );
};
