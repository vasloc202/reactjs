import instance from "./instance";
export const list = () => {
  const url = `/products`;
  return instance.get(url);
};
export const getOne = (id: number | string | undefined) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const add = (product: any) => {
  const url = `/products`;
  return instance.post(url, product);
};
export const remove = (id: number | string | undefined) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
