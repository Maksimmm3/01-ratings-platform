import { API } from '../api';

export async function getCategories() {
  const res = await fetch(`http://localhost:3000${API.category.findAll}`);
  return res.json();
}
