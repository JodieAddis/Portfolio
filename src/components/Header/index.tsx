import NavBarDesktop from "../NavBar/NavBarDesktop";
// import NavBarMobile from "../NavBar/NavBarMobile";

const Component = () => {
  // const isMobile = useScreenSize();
  return (
    <div className="bg-BlueCharcoal ">
      {/* <div>
        <NavBarMobile />
      </div> */}
      <div className="mx-8 flex justify-between">
        <p>LOGO</p>
        <NavBarDesktop />
      </div>
      <div className="h-[1px] w-screen bg-white"></div>
    </div>
  );
};

export default Component;
