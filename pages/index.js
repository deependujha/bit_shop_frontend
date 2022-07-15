import styles from "../styles/Home.module.css";
import Product from "../components/Product";

export default function Home({ data }) {
  return (
    <div className="my-3">
      {data.map((prd) => {
        return (
          <span key={prd.product_id}>
            <Product type="buy" prd={prd} />
          </span>
        );
      })}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/product/`);
  const data = await res.json(); // Pass data to the page via props
  return { props: { data } };
}
