import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
//import styled from 'styled-components';
import axios from 'axios';

import ProductDetail from '../ProductDetail.jsx';
import ProductOverview from '../ProductOverview/ProductOverview.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import AddToCart from '../AddToCart/AddToCart.jsx';
import getAvailableSizes from '../AddToCart/selectSize.jsx';
import { useGlobalContext } from '../../../contexts/GlobalStore';

function StyleSelector() {

  const { productID, setProductID, productInfo, setProductInfo,
    productStyles, setProductStyles } = useGlobalContext();
  setProductID(window.location.pathname);

  useEffect(() => {

    function getStyles() {
      axios
        .get('/products/styles', { params: { ID: productID } })
        .then((stylesResult) => getAvailableSizes(stylesResult))
        .catch((err) => { console.log('error getting available sizes', err) })
    };
    getStyles();
  }, []);

  return(
    <div>Style Selector Here</div>
  );
};

export default StyleSelector;