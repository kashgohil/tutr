import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";

interface NavigationProps {
	currentPage?: string;
}

export function Navigation({ currentPage }: NavigationProps) {
	return (
		<nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<Link
						href="/"
						className="flex items-center space-x-2"
					>
						<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
							<BookOpen className="w-5 h-5 text-white" />
						</div>
						<span className="text-xl font-bold">PathWise</span>
					</Link>
					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/features"
							className={`transition-colors ${
								currentPage === "features"
									? "text-foreground font-medium"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							Features
						</Link>
						<Link
							href="/pricing"
							className={`transition-colors ${
								currentPage === "pricing"
									? "text-foreground font-medium"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							Pricing
						</Link>
						<Link
							href="/about"
							className={`transition-colors ${
								currentPage === "about" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
							}`}
						>
							About
						</Link>
						<Link
							href="/blog"
							className={`transition-colors ${
								currentPage === "blog" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
							}`}
						>
							Blog
						</Link>
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
