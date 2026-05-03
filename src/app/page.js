import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <FeaturedBooks />
    </div>
  );
}
