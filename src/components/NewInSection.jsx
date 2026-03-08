
import products from "../data/products.json";

export default function NewInSection() {
    const newInItems = products.slice(0, 4); // Get the first 4 items as "New In"

    return (
        <section className="new-in">
            <div className="new-in-grid">
                {newInItems.map((item) => (
                    <article key={item.id} className="new-in-card">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.brand}</h3>
                    </article>
                ))}
            </div>

            <aside className="new-in-info">
                <p className="new-in-count"> 728 New Items</p>
                <h2>NEW IN</h2>
                <p>New Arrivals - Discover The Latest Launches</p>
                <button>SHOP NEW IN</button>
            </aside>
        </section>
    );
}