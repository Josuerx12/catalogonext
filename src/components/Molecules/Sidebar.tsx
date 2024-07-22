"use client";
import React, { useState } from "react";
import Button from "../Atoms/Button";
import { ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <aside
      className={` ${
        isOpen ? "left-0" : "-left-full"
      } bg-neutral-900 flex flex-col w-96 min-h-screen h-full`}
    >
      <div className={`absolute top-2 -right-full`}>
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          variant="neutral"
          style={{ width: "fit-content", borderRadius: "100%" }}
        >
          <ChevronRight
            className={`duration-200 ease-linear ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            size={15}
          />
        </Button>
      </div>
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="ml-3 text-xl font-bold">Dashboards</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
