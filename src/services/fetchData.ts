import axios from "axios";
import { Data } from "../types/data";

const URL =
  "https://gist.githubusercontent.com/m5rk/5dbdb4f8dbb9d2a84b46b6f9cfec82ad/raw/c142410765bb2eec0d3c94cdd37e8687a81f451b/plant_care.json";

export const fetchRoute = async (route: string) => {
  const { data } = await axios.get(route);
  return data;
};

export const fetchData = async () => {
  return fetch(URL)
    .then((response) => response.json())
    .then((res: Data[]) => {
      return res;
    });
};
