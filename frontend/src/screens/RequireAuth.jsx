import {Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { ButtonBase } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Cookies from 'js-cookie';

const RequireAuth = () => {
  // const [user, setUser] = useState(null);
  
  const navigate = useNavigate();

  const checkUserAuthentication = async () => {
    let axiosPromise = await axios.get('/api/users/authentication')
      // setUser(axiosPromise.data.user);
      if(axiosPromise.data.authenticated)
        navigate('/home');
  }


  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/users/login', {});

      if (response.data.success) {
        
        Cookies.set('user', JSON.stringify(response.data.user));
        navigate('/home');
      } 
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };
  useEffect( () => {
    checkUserAuthentication();
  }, []);
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        height: '90vh', 
      }}
    >
      <h1>Coligo</h1>
      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        color="dark"
        style={{ backgroundColor: '#008000', color: 'white' }}
        size="large"
        sx={{ width: '200px', my: 3 }} 
        onClick={handleLogin}
      >
        LogIn
      </Button>
    </Box>
    </>
  );
};

export default RequireAuth;




