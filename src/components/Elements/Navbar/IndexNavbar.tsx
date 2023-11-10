import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUser } from "react-icons/bi";

const IndexNavbar = () => {
  return (
    <div>
      <div className="relative z-10 ">
        <div className="bg-white p-0 m-0 left-0 right-0 top-0 overflow-hidden text-black shadow-lg fixed">
          <div className="px-2 m-2 md:px-6 flex justify-between items-center text-center">
            <img
              className="p-0"
              src="https://raw.githubusercontent.com/FarizMaulaa/shopeeclone/main/shopee-logo-2-removebg-preview.png"
              width="135px"
            />
            <div className="flex text-xl justify-between text-center">
              <AiOutlineShoppingCart />
              <IoMdNotificationsOutline />
              <BiUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexNavbar;
