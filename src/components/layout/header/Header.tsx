import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import IGSText from "../../text/IGSText";
import { dashboardRoutes } from "../../../AppRoutes";

const Header = (): React.ReactElement => {
  const location = useLocation();

  const currentTitle = useMemo(() => {
    return dashboardRoutes.find((route) => route.path === location.pathname);
  }, [location.pathname]);

  return (
    <header className="header">
      <IGSText type="heading-5">{currentTitle?.title}</IGSText>

      <div className="header__action">
        <div className="header__image" />
        <h3>DROPDOWN HERE</h3>
      </div>
    </header>
  );
};

export default Header;
