import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <Button variant="text">botton</Button>
      <Button variant="contained">botton</Button>
      <Button variant="contained" disabled>
        botton
      </Button>
      <Button variant="outlined">botton</Button>

      <Button variant="contained" color="primary">
        botton
      </Button>
      <Button variant="contained" color="secondary">
        botton
      </Button>
      <Button variant="contained" color="success">
        botton
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => alert("Clicked")}
        sx={{ padding: "10px", marginTop: "20px", borderRadius: "10px" }}
      >
        botton
      </Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
