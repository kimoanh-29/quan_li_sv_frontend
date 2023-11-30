import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import authUtils from '../../utils/authUtils';
// import { setUser } from '../../redux/features/userSlice'

const AppLayout = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            // const user = await authUtils.isAuthenticated();
            // if (!user) {
            //     navigate('/login');
            // }else{
                // dispatch(setUser(user));
                setLoading(false);
            // }
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