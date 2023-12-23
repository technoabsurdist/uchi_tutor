import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { View } from "./types";

type NavigationProps = {
    view: View;
    changeView: (v: any) => void;
}

export default function Navigation({ view, changeView }: NavigationProps) {
    return (
        <Navbar>
            <NavbarBrand>
                <Image src="/../uchicago_logo.png" width={50} height={50} alt="Logo" />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-10" justify="center">
                <NavbarItem isActive={view === View.Post}>
                    <a onClick={() => changeView(View.Post)}>
                        Post 
                    </a>
                </NavbarItem>
                <NavbarItem isActive={view === View.Feed}>
                    <a onClick={() => changeView(View.Feed)}>
                        Feed 
                    </a>
                </NavbarItem>
                {/* <NavbarItem isActive={view === View.Requests}>
                    <a onClick={() => changeView(View.Requests)}>
                        Requests 
                    </a>
                </NavbarItem> */}
            </NavbarContent>
            <NavbarContent justify="end">
                <UserButton /> 
            </NavbarContent>
        </Navbar>
    );
}
