import React, { useState } from 'react';
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import userApi from '../apis/userApi'

const CreateUser = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        full_name: '',
        gender: '',
        birth_date: '',
        address: '',
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
            const user = await userApi.create(formData);
            console.log(user);

            // Reset the form after submission
            setFormData({
                username: '',
                password: '',
                full_name: '',
                gender: '',
                birth_date: '',
                address: '',
            });

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
                    <h2>TẠO NGƯỜI DÙNG MỚI</h2>
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
                        <div className="input-form">
                            <span>Họ và tên</span>
                            <input
                            type="text"
                            id="full_name"
                            name="full_name"
                            value={formData.full_name}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-form">
                            <span>giới tính</span>
                            <input
                            type="text"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-form">
                            <span>ngày sinh</span>
                            <input
                            type="text"
                            id="birth_date"
                            name="birth_date"
                            value={formData.birth_date}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-form">
                            <span>Địa chỉ</span>
                            <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
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

export default CreateUser;