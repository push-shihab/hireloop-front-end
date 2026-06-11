import FeaturedJobs from "@/components/featuredJobs/FeaturedJobs";
import FooterCTA from "@/components/footer/FooterCTA";
import Header from "@/components/header/Header";
import JobFeatures from "@/components/jobFeatures/JobFeatures";
import Pricing from "@/components/pricing/Pricing";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <FeaturedJobs></FeaturedJobs>
      <JobFeatures></JobFeatures>
      <Pricing></Pricing>
      <FooterCTA></FooterCTA>
    </div>
  );
}
