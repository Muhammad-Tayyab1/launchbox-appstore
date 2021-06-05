import React from 'react';
import { Button, Card, CardActionArea, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useClasses = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    marginTop: 5,
    maxWidth: '98vw',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90vw'
    },
    textAlign: 'center'
  },
  cardRoot: {
    maxWidth: '100%',
    margin: '0 auto',
    height: '350px',
    display: 'flexbox',
    alignContent: 'center',
    
  },
  link: {
    textDecoration: 'none',
    
  },
  cardImage: {
    display: 'center',
    alignContent: 'center',
    margin: '20px',
    // marginRight:'20px',
    maxHeight: 120,
    [theme.breakpoints.down('sm')]: {
      maxHeight: 200,
      maxWidth: 300
    },

  }
}));

const ProductsListing = ({ data }) => {

  const classes = useClasses();
  return (
    <div className={classes.root}>
    <Grid container spacing={2} justify='center' >
        {data.map((shoe) => {
          const productId = shoe.id.toString();

          return (
            <Grid item xs={12} sm={6} md={3} key={productId} style={{margin:'20px'}}>
              <Link to={productId} className={classes.link}>
                <Card className={classes.cardRoot}>
                  <CardActionArea >

                    <img
                      component="img"
                      src={shoe.images[0]}
                      alt={shoe.name}
                      className={classes.cardImage}
                    />

                    <CardContent>
                      <Typography gutterBottom variant='h6' style={{ fontWeight: 'bold', textAlign: 'center' }}>{shoe.name.toUpperCase()}</Typography>
                      <Typography style={{ color: 'gray' }}>{shoe.title}</Typography>
                      <Typography style={{ marginTop: '10px', }}>${shoe.price}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
              <Link to={productId} className={classes.link}>
                <Button style={{ width: '100%', backgroundColor: '#051937', height: '40px', color:'white' }}>
                  Buy Now</Button></Link>
            </Grid>
          )
        })}
      </Grid>   </div >)
}

export default ProductsListing;
