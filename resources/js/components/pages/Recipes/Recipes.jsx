import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import RecipeCard from './RecipeCard';
import Grid from '@mui/material/Grid';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FilterGroup from '../../common/FilterGroup';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  marginLeft: 0,
  marginBottom: theme.spacing(2),
  width: '50vw',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const baseFilterOps = [
  {
    name: "Minden",
    filterProp: "*",
    filterVal: null,
    selected: false
  },
  {
    name: "Kedvencek",
    filterProp: "favorite",
    filterVal: 1,
    selected: false
  }
]


const Recipes = () => {
    const [allRecipes, setAllRecipes] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [filterOptions, setFilterOptions] = useState(baseFilterOps)
    const searchBar = useRef();
    const searchBarDOM = document.getElementById("recipe-search-bar");

    useEffect(() => {
        getRecipes()
    },[])

     // Fetch ingredients
     const getRecipes = () => {
        axios.get(Laravel.apiUrl + "/api/recipe/all")
        .then((res) => {
          if(res.status === 200){
            setRecipes(res.data)
            setAllRecipes(res.data)
          }else{
            console.error(res)
          }
        })
    }
    

    const onRecipeSearch = (e) => {
      clearFilterOptions()
      const filteredRecipes = allRecipes.filter(r => {
        return Object.values(r).some(val => {
          if(typeof(val) == "string"){
            return val.toLowerCase().includes(e.target.value.toLowerCase())
          }
        })
      })
      setRecipes(filteredRecipes)
    }


    const onFilter = (e) => {
      const filterProp = e.target.dataset.filterprop;
      const filterVal = e.target.dataset.filterval;
      if(!filterProp ) return;

      searchBarDOM.value = "";
      // Deselect all filters
      clearFilterOptions()

      // Update the selected filter
      let selectedFilter = filterOptions.filter(f => f.filterProp == filterProp)[0];
      selectedFilter.selected = true;

      setRecipes(allRecipes.filter(r => {
        return r[filterProp] == filterVal
      }))
      
    }


    const clearFilterOptions = () => {
      filterOptions.forEach(f => f.selected = false);
    }

    return ( 
    <>
      <Grid container spacing={3}>
        <Grid item md={3} xs={6}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Keresés..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={onRecipeSearch}
              ref={searchBar}
              id="recipe-search-bar"
            />
        </Search>
        </Grid>
        <Grid item xs={0} md={3}>
        </Grid>
        <Grid item md={3} xs={5}>
          <FilterGroup variant="outlined" filters={filterOptions} callBack={onFilter} style={{float: 'right'}} />
        </Grid>
      </Grid>


     
      
      <Grid container spacing={2}>
        {recipes.map(r => {
          return (
            <Grid item lg={2} md={4} xs={12}>
                <RecipeCard recipeData={r} />
            </Grid>
          )
        })}
      </Grid>
    <Fab style={{position: 'fixed', bottom: '1rem', right: '1rem'}} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </>
    );
}
 
export default Recipes;


if (document.getElementById('recipeList')) {
    const el = document.getElementById('recipeList')
    const props = Object.assign({}, el.dataset)
    ReactDOM.render(<Recipes {...props} />, document.getElementById('recipeList'));
}