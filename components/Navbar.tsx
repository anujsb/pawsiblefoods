"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export function FloatingNavDemo() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/#video" },
    { name: "Features", link: "/#features" },
    { name: "Testimonials", link: "/#Testimonials" },
    { name: "Contact", link: "/#Contact" },
  ];

  return (
    <div id="floating-navbar" className="relative w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
