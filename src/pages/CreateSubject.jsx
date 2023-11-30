import React, { useState } from 'react';
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import subjectApi from '../apis/subjectApi'

const CreateSubject = () => {

    const [formData, setFormData] = useState({
        name: '',
        code: '',
        credits: '',
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
            const subject = await subjectApi.create(formData);
            console.log(subject);

            // Reset the form after submission
            setFormData({
                name: '',
                code: '',
                credits: '',
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
                    <h2>TẠO MÔN HỌC MỚI</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-form">
                            <span>TÊN MÔN HỌC</span>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-form">
                            <span>MÃ MÔN HỌC</span>
                            <input
                            type="text"
                            id="code"
                            name="code"
                            value={formData.code}
                            onChange={handleInputChange}
                            />
                        </div>
                        <div className="input-form">
                            <span>TÍN CHỈ</span>
                            <input
                            type="text"
                            id="credits"
                            name="credits"
                            value={formData.credits}
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

export default CreateSubject;