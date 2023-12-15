import Hero from "@/components/Hero";
import StyleGuide from "@/components/StyleGuide";

export default function Home() {
	return (
		<main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
			<Hero />
			{/* <StyKleGuide /> */}
			<div className="h-[4000px]"></div>
		</main>
	);
}
