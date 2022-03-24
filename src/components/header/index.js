import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {getPathName} from '../../utils';

const menu = (
  <Menu>
    <Menu.Item>
      <p>Logout</p>
    </Menu.Item>
  </Menu>
);

const HeaderComponent = (props) => {
  return (
    <div className="header_container">
      <div className="header_container_inner">
        <div>
          <p id="title">{`My ${getPathName(props.path)}`}</p>
        </div>

        <div className="profile_container">
          <span>
            <img
              src={
                require("../../assets/images/clarity_notification-line.svg")
                  .default
              }
              alt="notification_line"
            />
          </span>

          <div className="user_profile">
            {/* pic */}
            <div className="profile_pic">
              <img
                src={require("../../assets/images/loginUser.jpg")}
                alt="user"
              />
            </div>

            <p>
              Benedict Ulinfo
              <Dropdown overlay={menu} trigger={"click"}>
                <DownOutlined id="arrow_down" />
              </Dropdown>
            </p>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default HeaderComponent;
