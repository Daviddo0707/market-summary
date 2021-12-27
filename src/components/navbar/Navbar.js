import {AppBar, Box, Toolbar, Typography, IconButton, Tooltip} from '@mui/material';
import {getCookie, deleteCookie} from "../../helpers/helpers";
import {useEffect, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const handleDeleteCookie = () => {
        deleteCookie("token")
        navigate('/');
    }
    useEffect(() => {
        setToken(getCookie('token'))
    }, [location]);

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{flexGrow: 1}}>
                        AudiTech Tech assignment
                    </Typography>
                    {token && <Tooltip title="Sign Out">
                        <IconButton onClick={handleDeleteCookie}>
                            <LogoutIcon fontSize="large" sx={{color: "white"}}/>
                        </IconButton></Tooltip>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );

}
export default Navbar;
