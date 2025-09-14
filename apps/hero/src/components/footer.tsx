import { BookOpen } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="relative z-10 mx-4 sm:mx-6 lg:mx-8 mb-8">
			<div className="bg-background/80 backdrop-blur-md border rounded-2xl shadow-2xl supports-[backdrop-filter]:bg-background/60">
				<div className="container mx-auto px-6 sm:px-8 lg:px-12 py-12">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center space-x-3 mb-4">
								<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
									<BookOpen className="w-5 h-5 text-white" />
								</div>
								<div className="flex flex-col">
									<span className="text-xl font-bold">Tutr</span>
									<span className="text-xs text-muted-foreground -mt-1">Your Learning, Perfected</span>
								</div>
							</div>
							<p className="text-muted-foreground mb-4">
								Empowering learners worldwide with AI-powered personalized education.
							</p>
							<div className="flex space-x-4">
								<div className="w-8 h-8 bg-muted hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
									<span className="text-xs font-bold">f</span>
								</div>
								<div className="w-8 h-8 bg-muted hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
									<span className="text-xs font-bold">t</span>
								</div>
								<div className="w-8 h-8 bg-muted hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
									<span className="text-xs font-bold">in</span>
								</div>
							</div>
						</div>

						<div>
							<h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
							<ul className="space-y-3 text-muted-foreground">
								<li>
									<Link
										href="/features"
										className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
									>
										Features
									</Link>
								</li>
								<li>
									<Link
										href="/pricing"
										className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
									>
										Pricing
									</Link>
								</li>
								<li>
									<Link
										href="/about"
										className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
									>
										About
									</Link>
								</li>
								<li>
									<Link
										href="/blog"
										className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
									>
										Blog
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4 text-foreground">Product</h4>
							<ul className="space-y-3 text-muted-foreground">
								<li>
									<Link
										href="/faq"
										className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
									>
										FAQ
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4 text-foreground">Legal</h4>
							<ul className="space-y-3 text-muted-foreground">
								<li>
									<Link
										href="/terms"
										className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
									>
										Terms of Service
									</Link>
								</li>
								<li>
									<Link
										href="/privacy"
										className="hover:text-foreground transition-colors hover:translate-x-1 inline-block"
									>
										Privacy Policy
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
						<p className="text-muted-foreground text-sm">
							&copy; {new Date().getFullYear()} Tutr. All rights reserved.
						</p>
						<div className="flex items-center space-x-4 mt-4 sm:mt-0">
							<span className="text-xs text-muted-foreground">Made with</span>
							<div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
							<span className="text-xs text-muted-foreground">for learners</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
