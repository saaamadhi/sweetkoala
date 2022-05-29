import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { arrayOf, string, number, shape } from 'prop-types';
import { CLAUDINARY_PATH } from '../../../shared/const';
import CatalogCard from '../CatalogCard';
import { store } from '../../../redux/store';
import styles from './catalog.css';

const Catalog = ({ products }) => {
  const { wrap, content } = styles;

  return (
    <div className={wrap}>
      {products?.length ? (
        <div className={content}>
          {products.map((item) => (
            <CatalogCard
              key={item.sku}
              item={item}
              publicId={`${CLAUDINARY_PATH}/image/upload/v1652370045/${item.sku}.jpg`}
            />
          ))}
        </div>
      ) : (
        <h1>
          <FormattedMessage id="err.noProductsLeft" />
        </h1>
      )}
    </div>
  );
};

export default Catalog;

Catalog.propTypes = {
  products: arrayOf(
    shape({
      id: number,
      sku: string,
      p_price: number,
      categoryId: number,
    })
  ),
};
//id, sku,name, p_price, categoryId
