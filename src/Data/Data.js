import j1 from "../images/1.jpeg";
import j2 from "../images/2.jpeg";
import j3 from "../images/3.jpeg";

const data = {
  category: [
    { idCategory: "animals", title: "animals" },
    { idCategory: "property", title: "property" },
    { idCategory: "cars", title: "cars" },
    { idCategory: "electronic", title: "electronic" },
  ],
  items: [
    {
      id: "cat1",
      idCategory: "animals",
      title: "Cat",
      description: "nice Cat",
      price: "200",
      date: "22.04.2020",
      img: [j1, j2, j3],
    },
    {
      id: "cat2",
      idCategory: "animals",
      title: "Dog",
      description: "nice dog",
      price: "200",
      date: "21.07.2020",
      img: [],
    },
  ],
};

export { data };
