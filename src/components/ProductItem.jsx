import React, {useContext} from 'react';
import '@styles/ProductItem.scss';
import  addToCartSVG from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext';

const ProductItem = ({product}) => {

	//const [cart, setCart] = useState(['']); //Se añade un valor inicial para la constante

	const {addToCart} = useContext(AppContext);

	const handleClick = (item) => { //Se define el proceso para un evento
		addToCart(item); //cuando se de clic, la const cart tendra el valor de Hola mundo!
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}> {/*Se llama a la funcion cuando ocurre el evento*/}
					<img src={addToCartSVG} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;