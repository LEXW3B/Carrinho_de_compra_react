import React from 'react';

import './styles.scss';
import TableRow from './TableRow';

function App() {
  return (
    <>
      <header>
        <span>Carrinho de compras <b>LEXW3B</b></span>
      </header>

      <main>
        <div class="page-title">Seu carrinho</div>
        <div class="content">
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
                <TableRow />
              </tbody>
            </table>
          </section>
          <aside>
            <div class="box">
              <header>Resumo da compra</header>
              <div class="info">
                <div>
                  <span>Sub-total</span><span>R$ 418</span>
                </div>

                <div>
                  <span>Frete</span><span>Gratuito</span>
                </div>

                <div>
                  <button>Adicionar cupom de desconto <i class='bx bx-right-arrow-alt'></i></button>
                </div>
              </div>
              <footer>
                <span>Total</span>
                <span>R$ 418</span>
              </footer>
            </div>

            <button>Finalizar compras</button>
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;