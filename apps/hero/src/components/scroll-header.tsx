"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ScrollHeader() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 100); // Show header after scrolling 100px
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-background/80 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/60"
					: "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link
						href="/"
						className="flex items-center space-x-2"
					>
						<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
							<BookOpen className="w-5 h-5 text-white" />
						</div>
						<span className="text-xl font-bold">Tutr</span>
					</Link>

					<div className="hidden md:flex items-center space-x-2">
						<ThemeToggle />
						<Button
							variant="outline"
							size="sm"
						>
							Sign In
						</Button>
						<Button
							size="sm"
							className="bg-blue-600 hover:bg-blue-700 text-white border-0"
						>
							Start Free
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
