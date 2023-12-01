import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import subjectApi  from '../apis/subjectApi';
import planApi  from '../apis/planApi';
import academic_year_Api  from '../apis/academic_year_Api';
import semesterApi  from '../apis/semesterApi';

import React, { useEffect, useState } from 'react';
import authUtils from '../utils/authUtils';


const CreatePlan = () => {

    const [subjects, setSubjects] = useState([]);
    const [academic_year, set_academic_year] = useState([]);
    const [user, setUser] = useState([]);
    const [semester, setSemester] = useState([]);

    useEffect(() => {
    // Fetch subjects from your API when the component mounts
    const fetch = async () => {
        try {

            const user = await authUtils.isAuthenticated();

            const responseSubject = await subjectApi.getAll();
            const responseSemester = await semesterApi.getAll();
            const response_Academic_year = await academic_year_Api.getAll();
            setSubjects(responseSubject.data);
            setSemester(responseSemester.data);
            setUser(user);
            set_academic_year(response_Academic_year.data);
            
        } catch (error) {
            console.error('Error fetching subjects', error);
        }
    };

    fetch();
    }, []);

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

        const { selectedSubject, selectedSemester, selectedAcademicYear, /* ... other form fields ... */ } = formData;

        console.log(selectedSubject);
        console.log(selectedSemester);
        console.log(selectedAcademicYear);
        console.log(user._id);

        try {
            const plan = await planApi.create({
                user_id: user._id,
                subject_id: selectedSubject,
                semester_id: selectedSemester,
                academic_year_id: selectedAcademicYear
            });
            console.log(plan);

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
                    <h2>Cập nhâp kế hoạch học tập</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Chọn môn học:
                            <select 
                                className='custom-select'
                                name="selectedSubject"
                                value={formData.selectedSubject}
                                onChange={handleInputChange}
                                
                            >
                                {subjects.map((subject, index) => (
                                    <option className='option' key={subject._id} value={subject._id}>{subject.name}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Chọn học kỳ:
                            <select 
                                className='custom-select custom'
                                name="selectedSemester"
                                value={formData.selectedSemester}
                                onChange={handleInputChange}
                            >
                                {semester.map((subject, index) => (
                                    <option className='option' key={subject._id} value={subject._id}>{subject.name}</option>
                                ))}
                            </select>
                        </label>   
                        <label>
                            Chọn năm học:
                            <select 
                                className='custom-select custom'
                                name="selectedAcademicYear"
                                value={formData.selectedAcademicYear}
                                onChange={handleInputChange}
                            >
                                {academic_year.map((subject, index) => (
                                    <option className='option' key={subject._id} value={subject._id}>{subject.start_year} - {subject.end_year}</option>
                                ))}
                            </select>
                        </label>
                        
                        <button className='custom-select custom1' type="submit">Cập nhập</button>
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

export default CreatePlan;