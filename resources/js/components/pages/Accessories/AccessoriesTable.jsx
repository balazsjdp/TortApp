import { DataGrid,useGridApiContext  } from '@mui/x-data-grid';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete'
import { Button } from '@mui/material';
import { Fab } from '@mui/material';
import LoadingBar from '../../common/LoadingBar';

const appTheme = createTheme({
    palette: {
      mode: Laravel.theme,
    },
  });
  

const AccessoriesTable = () => {
    const [accessories, setAccessories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAccessories()
    },[])

    // Fetch ingredients
    const getAccessories = () => {
      setLoading(true);
      axios.get(Laravel.apiUrl + "/api/accessory/all")
      .then((res) => {
        if(res.status === 200){
            setAccessories(res.data)
          setLoading(false)
        }else{
          console.error(res)
          setLoading(false)
        }
      })
    }
    // Fired when a cell is edited
    const handleCellEdit = (e) => {
      setLoading(true);
      // Create a new array of objects with the updated values
      let newAccessories = accessories.map(i => {
        if(i.id === e.id){
          return {...i,[e.field]:e.value}
        }else{
          return {...i}
        }
      })

      // Set the state
      setAccessories(newAccessories)

      // Update the ingredient in the database
      
      axios.put(Laravel.apiUrl + '/api/accessory/' + e.id, newAccessories.filter(i => i.id === e.id)[0])
      .then(() => {
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
      })
    }
    // Fired when a delete button is pressed
    const handleDelete = (e) => {
      const {id} = e.target.dataset
      if(!id) return;
      setLoading(true);
      axios.delete(Laravel.apiUrl + '/api/accessory/' + id).then((res) => {
        setAccessories(accessories.filter(i => i.id != id));
        setLoading(false);
      }).catch((err) => {
        console.log(err)
        setLoading(false);
      })
    }
    // Fired when an add new button is added
    const handleAddNew = () => {
      setLoading(true);
      axios.post(Laravel.apiUrl + '/api/accessory/').then(() => {
        getAccessories()
      })
      .catch((err) => {
        setLoading(false);
        console.log(err)
      })
    }

    // Columns for ingredients table
    const columnsIngredients = [
      { field: 'id', headerName: 'ID', width: 50 },
      {
        field: 'name',
        headerName: 'Megnevezés',
        editable: true,
        flex: 1
      },
      {
        field: 'price',
        headerName: 'Egységár',
        type: 'decimal',
        editable: true,
        flex: 1,
        editable: true,
        renderCell: (params) => {
          return `${params.row.price} Ft`
        }
      },
      {
        field: 'delete',
        headerName: 'Lehetőségek',
        flex: 1,
        headerAlign: 'right',
        align: 'right',
        renderCell: (params) => {
          return (
            <Stack direction="row" spacing={1}>
              <Button data-id={params.row.id} onClick={handleDelete} size="small" variant="outlined"  color="error" startIcon={<DeleteIcon />}>
                Törlés
              </Button>
            </Stack>
            
          )
        }
      },

    ];
   
    if(accessories){
      return (
        <ThemeProvider theme={appTheme}>
          {loading ? <LoadingBar /> : ''}
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
                        rows={accessories}
                        columns={columnsIngredients}
                        autoHeight
                        onCellEditCommit={handleCellEdit}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        disableSelectionOnClick
                      />
                    </div>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
          <Fab onClick={handleAddNew} style={{position: 'fixed', bottom: '1rem', right: '1rem'}} color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </ThemeProvider>
      )
    }
}
 
export default AccessoriesTable;

if (document.getElementById('accessoriesTable')) {
    const el = document.getElementById('accessoriesTable')
    const props = Object.assign({}, el.dataset)
    ReactDOM.render(<AccessoriesTable {...props} />, document.getElementById('accessoriesTable'));
}