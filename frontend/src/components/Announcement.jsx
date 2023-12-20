import { ListItemAvatar, Avatar, Typography, ListItemText, List, ListItem} from '@mui/material';
import * as React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Announcement() {
  const [announcements, setAnnouncements] = React.useState([])
  const storedData = Cookies.get('user');
  const parsedUserData = JSON.parse(storedData);
  //serach the empty array
  React.useEffect(() => {
    (async () => {
      let axiosPromise = await axios.get(`/api/users/announcements/${parsedUserData._id}`);
      setAnnouncements(axiosPromise.data.announcements);
    })();
  }, [])

  return (
    <List >
      {
        announcements.map((announcement) =>(
          <ListItem    >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/images/x.png" />
            </ListItemAvatar>
            <ListItemText
              primary={announcement.teacher.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {announcement.course.title}
                  </Typography>

                </React.Fragment>
              }
              />
            <ListItemText secondary={announcement.text}/>

          </ListItem>
        ))
      }

    </List>

  );
}
