import { makeStyles } from '@material-ui/core/styles';


const Style = makeStyles((theme) => ({
  
    root: {
      flexGrow: 1,
      height: '30px',
    },
    appBar: {
      backgroundColor: '#000',
    },
    logo:{
      height: '10vh',
    },
    button:{
      color: '#fff',
      fontSize: '1.2rem',
      fontWeight: '1000',
      margin: '5px 20px 8px 0px',
      '&:hover': {
        borderBottom: 'solid 8px black',
        marginBottom: '0',
      }
    },
    gridContainer:{
      //position:'absolute',
    },
    options:{
      marginTop:'5vh',
      padding: '10px 10px 0px 30px',
      textAlign: 'center',
      backgroundColor: 'red',      
      clipPath: 'polygon(0 0, 100% 0%, 90% 100%, 10% 100%)',      
    }
  }));

export default Style;