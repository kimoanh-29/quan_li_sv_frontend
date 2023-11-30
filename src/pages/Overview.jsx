import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import subjectApi from '../apis/subjectApi';

import React, { useEffect } from 'react';

import { useAppContext } from '../utils/GlobalContext';

const Overview = () => {
    

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
            <main className="container p-3 border mt-0 my-0">
                <div className="container p-3 my-1 border border-primary shadow">
                <h3 className="text-center tieude_dt">MÔ TẢ CHƯƠNG TRÌNH ĐÀO TẠO</h3>
                <table className="table table-striped rounded ">
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
                        Tổng số học phần:
                    </td>
                    <td>
                        <strong>113</strong>
                    </td>
                    </tr>
                    <tr>
                    <td colSpan={4} align="center">
                        <a
                        href="https://www.ctu.edu.vn/ctdt/k48/04_7480102_MangMayTinhVaTruyenThongDuLieu.pdf"
                        target="_blank"
                        >
                        <strong>Download CTĐT dạng file .PDF</strong>
                        </a>
                    </td>
                    </tr>
                </tfoot>
                </table>


                {/* ------ ctdt ----- */}


                </div>
                <div className="container p-3 my-1 border border-primary shadow p-3 mt-3">
                <h3>Thông tin liên quan:</h3>
                <ul>
                    <li>
                    <a
                        target="_blank"
                        href="https://www.ctu.edu.vn/images/upload/TT09/2017-2018/dai-hoc/Mang-may-tinh-va-Truyen-thong-du-lieu.pdf"
                        className="lk_dt"
                    >
                        BẢN MÔ TẢ CHƯƠNG TRÌNH ĐÀO TẠO CỦA KHOA
                    </a>
                    </li>
                    <li>
                    <a
                        target="_blank"
                        href="https://www.ctu.edu.vn/dao-tao/ctdt-dai-hoc.html"
                        className="lk_dt"
                    >
                        CHƯƠNG TRÌNH ĐÀO TẠO ĐẠI HỌC
                    </a>
                    </li>
                    <li>
                    <a
                        target="_blank"
                        href="https://www.ctu.edu.vn/chuong-trinh-dao-tao-sau-dai-hoc.html"
                        className="lk_dt"
                    >
                        CHƯƠNG TRÌNH ĐÀO TẠO SAU ĐẠI HỌC
                    </a>
                    </li>
                    <li>
                    <a
                        target="_blank"
                        href="https://www.ctu.edu.vn/dao-tao/chung-chi-ngan-han.html"
                        className="lk_dt"
                    >
                        CÁC KHÓA ĐÀO TẠO NGẮN HẠN
                    </a>
                    </li>
                    <li>
                    <a target="_blank" href="https://aptech.cusc.vn/" className="lk_dt">
                        LIÊN KẾT VỚI APTECH
                    </a>
                    </li>
                </ul>
                </div>
                <div className="container p-2 my-1  mt-3">
                <div className="row text-center">
                    <div className="col-sm-3">
                    <h2>
                        <span
                        className="number-counter"
                        data-count-from={100}
                        data-count-to={30446}
                        data-count-speed={10000}
                        />
                        +
                    </h2>
                    <p>Sinh viên chính quy</p>
                    </div>
                    <div className="col-sm-3">
                    <h2>
                        <span
                        className="number-counter"
                        data-count-from={100}
                        data-count-to={2861}
                        data-count-speed={1000}
                        />
                        +
                    </h2>
                    <p>Sinh viên các hệ khác</p>
                    </div>
                    <div className="col-sm-3">
                    <h2>
                        <span
                        className="number-counter"
                        data-count-from={100}
                        data-count-to={3209}
                        data-count-speed={1000}
                        />
                        +
                    </h2>
                    <p>Học viên cao học</p>
                    </div>
                    <div className="col-sm-3">
                    <h2>
                        <span
                        className="number-counter"
                        data-count-from={100}
                        data-count-to={2861}
                        data-count-speed={1000}
                        />
                        +
                    </h2>
                    <p>Nghiên cứu sinh</p>
                    </div>
                </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Overview;