import { useHistory } from "react-router-dom";

// component
const SidebarListItem = (menuProps) => {
  const history = useHistory();

  const handleMenuChange = (path) => {
    history.push(`${path}`);
  };

  return (
    <div
      className={[
        "sidebar_navItem",
        menuProps.activeMenu === menuProps.menuItem.id ? "active_menu" : null,
      ].join(" ")}
      onClick={() => handleMenuChange(menuProps.menuItem.path)}
      role="link"
    >
      <span className="menu_icon">
        <img src={menuProps.menuItem.icon} alt="menu_icon" />
      </span>
      <p>{menuProps.menuItem.title}</p>
    </div>
  );
};

export default SidebarListItem;
