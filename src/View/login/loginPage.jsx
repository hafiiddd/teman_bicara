import "../login/loginPage.css";
import logoIg from "../../assets/skill-icons_instagram.png";
import logoGoogle from "../../assets/Apple-icon.png";
import logo from "../../Assets/logu-green.png";
import logoApple from "../../assets/flat-color-icons_google.png";

function LoginPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="container-fluid min-vh-100 d-flex justify-content-center p-0">
                <div className="row w-100">
                    <div className="col-md-8 p-0 d-flex align-items-center justify-content-center content-column-login">
                        <div className="row d-flex align-items-center justify-content-center">
                            <form onSubmit={handleSubmit}>
                                <div className="text-center mb-4">
                                    <p className="display-1 h1 fw-bolder">Sign In</p>
                                </div>

                                <div className="login-external d-flex justify-content-center">
                                    <button className="btn-lg button-external-login bg-light">
                                        <img 
                                            src={logoGoogle} 
                                            alt="Google logo" 
                                            style={{ width: '20px' }} 
                                            className="me-2" 
                                        />
                                        <small>Google</small>
                                    </button>
                                    <button className="btn-lg button-external-login bg-light">
                                        <img 
                                            src={logoApple} 
                                            alt="Apple logo" 
                                            style={{ width: '20px', paddingBottom: '4px' }} 
                                            className="me-2" 
                                        />
                                        <small>Apple</small>
                                    </button>
                                    <button className=" btn-lg button-external-login bg-light">
                                        <img 
                                            src={logoIg} 
                                            alt="Instagram logo" 
                                            style={{ width: '20px' }} 
                                            className="me-2" 
                                        />
                                        <small>Instagram</small>
                                    </button>
                                </div>
                                <div className="d-flex align-items-center my-3">
                                    <div className="flex-grow-1 border-bottom border-3 mt-1"></div>
                                    <span className="mx-2 fw-bold">Atau</span>
                                    <div className="flex-grow-1 border-bottom border-3 mt-1"></div>
                                </div>

                                <div className="input-group mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg bg-light fs-6" 
                                        placeholder="Email address" 
                                        id="email" 
                                        required 
                                    />
                                </div>
                                <div className="input-group mb-1">
                                    <input 
                                        type="password" 
                                        className="form-control form-control-lg bg-light fs-6" 
                                        placeholder="Password" 
                                        id="password" 
                                        required 
                                    />
                                </div>
                                <div className="d-flex flex-column justify-content-between">
                                    <div>
                                        <p className="text-danger fw-bold"></p>
                                    </div>
                                    <div className="text-end mt-2 fw-bold" style={{ color: '#424242' }}>
                                        <small>Lupa kata sandi?</small>
                                    </div>
                                </div>

                                <div className="input-group my-3 d-flex justify-content-center mt-5">
                                    <button className="btn btn-lg fw-bold" id="button-login" type="submit">
                                        Masuk
                                    </button>
                                </div>
                                <div className="input-group mt-5 d-flex justify-content-center">
                                    <small>
                                        Belum punya akun? 
                                        <a href="/register" className="link fw-bold">Daftar</a>
                                    </small>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-4 p-0 d-flex flex-column align-items-center justify-content-center logo-column">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
