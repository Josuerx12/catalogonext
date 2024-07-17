"use client";
import React, { FormEvent, useEffect, useState } from "react";
import Input from "../Atoms/Input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";

const SearchItemForm = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchByName = searchParams.get("name");
  const [name, setName] = useState(searchByName ? searchByName : "");

  const debouncedName = useDebounce(name, 500);

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedName) {
      params.set("name", debouncedName);
    } else {
      params.set("name", "");
    }
    router.push(`${pathname}?${params}`);
  }, [debouncedName]);

  return (
    <form className="flex flex-col items-end">
      <Input
        name="name"
        type="text"
        defaultValue={searchByName ? searchByName : ""}
        placeholder="Digite aqui o nome do produto que precisa!"
        onChange={(e) => setName((prev) => e.target.value)}
      />
    </form>
  );
};

export default SearchItemForm;
