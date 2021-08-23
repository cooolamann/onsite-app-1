import "./signup.css";

function SignUp() {
    return (

        <div className="container">

            <h1>Sign Up</h1>
            <div input className="box">
               	
                   <i className="fa fa-envelope"></i>
                       <input type="name" name="name" id="name"
                       placeholder="Enter your Full Name"/>
                   </div>
   
                   <div input className="box">
                      
                       <i className="fa fa-envelope"></i>
                           <input type="date" name="DOB" id="DOB" min="1-1-1950" max="1-1-2003"
                           placeholder="Enter your Date of Birth"/>
                       </div>
   
                       <div input className="box">
                      
                           <i className="fa fa-envelope"></i>
                               <input type="address" name="address" id="address"
                               placeholder="Enter your Address"/>
                           </div>
               <div input className="box">
                      
               <i className="fa fa-envelope"></i>
                   <input type="email" name="email" id="email"
                   placeholder="Enter your Email"/>
               </div>
               <div className="box">
                       
               <i className="fa fa-key"></i>
                   <input type="password" name="password" id="password"
                   placeholder="Enter your Password"/>
               </div>
               <button className="btn">Sign In</button>
   
               
           </div>

    )
}

export default SignUp;