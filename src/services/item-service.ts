import { IItem } from "@/interfaces/items";
import { api } from "./api";

type GetItemsProps = {
  limit?: string;
  name?: string;
  page?: string;
};

export type GetItemPayload = {
  totalPages: number;
  currentPage: number;
  products: IItem[];
};

export const getItems = async ({
  limit,
  name,
  page,
}: GetItemsProps): Promise<GetItemPayload> => {
  try {
    try {
      const res = await api.get("/products", {
        params: {
          limit: limit ? limit : undefined,
          name: name ? name : undefined,
          page: page ? page : undefined,
        },
      });
      const data = await res.data.payload;
      return data;
    } catch (error: any) {
      console.log(error);
      throw error.response.data;
    }
  } catch (error: any) {
    throw error.response.data;
  }
};
