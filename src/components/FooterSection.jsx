export default function FooterSection() {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        <div className="footer-col">
          <h5>CUSTOMER CARE</h5>
          <a href="#">Track An Order</a>
          <a href="#">Create A Return</a>
          <a href="#">Contact Us</a>
          <a href="#">Exchanges &amp; Returns</a>
          <a href="#">Delivery</a>
          <a href="#">Payment</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Center</a>
          <a href="#">Cookie Policy</a>
        </div>

        <div className="footer-col">
          <h5>ABOUT US</h5>
          <a href="#">About TO-K-YOU</a>
          <a href="#">People &amp; Planet</a>
          <a href="#">TO-K-YOU Reviews</a>
          <a href="#">Advertising</a>
          <a href="#">Affiliates</a>
        </div>

        <div className="footer-col">
          <h5>TO-K-TO ACCEPTS</h5>
          <div className="payment-icons">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>PAYPAL</span>
            <span>APPLE PAY</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2026 TO-K-YOU | All Rights Reserved</p>
        <p>Notes: A Binding Agreement Has Only Been Entered Into Once We Have Confirmed Your Order.</p>
      </div>
    </footer>
  );
}
