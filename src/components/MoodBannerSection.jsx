
export default function MoodBannerSection() {
  return (
    <section className="mood-banner">
      <img
        src="https://i.pinimg.com/736x/5b/8d/e5/5b8de5b0b63bfeba8c6c42879fa880d9.jpg"
        alt="Mood left"
      />
      <img
        src="https://i.pinimg.com/736x/fe/71/2a/fe712affd3bde3b3034e0f2c06a28b42.jpg"
        alt="Mood center"
      />
      <img
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
        alt="Mood right"
      />

      <div className="mood-overlay">
        <h2>DRESS AS YOU FEEL</h2>
        <button>PICK A MOOD AND SHOP IT</button>
      </div>
    </section>
  );
}
