export default function NewsletterSection() {
  return (
    <section className="newsletter">
      <div className="newsletter-left">
        <h3>ENJOY 5% OFF YOUR NEXT ORDER</h3>
        <p>
          Claim Your Exclusive Discount Code When You Subscribe To TO-K-YOU. T&amp;C And
          Exclusions Apply
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter Email Here..." />
          <button type="button">Sign Up</button>
        </div>
        <div className="newsletter-social">
          <span className="social">X</span>
          <span className="social">IG</span>
          <span className="social">TT</span>
        </div>
      </div>

      <div className="newsletter-divider" aria-hidden="true" />

      <div className="newsletter-right">
        <h4>NEED HELP?</h4>
        <p>For Any Enquiries Please Visit TO-K-YOU Customer Care</p>
        <h4>LOCATION &amp; LANGUAGE</h4>
        <div className="newsletter-lang">
          <span>🇬🇧</span>
          <span>English</span>
          <span className="chevron">▾</span>
        </div>
      </div>
    </section>
  );
}
