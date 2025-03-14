import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
      {/* header */}
        <Header></Header>
      {/* hero */}
        <Hero></Hero>
    </div>
  );
}
