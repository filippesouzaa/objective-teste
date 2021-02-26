import React from "react";
import "./header.css";
import Logo from "../../images/logo.png";

const header = () => {
  return (
    <div className="header-style">
      <img className="logo" alt="logo-objective" src={Logo} />
      <p className="right-content">
        <span style={{ fontWeight: `bold` }}>Filipe Freitas Souza </span>
        <span>Teste de Front-end</span>
        <span className="avatar">CB</span>
      </p>
      <span className="avatar-responsive">CB</span>
    </div>
  );
};

export default header;
