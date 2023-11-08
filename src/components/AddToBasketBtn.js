import styles from "../styles/AddToBasketBtn.module.scss";
import { BasketContext } from "../context/BasketContext";
import { useContext } from "react";
import GetIcon from "./GetIcon";

const AddToBasketBtn = ({ data: product }) => {
  const { basketItems, setBasketItems, setBasketTotal, currentQuantity } =
    useContext(BasketContext);

  const addToBasket = (product) => {
    let arr = [...basketItems];
    let filtered = basketItems.filter((item) => item.id === product.id);
    if (filtered.lenght > 0) {
      filtered[0].quantity += 1;
      arr[arr.indexOf(filtered[0])] = filtered[0];
      setBasketItems(arr);
    } else {
      setBasketItems((oldState) => [
        ...oldState,
        {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity: currentQuantity,
        },
      ]);
    }

    setBasketTotal(
      (oldTotal) => (oldTotal += product.price * (currentQuantity || 1))
    );
  };
};

export default AddToBasketBtn;
