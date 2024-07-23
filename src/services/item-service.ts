import { IItem } from "@/interfaces/items";
import { api } from "./api";

type GetItemsProps = {
  limit?: string;
  name?: string;
  page?: string;
};

export type GetItemsPayload = {
  totalPages: number;
  currentPage: number;
  products: IItem[];
};

export const getItems = async ({
  limit,
  name,
  page,
}: GetItemsProps): Promise<GetItemsPayload> => {
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
};

export const getItem = async (id: string): Promise<IItem> => {
  try {
    const res = await api.get("/products/" + id);
    const data = await res.data.payload.product;
    return data;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

export const addItem = async (credentials: FormData): Promise<string> => {
  try {
    await api.post("/products/new", credentials, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return "Produto cadastrado com sucesso!";
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

export const editItem = async ({
  credentials,
  id,
}: {
  id: string;
  credentials: FormData;
}): Promise<string> => {
  try {
    await api.patch(`/products/${id}`, credentials, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return "Produto editado com sucesso!";
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};

export const deletePhotoOfItem = async ({
  photoId,
  productId,
}: {
  photoId: string;
  productId: string;
}) => {
  try {
    await api.delete(`/products/${productId}/${photoId}`);
    return "Foto do produto ID:" + productId + ", deletada com sucesso!";
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};
export const deleteItem = async (id: string): Promise<string> => {
  try {
    await api.delete(`/products/${id}`);
    return `Produto ID:${id}, deletado com sucesso!`;
  } catch (error: any) {
    console.log(error);
    throw error.response.data;
  }
};
