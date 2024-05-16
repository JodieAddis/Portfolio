const Component = () => {
  const tabs = ["presentation", "skills", "projects", "contact"];
  return (
    <>
      <nav className="flex flex-row font-Montserrat">
        {tabs.map((item, index) => (
          <a href={`#${item}`} className="navbar_desktop m-0 mr-10" key={index}>
            {item}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Component;
