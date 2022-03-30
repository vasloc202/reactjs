import instance from "./instance";

// export const create = async (req,res) => {
//     try {
//         const url = `/categories/${}` 
//     } catch (error) {
        
//     }
// }

export const getAll = () => {
    const url = "/category";
    return instance.get(url);
}