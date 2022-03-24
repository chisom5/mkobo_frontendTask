import { useState, useEffect } from "react";
import SidebarListItem from "../sidebarListItem";

const Sidebar = () => {
  const [menu, setMenu] = useState([]);
  const [activeMenu, setActiveMenu] = useState(1);

  useEffect(() => {
    switch (activeMenu) {
      case "/":
        setActiveMenu(1);
        break;

      case "/mkolo":
        setActiveMenu(2);
        break;

      default:
        return;
    }
  }, [activeMenu]);

  useEffect(() => {
    setMenu([
      {
        id: 1,
        icon: require("../../assets/images/home.svg").default,
        path: "/",
        title: "Dasboard",
      },
      {
        id: 2,
        icon: require("../../assets/images/mkolo.svg").default,
        path: "/mkolo",
        title: "Mkolo",
      },
      {
        id: 3,
        icon: require("../../assets/images/earlybird.svg").default,
        path: "/early_pay",
        title: "EarlyPay",
      },
      {
        id: 4,
        icon: require("../../assets/images/paybill.svg").default,
        path: "/paybill",
        title: "Pay Bills",
      },
      {
        id: 5,
        icon: require("../../assets/images/debit_card.svg").default,
        path: "/debit_card",
        title: "Debit Cards",
      },
      {
        id: 6,
        icon: require("../../assets/images/profile.svg").default,
        path: "/profile",
        title: "Profile",
      },
      {
        id: 7,
        icon: require("../../assets/images/settings.svg").default,
        path: "/settings",
        title: "Settings",
      },
    ]);
  }, []);

  return (
    <aside className="sidebar_container">
      <div>
        <span>
          <img
            src={require("../../assets/images/logo.svg").default}
            alt="logo"
          />
        </span>
      </div>

      {/* loop through */}
      <div className="sidebar_menu">
        {menu?.map((menuItem, i) => {
          const menuProps = {
            menuItem,
            activeMenu,
          };
          return <SidebarListItem key={menuItem.id} {...menuProps} />;
        })}
      </div>
      {/* help & support */}
      <div className="sidebar_bottom">
        <p id="sidebar_bottom_title">Help & Support</p>

        <div className="sidebar_navItem">
          <span className="menu_icon">
            <img
              src={require("../../assets/images/faqs.svg").default}
              alt="menu_icon"
            />
          </span>
          <p>FAQ’s</p>
        </div>

        <div className="sidebar_navItem">
          <span className="menu_icon">
            <img
              src={require("../../assets/images/chats.svg").default}
              alt="menu_icon"
            />
          </span>
          <p>Talk to someone</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
