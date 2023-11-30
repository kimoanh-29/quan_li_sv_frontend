const Footer = props => {
    return (
        <footer className="text-center text-lg-start bg-white">
            <section className="main-footer">
            {/* Grid row */}
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3 text-white">
                {/* Grid column */}
                <div
                    className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                    style={{ overflow: "hidden" }}
                >
                    {/* Content */}
                    <img
                    id="footer-logo"
                    src={require('../../assets/images/CTU_logo_white.png')}
                    alt=""
                    width="110%"
                    />
                    <div className="info-co">
                    <img
                        id="footer-title"
                        src={require('../../assets/images/footer-tittle.png')}
                        alt=""
                        width="120%"
                    />
                    <div className="footer-link-icon">
                        <a href="" className="me-4 text-white">
                        <i className="fa fa-facebook-f" />
                        </a>
                        <a href="" className="me-4 text-white">
                        <i className="fa fa-twitter" />
                        </a>
                        <a href="" className="me-4 text-white">
                        <i className="fa fa-google" />
                        </a>
                        <a href="" className="me-4 text-white">
                        <i className="fa fa-instagram" />
                        </a>
                        <a href="" className="me-4 text-white">
                        <i className="fa fa-linkedin" />
                        </a>
                        <a href="" className="me-4 text-white">
                        <i className="fa fa-github" />
                        </a>
                    </div>
                    </div>
                </div>
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 p-0">
                    {/* Links */}
                    <h4 className="text-uppercase fw-bold mb-4">Liên kết</h4>
                    <p>
                    <i className="fa fa-briefcase me-2" aria-hidden="true" />
                    <a
                        href="https://dp.ctu.edu.vn/"
                        className="text-reset footer-link"
                        target="_blank"
                    >
                        {" "}
                        PHÒNG TỔ CHỨC CÁN BỘ
                    </a>
                    </p>
                    <p>
                    <i className="fa fa-briefcase me-2" aria-hidden="true" />
                    <a
                        href="https://daa.ctu.edu.vn/"
                        className="text-reset footer-link"
                        target="_blank"
                    >
                        {" "}
                        PHÒNG ĐÀO TẠO
                    </a>
                    </p>
                    <p>
                    <i className="fa fa-briefcase me-2" aria-hidden="true" />
                    <a
                        href="https://dsa.ctu.edu.vn/"
                        className="text-reset footer-link"
                        target="_blank"
                    >
                        {" "}
                        PHÒNG CT SINH VIÊN
                    </a>
                    </p>
                    <p>
                    <i className="fa fa-briefcase me-2" aria-hidden="true" />
                    <a
                        href="https://dra.ctu.edu.vn/"
                        className="text-reset footer-link"
                        target="_blank"
                    >
                        {" "}
                        PHÒNG QL KHOA HỌC
                    </a>
                    </p>
                </div>
                {/* Grid column */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    {/* Links */}
                    <h4 className="text-uppercase fw-bold mb-4">ĐOÀN THỂ</h4>
                    <p>
                    <i className="fa fa-briefcase me-2" aria-hidden="true" />
                    <a
                        href="http://cpv.ctu.edu.vn/"
                        className="text-reset footer-link"
                        target="_blank"
                    >
                        VP ĐẢNG ỦY TRƯỜNG
                    </a>
                    </p>
                    <p>
                    <i className="fa fa-briefcase me-2" aria-hidden="true" />
                    <a
                        href="http://tu.ctu.edu.vn/"
                        className="text-reset footer-link"
                        target="_blank"
                    >
                        CÔNG ĐOÀN TRƯỜNG
                    </a>
                    </p>
                    <p>
                    <i className="fa fa-briefcase me-2" aria-hidden="true" />
                    <a
                        href="http://yu.ctu.edu.vn/"
                        className="text-reset footer-link"
                        target="_blank"
                    >
                        VP ĐOÀN TRƯỜNG
                    </a>
                    </p>
                    <p>
                    <i className="fa fa-briefcase me-2" aria-hidden="true" />
                    <a
                        href="http://www.cit.ctu.edu.vn/doankhoa/"
                        className="text-reset footer-link"
                        target="_blank"
                    >
                        VP ĐOÀN KHOA
                    </a>
                    </p>
                </div>
                {/* Grid column */}
                {/* Grid column */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    {/* Links */}
                    <h4 className="text-uppercase fw-bold mb-4">LIÊN HỆ</h4>
                    <p>
                    <i className="fa fa-home me-2" />
                    Khu 2, đường 3/2, Phường Xuân Khánh, Ninh Kiều, TP. Cần Thơ, Việt
                    Nam
                    </p>
                    <p>
                    <i className="fa fa-envelope me-2" />
                    office@cit.ctu.edu.vn
                    </p>
                    <p>
                    <i className="fa fa-phone me-2" />
                    +84 292 3 734713
                    </p>
                </div>
                {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
            <div className="text-white fw-bold " id="copyright">
                © 2023 Đại học Cần Thơ
            </div>
            </section>
        </footer>
    )
}

export default Footer;