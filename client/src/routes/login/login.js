import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"
import { Box, TextField, Button } from "@mui/material";

const Login = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const usuariosTest  = [
        {usuario: "pedrito123", password: "1234"},
        {usuario: "juanito321", password: "juanito"},
        {usuario: "testing123", password: "testing"},
        {usuario: "admin", password: "admin"}
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const search = usuariosTest.filter((us) => {
            return us.usuario === user && us.password === pass
        })
        console.log(search);
        if (search.length > 0) {
            alert("Acceso correcto!");
            navigate(`/home`);
        }
        else alert("Acceso incorrecto")

    }

    return(
        <div className="login-container">
            <div className="login-header">
                Inicio de sesión
            </div>
            <div className="login-body">
                <form onSubmit={handleSubmit}>
                    <Box 
                        sx={{display: "flex", flexDirection: "column", width: "50%"}}
                        component="form"
                        autoComplete="off"
                    >
                        <TextField 
                            size="small"
                            label="nombre de usuario"
                            sx={{marginBottom: "1.5rem", borderRadius: "10px"}}
                            onChange={e => setUser(e.target.value)}
                        />
                        <TextField 
                            size="small"
                            label="contraseña"
                            type="password"
                            onChange={e => setPass(e.target.value)}
                            sx={{marginBottom: "1.5rem", borderRadius: "10px"}}
                        />
                    </Box>
                    <Button variant="outlined" type="submit">Iniciar Sesión</Button>

                </form>
                
            </div>
        </div>
    )
    
}

export default Login;