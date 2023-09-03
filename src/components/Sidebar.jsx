import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} by World Wise inc.</p>
      </footer>
    </div>
  );
}

export default Sidebar;
