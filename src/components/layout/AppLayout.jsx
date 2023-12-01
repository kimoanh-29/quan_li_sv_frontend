import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authUtils from '../../utils/authUtils';
import { setUser } from '../../redux/features/userSlice'

const AppLayout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const checkAuth = async () => {
            const user = await authUtils.isAuthenticated();
            console.log(user);
            if (!user) {
                navigate('/login');
            }else{
                dispatch(setUser(user));
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

export default AppLayout;