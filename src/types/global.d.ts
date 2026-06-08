export {};

declare global {
  interface Window {
    selectedProduct: {
      name: string;
      price: number;
    };
  }
}