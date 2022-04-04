import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
import { Categories } from "../type/Categories";
const users = isAuthenticate();
export const create = async (category: Categories) => {
    try {
        const url = `/categories/${users.user._id}`;
        return instance.post(url, category, {
            headers: {
                Authorization: `Bearer ${users.token}`
            }
        })
    } catch (error) {
        message: "Tạch rồi"
    }
}

export const getAll = () => {
    const url = "/categories";
    return instance.get(url);
}