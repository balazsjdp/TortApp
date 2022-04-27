import { DataGrid } from '@mui/x-data-grid';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material';


const appTheme = createTheme({
    palette: {
      mode: Laravel.theme,
    },
  });
  



const IngredientsTable = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
      getIngredients()
    },[])

    // Fetch ingredients
    const getIngredients = () => {
      axios.get(Laravel.apiUrl + "/api/ingredient/all")
      .then((res) => {
        if(res.status === 200){
          setIngredients(res.data)
        }else{
          console.error(res)
        }
      })
    }

    const cellEdit = (params) => {
      console.log(params)
    }

    // Columns for ingredients table
    const columnsIngredients = [
      { field: 'id', headerName: 'ID', width: 50 },
      {
        field: 'name',
        headerName: 'Megnevezés',
        flex: 1
      },
      {
        field: 'price',
        headerName: 'Egységár',
        type: 'decimal',
        editable: true,
        onCellEditCommit: {cellEdit},
        flex: 1,
        editable: true,
        renderCell: (params) => {
          return `${params.row.price} Ft`
        }
      },
      {
        field: 'unit',
        headerName: 'Egység',
        flex: 1,
      },
      {
        field: 'edit',
        headerName: 'Lehetőségek',
        flex: 1,
        headerAlign: 'right',
        align: 'right',
        renderCell: (params) => {
          return (
            <Stack direction="row" spacing={1}>
              <Button size="small" variant="outlined"  color="error" startIcon={<DeleteIcon />}>
                Törlés
              </Button>
            </Stack>
            
          )
        }
      },

    ];
   
    if(ingredients){
      return (
        <ThemeProvider theme={appTheme}>
          <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
              <Box gridColumn="span 12">
                <Card >
                  <CardContent>
                    <Typography variant="h5" component="div" color="text.secondary" gutterBottom>
                      Összetevők
                    </Typography>
   
                    <div style={{ height: 700, width: '100%' }}>
                      <DataGrid
                        rows={ingredients}
                        columns={columnsIngredients}
                        autoHeight
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                        disableSelectionOnClick
                      />
                    </div>
                    <IconButton color="primary" size="large" >
                      <AddIcon />
                    </IconButton>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      )
    }
}
 
export default IngredientsTable;

if (document.getElementById('ingredientsTable')) {
    const el = document.getElementById('ingredientsTable')
    const props = Object.assign({}, el.dataset)
    ReactDOM.render(<IngredientsTable {...props} />, document.getElementById('ingredientsTable'));
}