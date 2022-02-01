import "./footer.css";
import React from "react";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
function Footer() {
  return (
    <div id="footer">
      <div className="footer-detail-container">
        <div className="footer-detail">
          <h4>About company overview</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et
            ad labore soluta pariatur! Voluptatum quibusdam alias harum
            assumenda!
            <br />
            <img
              alt="debit cards"
              src="https://hongo.b-cdn.net/watch/wp-content/uploads/sites/10/2019/07/footer-payment-icon.png.webp"
            />
          </p>
        </div>
        <div className="footer-detail">
          <h4>Categories</h4>

          <a style={{ textDecoration: "none", color: "inherit" }} href="#">
            Men
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "inherit" }} href="#">
            Women
          </a>
          <br />
          <a style={{ textDecoration: "none", color: "inherit" }} href="#">
            Kids
          </a>
        </div>
        <div className="footer-detail">
          <h4>Contact Us</h4>

          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.twitter.com"
            target="_blank"
          >
            twitter
          </a>
          <br />
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.github.com"
            target="_blank"
          >
            github
          </a>
          <br />
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://www.linkedin.com"
            target="_blank"
          >
            linkdein
          </a>
        </div>
      </div>
      <div className="newsletter">
        subscribe to our newsletter to get awesome deals and discounts!
        <div>
          <input type="email" placeholder="Your email" />
          <button>
            <EastIcon fontSize="small" />
          </button>
          <br />
        </div>
      </div>
      <p style={{ textAlign: "center", margin: "0 auto .2rem auto" }}>
        © 2022 Dev Merch Made for educationcal purposes
      </p>
    </div>
  );
}

export default Footer;
