export default function Banner() {
  return (
    <div className="main">
      <video
        autoPlay
        muted
        poster="video.mp4"
        style={{ height: "100%", width: "100%" }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="Heading">
        <h1>Riezl Baker Real Estate</h1>
        <hr style={{ width: "20%" }} />
        <h2>LAKE OCONEE'S TOP LUXURY REALTOR FOR 23 YEARS</h2>

        <div className="buttons">
          <button>Featured properties</button>
          <button>Past Transactions</button>
        </div>
      </div>
    </div>
  );
}
