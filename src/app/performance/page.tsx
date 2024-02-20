import performanceImg from "../../../public/performance.jpg";
import Hero from "@/components/Hero";

export default function PerfomancePage() {
  return (
		<Hero
			imgData={performanceImg} 
			imgAlt="welding" 
			title="We serve high perfomance applications"/>
  );
}