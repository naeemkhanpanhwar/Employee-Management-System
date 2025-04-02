import React from "react";

const Header = () => {
  return (
    <nav class="navbar bg-primary" data-bs-theme="dark">
        <div className="container justify-content-center">
            <a className="navbar-brand " href="/">
            Employee Management System
            </a>
        </div>
    </nav>
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container justify-content-center">
    //     <a className="navbar-brand " href="/">
    //       Employee Management System
    //     </a>
    //   </div>
    // </nav>
  );
}
export default Header;