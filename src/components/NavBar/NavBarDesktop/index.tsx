const Component = () => {
  return (
    <>
      <nav className="font-Montserrat flex flex-row">
        <a
          className="navbar_desktop border_style m-0 mr-10"
          href="#presentation"
        >
          <span className="bg-Pistachio "></span>
          <span className="bg-Pistachio "></span>
          <span className="bg-Pistachio "></span>
          <span className="bg-Pistachio "></span>
          presentation
        </a>
        <a className="navbar_desktop border_style mr-10" href="#abilities">
          skills
          <span className="bg-CaribbeanGreen "></span>
          <span className="bg-CaribbeanGreen "></span>
          <span className="bg-CaribbeanGreen "></span>
          <span className="bg-CaribbeanGreen "></span>
        </a>
        <a className="navbar_desktop border_style mr-10" href="#projets">
          <span className="bg-Purple "></span>
          <span className="bg-Purple "></span>
          <span className="bg-Purple "></span>
          <span className="bg-Purple "></span>
          projets
        </a>
        <a className="navbar_desktop border_style" href="#contact">
          <span className="bg-Pink"></span>
          <span className="bg-Pink"></span>
          <span className="bg-Pink"></span>
          <span className="bg-Pink"></span>
          contact
        </a>
      </nav>
    </>
  );
};

export default Component;
