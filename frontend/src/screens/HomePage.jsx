import ExamTips from "../components/ExamTips";
import Announcement from "../components/Announcement";
import Quiz from "../components/Quiz";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import { Container , Grid} from "@mui/material";
import Cookies from 'js-cookie';



const isValidCookie = () => {
  const myCookie = Cookies.get('user');
  return myCookie === undefined ;
};
const HomePage = () => {
  if(isValidCookie()) {
    
     return (<><h1>NOT ALLOWED</h1></>)

  }
  else
  return (
    <>
      <PrimarySearchAppBar />
      <Container>
      <Grid container spacing={2} sx={{marginTop: 5}}>
        <Grid xs={12}>
          <ExamTips />
        </Grid>
        <Grid xs={9}>
          <Announcement />
        </Grid>
        <Grid xs={3}>
         <Quiz />
        </Grid>
      </Grid>
      </Container>
    </>
  )
}

export default HomePage;
