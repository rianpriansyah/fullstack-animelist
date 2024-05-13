"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="text-color-accent" />
        <h1 className="text-color-accent font-bold text-4xl">Not Found</h1>
        <Link href={"/"} className="text-color-primary hover:text-color-accent transition-all underline">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
