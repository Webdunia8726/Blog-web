document.addEventListener("DOMContentLoaded", function () {
  var headerContainer = document.querySelector(".Header-containerr");
  if (headerContainer) {
    headerContainer.innerHTML = `
       <nav class="navbar  navbar-expand-lg sticky-top bg-white dynamic-header"
      style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img src="assets/images/homeimg/leadersboli_logo.png" alt="Logo" class="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">

            <li class="nav-item dropdown mega-menu">
              <a class="nav-link active dropdown-toggle" href="#" id="megaMenuDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Stories
              </a>
              <div class="dropdown-menu" aria-labelledby="megaMenuDropdown">
                <div class="row">
                  <div class="col-md-6 ">
                    <img src="assets/images/homeimg/invite poster.png" alt="" class="img-fluid">
                  </div>
                  <div class="col-md-6 ">
                    <a href="Story.html"><b>Founders</b></a>
                    <p>Discover how visionaries turned their dreams into reality.</p>


                    <a href="story_govt-officer.html"><b>Goverment Officials</b></a>
                    <p>See How Dedicated leaders are making a difference.</p>
                  </div>

                </div>
              </div>

            <li class="nav-item dropdown mega-menu">
              <a class="nav-link active dropdown-toggle" href="#" id="megaMenuDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Podcast
              </a>
              <div class="dropdown-menu" aria-labelledby="megaMenuDropdown">
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/images/homeimg/invite poster.png" alt="" class="img-fluid">
                  </div>
                  <div class="col-md-6">
                    <a href="Podcast-founder.html"><b>Founders'Insights</b></a>
                    <p>Hear how founder built their success.</p>
                    <a href="Podcast_govt_officaial.html"><b>Officials' Perspectives</b></a>
                    <p>Discover the journeys of dedicated officials.</p>
                  </div>

                </div>
              </div>

            <li class="nav-item dropdown mega-menu">
              <a class="nav-link active dropdown-toggle" href="#" id="megaMenuDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Resources
              </a>
              <div class="dropdown-menu" aria-labelledby="megaMenuDropdown">
                <div class="row">
                  <div class="col-md-6">
                    <img src="assets/images/homeimg/invite poster.png" alt="" class="img-fluid">
                  </div>
                  <div class="col-md-6">
                    <a href="Research.html"><b>Report & Research</b></a>
                    <p>Explore unique insights and data on leadership and impact.</p>
                    <a href="Career.html"><b>Career</b></a>
                    <p>Discover job opportunities and Career growth resources.</p>
                     <a href="support-us-section.html"><b>Support Us</b></a>
                    <p>Fuel our mission with your support.</p>
                     <a href="FaQ.html"><b>FAQ</b></a>
                    <p>Common Q&A about our platform and resources.</p>
                  </div>

                </div>
              </div>


            <li class="nav-item">
              <a class="nav-link active" href="partnership.html">Partnership</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="about.html">About Us</a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
    `;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var FooterContainer = document.querySelector(".Footer-containerr");
  if (FooterContainer) {
    FooterContainer.innerHTML = `
          <div class="footer mt-5">
      <div class="container-fluid">
        <div class="row">

          <div class="col-md-4">
            <img src="assets/images/homeimg/leadersboli_logo.png" alt=""
              class="img-fluid logo-footer"> <br>
            Leaders Boli, created by Predulive Edutech Foundation, inspires and
            educates young minds through authentic stories from visionary founders,
            influential leaders and change-makers in their local language.
            <br>
            <br>
            <a href="https://www.linkedin.com/company/14676528/admin/dashboard/"><i class="fa-brands fa-linkedin fa-2xl"
                style="color: #1552bc;"></i></a>
            <a href="https://www.instagram.com/predulive/"><i class="fa-brands fa-instagram fa-2xl"
                style="color: #c70a56;"></i></a>
            <a href="https://www.facebook.com/predulive/"><i class="fa-brands fa-facebook fa-2xl" style="color: #2059bc;"></i></a>
            <a href="https://x.com/i/flow/login?redirect_after_login=%2Fpredulivef"><i class="fa-brands fa-square-twitter fa-2xl" style="color: #264f97;"></i></a>
            <a href="https://www.youtube.com/@predulivelabs"><i class="fa-brands fa-youtube fa-2xl" style="color: #FF0000;"></i></a>
          </div>


          <div class="col-md-2">
            <h5>Resources hub</h5>
            <li><a href="Story.html">Founders Stories</a></li>
            <li><a href="Podcast-founder.html">Govt. Officials Stories</a></li>
            <li><a href="Research.html">Founder Podcast</a></li>
            <li><a href="Career.html">Career</a></li>
            <li><a href="FaQ.html">FAQs</a></li>

          </div>
          <div class="col-md-2">
            <h5>Discover</h5>
            <li><a href="https://docs.google.com/forms/d/1_UwdHf2lZle9KBjq6GacLnSpmnH-8LcQxGBcrxGY_Cg/edit">Share Your Story</a></li>
            <li><a href="story_govt-officer.html">Join our Podcast</a></li>
            <li><a href="support-us-section.html">Spotlight</a></li>
            <li><a href="partnership.html">Partnership</a></li>
                        <li><a href="Research.html">Report & Research</a></li>



          </div>
          <div class="col-md-2">
            <h5>Legal</h5>
            <li><a href="">POSH</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Community Guide</a></li>

          </div>
          <div class="col-md-2">
            <h5>Newsletter Signup</h5>
            <input type="text">
            <a href="">
              <div class="btn btn-primarynewsletter mt-2"> Subscribe</div>
            </a>
          </div>
        </div>
      </div>

    </div>
    <div class="container-fluid bg-dark p-2">
      <h6 class="text-center text-white">© 2024 Leaders Boli by Predulive Edutech Foundation. All Rights Reserved.</h6>
    </div>
    `;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var CallContainer = document.querySelector(".Call-button");
  if (CallContainer) {
    CallContainer.innerHTML = `<a href="https://wa.me/yourphonenumber" class="whatsapp-button" target="_blank">
    <i class="fab fa-whatsapp"></i>
  </a>

  <a href="tel:+1234567890" class="call-button">
    <i class="fas fa-phone-alt"></i>
  </a>`;
  }
});
