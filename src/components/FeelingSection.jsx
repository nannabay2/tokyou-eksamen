
export default function FeelingSection() {
  const moods = [
    {
      title: "FEELING ELEGANT",
      img: "https://i.pinimg.com/1200x/0f/37/ef/0f37ef276aee93a476ae4bbd79b6ccf2.jpg",
    },
    {
      title: "FEELING JOYFUL",
      img: "https://i.pinimg.com/736x/ed/fa/11/edfa11b18ae6997618c0f630c887571c.jpg",
    },
    {
      title: "FEELING FREE",
      img: "https://i.pinimg.com/736x/62/0d/e6/620de611e1cafbdfa7ec8f4fb9d40393.jpg",
    },
    {
      title: "FEELING EMPOWERED",
      img: "https://i.pinimg.com/736x/1c/e1/05/1ce105eb46064cb6fd9ca8ee9e64debc.jpg",
    },
    {
      title: "FEELING COOL",
      img: "https://i.pinimg.com/736x/03/6b/02/036b0253bc147c0f2f112ed058df999c.jpg",
    },
  ];

  return (
    <section className="feeling">
      <div className="feeling-grid">
        {moods.map((mood) => (
          <article key={mood.title} className="feeling-card">
            {mood.img ? (
              <img src={mood.img} alt={mood.title} />
            ) : (
              <div className="feeling-placeholder" />
            )}
            <h3>{mood.title}</h3>
          </article>
        ))}
      </div>

      <div className="feeling-progress" aria-hidden="true">
        <span className="feeling-progress-bar" />
      </div>

      <button className="arrow left" aria-label="Previous">
        <span className="arrow-icon">←</span>
      </button>

      <button className="arrow right" aria-label="Next">
        <span className="arrow-icon">→</span>
      </button>
    </section>
  );
}
