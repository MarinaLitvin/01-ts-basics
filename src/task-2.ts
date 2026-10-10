interface Product {
  // Поле id тільки для читання (readonly)
  readonly id: number;
  title: string;
  // Поле description необов'язкове (?)
  description?: string;
}


const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);