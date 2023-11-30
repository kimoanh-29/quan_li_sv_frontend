import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import { useAppContext } from '../utils/GlobalContext';

import React, { useState, useEffect } from 'react';
import subjectApi from '../apis/subjectApi';

// import { setSubject } from '../redux/features/boardSlice'
// import { useDispatch, useSelector } from 'react-redux'

const Subject = () => {

    const { subjects, setSubjects } = useAppContext();

    useEffect(() => {
    // Fetch subjects from your API when the component mounts
    const fetchSubjects = async () => {
        try {
            const response = await subjectApi.getAll();
            // console.log(response);
            setSubjects(response.data);
            
        } catch (error) {
            console.error('Error fetching subjects', error);
        }
    };

    fetchSubjects();
    }, []);

    return (
        <div>
            <Header/>
                <div className="container p-3 my-1 border border-primary shadow p-3 mt-3">
                    <h3 className="text-center tieude_dt">TRANG QUẢN LÝ</h3>
                    <table className="table table-striped rounded">
                        <thead className="table-primary">
                            <tr>
                            <th width="8%">STT</th>
                            <th width="11%">Mã học phần</th>
                            <th width="65%">Tên học phần</th>
                            <th width="16%">Số TC</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {subjects.map((subject, index) => (
                            <tr key={subject._id}>
                                <td>{index + 1}</td>
                                <td>{subject.code}</td>
                                <td>{subject.name}</td>
                                <td>{subject.credits}</td>
                            </tr>
                        ))}
                            
                        </tbody>
                        <tfoot>
                            <tr className="table-primary">
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td style={{ textAlign: "right", paddingRight: 15, fontWeight: "bold" }}>
                                Tổng số tín chỉ:
                            </td>
                            <td>
                                <strong>9</strong>
                            </td>
                            </tr>
                        </tfoot>
                    </table>
                    <a href="/manager_super_admin/subject/create">THÊM MÔN HỌC</a>
                    <br />
                    <a href="/manager_super_admin/user">TRANG KẾ TIẾP</a>
                </div>
            <Footer/>
        </div>
    );
};

export default Subject;