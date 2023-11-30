import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Result = () => {

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
                        <th width="6%">Nhóm</th>
                        <th width="6%">Tín chỉ</th>
                        <th width="8%">Điểm chữ</th>
                        <th width="8%">Điểm số</th>
                        <th width="8%">Tích lũy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>CT211</td>
                        <td>An ninh mạng</td>
                        <td>03</td>
                        <td>3</td>
                        <td>A</td>
                        <th>9.0</th>
                        <th>*</th>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>CT274</td>
                        <td>Lập trình thiết bị di động</td>
                        <td>03</td>
                        <td>3</td>
                        <td>A</td>
                        <th>9.0</th>
                        <th>*</th>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>CT226</td>
                        <td>Niên luận cơ sở mạng máy tính và truyền thông</td>
                        <td>03</td>
                        <td>3</td>
                        <td>A</td>
                        <th>9.0</th>
                        <th>*</th>
                        </tr>
                    </tbody>
                </table>

            </div>
            <Footer/>
        </div>
    );
};

export default Result;