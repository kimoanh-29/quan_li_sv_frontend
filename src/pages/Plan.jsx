import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import planApi  from '../apis/planApi';
import authUtils from '../utils/authUtils';

import React, { useEffect, useState } from 'react';

const Plan = () => {

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

    console.log(plans);

    const totalCredits = plans.reduce((acc, plan) => acc + plan.subject.credits, 0);

    return (
        <div>
            <Header/>
            <div className="container p-3 my-1 border border-primary shadow p-3 mt-3">
                <h3 className="text-center tieude_dt">KẾ HOẠCH HỌC TẬP</h3>
                <table className="table table-striped rounded">
                    <thead className="table-primary">
                        <tr>
                        <th width="6%">STT</th>
                        <th width="11%">Mã học phần</th>
                        <th width="60%">Tên học phần</th>
                        <th width="6%">Số TC</th>
                        <th width="11%">Năm học</th>
                        <th width="6%">Học kỳ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((plan, index) => (
                            <tr key={plan._id}>
                                <td>{index + 1}</td>
                                <td>{plan.subject.code}</td>
                                <td>{plan.subject.name}</td>
                                <td>{plan.subject.credits}</td>
                                <td>{plan.academic_year.start_year}-{plan.academic_year.end_year}</td>
                                <td>{plan.semester.name}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className="table-primary">
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td style={{ textAlign: "right", paddingRight: 15, fontWeight: "bold" }}>
                            Tổng số tín chỉ:
                        </td>
                        <td>
                            <strong>{totalCredits}</strong>
                        </td>
                        </tr>
                    </tfoot>
                </table>
                <a href="/plan_create">Cập nhập kế hoạch học tập</a>

            </div>
            <Footer/>
        </div>
    );
};

export default Plan;