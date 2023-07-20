import { 
    Table, 
    TableCell, 
    TableContainer, 
    TableBody, 
    TableHead, 
    TableRow 
} from '@mui/material';

const MovieTable = () => {


    //Data mock, eliminar dsps de poder obtener data real
    const dataMovies = [
        {
            id: "144a01b0-fee3-4638-aae2-b7ab8885e6b7",
            titulo: "Pale Cocoon (Peiru Kokun)",
            categoria: "Animation|Sci-Fi",
            descripcion: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
            calificacion: 5
        }, {
            id: "5cae41d6-b4bb-435f-9a08-b538b24aaf66",
            titulo: "Object of Beauty, The",
            categoria: "Comedy|Drama",
            descripcion: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
            calificacion: 2
        }, {
            id: "3c3cc7b6-edf2-4473-84ce-fa2272da8885",
            titulo: "Tom Sawyer",
            categoria: "Adventure",
            descripcion: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            calificacion: 1
        }, {
            id: "15d682ba-418b-4aa8-84c3-f75c84bca415",
            titulo: "Scratch",
            categoria: "Documentary",
            descripcion: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
            calificacion: 4
        }, {
            id: "8e4098ce-6f23-43ed-a85f-4c385932bd19",
            titulo: "Raven, The",
            categoria: "Mystery|Thriller",
            descripcion: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
            calificacion: 3
        }, {
            id: "b1da4253-3797-4ecb-b8ad-dd5f28ee44be",
            titulo: "Menace II Society",
            categoria: "Action|Crime|Drama",
            descripcion: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
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
        <div className="table-container">
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
                                <TableRow key={index}>
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

export default MovieTable;