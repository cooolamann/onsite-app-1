import "./login.css";

function Login() {
    return (

        <div className="container">

            <h1>Login</h1>


            <div input className="box">

                <i className="fa fa-envelope"></i>
                <input type="email" name="email" id="email"
                    placeholder="Enter your Email" />
            </div>
            <div className="box">

                <i className="fa fa-key"></i>
                <input type="password" name="password" id="password"
                    placeholder="Enter your Password" />
            </div>
            <button class="btn">Log In</button>


        </div>
    )
}

export default Login;