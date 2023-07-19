import { 
    Box, 
    Tab, 
    Tabs, 
    Typography, 
} from '@mui/material';
import { useState } from 'react';

//Import Tables
import MovieTable from '../../components/movieTable/movieTable';

const Home = () => {
    
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };
    return(
        <Box>
            <div className="header-tittle">
                Catalogo de peliculas
            </div>
            <Box sx={{ display: 'flex' }}>
                <Tabs
                    value={tabIndex}
                    onChange={handleTabChange}
                    sx={{ borderRight: 1, borderColor: 'divider', minWidth: "15%"}}
                    orientation="vertical"
                >
                    <Tab label="Recomendaciones" />
                    <Tab label="Vistas" />
                </Tabs>
                <Box sx={{ margin: 2 }}>
                    {tabIndex === 0 && (
                    <Box>
                        <MovieTable/>
                    </Box>
                    )}
                    {tabIndex === 1 && (
                    <Box>
                        <Typography>Aqui se mostrará la lista de las peliculas vistas en orden alfabetico</Typography>
                    </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}

export default Home;