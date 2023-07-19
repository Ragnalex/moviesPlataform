import { 
    Table, 
    TableCell, 
    TableContainer, 
    TableBody, 
    TableHead, 
    TableRow 
} from '@mui/material';

const ViewsTable = () => {
    //Data mock, eliminar dsps de poder obtener data real
    const dataMovies = [
        {
            id: "5cae41d6-b4bb-435f-9a08-b538b24aaf66",
            titulo: "Object of Beauty, The",
            categoria: "Comedy|Drama",
            descripcion: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
            calificacion: 2
        }, {
            id: "15d682ba-418b-4aa8-84c3-f75c84bca415",
            titulo: "Scratch",
            categoria: "Documentary",
            descripcion: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
            calificacion: 4
        }, {
            id: "b9658b6b-0654-49f7-a205-f00c892267ce",
            titulo: "Sympathy for Mr. Vengeance (Boksuneun naui geot)",
            categoria: "Crime|Drama",
            descripcion: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
            calificacion: 2
        }
    ]

    return (
        <div style={{maxHeight: "700px", overflowY: "auto"}}>
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
                        {dataMovies.map((movie, index) => {
                            return(
                                <TableRow>
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell>{movie.titulo}</TableCell>
                                    <TableCell>{movie.descripcion}</TableCell>
                                    <TableCell>{movie.categoria}</TableCell>
                                    <TableCell>{movie.calificacion}</TableCell>
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