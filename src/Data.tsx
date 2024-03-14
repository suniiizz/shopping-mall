export type Props = {
  id: number | string;
  title?: string;
  content?: string;
  price?: number;
  inventory?: number;
}[];

const data: Props = [
  {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
    inventory: 10,
  },

  {
    id: 1,
    title: "Red Knit",
    content: "Born in Seoul",
    price: 110000,
    inventory: 11,
  },

  {
    id: 2,
    title: "Grey Yordan",
    content: "Born in the States",
    price: 130000,
    inventory: 12,
  },
];

export default data;
