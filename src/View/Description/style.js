import { makeStyles } from '@material-ui/core/styles';


const Style = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container:{
      marginTop: '0px',
    },
    image: {
      height: 'calc(100vh - 100px)',
    },
    link:{
      textTransform: 'none',
      fontSize:'1.2rem',
      fontWeight: 300,
      color:'red',
      '&:hover': {
        backgroundColor: 'transparent',
      }
    },
    card: {
      backgroundColor: '#000',
      color: '#fff',     
    },
    media: {
      height: '250px',
      borderBottom: 'solid 2px red',
    },
    text:{
      padding: '10px 20px',
      fontSize: '1.4rem',
    }

  }));

export default Style;