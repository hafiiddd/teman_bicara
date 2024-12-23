import logo from "../../Assets/logo-container.png";
import playStoreIcon from "../../Assets/play-store.png";
import appleIcon from "../../Assets/Apple-icon.png";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="text-white">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-3 d-flex h-50 justify-content-center">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center">
              <h4 className="text-start">Tentang Kami</h4>
              <ul className="list-unstyled">
                <li>Konseling</li>
                <li>
                  <Link className={"text-white"} to={"/Quiz"}>
                    Assestment
                  </Link>
                </li>
                <li>
                  <Link className={"text-white"} to={"/artikel"}>
                    Artikel
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-center">
              <h4 className="text-start">Bantuan</h4>
              <ul className="list-unstyled">
                <li>
                <Link className={"text-white"} to="/about?section=section-5">Kontak</Link>
                </li>
                <li><Link className={"text-white"} to="/about?section=section-4">FAQ</Link></li>
                <li>Kebijakan Privasi</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="text-start">Aplikasi Kami</h4>
              <div className="d-flex">
                <a href="#">
                  <img
                    src={playStoreIcon}
                    alt="Play Store"
                    className="img-fluid me-2"
                    style={{ width: "40px" }}
                  />
                </a>
                <a href="#">
                  <img
                    src={appleIcon}
                    alt="App Store"
                    className="img-fluid"
                    style={{ width: "40px" }}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-start mt-3">
              <hr className="border-white" style={{ borderWidth: "5px" }} />
              <p className="mb-0">Copyright 2024.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
