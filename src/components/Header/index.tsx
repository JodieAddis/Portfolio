import useScreenSize from "../../hook/useScreenSize";
import NavBarDesktop from "../NavBar/NavBarDesktop";
import NavBarMobile from "../NavBar/NavBarMobile";

const Component = () => {
  const isMobile = useScreenSize();

  return (
    <div className="w-screen bg-BlueCharcoal py-5 ">
      {isMobile ? (
        <div>
          <NavBarMobile />
        </div>
      ) : (
        <div className="mx-8 flex justify-between">
          <div></div>
          <NavBarDesktop />
        </div>
      )}
    </div>
  );
};

export default Component;
