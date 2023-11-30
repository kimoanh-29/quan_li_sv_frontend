import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Home = () => {

    return (
        <div>
            <Header/>
            <main>
                <div className="container p-3 border mt-0 my-0">
                <div className="border shadow border-primary">
                    <h2 className="nenvang_tc text-center pb-0">
                    Đồng thuận - Tận tâm - Chuẩn mực - Sáng tạo
                    </h2>
                    <div>
                    {/* Carousel */}
                    <div id="demo" className="carousel slide" data-bs-ride="carousel">
                        {/* Indicators/dots */}
                        <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to={0}
                            className="active"
                        />
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to={1}
                        />
                        <button
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide-to={2}
                        />
                        </div>
                        {/* The slideshow/carousel */}
                        <div className="carousel-inner p-0">
                        <div className="carousel-item active">
                            <img
                                src={require('../assets/images/sk3.png')}
                                className="d-block"
                                style={{ width: "100%", height: "60ex" }}
                            />
                            <div className="carousel-caption"></div>
                        </div>
                        <div className="carousel-item">
                            <img
                            src={require('../assets/images/sk2.jpg')}
                            className="d-block"
                            style={{ width: "100%", height: "60ex" }}
                            />
                            <div className="carousel-caption"></div>
                        </div>
                        <div className="carousel-item">
                            <img
                            src={require('../assets/images/certificate-computer-network.jpg')}
                            className="d-block"
                            style={{ width: "100%", height: "60ex" }}
                            />
                            <div className="carousel-caption"></div>
                        </div>
                        {/* Left and right controls/icons */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" />
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" />
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container p-2 my-3 border border-primary shadow">
                    <h3 className="home-title rounded-top">TIN TỨC</h3>
                    <div className="row ">
                    <div className="col-sm-4">
                        <img src={require('../assets/images/sk2.jpg')} alt="" width="100%" />
                        <h6>
                        <a href="https://www.cit.ctu.edu.vn/index.php/ban-tin/tieu-di-m/946-ngay-h-i-vi-c-lam-cntt-09-12-2023">
                            Ngày hội việc làm CNTT 09/12/2023 nhằm tạo cầu nối giữa Nhà
                            trường với các tổ chức tuyển dụng để cung ứng nguồn nhân lực
                            Công nghệ thông tin (CNTT)
                        </a>
                        </h6>
                        <p>
                        Trường Công nghệ Thông tin và Truyền thông tổ chức Ngày hội việc
                        làm tháng 12/2023. Đối tượng: Sinh viên Trường CNTT&amp;TT và các
                        bạn yêu thích CNTT....
                        </p>
                    </div>
                    <div className="col-sm-4 container">
                        <img src={require('../assets/images/tintuc2.jpg')} alt="" width="100%" />
                        <h6>
                        <a href="https://www.cit.ctu.edu.vn/index.php/ban-tin/tieu-di-m/906-tru-ng-cong-ngh-thong-tin-va-truy-n-thong-ti-p-don-va-lam-vi-c-v-i-tru-ng-korea-advanced-institute-of-science-and-technology-kaist">
                            Tiếp đón và làm việc với Trường Korea Advanced Institute of
                            Science and Technology (KAIST)
                        </a>
                        </h6>
                        <p>
                        Sáng ngày 03/7/2023, Trường Công nghệ thông tin và truyền thông
                        (CNTT-TT), Trường Đại học Cần Thơ (ĐHCT) vui mừng đón tiếp đoàn
                        đại biểu đến từ Trường Korea Advanced Institute of Science and
                        Technology (KAIST) đến thăm và làm việc. Dẫn đầu là GS. Kang
                        SunHong cùng ....
                        </p>
                    </div>
                    <div className="col-sm-4 container">
                        <img src={require('../assets/images/tintuc3.jpg')} alt="" width="100%" />
                        <h6>
                        <a href="https://www.cit.ctu.edu.vn/index.php/ban-tin/tieu-di-m/942-h-i-ngh-qu-c-t-l-n-th-nh-t-v-h-th-ng-thong-minh-va-khoa-h-c-d-li-u-isds-2023">
                            Hội nghị Quốc tế lần thứ nhất về Hệ thống thông minh và Khoa học
                            dữ liệu (ISDS)
                        </a>
                        </h6>
                        <p>
                        Trường Công nghệ Thông tin và Truyền thông (CICT) của Trường ĐHCT
                        được thành lập vào năm 1994, là một trong 7 đơn vị trọng điểm
                        trong lĩnh vực Công nghệ thông tin tại Việt Nam với sứ mệnh đào
                        tạo, nghiên cứu khoa học và chuyển giao công nghệ trong lĩnh vực
                        Công nghệ thông tin và truyền thông (CNTT&amp;TT)...
                        </p>
                    </div>
                    </div>
                </div>
                <div className="container p-2 my-3 border border-primary shadow ">
                    <h3 className="home-title rounded-top">VIDEO NỔI BẬT</h3>
                    <h4>Ngành Truyền thông Đa phương tiện</h4>
                    <video controls width="100%" >
                        <source src={require('../assets/video/GioiThieuMangMayTinhVaTruyenThongDuLieu.mp4')} type="video/mp4"/>
                        Videos không khả dụng
                    </video>
                    <p></p>
                    <ul>
                    <h3>Giới thiệu:</h3>
                    <li>
                        Ngành Mạng máy tính và Truyền thông dữ liệu là một ngành nghiên cứu
                        những nguyên lý kết nối các máy tính thành mạng; cách thiết kế, xây
                        dựng một hệ thống mạng từ mạng nội bộ cho đến mạng diện rộng có kết
                        nối toàn cầu; sự trao đổi thông tin, dữ liệu giữa các thành phần
                        trên mạng; phát triển ứng dụng mạng, ứng dụng Web, xử lý dữ liệu lớn
                        và tính toán hiệu năng cao.
                    </li>
                    <li>
                        Chương trình nhằm đào tạo kỹ sư có kiến thức cơ sở lý thuyết, toán
                        và khoa học được sử dụng trong ngành mạng máy tính và truyền thông
                        dữ liệu. Sinh viên được trang bị các kiến thức cơ sở, chuyên sâu của
                        ngành mạng máy tính và truyền thông dữ liệu, khả năng phân tích,
                        thiết kế, đề xuất giải pháp, đáp ứng nhu cầu của một tổ chức hay cá
                        nhân, phát triển ứng dụng mạng, phần mềm trên thiết bị di động, phần
                        mềm tự do nguồn mở, ứng dụng web, dịch vụ web, mô hình
                        client-server, tính toán lưới, điện toán đám mây, dữ liệu lớn, giải
                        thuật song song, phân tán và internet kết nối vạn vật. Sinh viên có
                        khả năng giao tiếp bằng Anh ngữ thông thường và chuyên ngành.
                    </li>
                    </ul>
                    <ul>
                    <h3>Vị trí việc làm:</h3>
                    <li>Kỹ sư quản trị mạng máy tính;</li>
                    <li>
                        Chuyên viên tư vấn, phân tích, thiết kế, xây dựng, bảo trì các hệ
                        thống mạng;
                    </li>
                    <li>Lập trình viên tại các công ty phần mềm;</li>
                    <li>Giảng viên ở các trường đại học, cao đẳng.</li>
                    </ul>
                    <ul>
                    <h3>Nơi làm việc:</h3>
                    <li>
                        Công ty, doanh nghiệp, tập đoàn tư nhân về lĩnh vực Công nghệ thông
                        tin, Mạng máy tính và truyền thông dữ liệu;
                    </li>
                    <li>Cơ quan, doanh nghiệp nhà nước;</li>
                    <li>Các Trường đại học, cao đẳng, trung cấp.</li>
                    </ul>
                    <p />
                </div>
                <div className="container p-2 my-3 border border-primary shadow">
                    <h3 className="home-title rounded-top">GÓC ẢNH CTU</h3>
                    <div className="row goc-anh-row">
                    <div className="column goc-anh-column">
                        <img src={require('../assets/images/goc-anh1.jpg')} />
                        <img src={require('../assets/images/goc-anh2.jpg')} />
                        <img src={require('../assets/images/goc-anh3.jpeg')} />
                    </div>
                    <div className="column goc-anh-column">
                        <img src={require('../assets/images/goc-anh4.jpeg')} />
                        <img src={require('../assets/images/goc-anh5.png')} />
                    </div>
                    <div className="column goc-anh-column">
                        <img src={require('../assets/images/goc-anh7.jpg')} />
                        <img src={require('../assets/images/goc-anh8.jpeg')} />
                        <img src={require('../assets/images/goc-anh9.jpeg')} />
                    </div>
                    </div>
                </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;