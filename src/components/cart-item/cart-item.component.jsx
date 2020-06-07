import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<div className='cart-item'>
		<img src={imageUrl} alt='item' />
		<div classsName='item-details'>
      <span className='name'>{name}</span>
      <div>
			<span className='price'>
      {quantity} * ${price}
			</span>
      </div>
		</div>
	</div>
);

export default CartItem;
