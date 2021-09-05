import axios from "axios";

const baseUrl =  process.env.REACT_APP_BASE_URL;

export async function fetchImages(page: number){
    const axiosResponse = await axios.get(`${baseUrl}&page=${page}&per_page=4`);
    return axiosResponse.data;
}