


import { NavLink } from "react-router";

export default function HomePage() {
  return (
    <main className="lp-page">
      {/* 1 Top bar */}
      <section className="lp-topbar">
        <p> Sign Up Today And Get 5% Off Your First Order And Free Shipping, Always</p>
        <p>Free Returns | We Arrenge Pickup From Your Home | Delivery Not Included</p>
      </section>

      {/* 2 Header / nav */}
      <header className="lp-header">
        <div className="lp-header-row">
          <div className="lp-left">
            <span>🇬🇧</span>
            <span className="lp-search">SEARCH</span>
        </div>

        <div className="lp-logo">TOKYOU</div>

        <div className="lp-right">
          <span>👤</span>
          <span>♡</span>
          <span>👜</span>
        </div>
        </div>
    
    <nav className="lp-menu">
      <NavLink to="/products">NEW IN</NavLink>
      <NavLink to="/mood">PICK A MOOD</NavLink>
      <NavLink to="/women">WOMEN</NavLink>
      <NavLink to="/men">MEN</NavLink>
      <NavLink to="/designers">DESIGNERS</NavLink>
      <NavLink to="/inspo">GET YOUR INSPO</NavLink>
      <NavLink to="/sale" className="sale">SALE</NavLink>
      </nav>

    </header>
    {/* 3 Hero */}
    <section className="lp-hero">
      <h1> FEATURED HERO VIDEO HERE</h1>
    </section>
    </main>
  );
}

