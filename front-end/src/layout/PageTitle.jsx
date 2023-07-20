import React from 'react';

const PageTitle = ({ data }) => {
  return (
    <div className="page-title">{data || '{Faltando titulo}'}</div>
  );
}

export default PageTitle;