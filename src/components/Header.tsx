import logo from "../img/main-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let users;
  if (localStorage.getItem('user')) {
    users = JSON.parse(localStorage.getItem('user') || "");
  }
  const navigate = useNavigate();
  const handleLogout = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
      navigate("/");
    }
  };
  return (
    <div>
      <div className="w-full h-auto bg-[#1e1e27] flex justify-between items-center" >
        <div className="text-[#acacac] w-5/6 m-auto h-14 flex justify-between items-center">
          <div className="w-2/4 h-full flex items-center text-sm text font-bold">
            GIAO HÀNG MIỄN PHÍ TRÊN TOÀN QUỐC KHI MUA 5 SẢN PHẨM TRỞ LÊN !
          </div>
          <div className="w-2/4 h-full flex justify-end items-center text-sm font-bold">
            <span className="px-3">{users ? users.user.role === 1 ? <div className="flex flex-col">
              <div>
                Xin chào {users.user.name}
              </div>
              <div>
                <Link to={"/admin"}>Quản trị</Link>
              </div>
            </div> : <div>{users.user.name}</div> : null}</span>
            {users ? (
              <div>
                <div onClick={() => handleLogout()}>
                  <Link to={"/"}>Đăng xuất</Link>
                </div>
              </div>

            ) : (
              <div className="flex">
                <div className="mr-4">
                  <Link to="/signin">
                    <div className="flex">
                      <div>Đăng nhập</div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link to="/signup">Đăng ký</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container-fluid flex justify-between items-center px-40">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="h-28" />
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <div className="nav__menu flex ">
            <ul className="px-6 uppercase text-base transition ease-in-out duration-300">
              <li>
                <Link to="/" className="hover:text-sky-500">
                  Trang chủ
                </Link>
              </li>
            </ul>
            <ul className="px-6 uppercase text-base">
              <li>
                <Link to="/products" className="hover:text-sky-500">
                  Sản phẩm
                </Link>
              </li>
            </ul>
            <ul className="px-6 uppercase text-base">
              <li>
                <Link to="/blog" className="hover:text-sky-500">
                  Blog
                </Link>
              </li>
            </ul>
            <ul className="px-6 uppercase text-base">
              <li>
                <Link to="/contact" className="hover:text-sky-500">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__icon" >
            <Link to="/cart" className="text-3xl" >
              <AiOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
