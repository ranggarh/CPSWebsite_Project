import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

interface Menu {
  title: string;
  src: string;
  gap?: boolean;
  path: string; // Tambahkan properti path untuk menentukan rute yang dituju
}

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  
  const toggleSidebar = () => {
    setOpen(!open);
  };

  // Definisikan menu dengan properti path untuk masing-masing halaman
  const Menus: Menu[] = [
    { title: "Dashboard", src: "Chart_fill", path: "/home" }, 
    { title: "Daftar Pegawai", src: "Chat", path: "/employee" },
    { title: "Rekap Laporan", src: "Chat", path: "/rekap" }, 
    { title: "Daftar Kantor", src: "Chat", path: "/kantor" }, 
     
   
  ];

  return (
    <div
      className={`${
        open ? "w-41 bg-gray-800" : "w-20 bg-gray-800"
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="./src/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={toggleSidebar}
      />
      <div className="flex gap-x-4 items-center">
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          PT. Centralindo Pancasakti
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            }`}
          >
            <img src={`./src/assets/${Menu.src}.png`} />
            {/* Menggunakan Link untuk navigasi */}
            <Link
              to={Menu.path}
              className={`ml-2 ${!open && "hidden"} origin-left duration-200`}
            >
              {Menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
