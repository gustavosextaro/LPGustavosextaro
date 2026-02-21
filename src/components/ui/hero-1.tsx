'use client';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Rocket, ArrowRight, PhoneCall } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

export function HeroSection() {
	return (
		<section className="mx-auto w-full max-w-5xl relative">
			{/* Top Shades - Fade Branco */}
			<div
				aria-hidden="true"
				className="absolute inset-0 isolate hidden overflow-hidden lg:block pointer-events-none"
			>
				<div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,rgba(255,255,255,0.05),transparent)]" />
			</div>

			{/* main content */}
			<div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-8 px-6">
				<div
					className={cn(
						"group mx-auto flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1 shadow-sm",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
					)}
				>
					<Rocket className="size-3 text-white/80" />
					<span className="text-xs font-medium text-white/80 tracking-tight text-shadow-premium">O caminho mais rápido para o seu SaaS</span>
					<span className="block h-3 border-l border-white/10" />
					<ArrowRight className="size-3 text-white/60 duration-150 ease-out group-hover:translate-x-1" />
				</div>

				<h1
					className={cn(
						"fade-in slide-in-from-bottom-10 animate-in text-balance text-center text-5xl font-headline font-bold tracking-tight delay-100 duration-500 ease-out md:text-7xl lg:text-8xl text-shadow-premium text-white"
					)}
				>
					Do MVP ao <span className="text-white italic">SaaS</span>
				</h1>

				<p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-base text-white/80 tracking-wide delay-200 duration-500 ease-out sm:text-lg md:text-xl leading-relaxed font-headline">
					Aprenda a criar, estruturar e monetizar um Micro SaaS do zero usando Vibe Coding e IA, mesmo sem ser programador profissional.
				</p>

				<div className="fade-in slide-in-from-bottom-10 flex animate-in flex-col sm:flex-row items-center justify-center gap-4 fill-mode-backwards pt-4 delay-300 duration-500 ease-out w-full sm:w-auto">
					<Button asChild size="lg" className="rounded-full px-10 h-14 text-lg bg-white text-[#000401] hover:bg-white/90 font-bold group w-full sm:w-auto transition-transform hover:scale-105 active:scale-95">
						<a href="#offer">
							Quero começar agora
							<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
						</a>
					</Button>
					<Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-10 h-14 text-lg border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all w-full sm:w-auto active:bg-white/20"
          >
						<PhoneCall className="size-4 mr-2" />
						Converse comigo
					</Button>
				</div>
			</div>
		</section>
	);
}

export function LogosSection() {
	return (
		<section className="relative space-y-4 pt-4 pb-12">
			<h2 className="text-center font-headline font-medium text-lg text-white/60 tracking-tight md:text-xl">
				Domine a stack <span className="text-white">moderna</span>
			</h2>
			<div className="relative z-10 mx-auto max-w-4xl px-6">
				<LogoCloud logos={logos} />
			</div>
		</section>
	);
}

const logos = [
	{
		src: "https://storage.efferd.com/logo/supabase-wordmark.svg",
		alt: "Supabase Logo",
	},
	{
		src: "https://storage.efferd.com/logo/openai-wordmark.svg",
		alt: "OpenAI Logo",
	},
	{
		src: "https://storage.efferd.com/logo/turso-wordmark.svg",
		alt: "Turso Logo",
	},
	{
		src: "https://storage.efferd.com/logo/vercel-wordmark.svg",
		alt: "Vercel Logo",
	},
	{
		src: "https://storage.efferd.com/logo/github-wordmark.svg",
		alt: "GitHub Logo",
	},
	{
		src: "https://storage.efferd.com/logo/claude-wordmark.svg",
		alt: "Claude AI Logo",
	},
];
