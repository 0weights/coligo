import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function Quiz() {
  const [quizzes, setquizzes] = React.useState([])
  const storedData = Cookies.get('user');
  const parsedUserData = JSON.parse(storedData);


  React.useEffect(() => {
    (async () => {
      // todo dynamic id
      let axiosPromise = await axios.get(`/api/users/quizes/${parsedUserData._id}`);
      setquizzes(axiosPromise.data.quizes);
    })();
  }, [])

  return (

        <List>
        {
          quizzes.map((quiz) =>(
            <ListItem alignItems="flex-start"  >
              <Card sx={{ minWidth: 100 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {quiz.tittle} 
                  </Typography>
                  <Typography variant="h5" component="div">
                    {quiz.course.title} 
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {quiz.topic} 
                  </Typography>
                  <Typography variant="body2">
                  {
                    // todo need a better way to do it
                    new Date(quiz.dueto).getFullYear() + "-" +
                    new Date(quiz.dueto).getMonth() + "-" +
                    new Date(quiz.dueto).getDate() + " " +
                    new Date(quiz.dueto).getHours() + " : " +
                    new Date(quiz.dueto).getMinutes()
                  } 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Start Quiz</Button>
                </CardActions>
              </Card>
            </ListItem>
          ))
        }
  
      </List>
  );
}