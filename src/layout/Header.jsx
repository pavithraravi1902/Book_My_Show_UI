import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.2),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '300px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ccc',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  width: '100%',
}));

const Header = ({ city, setCity }) => {
  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#111' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#f84464' }}>
          BookMyShow
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Select
  value={city}
  onChange={handleChange}
  variant="outlined"
  size="small"
  displayEmpty
  sx={{
    color: 'white',
    borderColor: 'white',
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
  }}
>
  <MenuItem value="" disabled>
    Select City
  </MenuItem>
  <MenuItem value="Chennai">Chennai</MenuItem>
  <MenuItem value="Mumbai">Mumbai</MenuItem>
  <MenuItem value="Bangalore">Bangalore</MenuItem>
  <MenuItem value="Delhi">Delhi</MenuItem>
</Select>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search movies, events…" />
          </Search>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button variant="contained" color="error" size="small">
            Sign In
          </Button>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
