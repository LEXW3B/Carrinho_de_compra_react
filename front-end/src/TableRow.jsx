import React from 'react'

const TableRow = ({data}) => {
  return (
    <>
      <tr>
        <td>
          <div className="product">
            <img src="https://picsum.photos/100/120" alt="" />
            <div className="info">
              <div className="name">{data.name}</div>
              <div className="category">{data.category}</div>
            </div>
          </div>
        </td>
        <td>R$ {data.price}</td>
        <td>
          <div className="qty">
            <button>
              <i className='bx bx-minus'></i>
            </button>

            <span>{data.quantity}</span>
            
            <button>
              <i className='bx bx-plus'></i>
            </button>
          </div>
        </td>
        <td>R$ {data.price * data.quantity}</td>
        <td>
          <button className="remove"><i className='bx bx-x'></i></button>
        </td>
      </tr>  
    </>
  );
}

export default TableRow;
