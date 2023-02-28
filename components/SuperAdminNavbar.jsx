import React from "react";
import {Navbar, Button} from "flowbite-react";
import Link from "next/link";
import {AvatarModal} from "./navbar/AvatarModal";
import {BiLogOut} from "react-icons/bi";

export const LoggedInNavbar = ({activePage}) => {
  return (
    <Navbar
      fluid={true}
      className="bg-primary px-6"
    >
      <Navbar.Brand href="/admin-dashboard">
        <span className="text-2xl font-semibold text-white font-work">
          DocsToGo
        </span>
        <span className="text-[#538ed8]">
            SUPER ADMIN
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 items-center text-white">
        <Link href="/">
          <Button className="text-white font-work font-bold">
            <BiLogOut className="mr-2"/>
            LOG OUT
          </Button>
        </Link>
        <Navbar.Toggle/>
      </div>
      <Navbar.Collapse>
        <Link href="/admin-dashboard"
              className={`font-work ${activePage === 'dashboard' ? 'text-white' : 'text-[#538ed8]'} text-lg`}>
          Dashboard
        </Link>
        <Link href="/admin-dashboard/admin-accounts"
              className={`font-work ${activePage === 'admin-accounts' ? 'text-white' : 'text-[#538ed8]'} text-lg`}>
          Admin Accounts
        </Link>
        <Link href="/admin-dashboard/reports"
              className={`font-work ${activePage === 'reports' ? 'text-white' : 'text-[#538ed8]'} text-lg`}>
          Reports
        </Link>
        <Link href="/admin-dashboard/settings"
              className={`font-work ${activePage === 'settings' ? 'text-white' : 'text-[#538ed8]'} text-lg`}>
          Settings
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}