import {TextField, Button, Paper, Box} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import {useForm, Controller} from "react-hook-form";
import {generateToken, getCookie} from '../../helpers/helpers';
import {useNavigate} from 'react-router-dom'
import {users} from "../../users-data/users";
import {useEffect, useState} from "react";


const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);


    useEffect(() => {
        if (getCookie("token")) {
            navigate("/markets");
        }
    }, [])
    const {control, handleSubmit} = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const checkAuth = (email, password) => {
        const userFound = users.find((user) => user.email === email && user.password === password);
        if (userFound) {
            const token = generateToken();
            document.cookie = `token=${token}`;
            navigate("/markets");
        } else {
            setError(true);
        }

    }

    const onSubmit = data => {
        if (data.email !== "" && data.password !== "") {
            checkAuth(data.email, data.password);
        }
    }

    return <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Paper elevation={10} sx={{padding: "20px", height: "70vh", width: "280px", margin: "30px auto"}}>
            <LoginIcon fontSize="large"/>
            <h2>Sign In</h2>
            <Controller
                name="email"
                control={control}
                render={({field}) => <TextField error={error} label="Email" placeholder="Enter Email" fullWidth
                                                autoFocus required
                                                sx={{marginTop: "20px"}} {...field} />}
            />
            <Controller
                name="password"
                control={control}
                render={({field}) => <TextField error={error} label="Password" placeholder="Enter Password"
                                                type="password" fullWidth
                                                autoFocus required
                                                sx={{marginTop: "20px"}} {...field} />}
            />
            <Button type="submit" color="primary" fullWidth sx={{margin: "20px 0"}}>Sign In</Button>
            {error && <span style={{color: "red"}}> Email or password incorrect</span>}
        </Paper>
    </Box>
}

export default Login;
