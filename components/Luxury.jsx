import { data } from "@/data/data";

export default function Luxury() {
  return (
    <div className="text">
      <h2>TOP LUXURY REAL ESTATE INDUSTRY LEADER 2021, 2022, AND 2023</h2>
      <h1 style={{ fontSize: "45px", textAlign: "center" }}>
        RIEZL BAKER, LAKE OCONEE'S REALTOR®
      </h1>
      {data.luxury?.map((item, index) => (
        <h3 key={index} style={{ textAlign: "center" }}>
          {item}
        </h3>
      ))}
    </div>
  );
}
