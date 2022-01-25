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
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
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
        <br />
        <input
          style={{
            background: "#a1d0ff",
            border: "0",
            height: "1.2rem",
            margin: "0",
          }}
          type="email"
          placeholder="Your email"
        />
        <Button
          sx={{
            color: "gray",
            background: "#a1d0ff",
            height: "1.2rem",
            margin: "0",
            borderRadius: "0",
          }}
        >
          <EastIcon />
        </Button>
      </div>
      <p style={{ textAlign: "center" }}>
        © 2022 Dev Merch is Proudly Powered by NEOG Made for educationcal
        purposes
      </p>
    </div>
  );
}

export default Footer;
