import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Price = (props) => {

        const rand = () => {
                return Math.round(Math.random() * 20) - 10;
              }
              
              const getModalStyle = () => {
                const top = 50 + rand();
                const left = 50 + rand();
              
                return {
                  top: `${top}%`,
                  left: `${left}%`,
                  transform: `translate(-${top}%, -${left}%)`,
                };
              }

              const useStyles = makeStyles((theme) => ({
                paper: {
                  position: 'absolute',
                  width: 400,
                  backgroundColor: theme.palette.background.paper,
                  border: '2px solid #000',
                  boxShadow: theme.shadows[5],
                  padding: theme.spacing(2, 4, 3),
                },
              }));
  const classes = useStyles();

              
  const [modalStyle] = React.useState(getModalStyle);
        
        return (
                <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-title">Text in a modal</h2>
                        <p id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
              </div>
        );
}
export default Price;
