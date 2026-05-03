import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Categories />
      <FeaturedBooks />
    </div>
  );
}
