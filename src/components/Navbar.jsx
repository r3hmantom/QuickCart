import { cart, quickcart } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[15px] py-[40px] ">
      {/* Logo  */}
      <img src={quickcart} alt="quickcart" className="w-[140px]" />
      <div className="flex items-center">
        {/* NavLinks */}
        {navLinks.map((link, index) => {
          return (
            <a
              key={link.id}
              href={"#"}
              className={`text-primary_black font-[500] text-base font-poppins ${
                index === navLinks.length - 1 ? "mr-[80px]" : " mr-[30px]"
              }`}
            >
              {link.title}
            </a>
          );
        })}
        <div className="flex items-center">
          <button className="flex items-center gap-2 p-[15px] mr-[15px] rounded-[5px] bg-dim_white">
            <img src={cart} className="w-[15px] h-[15px]" alt="cart" />{" "}
            <span className="font-[500] font-poppins">0</span>
          </button>
          <button className="p-[15px] text-[16px] font-poppins bg-primary_red rounded-[5px] text-white">
            <span>Sign In/ </span> Sign Up
          </button>
        </div>

        {/* Mobile Navbar  */}
      </div>
    </nav>
  );
};

export default Navbar;
