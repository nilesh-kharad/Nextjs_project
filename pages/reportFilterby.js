import * as React from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Filterby = () => {

  //Department
  const [dept, setDept] = React.useState('');
  const [opendept, setOpendept] = React.useState(false);

  //Department
  const handleChange = (event) => {
    setDept(event.target.value);
  };

  const handleClose = () => {
    setOpendept(false);
  };

  const handleOpen = () => {
    setOpendept(true);
  };

  //year
  const [year, setYear] = React.useState('');
  const [openyear, setOpenyear] = React.useState(false);

  const handleyearChange = (event) => {
    setYear(event.target.value);
  };

  const handleyearClose = () => {
    setOpenyear(false);
  };

  const handleyearOpen = () => {
    setOpenyear(true);
  };

  //Division 
  const [division, setDiv] = React.useState('');
  const [opendiv, setOpendiv] = React.useState(false);

  const handledivchange = (event) => {
    setDiv(event.target.value);
  };

  const handledivclose = () => {
    setOpendiv(false);
  };

  const handledivopen = () => {
    setOpendiv(true);
  };

  //Academic year
  const [Academicyr, setacademicyr] = React.useState('');
  const [openacademicyr, setOpenacademicyr] = React.useState(false);

  const handleacademicyrchange = (event) => {
    setacademicyr(event.target.value);
  };

  const handleacademicyrclose = () => {
    setOpenacademicyr(false);
  };

  const handleacademicyropen = () => {
    setOpenacademicyr(true);
  };


  return (
    <>
      <div className="filter">
        <Button sx={{ display: 'inline', mt: 2 }}                     >
          Filter by:-
        </Button>
        <FormControl sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-controlled-open-select-label">Department Name</InputLabel>
          <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={opendept} onClose={handleClose} onOpen={handleOpen} value={dept} label="Age" onChange={handleChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'IT'}>IT</MenuItem>
            <MenuItem value={'Computer'}>Computer</MenuItem>
            <MenuItem value={'Civil'}>Civil</MenuItem>
            <MenuItem value={'Electronics'}>Electronics</MenuItem>
          </Select>
        </FormControl>
       
       
        <FormControl sx={{ m: 1, minWidth: 220, maxHeight: 20, minHeight: 30 }}>
          <InputLabel id="demo-controlled-open-select-label">FY</InputLabel>
          <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={openyear} onClose={handleyearClose} onOpen={handleyearOpen} value={year} label="Age" onChange={handleyearChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'FY'}>FY</MenuItem>
            <MenuItem value={'SY'}>SY</MenuItem>
            <MenuItem value={'TY'}>TY</MenuItem>
          </Select>
        </FormControl>


        <FormControl sx={{ m: 1, minWidth: 220, maxHeight: 20, minHeight: 30 }}>
          <InputLabel id="demo-controlled-open-select-label">DIV</InputLabel>
          <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={opendiv} onClose={handledivclose} onOpen={handledivopen} value={division} label="Age" onChange={handledivchange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'FY'}>DIV-A</MenuItem>
            <MenuItem value={'SY'}>DIV-B</MenuItem>
            <MenuItem value={'TY'}>DIV-C</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 220, maxHeight: 20, minHeight: 30 }}>
          <InputLabel id="demo-controlled-open-select-label">Academic year</InputLabel>
          <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={openacademicyr} onClose={handleacademicyrclose} onOpen={handleacademicyropen} value={Academicyr} label="Age" onChange={handleacademicyrchange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'FY'}>2020-2021</MenuItem>
            <MenuItem value={'SY'}>2021-2022</MenuItem>
            <MenuItem value={'TY'}>2022-2023</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  )
}

export default Filterby