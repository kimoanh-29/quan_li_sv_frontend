import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

import planApi  from '../apis/planApi';
import authUtils from '../utils/authUtils';

import React, { useEffect, useState } from 'react';

const Result = () => {

    const [plans, setPlans] = useState([]);

    useEffect(() => {
        // Fetch subjects from your API when the component mounts
        const fetchSubjects = async () => {
            try {
                const user = await authUtils.isAuthenticated();
                console.log(user);
                const response = await planApi.getAll(user._id);
                console.log(response.data);
                setPlans(response.data);
                
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
                <h3 className="text-center tieude_dt">KẾT QUẢ HỌC TẬP</h3>
                <table className="table table-striped rounded">
                    <thead className="table-primary">
                        <tr>
                        <th width="6%">STT</th>
                        <th width="11%">Mã học phần</th>
                        <th width="50%">Tên học phần</th>
                        <th width="6%">Tín chỉ</th>
                        <th width="8%">Điểm chữ</th>
                        <th width="8%">Điểm số</th>
                        <th width="8%">Tích lũy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((plan, index) => (
                            <tr key={plan._id}>
                                <td>{index + 1}</td>
                                <td>{plan.subject.code}</td>
                                <td>{plan.subject.name}</td>
                                <td>{plan.subject.credits}</td>
                                <td>{plan.score_1}</td>
                                <td>{plan.score_2}</td>
                                <td>*</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <Footer/>
        </div>
    );
};

export default Result;