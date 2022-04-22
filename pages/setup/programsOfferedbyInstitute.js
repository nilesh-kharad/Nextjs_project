
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
const programsOfferedbyInstitute = () => {
    const [rows, setRows] = React.useState([{}]);
    const columnsArray = ["CAY", "CAYm1", "CAYm2"]; // pass columns here dynamically

    const handleAddRow = () => {
        const item = {};
        setRows([...rows, item]);
    };

    const postResults = () => {
        console.log(rows); // there you go, do as you please
    };
    const handleRemoveSpecificRow = (idx) => {
        const tempRows = [...rows]; // to avoid  direct state mutation
        tempRows.splice(idx, 1);
        setRows(tempRows);
    };

    const updateState = (e) => {
        let prope = e.target.attributes.column.value; // the custom column attribute
        let index = e.target.attributes.index.value; // index of state array -rows
        let fieldValue = e.target.value; // value

        const tempRows = [...rows]; // avoid direct state mutation
        const tempObj = rows[index]; // copy state object at index to a temporary object
        tempObj[prope] = fieldValue; // modify temporary object

        // return object to rows` clone
        tempRows[index] = tempObj;
        setRows(tempRows); // update state
    };



    return (
        <>
            <Box sx={{ mt: 3 }}>
                <InputLabel id="demo-controlled-open-select-label">Details of all the programs being offered by the institution under consideration*</InputLabel>
                <table className="table table-bordered table-hover" id="program_Logic">
                    <thead>
                        <tr>
                            <th>Items</th>
                            {columnsArray.map((column, index) => (
                                <th className="text-center" key={index}>
                                    {column}
                                    <table className="table table-bordered table-hover" id="program_Logic">
                                        <thead>
                                            <tr>
                                                <th>Min</th>
                                                <th>Max</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </th>
                            ))}
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((item, idx) => (
                            <tr key={idx}>
                                {columnsArray.map((column, index) => (
                                    <td key={index}>
                                        <input
                                            type="text"
                                            column={column}
                                            value={rows[idx][column]}
                                            index={idx}
                                            className="form-control"
                                            onChange={(e) => updateState(e)}
                                        />
                                    </td>
                                ))}
                                <DeleteOutlineIcon sx={{ mt: 1 }} fontSize="large" onClick={() => handleRemoveSpecificRow(idx)} />
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AddBoxOutlinedIcon sx={{ mt: 1, ml: 130 }} fontSize="large" onClick={handleAddRow} />
            </Box>
        </>
    )
}

export default programsOfferedbyInstitute