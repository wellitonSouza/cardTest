import { makeStyles } from '@material-ui/core/styles';


const Style = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '1rem',
      '&:hover':{
        boxShadon: '10px 5px 1px black',
      }        
    },
      media: {
        height: '250px',
        borderBottom: 'solid 2px red',
        clipPath:
        'polygon(0% 0%, 100% 0%, 100% 84%, 0% 100%)',
      },  
      serie: {
        height: '250px',
        borderBottom: 'solid 2px red',
      },   
  }));

export default Style;