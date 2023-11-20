import { Advantages, Categories, Customers, Products } from "@/sections";
import { HomeWrap } from "./home.s";

export default function Page() {
  return (
    <HomeWrap>
      <Categories />
      <Products />
      <Advantages />
      <Customers />
    </HomeWrap>
  );
}
