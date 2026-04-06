import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function News() {
    return (
        <div>
            <div className="news-containe">
                <div className="news-headers">
                    <img src="/images/nimg1.png" alt="" /> <br /> <br />
                    <img src="/images/nimg2.png" alt="" /> <br /><br />
                    <p>Get the latest gaming news updates, and insights from  X-Treme Gaming Organisation</p> <br /><br />

                    <div className="input-group" style={{ maxWidth: '300px', width: '100%' }}>
                        <span className="input-group-text bg-dark border-secondary border-end-0 text-white">
                            <i className="fas fa-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control bg-dark text-white border-secondary border-start-0"
                            placeholder="Search"
                        />
                    </div>
                </div>

            <div className="blogs">
                <div className="blog-as-one">
                    <div className="blog-one">
                        <img src="/images/blog1.png" alt="" />
                    <br /><br />
                    <h3>How To Start Your Gaming Content Creation <br /> in Nigeria</h3>
                    <p className='blog-text'>
                        The gaming content creaationn scene in Nigeria is thriving, and now  is 
                        the perfect time to transform  your passion  into  a successfull career! With 
                        platforms like YouTube, Twitch, and TikTok, you have and incredible opportunity 
                        to share your gameplay, tutorials, and commentary with  a vast audience.This guide 
                        will provide essential steps to set you on  the path to success.  
                    </p>
                    </div> 
<br /><br /><hr /> <br /><br />

                     <div className="blog-one">
                        <img src="/images/blog2.png" alt="" />
                    <br /><br />
                    <h3>Tips For Nigerian Gamers <br /> To Monetize Their passion In 2025</h3>
                    <p className='blog-text'>
                        Join Local esports competitions like the E-Nigeria Eports Champoinship or  ACGL tournaments. <br />
                        Register for international events like the African Gaming League and Gamrx. <br />
                        play on platfroms like Battlefy and ESL play to win cash rewards. Join a gaming team or esport 
                        organisation to get sponsorship deals, grow in a structured community have access to the competitions in the  
                        coun  try as well aas international competitions. 
                    </p>
                    </div> 
                    
                    </div>

                <div className="blog-as-two">
                    <div className="two-one"><img src="/images/sidezero.png" alt="" />Carry1st Teams up with Call of Duty: Mobile to Enable   Local Payment Across Africa </div>
                    <div className="two-one"><img src="/images/sideone.png" alt="" />Garena Free Fire Memberships in Nigeria - What to KNOW</div>
                    <div className="two-one"><img src="/images/sidethree.png" alt="" />Tunde Onokayo, Shawn Matinez Break Guiness Reccords With 64 hours Chess Marathon </div>
                    <div className="two-one"><img src="/images/sidefour.png" alt="" />Carry1st Annonces Africa's Biggest All-Female Esports Tournament for Mobile Legends:Bang Bang </div>
                    <div className="two-one"><img src="/images/sidefive.png" alt="" />Cary1st partners with Electronic Arts to Scale EA SPORTS FC&trade; Mobile Across Africa</div>
                    <div className="two-one"><img src="/images/sideone.png" alt="" />Carry1st unites Afica's Gamers with the Biggest Ever Call of duty:Mobile Tournament</div>
                    <div className="two-one"><img src="/images/sidesix.png" alt="" />E football celebrates 8 year anniversary with new campaign</div>
                    </div>
            </div> <br /><br /><br />
           <div className="container text-center py-5 border border-success rounded">
  <div className="mb-4">
    <img src="/images/frame76.png" alt="" className="img-fluid mb-3" />
    <p className="text-white">
      Signup to our newsletter so that you never miss out on any product drops, news, and exclusive offers.
    </p>
  </div>

  <div className="row justify-content-center g-2">
    <div className="col-12 col-md-auto">
      <input
        type="email"
        className="form-control bg-dark text-white border border-success"
        placeholder="Your email address"
      />
    </div>
    <div className="col-12 col-md-auto">
      <Link to="/signup">
        <button className="btn btn-light text-dark w-100 w-md-auto">Sign Up</button>
      </Link>
    </div>
  </div>
</div>
<br /> <br /><br /><br /><br /><br /><br /><br /><br />
<hr />

<Footer/>


      
            </div>
        </div>
    )
}

export default News