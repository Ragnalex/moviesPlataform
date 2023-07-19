import { 
    Box, 
    Tab, 
    Tabs, 
} from '@mui/material';
import { useState } from 'react';

//Import Tables
import MovieTable from '../../components/movieTable/movieTable';
import ViewsTable from '../../components/ViewsTable/viewsTable';

const Home = () => {
    
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    };
    return(
        <div>
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
                        <MovieTable/>
                    )}
                    {tabIndex === 1 && (
                    <   ViewsTable/>
                    )}
                </Box>
            </Box>
        </div>
    )
}

export default Home;