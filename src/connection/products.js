import api from "../config/httpRequest";

export async function getProducts() {
  return await api.get("/produto/todos");
}

export function postProducts(values) {
  try {
    api.post("/produto/add", values);
  } catch (e) {
    console.log(e);
  }
}
