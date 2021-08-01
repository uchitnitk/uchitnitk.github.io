import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Price from '../Price/Price';

const Pricing = (props) => {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
	<TableCell key={props.key} align={props.align}>
		<Button variant="contained" color="secondary" onClick={handleOpen}>
			View Pricing
		</Button>
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
		>
			<Price />
		</Modal>
	</TableCell>
	  	
  );
}



export default Pricing;
