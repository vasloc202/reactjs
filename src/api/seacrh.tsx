import instance from "./instance";

export const searchProduct = (data: any) => {
    const url = `/search?q=${data}`;
    return instance.get(url);
}