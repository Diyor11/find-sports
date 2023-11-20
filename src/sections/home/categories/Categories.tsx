import React from "react";
import {
  CategoreItem,
  CategoriesList,
  CategoriesWrap,
  CategoryBox,
  CategoryImg,
  CategoryLabel,
  SectionTitle,
} from "./categories.s";
import { Container } from "@/styles";

import badminton from "@/assets/trash/badminton.png";
import basketbol from "@/assets/trash/basketbol.png";
import dance from "@/assets/trash/dance.png";
import fight from "@/assets/trash/fight.png";
import footbol from "@/assets/trash/footbol.png";
import gamepad from "@/assets/trash/gamepad.png";
import gymnastic from "@/assets/trash/gymnastic.png";
import kibersport from "@/assets/trash/kibersport.png";
import soldat from "@/assets/trash/soldat.png";
import swim from "@/assets/trash/swim.png";
import tennis from "@/assets/trash/tennis.png";
import tennis2 from "@/assets/trash/tennis2.png";
import voleybol from "@/assets/trash/voleybol.png";

const categories = [
  { label: "Paintball", img: soldat, link: "/" },
  { label: "Game club", img: gamepad, link: "/" },
  { label: "Suv sporti", img: swim, link: "/" },
  { label: "Kibersport", img: kibersport, link: "/" },
  { label: "Stol tennis", img: tennis, link: "/" },
  { label: "Badminton", img: badminton, link: "/" },
  { label: "Basketbol", img: basketbol, link: "/" },
  { label: "Raqs", img: dance, link: "/" },
  { label: "Tennis", img: tennis2, link: "/" },
  { label: "Valleybol", img: voleybol, link: "/" },
  { label: "Gimnastika", img: gymnastic, link: "/" },
  { label: "Jang sanati", img: fight, link: "/" },
  { label: "Fudbol", img: footbol, link: "/" },
];

export const Categories = () => {
  return (
    <CategoriesWrap>
      <Container>
        <SectionTitle>
          Tired of work? We have a useful offer for you.
        </SectionTitle>
        <CategoriesList>
          {categories.map(({ img, label }, index) => (
            <CategoreItem key={index}>
              <CategoryBox>
                <CategoryImg width={90} height={90} src={img.src} alt={label} />
              </CategoryBox>
              <CategoryLabel>{label}</CategoryLabel>
            </CategoreItem>
          ))}
        </CategoriesList>
      </Container>
    </CategoriesWrap>
  );
};
