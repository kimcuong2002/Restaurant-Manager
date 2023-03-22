import DefaultLayout from "../Layouts/DefaultLayout";
import Product, { iProduct } from "../../src/Components/Product";
import { dataProducts } from "../../src/util";
import { Pagination } from "@nextui-org/react";
import react, { useState } from "react";

export type ProductType = {
  id: string | number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
};

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const handleAddProduct = (product: ProductType) => {
    const arr = [...products];
    const index = arr.findIndex((item) => item.id === product.id);
    if (index > -1) {
      arr[index].quantity = arr[index].quantity + 1;
      arr[index].totalPrice = arr[index].price * arr[index].quantity;
      return setProducts([...arr]);
    }
    arr.push(product);
    return setProducts([...arr]);
  };
  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 px-[15px] pb-[20px]">
          {dataProducts &&
            dataProducts.map((item, i) => {
              return (
                <Product
                  key={i}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  onClick={() => handleAddProduct(product)}
                />
              );
            })}
        </div>
        <Pagination total={2} initialPage={1} />
      </div>
    </DefaultLayout>
  );
};

export default Home;
