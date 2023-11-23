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
import { Layout, Search } from "@/components";

export default function Page() {
  return (
    <Layout>
      <HomeWrap>
        <Search />
        <Categories />
        <Products />
        <Advantages />
        <Customers />
        <Companys />
        <Clients />
        <Faq />
      </HomeWrap>
    </Layout>
  );
}
