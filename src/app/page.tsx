"use client";
import { Hero } from "./_components/hero";
export default function Index() {
  return (
    <main className="flex flex-col my-10">
      <div className=" mx-4 flex flex-col gap-y-10">
        <Hero />
      </div>
    </main>
  );
}
