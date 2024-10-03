import axios from "axios";

const URL = "http://localhost:3002"; // Replace with your API base URL

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 10000,
});

class AxiosService {
  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    try {
      const response = await axiosInstance.get<T>(url, { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Generic POST request
  async post<T>(url: string, data: Record<string, any>): Promise<T> {
    try {
      const response = await axiosInstance.post<T>(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Generic PUT request
  async put<T>(url: string, data: Record<string, any>): Promise<T> {
    try {
      const response = await axiosInstance.put<T>(url, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  // Error handling method
  private handleError(error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}

export default new AxiosService();
