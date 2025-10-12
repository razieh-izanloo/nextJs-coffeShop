import http from "./httpServices";

export function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}
