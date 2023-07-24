import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/c9afebae19dd4273886ac2f553f05a30', /*insira a url do cudcrud*/
  timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'} esta parte da erro
});