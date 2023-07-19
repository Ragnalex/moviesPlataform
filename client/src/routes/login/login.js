import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", {
        username: user,
        password: pass,
      });

      if (response.data.success) {
        alert("Acceso correcto!");
        navigate(`/home`);
      } else {
        alert("Acceso incorrecto");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Ocurrió un error al iniciar sesión");
    }
  };

  return (
    <div className="login-container">
      <div className="header-tittle">Inicio de sesión</div>
      <div className="login-body">
        <form onSubmit={handleSubmit}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            component="form"
            autoComplete="off"
          >
            <TextField
              size="small"
              label="nombre de usuario"
              sx={{ marginBottom: "1.5rem", borderRadius: "10px" }}
              onChange={(e) => setUser(e.target.value)}
            />
            <TextField
              size="small"
              label="contraseña"
              type="password"
              onChange={(e) => setPass(e.target.value)}
              sx={{ marginBottom: "1.5rem", borderRadius: "10px" }}
            />
          </Box>
          <Button variant="outlined" type="submit">
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
