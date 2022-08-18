import { useEffect, useState } from "react";
import axios from 'axios'; //Axios permite realizar peticiones http

const useGetProducts = (API) => {
    
    const [products, setProducts] = useState([]);

	//useEffect hace uso de dos valores, uno donde se define el comportamiento
	//de una función, y el otro los datos que estaran en constante cambio
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await axios.get(API); //Se debe instalar un plugin de babel para que el await y async funcionen correctamente npm install @babel/plugin-transform-runtime
		setProducts(response.data); //Recibe los datos de la peticion de la API	
	}

    return products;

};

export default useGetProducts;