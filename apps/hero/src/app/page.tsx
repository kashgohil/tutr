import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import { ScrollAnimation } from "@/components/scroll-animation";
import { ScrollHeader } from "@/components/scroll-header";
import { ScrollStackingCards } from "@/components/scroll-stacking-cards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, Star, Target } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background relative">
			<ParticleBackground />

			<ScrollHeader />

			{/* Hero Section */}
			<section className="py-20 lg:py-32 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-4xl mx-auto">
						<ScrollAnimation animation="fade-up">
							<Badge
								variant="secondary"
								className="mb-6"
							>
								🎯 Your Learning, Perfected
							</Badge>
						</ScrollAnimation>

						<ScrollAnimation
							animation="fade-up"
							delay={100}
						>
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
								Master anything with{" "}
								<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
									personalized tutoring
								</span>
							</h1>
						</ScrollAnimation>

						<ScrollAnimation
							animation="fade-up"
							delay={200}
						>
							<p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
								Tutr creates AI-powered learning experiences that adapt to your unique style, pace, and goals.
								Experience education that's truly made for you.
							</p>
						</ScrollAnimation>

						<ScrollAnimation
							animation="fade-up"
							delay={300}
						>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button
									size="lg"
									className="bg-blue-600 hover:bg-blue-700 text-white border-0"
								>
									Start Learning <ArrowRight className="ml-2 w-4 h-4" />
								</Button>
								<Button
									size="lg"
									variant="outline"
								>
									<Play className="mr-2 w-4 h-4" />
									See How It Works
								</Button>
							</div>
						</ScrollAnimation>
					</div>

					{/* Hero Illustration */}
					<ScrollAnimation
						animation="scale-up"
						delay={400}
					>
						<div className="mt-16 relative">
							<div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border">
								<div className="aspect-video bg-white dark:bg-gray-900 rounded-xl shadow-2xl border flex items-center justify-center">
									<div className="text-center">
										<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
											<Target className="w-8 h-8 text-white" />
										</div>
										<p className="text-muted-foreground">Interactive Tutr Experience</p>
									</div>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</section>

			{/* Features Overview */}
			<section className="py-20 bg-muted/30 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<ScrollAnimation animation="fade-up">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-bold mb-4">Why choose Tutr?</h2>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								Experience learning that adapts to you, not the other way around
							</p>
						</div>
					</ScrollAnimation>

					<ScrollStackingCards />
				</div>
			</section>

			{/* Demo Mockup Section */}
			<section className="py-20 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<ScrollAnimation animation="fade-up">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience Tutr in action</h2>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								See how our AI tutor creates personalized learning experiences just for you
							</p>
						</div>
					</ScrollAnimation>

					<ScrollAnimation
						animation="scale-up"
						delay={200}
					>
						<div className="relative max-w-4xl mx-auto">
							<div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl border flex items-center justify-center">
								<div className="text-center">
									<div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
										<Play className="w-10 h-10 text-white ml-1" />
									</div>
									<h3 className="text-xl font-semibold mb-2">Interactive Demo</h3>
									<p className="text-muted-foreground">Watch Tutr personalize your learning journey</p>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-20 bg-muted/30 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<ScrollAnimation animation="fade-up">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by learners worldwide</h2>
							<p className="text-xl text-muted-foreground">
								Join thousands discovering their perfect learning experience
							</p>
						</div>
					</ScrollAnimation>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						<ScrollAnimation
							animation="slide-left"
							delay={0}
						>
							<Card className="hover:shadow-lg transition-all duration-300">
								<CardContent className="pt-6">
									<div className="flex mb-4">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
									<p className="text-muted-foreground mb-6">
										"Tutr completely transformed my learning experience. The AI tutor understood exactly how I learn
										best and helped me master programming faster than I ever thought possible!"
									</p>
									<div className="flex items-center">
										<Avatar className="mr-3">
											<AvatarImage src="/professional-woman-developer.png" />
											<AvatarFallback>SM</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-semibold">Sarah Martinez</p>
											<p className="text-sm text-muted-foreground">Software Developer</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</ScrollAnimation>

						<ScrollAnimation
							animation="fade-up"
							delay={100}
						>
							<Card className="hover:shadow-lg transition-all duration-300">
								<CardContent className="pt-6">
									<div className="flex mb-4">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
									<p className="text-muted-foreground mb-6">
										"As a busy professional, I needed flexible learning that worked around my schedule. Tutr's
										personalized approach helped me master data science in just 4 months!"
									</p>
									<div className="flex items-center">
										<Avatar className="mr-3">
											<AvatarImage src="/professional-man-business.png" />
											<AvatarFallback>DJ</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-semibold">David Johnson</p>
											<p className="text-sm text-muted-foreground">Data Analyst</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</ScrollAnimation>

						<ScrollAnimation
							animation="slide-right"
							delay={200}
						>
							<Card className="hover:shadow-lg transition-all duration-300">
								<CardContent className="pt-6">
									<div className="flex mb-4">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="w-4 h-4 fill-yellow-400 text-yellow-400"
											/>
										))}
									</div>
									<p className="text-muted-foreground mb-6">
										"The community aspect is incredible! I've connected with amazing learners and the AI tutor keeps me
										motivated every step of the way. Tutr truly perfected my learning!"
									</p>
									<div className="flex items-center">
										<Avatar className="mr-3">
											<AvatarImage src="/young-student-woman.jpg" />
											<AvatarFallback>EC</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-semibold">Emily Chen</p>
											<p className="text-sm text-muted-foreground">University Student</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</ScrollAnimation>
					</div>
				</div>
			</section>

			{/* Pricing Teaser */}
			<section className="py-20 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<ScrollAnimation animation="fade-up">
						<div className="text-center max-w-3xl mx-auto">
							<h2 className="text-3xl sm:text-4xl font-bold mb-4">Start your perfect learning journey</h2>
							<p className="text-xl text-muted-foreground mb-8">
								Choose the plan that fits your goals. Experience personalized learning from day one.
							</p>

							<div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8 border">
								<div className="grid md:grid-cols-3 gap-6 mb-8">
									<div className="text-center">
										<h3 className="font-semibold mb-2">Starter</h3>
										<p className="text-2xl font-bold">$0</p>
										<p className="text-sm text-muted-foreground">Perfect for exploring</p>
									</div>
									<div className="text-center">
										<h3 className="font-semibold mb-2">Pro Tutr</h3>
										<p className="text-2xl font-bold">
											$19<span className="text-sm font-normal">/month</span>
										</p>
										<p className="text-sm text-muted-foreground">For dedicated learners</p>
									</div>
									<div className="text-center">
										<h3 className="font-semibold mb-2">Team Learning</h3>
										<p className="text-2xl font-bold">
											$49<span className="text-sm font-normal">/month</span>
										</p>
										<p className="text-sm text-muted-foreground">For organizations</p>
									</div>
								</div>

								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button
										size="lg"
										className="bg-blue-600 hover:bg-blue-700 text-white border-0"
									>
										Start Learning Free
									</Button>
									<Button
										size="lg"
										variant="outline"
										asChild
									>
										<Link href="/pricing">View All Plans</Link>
									</Button>
								</div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</section>

			<Footer />
		</div>
	);
}
