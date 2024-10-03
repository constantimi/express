import { Request, Response } from "express-serve-static-core";
import { Stock } from "../types/response";
import axiosService from "../services/axiosService";

export const getStocks = async (
  request: Request<{}, {}, {}, {}>,
  response: Response<Stock[] | { message: string }>
) => {
  try {
    const data = await axiosService.get<Stock[]>("stocks");

    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ message: "Error fetching data" });
  }
};

export const getStockById = async (
  request: Request<{ id: string }, {}, {}, {}>,
  response: Response<Stock | { message: string }>
) => {
  try {
    const { id } = request.params;
    const data = await axiosService.get<Stock>(`stocks/${id}`);

    if (data) {
      response.status(200).json(data);
    } else {
      response.status(404).json({ message: "Stock not found" });
    }
  } catch (error) {
    response.status(500).json({ message: "Error fetching data" });
  }
};
