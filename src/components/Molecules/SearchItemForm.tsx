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
  const [name, setName] = useState("");

  const debouncedName = useDebounce(name);

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedName) {
      params.set("name", debouncedName);
    } else {
      params.set("name", "");
    }
    router.replace(`${pathname}?${params}`);
  }, [debouncedName]);

  return (
    <form className="flex flex-col items-end">
      <Input
        name="name"
        type="text"
        defaultValue={searchByName ? searchByName : ""}
        placeholder="Digite aqui o nome do produto que precisa!"
        onChange={(e) => setName(() => e.target.value)}
      />
    </form>
  );
};

export default SearchItemForm;
