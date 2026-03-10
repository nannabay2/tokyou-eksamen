
export default function MoodBannerSection() {
  return (
    <section className="mood-banner">
      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
        alt="Mood left"
      />
      <img
        src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1200&q=80"
        alt="Mood center"
      />
      <img
        src="https://images.unsplash.com/photo-1571513722275-4b41940f54b8?auto=format&fit=crop&w=1200&q=80"
        alt="Mood right"
      />

      <div className="mood-overlay">
        <h2>DRESS AS YOU FEEL</h2>
        <button>PICK A MOOD AND SHOP IT</button>
      </div>
    </section>
  );
}
