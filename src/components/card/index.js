const CardItem = (props) => {
  return (
    <div className={["card_item", `card_item_${props.bgColor}`].join(" ")}>
      {props.children}
      <span id="card_item_bg">
        <img
          src={require("../../assets/images/cardItem_bg.svg").default}
          alt="card_item_bg"
        />
      </span>
    </div>
  );
};

export default CardItem;
