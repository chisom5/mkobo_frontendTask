const QuickActionCard = (props) => {
  return (
    <div
      className={[
        "quickAction_card_item",
        props.last ? "quickAction_card_item_last" : null,
      ].join(" ")}
    >
      {props.children}
    </div>
  );
};

export default QuickActionCard;
