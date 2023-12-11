import React from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const ProductList = () => {
  const products = [
    {
      id: 1,
      category: 'Phone',
      name: 'Phone Model 1',
      description: 'Description for Phone Model 1',
      image: 'https://via.placeholder.com/150',
      price: '$500',
    },
    {
      id: 2,
      category: 'Phone',
      name: 'Phone Model 2',
      description: 'Description for Phone Model 2',
      image: 'https://via.placeholder.com/150',
      price: '$700',
    },
    {
      id: 3,
      category: 'Computer',
      name: 'Computer Model 1',
      description: 'Description for Computer Model 1',
      image: 'https://via.placeholder.com/150',
      price: '$1200',
    },
    {
      id: 4,
      category: 'Computer',
      name: 'Computer Model 2',
      description: 'Description for Computer Model 2',
      image: 'https://via.placeholder.com/150',
      price: '$1500',
    },
    // Add more products as needed...
  ];
  
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="90vh">
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="150"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
