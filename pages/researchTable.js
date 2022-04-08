import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import axios from "axios"
import * as React from 'react';




const ResearchTable = () => {

    const [myData, setData] = React.useState([]);
    React.useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:4001/api/getAllResearch");
        setData(result.data.data);

    };

    return (
        <Box sx={{ minWidth: 1000, mt: 3 }}>
            <Card variant="outlined" className='shadowCard'>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Paper Title</TableCell>
                                    <TableCell align="right">Faculty Name</TableCell>
                                    <TableCell align="right">Publish Year</TableCell>
                                    <TableCell align="right">Indexing</TableCell>
                                    <TableCell align="right">Journal Name</TableCell>
                                    <TableCell align="right">DOI</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {myData.map((row) => (
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {row.paperTitle}
                                        </TableCell>
                                        <TableCell align="right">{row.authorName}</TableCell>
                                        <TableCell align="right">{row.publishedDate}</TableCell>
                                        <TableCell align="right">{row.indexing}</TableCell>
                                        <TableCell align="right">{row.journalName}</TableCell>
                                        <TableCell align="right">{row.publishedDate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    );
}
export default ResearchTable;