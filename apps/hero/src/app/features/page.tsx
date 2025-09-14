import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import { ScrollHeader } from "@/components/scroll-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BarChart3, BookOpen, Brain, Clock, Globe, Smartphone, Target, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
	return (
		<div className="min-h-screen bg-background relative">
			<ParticleBackground />

			<ScrollHeader />

			{/* Hero Section */}
			<section className="py-20 lg:py-32 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-4xl mx-auto">
						<Badge
							variant="secondary"
							className="mb-6"
						>
							🚀 Powerful Learning Features
						</Badge>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
							Features that make{" "}
							<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
								learning stick
							</span>
						</h1>
						<p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
							Discover the comprehensive suite of tools and features designed to accelerate your learning journey and
							help you achieve your educational goals.
						</p>
					</div>
				</div>
			</section>

			{/* Core Features Grid */}
			<section className="py-20 bg-muted/30 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Learning Features</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Everything you need to create, follow, and master personalized learning paths
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<CardHeader>
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
									<Target className="w-6 h-6 text-white" />
								</div>
								<CardTitle>AI-Powered Path Generation</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Our advanced AI analyzes your goals, current knowledge, and learning preferences to create perfectly
									tailored learning paths that adapt as you progress.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<CardHeader>
								<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
									<Brain className="w-6 h-6 text-white" />
								</div>
								<CardTitle>Adaptive Learning Engine</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Smart algorithms continuously adjust difficulty, pacing, and content recommendations based on your
									performance and learning patterns.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<CardHeader>
								<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
									<BarChart3 className="w-6 h-6 text-white" />
								</div>
								<CardTitle>Progress Analytics</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Detailed insights into your learning journey with visual progress tracking, skill assessments, and
									personalized recommendations for improvement.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<CardHeader>
								<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
									<BookOpen className="w-6 h-6 text-white" />
								</div>
								<CardTitle>Rich Content Library</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Access thousands of curated resources including videos, articles, interactive exercises, and
									assessments across hundreds of topics.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<CardHeader>
								<div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
									<Users className="w-6 h-6 text-white" />
								</div>
								<CardTitle>Community Learning</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Connect with fellow learners, join study groups, participate in discussions, and learn from shared
									experiences and insights.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<CardHeader>
								<div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
									<Zap className="w-6 h-6 text-white" />
								</div>
								<CardTitle>Smart Notifications</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Intelligent reminders and motivational messages that keep you on track without being overwhelming or
									intrusive.
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Advanced Features */}
			<section className="py-20 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">Advanced Capabilities</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Professional-grade features for serious learners and organizations
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<CardHeader>
								<div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-3">
									<Smartphone className="w-5 h-5 text-white" />
								</div>
								<CardTitle className="text-lg">Mobile Learning</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Learn anywhere with our mobile-optimized platform and offline content access.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<CardHeader>
								<div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-3">
									<Globe className="w-5 h-5 text-white" />
								</div>
								<CardTitle className="text-lg">Multi-Language</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Content available in 15+ languages with automatic translation capabilities.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<CardHeader>
								<div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mb-3">
									<Clock className="w-5 h-5 text-white" />
								</div>
								<CardTitle className="text-lg">Flexible Scheduling</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Adaptive scheduling that works around your busy lifestyle and commitments.
								</CardDescription>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
							<CardHeader>
								<div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3">
									<Award className="w-5 h-5 text-white" />
								</div>
								<CardTitle className="text-lg">Certifications</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									Earn verified certificates and badges to showcase your newly acquired skills.
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Use Cases Section */}
			<section className="py-20 bg-muted/30 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">Perfect for every learner</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Whether you're a student, professional, or lifelong learner, PathWise adapts to your needs
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						<Card className="hover:shadow-lg transition-all duration-300">
							<CardHeader>
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
									<BookOpen className="w-8 h-8 text-white" />
								</div>
								<CardTitle className="text-xl">Students</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="mb-4">
									Supplement your formal education with personalized learning paths that reinforce classroom concepts
									and explore new interests.
								</CardDescription>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Exam preparation and study guides</li>
									<li>• Subject-specific skill building</li>
									<li>• Career exploration paths</li>
									<li>• Collaborative study groups</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-all duration-300">
							<CardHeader>
								<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
									<Target className="w-8 h-8 text-white" />
								</div>
								<CardTitle className="text-xl">Professionals</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="mb-4">
									Advance your career with targeted skill development, industry certifications, and leadership training
									tailored to your field.
								</CardDescription>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Professional skill development</li>
									<li>• Industry certification prep</li>
									<li>• Leadership and management training</li>
									<li>• Technology upskilling</li>
								</ul>
							</CardContent>
						</Card>

						<Card className="hover:shadow-lg transition-all duration-300">
							<CardHeader>
								<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
									<Brain className="w-8 h-8 text-white" />
								</div>
								<CardTitle className="text-xl">Lifelong Learners</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="mb-4">
									Pursue your passions and curiosity with flexible learning paths designed for personal enrichment and
									intellectual growth.
								</CardDescription>
								<ul className="space-y-2 text-sm text-muted-foreground">
									<li>• Hobby and interest exploration</li>
									<li>• Creative skill development</li>
									<li>• Language learning</li>
									<li>• Personal development</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to transform your learning?</h2>
						<p className="text-xl text-muted-foreground mb-8">
							Join thousands of learners who are already achieving their goals with PathWise.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
							>
								Start Free Trial
							</Button>
							<Button
								size="lg"
								variant="outline"
								asChild
							>
								<Link href="/pricing">View Pricing</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
