import axiosInstance from "./axios-interceptor";


export const getSingleUser = async (id) => {
  try {
    const response = await axiosInstance.get(`/user/qr/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
