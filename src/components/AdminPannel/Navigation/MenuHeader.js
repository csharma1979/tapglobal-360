"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MenuHeader = ({ tabsName }) => {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState(router.pathname);

  const handleTabClick = (path) => {
    setSelectedTab(path);
  };
  return (
    <div className="menu-header-container">
      {tabsName.map((ele) => (
        <div
          key={ele.id}
          className={`tab-item ${selectedTab === ele.path ? "selected" : ""}`}
          onClick={() => handleTabClick(ele.path)}
        >
          <Link href={ele.path} className="tab-link">
            {ele.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MenuHeader;
