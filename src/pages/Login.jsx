import React, { useState } from 'react';
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { useNavigate } from 'react-router-dom';

import authApi from '../apis/authApi'

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    
      // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
      // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            // Use the formData to create a subject
            const response = await authApi.login(formData);
            console.log(response);

            localStorage.setItem('token', response.data.token);

            // Reset the form after submission
            setFormData({
                username: '',
                password: '',
            });
            navigate('/overview');  

            // Handle success or navigate to another page if needed
        } catch (err) {
            console.error(err);
            // Handle errors
        }
    };

    return (
        <div>
            <Header/>
            <main>
                <div className="noi-dung">
                    <div className="form">
                    <h2>Đăng nhập</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-form">
                            <span>USERNAME</span>
                            <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-form">
                            <span>PASSWORD</span>
                            <input
                            type="text"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            />
                        </div>
                        
                        <button type="submit">TẠO</button>
                        </form>
                    {/* <div id="success-message" style={{ display: "none" }}>
                        Đăng ký thành công!
                    </div> */}
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export default Login;