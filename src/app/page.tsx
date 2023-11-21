import {
  Advantages,
  Categories,
  Clients,
  Companys,
  Customers,
  Faq,
  Products,
} from "@/sections";
import { HomeWrap } from "./page.s";

export default function Page() {
  return (
    <HomeWrap>
      <Categories />
      <Products />
      <Advantages />
      <Customers />
      <Companys />
      <Clients />
      <Faq />
    </HomeWrap>
  );
}
