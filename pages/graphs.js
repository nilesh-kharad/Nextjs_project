
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
import axios from "axios"

import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    BarSeries,
    PieSeries,
    Title
} from '@devexpress/dx-react-chart-material-ui';
const graph = () => {
    const [yourData, setData] = React.useState([]);
    React.useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:4001/api/getYearwiseData");
        setData(result.data.data);

    };


    const [yourPieData, setPieData] = React.useState([]);
    React.useEffect(() => {
        loadPiedata();
    }, []);

    const loadPiedata = async () => {
        const result = await axios.get("http://localhost:4001/api/getIndexwisedata");
        setPieData(result.data.data);

    };



   
    return (
        <>
            <div className="graph">
                <div>
                    <Box sx={{ minWidth: 500, mt: 3 }}>
                        <Card variant="outlined" className='shadowCard'>
                            <CardContent>
                                <Chart data={yourPieData} sx={{ maxHeight: 300 }}>
                                    <PieSeries valueField="count" argumentField="_id" innerRadius={0.6} />
                                    <Title text="Studies per day" />
                                </Chart>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
                <div>
                    <Box sx={{ minWidth: 500, mt: 3 }}>
                        <Chart data={yourData} sx={{ maxHeight: 350 }}>
                            <ArgumentAxis />
                            <ValueAxis />
                            <BarSeries valueField="count" argumentField="_id" />
                        </Chart>
                    </Box>
                </div>
            </div>
        </>
    )
}
export default graph