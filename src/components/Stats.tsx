const Stats = () => {
  const stats = [
    { number: "5,000+", label: "Active Vendors" },
    { number: "1,200+", label: "Partner Markets" },
    { number: "50+", label: "Cities Connected" },
    { number: "₹2M+", label: "Monthly Transactions" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-market-green to-fresh-lime">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;