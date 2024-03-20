"use client";

import { useRouter } from "next/navigation";
export default function Index() {
  const router = useRouter();
  router.push("/home");

  return <main className="flex flex-col my-10"></main>;
}
