import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://crudcrud.com/api/fbd2ec4ccf9b4e599354d5d4f37aee6b/', /*insira a url do cudcrud*/
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});