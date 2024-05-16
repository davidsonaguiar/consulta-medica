import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:1337/api/",
  headers: {
    Autorization: "Bearer " + process.env.NEXT_PUBLIC_STRAPI_KEY,
  },
});

export async function getCategories() {
  const { data } = await instance.get("categories?populate=*");
  return data.data;
}

export async function getDoctors(query: string) {
  const { data } = await instance.get(query);
  console.log(data.data)
  return data.data;
}

export async function getDoctorsByCategory(category: string) {
  const { data } = await instance.get("doctors?filters[category][Name][$eq]=" + category + "&populate=*");
  return data.data;
} 