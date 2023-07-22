import React, { useState } from 'react';

import './styles.scss';
import TableRow from './TableRow';
import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
import Summary from './Summary';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className="content">
          <section>
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
                {cart.map((item) => <TableRow />)}
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
            <Summary />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;