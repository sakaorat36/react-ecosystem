import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
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
      <br />
      <Container>
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Container>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
