import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const FilterGroup = (props) => {
    console.log(props)
    return ( 
        <ButtonGroup style={props.style} variant={props.variant ?? "contained"} aria-label="outlined primary button group">
            {
                props.filters.map(f =>  <Button variant={f.selected ? "contained" : "outlined"}  data-filterVal={f.filterVal} data-filterProp={f.filterProp} onClick={props.callBack}>{f.name}</Button>)
            }
        </ButtonGroup>
     );
}
 
export default FilterGroup;