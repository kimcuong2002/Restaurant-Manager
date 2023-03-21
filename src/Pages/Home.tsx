import DefaultLayout from "../Layouts/DefaultLayout";
import Product from "../../src/Components/Product";
import { dataProducts } from "../../src/util";
import { Pagination } from "@nextui-org/react";

const Home = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-4 px-[15px] pb-[20px]">
          {dataProducts &&
            dataProducts.map((item, i) => {
              return (
                <Product
                  key={i}
                  image={item.image}
                  name={item.name}
                  price={item.price}
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
