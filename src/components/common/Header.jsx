const Header = props => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="container-fluid">
                <div className="collapse navbar-collapse text-center" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a
                        className="nav-link btn-outline-light nav-title"
                        aria-current="page"
                        href="/"
                    >
                        Trang chủ
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        className="nav-link btn-outline-light nav-title"
                        aria-current="page"
                        href="/overview"
                    >
                        Đào tạo
                    </a>
                    </li>
                    <li className="nav-item ">
                    <a
                        className="nav-link btn-outline-light nav-title"
                        aria-current="page"
                        href="/plan"
                    >
                        Kế hoạch học tập
                    </a>
                    </li>
                    <li className="nav-item ">
                    <a
                        className="nav-link btn-outline-light nav-title"
                        aria-current="page"
                        href="/result"
                    >
                        Kết quả học tập
                    </a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-outline-light" type="submit">
                    Search
                    </button>
                </form>
                </div>
            </div>
            </nav>
            <img id="logo" src={require('../../assets/images/logo.png')} alt="" />
            <div className="header-title">
            <div id="header-title-1">
                KHOA MẠNG MÁY TÍNH &amp; TRUYỀN THÔNG DỮ LIỆU
            </div>
            <div id="header-title-2">DATA COMMUNICATION AND COMPUTER NETWORK</div>
            </div>
            <div id="header-title-3">TRƯỜNG ĐẠI HỌC CẦN THƠ</div>
        </header>
    )
}

export default Header;