import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

export default function ExamTips() {
  return (
    <Card sx={{ width: '100%' , padding: 5}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          EXAMS TIME
        </Typography>
        <Typography variant="body2" color="text.secondary">
        “If you think you can do a thing or think you can’t do a thing, you’re right.”
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="big" color="primary">
          View exams Tips
        </Button>
      </CardActions>
    </Card>
  );
}