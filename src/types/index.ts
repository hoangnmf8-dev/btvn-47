export interface HttpError extends Error {
  status: number,
  name: string
};

export interface productCreateData {
  name: string,
  price: number,
  description?: string,
  createdAt: string
};

export interface productUpdateData {
  name?: string,
  price?: number,
  description?: string,
}