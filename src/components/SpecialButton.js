import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button, makeStyles, Tooltip } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  btn: {
    margin: '0 auto',
    display: 'block'
  }
}))

const SpecialButton = ({ dataItem }) => {
  const classes = useStyles();
  const { state, addItem } = useContext(GlobalContext);
  const isTrue = state.find(item => item.id === dataItem.id);
  /* When a Particular Product in cart It return a button that show tooltip (Already in Cart)
  When not you can add the product to cart
  */
  return (
    (!isTrue) ?
      (<Button variant='contained' color='primary' onClick={() => addItem(dataItem)} className={classes.btn}>
        Buy Now</Button>) : (<Tooltip title='Already in Cart' placement="top-end"
        enterDelay={400} leaveDelay={200} arrow>
        <Button variant='contained' color='primary' className={classes.btn}>
          Buy Now</Button>
      </Tooltip>)
  )
}

export default SpecialButton;
