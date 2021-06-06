import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

  root: {
    margin: '0 auto',
    marginTop: 50,
    maxWidth: '95vw',
    marginLeft:'50px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw'
    }
  },
  image: {
    width: '70%',
  },
  heading: {
    textTransform: 'uppercase',
    padding: theme.spacing(2),
    paddingBottom: 0,
  },
  price: {
    // color: 'blue',
    padding: theme.spacing(2),
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: 'bold',
    fontSize: '30px'
  },
  title: {
    textTransform: 'uppercase',
    padding: theme.spacing(2),
    paddingBottom: 0,
    letterSpacing: '1px',
    fontStyle: 'italic'
  },
  description: {
    letterSpacing: '3px',
    padding: theme.spacing(2)
  },
  container: {
    maxWidth: '80%',
    margin: '0 auto',
  },
  avialableColor: {
    height: 50,
    width: 85,
    border: '2px solid black',
    cursor: 'pointer'
  },
  btn: {
    margin: '0 auto',
    marginTop: '100px',
    display: 'block',
    backgroundColor: "#6751fe",
    color: 'white',
    fontStyle:'none'  }
}));
const ProductDetails = ({ data }) => {
  const [qty, setQty] = useState('');
  const [val, setVal] = useState(0);
  const { productId } = useParams();
  const classes = useStyles();
  // eslint-disable-next-line no-use-before-define
  const dataItem = data[productId - 1];
  // const itemsPrice = dataItem.reduce((a, c) => a + c.price * c.qty, 0);
  const handleAddToCart = () => {
    alert('button clicked')
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={12} md={7}>
          <Typography variant='h3' className={classes.heading}>{dataItem.name}</Typography>
          <Typography className={classes.price}>${dataItem.price}</Typography>
          <div>
            <img src={dataItem.images[val]} alt={dataItem.name} className={classes.image} />
          </div>
          <hr />
          <Grid container spacing={3} justify='center' className={classes.container} alignItems='center'>
            <Grid item xs={12} sm={12} md={4}>
              <Typography variant='subtitle1' style={{ textAlign: 'center' }}>4 Colors Avialable</Typography>
            </Grid>

            {dataItem.images.map((image, index) => (

              <Grid item xs={6} sm={6} md={2} key={index} onClick={() => setVal(index)}>
                <img src={image} alt={dataItem.name}
                  className={classes.avialableColor} />
              </Grid>
            ))}
          </Grid>
          <Typography className={classes.price}>Total Price: <br /> ${dataItem.price}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Typography className={classes.description}>{dataItem.description}</Typography>
          <Typography className={classes.description}>Category: <b>{dataItem.Category}</b> </Typography>

          <div className="details-action">
            <ul style={{ listStyle: 'none' }}>
              <li >
                Status:{' '}   {dataItem.QuantityAvailable > 0 ? <strong className="Instock">In Stock</strong> : <i className="unavailable">Unavailable</i>}
              </li>
              <br />
              <li>
                Qty:{' '}
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(dataItem.QuantityAvailable).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </li>
              <br />
              {/* <li>

                    <div>${itemsPrice.toFixed(2)}</div>

                    </li> */}

            </ul>
            {/* <h3>
                    Subtotal ( {data.reduce((a, c) => (a + c.qty), 0)} items): $
                     {data.reduce((a, c) => a + c.price * c.qty, 0)}
                </h3> */}
          </div>

          <div>
            {dataItem.QuantityAvailable > 0 && (

              <button onClick={handleAddToCart}
                className={classes.btn} dataItem={dataItem} >Buy Now</button>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductDetails;
