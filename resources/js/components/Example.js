import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';


function Example() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <Button variant="contained">Contained</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
