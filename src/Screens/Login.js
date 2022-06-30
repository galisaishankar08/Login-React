import React from 'react';
import "../App.css"

function Login() {
    return (
        <div >
            <div className="login-grid">
                <form >
                    <label className ="loginlabel" for="log in">Login</label> <br />
                    <input type="text" placeholder="Email " className="email"/> <br/>
                    <input type="password" placeholder="Password" className="password" /> <br/>

                    <a className="forgot" href="www.google.com">forgot password </a> <br/>

                    <button classNmae="login" target="_blank"><a href="https://www.xbox.com/en-IN/">Login</a></button>
                    <button classNmae="signup" > <a href="https://signup.live.com/signup?wa=wsignin1.0&rpsnv=13&rver=7.3.6963.0&wp=MBI_SSL&wreply=https:%2f%2faccount.xbox.com%2fen-in%2faccountcreation%3freturnUrl%3dhttps%253a%252f%252fwww.xbox.com%253a443%252fen-IN%252f%26ru%3dhttps%253a%252f%252fwww.xbox.com%252fen-IN%252f%26rtc%3d1%26csrf%3deCZT-N8dnbSdW-VvZo2LjJJaf8e5iAPB9iV6rcJoA1Jct9Nq2V38nhZ9Yg_ngV03MQlchZ9LQniEkKDataJu42A4FWs1&id=292543&aadredir=1&contextid=2481C5259A4C3852&bk=1627442305&uiflavor=web&lic=1&mkt=EN-IN&lc=16393&uaid=775afce5637942cf87728a4956eaf890">Sign Up</a></button> <br/>           
                </form>
            </div>
        </div>
    );
}


export default Login;
