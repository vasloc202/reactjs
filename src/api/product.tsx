import instance from "./instance";
export const list = () => {
  const url = `/products`;
  return instance.get(url);
};
export const getOne = (id: number | string | undefined) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
