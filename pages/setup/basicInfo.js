import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import OtherInstitutesTabel from './otherInstitutesTabel'
import OtherDeptTabel from './otherDeptTabel'
import ProgramsAcreditions from './programsAcreditions'
import ProgramsOfferedbyInstitute from './programsOfferedbyInstitute'
import ContactualEmp from './contactualEmp'
import TotalEngStudents from './totalEngStudents'
import Coordinators from './coordinators'
import Button from '@mui/material/Button';



const BasicInfo = () => {
    const [NameOfInstitute, setnameOfInstitute] = React.useState();
    const [AddressOfInstitute, setAddressOfInstitute] = React.useState();
    const [NameOfUniversity, setNameOfUniversity] = React.useState();
    const [AddressOfUniversity, setAddressOfUniversity] = React.useState();
    const [yearOfEstablishment, setyearOfEstablishment] = React.useState(new Date());
    const [openUniversity, setOpenUniversity] = React.useState(false);
    const [YearOfGrantStatus, setYearOfGrantStatus] = React.useState();
    const [TotalNumberofEmployees, setTotalNumberofEmployees] = React.useState();

    return (
        <>
            <div className="contentbody">
                <Box sx={{my:3}}>
                    <h6>Institute setup</h6>
                </Box>
                <Box sx={{fontWeight: 'bold'}} className='heading-color'>
                    <h4>Basic Information SAR PART A</h4>
                </Box>
                <Box fullWidth component="form" sx={{ mt: 3 }} className='BasicInfoForm' noValidate autoComplete="off">
                    <Box sx={{ mt: 3 }} noValidate autoComplete="off">
                        <TextField type="text" label="Name of Institute" fullWidth id="name-of-Institute" value={NameOfInstitute} onChange={(e) => setnameOfInstitute(e.target.value)} variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 3 }} noValidate autoComplete="off">
                        <TextField type="text" label="Address of Institute" fullWidth id="Address-of-Institute" value={AddressOfInstitute} onChange={(e) => setAddressOfInstitute(e.target.value)} variant="outlined" />
                    </Box>
                    <FormControl fullWidth sx={{ mt: 3 }}>
                        <InputLabel id="demo-controlled-open-select-label">Name of Affiliated University</InputLabel>
                        <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" placeholder="Name of Affiliated University" open={openUniversity} onClose={() => setOpenUniversity(false)} onOpen={() => setOpenUniversity(true)} value={NameOfUniversity} onChange={(e) => setNameOfUniversity(e.target.value)}>
                            <MenuItem value={'Savitribai Phule University'}>Savitribai Phule University</MenuItem>
                            <MenuItem value={'Bamu University'}>Bamu University</MenuItem>
                            <MenuItem value={'Mumbai University'}>Mumbai University</MenuItem>
                            <MenuItem value={'Nashik University'}>Nashik University</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ mt: 3 }}>
                        <TextField type="text" label="Address of Affiliated University" fullWidth id="Address-of-university" value={AddressOfUniversity} onChange={(e) => setAddressOfUniversity(e.target.value)} variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker disableFuture label="year Of Establishment" openTo="year" views={['year']} value={yearOfEstablishment} onChange={(e) => setyearOfEstablishment(e.getFullYear())} renderInput={(params) => <TextField {...params} />} />
                        </LocalizationProvider>
                    </Box>
                    <InputLabel sx={{ mt: 2 }} id="demo-controlled-open-select-label">Type of Institute</InputLabel>
                    <Box >
                        <FormControlLabel control={<Checkbox />} label="Institute of National Important" />
                    </Box>
                    <Box >
                        <FormControlLabel control={<Checkbox />} label="University" />
                    </Box>
                    <Box >
                        <FormControlLabel control={<Checkbox />} label="Deemed University" />
                    </Box>
                    <Box >
                        <FormControlLabel control={<Checkbox />} label="Autonomous" />
                    </Box>
                    <Box >
                        <FormControlLabel control={<Checkbox />} label="Other (Please Specify)" />
                    </Box>
                    <Box sx={{ mt: 3, minWidth: 300 }}>
                        <TextField type="text" label="Year of Grant Status" required id="Year-of-Grant-Status" value={YearOfGrantStatus} onChange={(e) => setYearOfGrantStatus(e.target.value)} variant="outlined" />
                    </Box>
                    <Box sx={{ mt: 3, minWidth: 300 }}>
                        <TextField type="text" required label="Academic Autonomy Status" id="Year-of-Grant-Status" value={YearOfGrantStatus} onChange={(e) => setAddressOfUniversity(e.target.value)} variant="outlined" />
                    </Box>

                    {/* Ownership Status  */}
                    <Box sx={{ flexGrow: 30, mt: 2 }}>
                        <InputLabel id="demo-controlled-open-select-label">Ownership Status</InputLabel>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={3}>
                                <FormControlLabel control={<Checkbox />} label="Central Government" />
                            </Grid>
                            <Grid item xs={9}>
                                <FormControlLabel control={<Checkbox />} label="State Government" />
                            </Grid>
                            <Grid item xs={3}>
                                <FormControlLabel control={<Checkbox />} label="Government Aided" />
                            </Grid>
                            <Grid item xs={9}>
                                <FormControlLabel control={<Checkbox />} label="Self Financing" />
                            </Grid>
                            <Grid item xs={3}>
                                <FormControlLabel control={<Checkbox />} label="Trust" />
                            </Grid>
                            <Grid item xs={9}>
                                <FormControlLabel control={<Checkbox />} label="Society" />
                            </Grid>
                            <Grid item xs={3}>
                                <FormControlLabel control={<Checkbox />} label="Section 25 Company" />
                            </Grid>
                            <Grid item xs={9}>
                                <FormControlLabel control={<Checkbox />} label="Other (Please Specify)" />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box >
                        <TextField label="Provide Details" fullWidth required multiline rows={3} maxRows={4} />
                    </Box>
                    <OtherInstitutesTabel />
                    <OtherDeptTabel />
                    <ProgramsAcreditions />
                    <Box >
                    <TextField type="text" label="Total Number of Employees" required id="Total-Number-of-Employeess" value={TotalNumberofEmployees} onChange={(e) => setTotalNumberofEmployees(e.target.value)} variant="outlined" />
                    </Box>
                    <ProgramsOfferedbyInstitute />
                    <ContactualEmp />
                    <TotalEngStudents />
                    <Box sx={{mt:2}}>
                        <TextField label="Vision Of Institute" fullWidth required multiline rows={3} maxRows={4} />
                    </Box>
                    <Box sx={{mt:2}}>
                        <TextField label="Mission of Institute" fullWidth required multiline rows={3} maxRows={4} />
                    </Box>
                    <Coordinators />
                    <Button variant="contained" className='saveBtn'>Save Changes</Button>
                </Box>
            </div>
        </>
    )
}

export default BasicInfo