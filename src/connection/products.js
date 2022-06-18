import api from "../config/httpRequest";

export async function getProducts() {
  try {
    return await api.get("/produto/todos");
  } catch (e) {
    console.log(e);
  }
}

export function postProducts(values) {
  try {
    api.post("/produto/add", values);
  } catch (e) {
    console.log(e);
  }
}

export function deleteProduct(id) {
  try {
    api.delete(`produto/remove/${id}`);
  } catch (e) {
    console.log(e);
  }
}
