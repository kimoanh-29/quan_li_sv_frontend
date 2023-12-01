import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import authUtils from '../../utils/authUtils';

const AuthLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const isAuth = await authUtils.isAuthenticated();
                console.log(isAuth);
                if (!isAuth) {

                }else{
                    navigate('/overview');
                }
            } catch (error) {
                
            }
            
            
            
        }
        checkAuth();
    }, [navigate]);
    
    return (
        (
            
            <Outlet/>
                    
        )
    )
}

export default AuthLayout;