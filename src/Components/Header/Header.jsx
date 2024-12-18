import NavImg from "../../../public/images/profile.png";

const Header = () => {
  return (
    <div className=" ">
      <div className="flex py-5 justify-between items-center border-b-2">
        <a href="#" className="text-4xl font-bold  ">
          Knowledge Cafe
        </a>
        <a href="#">
          <img className="" src={NavImg} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
