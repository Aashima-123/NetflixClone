import React from 'react'

const Navbar = () => {
  return (
    <div>
          <div class="main">
        <nav>
            <span><img width="53" src={require("../images/logo.png")} alt=""></img></span>
            <div>
                <button class="btn">English</button>
                <button class="btn btn-red-sm">Sign In</button>
            </div>
        </nav>
        <div class="box">
        </div>
        <div class="hero">
            <span>Enjoy big movies, hit series and more from ₹ 149.</span>
            <span>Join today. Cancel anytime.</span>
            <span>Ready to watch? Enter your email to create or restart your membership.</span>
            <div class="hero-buttons">
                <input type="text" placeholder="Email Address"></input>
                <button class="btn btn-red">Get Started &gt;</button>
            </div>
        </div>

        <div class="separation"></div>

        </div>
    </div>
  )
}

export default Navbar
