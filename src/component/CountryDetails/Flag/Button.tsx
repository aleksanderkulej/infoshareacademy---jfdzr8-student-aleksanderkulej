import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Hello = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/list");

  return (
    <Button variant="outlined" onClick={handleClick}>
      Back to list
    </Button>
  );
};

export default Hello;
