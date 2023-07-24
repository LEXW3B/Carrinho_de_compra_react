import React, { useEffect, useState } from 'react';

import './styles.scss';
import TableRow from './TableRow';
import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
import Summary from './Summary';

import {api} from './provider';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const [cart, setCart] = useState([]);

  const productObject = {
    name: 'produto',
    category: 'categoria',
    price: randomNumber(90, 1200),
    quantity: 1,
  }

  const fetchData = () => {
    api.get('/cart').then((response) => setCart(response.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddItem = () => {
    // inserção
    console.log('Disparou  handleAddItem');

    api.post('/cart', productObject).then(response => {
      console.log(response);

      fetchData();
    });
  }

  const handleRemoveItem = (item) => {
    // remoção
    console.log('Disparou  handleRemoveItem');
    console.log({item});

    api.delete(`/cart/${item._id}`).then((response) => {
      console.log(response);
      fetchData();
    });
  }

  const handleUpdateItem = (item, action) => {
    // atualização de quantidade
    console.log({item});
    let newQuantity = item.quantity;

    if (action === 'decrease') {
      if (newQuantity === 1) {
        return;
      }
      newQuantity -= 1;
    }
    if (action === 'increase') {
      newQuantity += 1;
    }
    
    const newData = {...item, quantity: newQuantity}
    delete newData._id;

    console.log({ newData });
    api.put(`/cart/${item._id}`, newData).then( (response) => {
      console.log({ response });

      fetchData();
    });
  }

  const getTotal = () => {
    let sum = 0;

    for (let item of cart) {
      sum += item.price * item.quantity;
    }
    return sum;
  }
  
  const cartTotal = getTotal(); 
 
  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className="content">
          <section>
            <button
              onClick={handleAddItem}
              style={{ padding: '5px 10xp', marginBottom: '15px', background: 'red' }}
            >
              add to cart
            </button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>

              <tbody>
                {cart.map((item) => (
                  <TableRow
                    key={item._id}
                    data={item}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateItem={handleUpdateItem}
                  />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan={'5'} style={{textAlign: 'center'}}>
                      <b>Carrinho de compras vazio.</b>
                    </td>
                  </tr>
                )}              
              </tbody>
            </table>
          </section>
          <aside>
            <Summary total={cartTotal} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;