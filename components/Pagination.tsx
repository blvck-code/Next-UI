"use client";
import React from "react";
import { Pagination as Pg } from "@nextui-org/react";

const Pagination = () => {
  return <Pg total={20} initialPage={1} />;
};

export default Pagination;
