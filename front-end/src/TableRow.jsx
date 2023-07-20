import React from 'react'

const TableRow = () => {
  return (
    <div>
      <tr>
        <td>
          <div class="product">
            <img src="https://picsum.photos/100/120" alt="" />
            <div class="info">
              <div class="name">Nome do produto</div>
              <div class="category">Categoria</div>
            </div>
          </div>
        </td>
        <td>R$ 120</td>
        <td>
          <div class="qty">
            <button><i class='bx bx-minus'></i></button>
            <span>2</span>
            <button><i class='bx bx-plus'></i></button>
          </div>
        </td>
        <td>R$ 240</td>
        <td>
          <button class="remove"><i class='bx bx-x'></i></button>
        </td>
      </tr>  
    </div>
  );
}

export default TableRow;
