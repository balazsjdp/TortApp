import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import zIndex from '@mui/material/styles/zIndex';


const LoaderWrapper = styled('div')({
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    zIndex: '10000',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Loader = () => {
    return ( 
        <LoaderWrapper>
            <CircularProgress  color="secondary" />
        </LoaderWrapper>
     );
}
 
export default Loader;

if (document.getElementById('fs-loader')) {
    const el = document.getElementById('fs-loader')
    const props = Object.assign({}, el.dataset)
    ReactDOM.render(<Loader {...props} />, document.getElementById('fs-loader'));
}
