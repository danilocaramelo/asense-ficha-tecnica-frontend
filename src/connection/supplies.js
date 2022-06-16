import api from "../config/httpRequest";

export async function getSupplies() {
  return await api.get("/insumo/todos");
}

export function postSupply(values) {
  try {
    api.post("/insumo/add", values);
  } catch (e) {
    console.log(e);
  }
}
