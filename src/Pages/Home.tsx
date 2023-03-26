import DefaultLayout from "../Layouts/DefaultLayout";
import Product from "../../src/Components/Product";
import { dataProducts } from "../../src/util";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import { ProducOdertType, ProductType } from "../models/product.type";

const Home = () => {
  const [productsInCart, setProductsInCart] = useState<ProducOdertType[]>([]);
  const handleAddProductToCart = (product: ProductType) => {
    let arr = [...productsInCart];
    const prod = productsInCart.find((item) => item.id === product.id);
    prod
      ? (arr = productsInCart.map((item) => {
          return item.id === prod.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.totalPrice * (item.quantity + 1),
              }
            : item;
        }))
      : arr.push({ ...product, quantity: 1, totalPrice: product.price });

    setProductsInCart([...arr]);
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
                  onClick={() => handleAddProductToCart(item)}
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
