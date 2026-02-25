import { Metadata } from "next";
import HomeOnePage from "./(homes)/home-1/page";

export const metadata: Metadata = {
  title: "Fakhruddin - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeOnePage />
    </>
  );
}
