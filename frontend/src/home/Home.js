import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {

      const res = await axios.get(
        `http://localhost:5000/search?search=${search}`
      );

      setData(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>Products List</h1>

      {/* Search Bar */}

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      <div style={styles.grid}>

        {data.map((item) => (

          <div key={item.id} style={styles.card}>

            <h2>{item.name}</h2>

            <p>₹{item.price}</p>

            <p>{item.category}</p>

            <button
              style={styles.button}
              onClick={() => navigate('/details', { state: item })}
            >
              View Details
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

const styles = {

  container: {
    padding: "20px"
  },

  heading: {
    textAlign: "center"
  },

  search: {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  },

  button: {
    marginTop: "10px",
    padding: "10px",
    background: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px"
  }
};

export default Home;