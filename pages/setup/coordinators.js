import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const coordinators = () => {
    const [coordinator, setCoordinator] = React.useState([{}]);

    const addCoordinator = () => {
        console.log("coordinator added")
        const item = {};
        setCoordinator([...coordinator, item]);
    };



    let removeCoordinator = (i) => {
        let newFormValues = [...coordinator];
        newFormValues.splice(i, 1);
        setCoordinator(newFormValues)
    }

    return (
        <>
            <Box sx={{ mt: 3 }}>
                <Box sx={{ mt: 2 }}>
                    <InputLabel id="demo-controlled-open-select-label">Contact Information of the head of the institution & NBA Coordinator (if designated)</InputLabel>
                </Box>
                <Box sx={{ display:'flex',flexWrap: 'wrap', mt: 3 }}>
                {coordinator.map((item, idx) => (
                        <Box sx={{mr:2}}>
                                <InputLabel id="demo-controlled-open-select-label">Coordinator {idx + 1}</InputLabel>
                                <TextField sx={{ mt: 2 }} id="Full Name" label="Full Name" variant="outlined" />
                                <Box>
                                    <TextField sx={{ mt: 2 }} label="Designation" variant="outlined" />
                                </Box>
                                <Box>
                                    <TextField sx={{ mt: 2 }} label="Mobile Number" variant="outlined" />
                                </Box>
                                <Box>
                                    <TextField sx={{ mt: 2 }} label="Email ID" variant="outlined" />
                                </Box>
                                <DeleteOutlineIcon sx={{ mt: 1 }} fontSize="large" onClick={() => removeCoordinator(idx)} />
                        </Box>
                ))}
                </Box>
                <AddBoxOutlinedIcon sx={{ mt: 1 }} onClick={addCoordinator} fontSize="large" />
            </Box>
        </>
    )
}

export default coordinators