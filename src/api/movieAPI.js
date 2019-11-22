import { API_HOST } from "../config/api";
import axios from "axios";

export default axios.create({
  baseURL: { API_HOST }
});
