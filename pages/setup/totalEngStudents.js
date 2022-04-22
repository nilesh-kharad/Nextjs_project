
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
const totalEngStudents = () => {


    return (
        <>
            <Box sx={{ mt: 3 }}>
                <InputLabel id="demo-controlled-open-select-label">Total Number of engineering students*</InputLabel>
                <table className="table table-bordered table-hover" id="tab_logic">
                    <thead>
                        <tr>
                            <th>Items</th>
                            <th>CAY</th>
                            <th>CAY m1</th>
                            <th>CAY m2</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                          <td>Total No. of boys</td>
                          <td> <input type="text" className="form-control" /></td>
                          <td> <input type="text" className="form-control" /></td>
                          <td> <input type="text" className="form-control" /></td>
                         
                      </tr>
                      <tr>
                      <td>Total No. of girls</td>
                          <td> <input type="text" className="form-control" /></td>
                          <td> <input type="text" className="form-control" /></td>
                          <td> <input type="text" className="form-control" /></td>
                         
                      </tr>
                      <tr>
                          <td>Total No. of students</td>
                          <td> <input type="text" className="form-control" /></td>
                          <td> <input type="text" className="form-control" /></td>
                          <td> <input type="text" className="form-control" /></td>
                         
                      </tr>
                    </tbody>
                </table>
            </Box>
        </>
    )
}

export default totalEngStudents