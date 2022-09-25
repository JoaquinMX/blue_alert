import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReportCard from './ReportCard';
const data = {
    reportKey: 123456,
    name: 'Joaquin',
    genre: 'Otro',
    phone: '6462558800',
    incidentKind: 'Asalto y agresión',
    //description
    mapPoint: [255, 255],
    timeStamp: Date.now(),
    isVictim: true,    
    isReportedToPolice: false,
    // policeReport: 

};

function StatusCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h4'>{data.reportKey}</Typography>
            <Typography variant="body2">
              {data.isReportedToPolice ? 'Este informe ha sido reportado con la policia y se le esta dando seguimiento' : 'Este informe no ha sido reportado con la policia, si deseas hacerlo en estos momentos estos fueron los datos que proporcionaste: '}
            </Typography>
            {
                data.isReportedToPolice ? "" : <ReportCard incidentKind={data.incidentKind} mapPoint={data.mapPoint} timeStamp={data.timeStamp}/>
            }

          </CardContent>
        </Card>
      );
}

export default StatusCard;