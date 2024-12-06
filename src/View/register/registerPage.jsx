import "../register/registerPage.css";
import logo from "../../Assets/Logu-green.png"; // Use import for static assets

function RegisterPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your form submission logic here
    };

    return (
        <>
            <div className="container-fluid min-vh-100 d-flex justify-content-center p-0">
                <div className="row w-100">
                    <div className="col-xs-12 col-md-4 p-0 d-flex flex-column align-items-center justify-content-center logo-column">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="col-md-8 p-0 d-flex align-items-center justify-content-center content-column">
                        <div className="row d-flex align-items-center justify-content-center w-50">
                            <form onSubmit={handleSubmit}>
                                <div className="text-center mb-5">
                                    <p className="display-1 h1 fw-bolder">Sign Up</p>
                                </div>
                                <div className="input-group mb-3">
                                    <input 
                                        id="username" 
                                        type="email" 
                                        className="form-control form-control-lg bg-light fs-6" 
                                        placeholder="Email address" 
                                        required 
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <input 
                                        id="pass" 
                                        type="password" 
                                        className="form-control form-control-lg bg-light fs-6" 
                                        placeholder="Password" 
                                        required 
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <input 
                                        id="rePass" 
                                        type="password" 
                                        className="form-control form-control-lg bg-light fs-6" 
                                        placeholder="Confirm password" 
                                        required 
                                    />
                                </div>
                                <div className="text-danger fw-bold">
                                   
                                </div>
                                <div className="input-group my-3 d-flex justify-content-center mt-5">
                                    <button className="btn btn-lg fw-bold" type="submit">Daftar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
