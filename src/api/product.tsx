import instance from "./instance";
import { ProductType } from "../type/ProductType";
import { isAuthenticate } from "../utils/localStorage";
let users = isAuthenticate();

export const list = (page: number | undefined, perpage: number | undefined) => {
  const url = `/products?perPage=${perpage}&page=${page}`;
  return instance.get(url);
};
export const getOne = (id: number | string | undefined) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const add = (product: ProductType) => {
  const url = `/products/${users.user._id}`;
  return instance.post(url, product, {
    headers: {
      Authorization: `Bearer ${users.token}`,
    },
  });
};
export const update = (product: ProductType) => {
  const url = `/products/${product._id}/${users.user._id}`;
  return instance.put(url, product, {
    headers: {
      Authorization: `Bearer ${users.token}`,
    },
  });
}
export const remove = (id: number | string | undefined) => {
  const url = `/products/${id}/${users.user._id}`;
  return instance.delete(url, {
    headers: {
      Authorization: `Bearer ${users.token}`,
    },
  });
};
