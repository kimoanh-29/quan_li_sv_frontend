import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import React, { useState, useEffect } from 'react';
import userApi from '../apis/userApi';
import { useParams } from 'react-router-dom';
// import { setSubject } from '../redux/features/boardSlice'
// import { useDispatch, useSelector } from 'react-redux'

const SubjectDetail = () => {

    const [users, setUsers ] = useState([]);

    const { id } = useParams();

    useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await userApi.getAll();
            console.log(response);
            setUsers(response.data);
            
        } catch (error) {
            console.error('Error fetching subjects', error);
        }
    };

    fetchUsers();
    }, []);

    return (
        <div>
            <Header/>
                <div className="container p-3 my-1 border border-primary shadow p-3 mt-3">
                    <h3 className="text-center tieude_dt">QUẢN LÝ ĐIỂM</h3>
                    <table className="table table-striped rounded">
                        <thead className="table-primary">
                            <tr>
                            <th width="10%">STT</th>
                            <th width="22%">Họ và tên</th>
                            <th width="10%">Giới tính</th>
                            <th width="10%">Ngày sinh</th>
                            <th width="15%">Chỉnh sửa điểm</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.full_name}</td>
                                <td>{user.gender}</td>
                                <td>{user.birth_date}</td>
                                <td><a href={'/manager_super_admin/subject/' + id + '/student/' + user._id }>Sửa</a></td>
                            </tr>
                        ))}
                            
                        </tbody>
                    </table>
                    <a href="/manager_super_admin/user/create">THÊM SINH VIÊN</a>
                    <br />
                    <a href="/manager_super_admin/subject">TRANG KẾ TIẾP</a>
                </div>
            <Footer/>
        </div>
    );
};

export default SubjectDetail;