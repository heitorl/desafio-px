import { LeftMenu } from "./styles";
import img_menu from "../../assets/icon-park-outline_menu.svg";
import avatar_menu from "../../assets/Avatar (silhouette).svg";
import money_menu from "../../assets/money.svg";
import logout from "../../assets/log-out.svg";

const MenuLeft = () => {
  return (
    <LeftMenu>
      <div className="img-menu">
        <img className="menu" src={img_menu} />
        <img className="avatar" src={avatar_menu} />
        <div className="bar"></div>
        <img className="money" src={money_menu} />
        <div className="logout">
          <img src={logout} />
        </div>
      </div>
    </LeftMenu>
  );
};

export default MenuLeft;
