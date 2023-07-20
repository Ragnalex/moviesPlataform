import { 
    Table, 
    TableCell, 
    TableContainer, 
    TableBody, 
    TableHead, 
    TableRow 
} from '@mui/material';
import axios from "axios";
import { useEffect, useState } from 'react';

const ViewsTable = (user_id) => {

    const [movieList, setmovieList] = useState([]);
    const [movieGenres, setmovieGenres] = useState([]);

    const getMovies = async() => {
        const userId = localStorage.getItem("userID");
        try {
            const resp = await axios.get(`http://localhost:5000/api/users/${userId}/movies`)
            const auxList = [];
            for (let movie of resp.data.data) {
                const title = movie.title;
                const genres = await axios.get(`http://localhost:5000/api/genre/${title}`)
                auxList.push(genres.data.data[0].generos);
            }
            setmovieList(resp.data.data);
            setmovieGenres(auxList);
            
        } catch (error) {
            console.log(error);
            setmovieList([]);
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div style={{maxHeight: "600px", overflowY: "auto"}}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Título</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Categorias</TableCell>
                            <TableCell>calificación</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{overflowY: "auto"}}>
                        {movieList.map((movie, index) => {
                            return(
                                <TableRow key={index}>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{movie.title}</TableCell>
                                    <TableCell>Sed ante. Vivamus tortor. Duis mattis egestas metus.</TableCell>
                                    <TableCell>{movieGenres[index].join(", ")}</TableCell>
                                    <TableCell>{movie.rate}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ViewsTable;