import React from 'react';
import ProductCard from './components/ProductCard';
import conjunto from '../src/recursosVisuales/conjuntoDeportivo.webp';
import camisa from '../src/recursosVisuales/camisaC.webp';
import jogger from '../src/recursosVisuales/jogger.webp';

function App() {
  // Creamos un array de productos
  const products = [
    {
      id: 1,
      name: "Conjunto Deportivo de Mujer",
      description: "Marca Lululemon, tallas S, M, L, XL, XXL.",
      image: conjunto
    },
    {
      id: 2,
      name: "Camisa de Comprension",
      description: "Marca Adidad, colores: Negro, azul, gris.",
      image: camisa
    },
    {
      id: 3,
      name: "Jogger",
      description: "Marca Under Armour, unisex.",
      image: jogger
    }
  ];

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
      background: 'linear-gradient(to right, #e0f7fa, #fff)'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#00695c',
        fontSize: '2.5rem',
        marginBottom: '2rem'
      }}>
        💪 Tienda de Ropa Deportiva GreenSport 🍀
      </h1>

      {/* Renderizamos los productos con map */}
      {products.map(product => (
        <ProductCard 
          key={product.id}
          name={product.name}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default App;
