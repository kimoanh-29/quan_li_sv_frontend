import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';

import planApi  from '../apis/planApi';

const Score = () => {

    const { id, user_id } = useParams();

    const [formData, setFormData] = useState({
        score_1: '',
        score_2: '',
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
            const plan = await planApi.update({
                user_id: user_id,
                subject_id: id,
                ...formData
            });
            console.log(plan.data);

            // Reset the form after submission
            setFormData({
                score_1: '',
                score_2: '',
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
                    <h2>NHẬP ĐIỂM</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-form">
                            <span>Điểm số</span>
                            <input
                            type="text"
                            id="score_1"
                            name="score_1"
                            value={formData.score_1}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-form">
                            <span>Điểm chữ</span>
                            <input
                            type="text"
                            id="score_2"
                            name="score_2"
                            value={formData.score_2}
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

export default Score;