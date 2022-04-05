import instance from "./instance";

export const searchProduct = (search_value: any) => {
    const url = `/search?q=${search_value}`;
    return instance.get(url);
}