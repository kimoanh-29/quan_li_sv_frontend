import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Plan = () => {

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
                        <tr>
                        <td>1</td>
                        <td>CT211</td>
                        <td>An ninh mạng</td>
                        <td>3</td>
                        <td>2023-2024</td>
                        <td>1</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>CT274</td>
                        <td>Lập trình thiết bị di động</td>
                        <td>3</td>
                        <td>2023-2024</td>
                        <td>1</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>CT226</td>
                        <td>Niên luận cơ sở mạng máy tính và truyền thông</td>
                        <td>3</td>
                        <td>2023-2024</td>
                        <td>1</td>
                        </tr>
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
                            <strong>9</strong>
                        </td>
                        </tr>
                    </tfoot>
                </table>

            </div>
            <Footer/>
        </div>
    );
};

export default Plan;