import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <Typography variant="p" style={{color:'white'}} align="left">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Alqayem Organisation Kolkata
        </Link>{' '}
        {2021}
        {'.'}
      </Typography>
    );
  }