import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import { ScrollHeader } from "@/components/scroll-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
	{
		id: 1,
		title: "The Science Behind Personalized Learning: Why One Size Doesn't Fit All",
		excerpt:
			"Discover how AI-powered personalization is revolutionizing education by adapting to individual learning styles, preferences, and pace.",
		author: "Sarah Chen",
		authorImage: "/team-sarah-ceo.jpg",
		date: "March 15, 2024",
		readTime: "8 min read",
		category: "Education",
		image: "/placeholder-rmv0t.png",
	},
	{
		id: 2,
		title: "5 Learning Strategies That Actually Work (Backed by Research)",
		excerpt:
			"Evidence-based techniques to improve retention, comprehension, and skill acquisition for any subject you're studying.",
		author: "David Kim",
		authorImage: "/team-david-education.jpg",
		date: "March 12, 2024",
		readTime: "6 min read",
		category: "Study Tips",
		image: "/placeholder-lczev.png",
	},
	{
		id: 3,
		title: "Building Learning Habits That Stick: A Developer's Guide",
		excerpt:
			"How to create sustainable learning routines that fit into your busy schedule and help you master new programming skills.",
		author: "Priya Patel",
		authorImage: "/team-priya-engineering.jpg",
		date: "March 10, 2024",
		readTime: "7 min read",
		category: "Programming",
		image: "/placeholder-ebnqk.png",
	},
	{
		id: 4,
		title: "The Future of Online Education: Trends to Watch in 2024",
		excerpt:
			"From AI tutors to virtual reality classrooms, explore the emerging technologies shaping the future of digital learning.",
		author: "Marcus Johnson",
		authorImage: "/team-marcus-cto.jpg",
		date: "March 8, 2024",
		readTime: "10 min read",
		category: "Technology",
		image: "/placeholder-daklw.png",
	},
	{
		id: 5,
		title: "Overcoming Learning Plateaus: When Progress Feels Stuck",
		excerpt:
			"Practical strategies to break through learning plateaus and reignite your motivation when progress seems to stall.",
		author: "Elena Rodriguez",
		authorImage: "/team-elena-design.jpg",
		date: "March 5, 2024",
		readTime: "5 min read",
		category: "Motivation",
		image: "/placeholder-l0fip.png",
	},
	{
		id: 6,
		title: "Community Learning: The Power of Learning Together",
		excerpt:
			"How peer-to-peer learning and community support can accelerate your educational journey and keep you motivated.",
		author: "Alex Thompson",
		authorImage: "/team-alex-community.jpg",
		date: "March 3, 2024",
		readTime: "6 min read",
		category: "Community",
		image: "/placeholder-rwghz.png",
	},
];

export default function BlogPage() {
	return (
		<div className="min-h-screen bg-background relative">
			<ParticleBackground />

			<ScrollHeader />

			{/* Hero Section */}
			<section className="py-20 lg:py-32 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto">
						<Badge
							variant="secondary"
							className="mb-6"
						>
							📚 Learning Insights
						</Badge>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
							The PathWise{" "}
							<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
								Learning Blog
							</span>
						</h1>
						<p className="text-xl text-muted-foreground text-balance mb-8">
							Insights, tips, and strategies to help you learn more effectively. From study techniques to the latest in
							educational technology.
						</p>
					</div>
				</div>
			</section>

			{/* Featured Post */}
			<section className="py-20 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<Badge
							variant="secondary"
							className="mb-4"
						>
							Featured Post
						</Badge>
						<Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
							<div className="md:flex">
								<div className="md:w-1/2">
									<img
										src={blogPosts[0].image || "/placeholder.svg"}
										alt={blogPosts[0].title}
										className="w-full h-64 md:h-full object-cover"
									/>
								</div>
								<div className="md:w-1/2 p-8">
									<Badge
										variant="outline"
										className="mb-4"
									>
										{blogPosts[0].category}
									</Badge>
									<h2 className="text-2xl font-bold mb-4 text-balance">{blogPosts[0].title}</h2>
									<p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3">
											<Avatar className="w-8 h-8">
												<AvatarImage src={blogPosts[0].authorImage || "/placeholder.svg"} />
												<AvatarFallback>
													{blogPosts[0].author
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</AvatarFallback>
											</Avatar>
											<div className="text-sm">
												<p className="font-medium">{blogPosts[0].author}</p>
												<div className="flex items-center text-muted-foreground space-x-2">
													<Calendar className="w-3 h-3" />
													<span>{blogPosts[0].date}</span>
													<Clock className="w-3 h-3 ml-2" />
													<span>{blogPosts[0].readTime}</span>
												</div>
											</div>
										</div>
										<Button
											variant="ghost"
											size="sm"
										>
											Read More <ArrowRight className="w-4 h-4 ml-2" />
										</Button>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* Blog Posts Grid */}
			<section className="py-20 bg-muted/30 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">Latest Articles</h2>
						<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
							Stay up to date with the latest insights on learning, education technology, and personal development.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
						{blogPosts.slice(1).map((post) => (
							<Card
								key={post.id}
								className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
							>
								<div className="aspect-video overflow-hidden">
									<img
										src={post.image || "/placeholder.svg"}
										alt={post.title}
										className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
									/>
								</div>
								<CardHeader>
									<div className="flex items-center justify-between mb-2">
										<Badge
											variant="outline"
											className="text-xs"
										>
											{post.category}
										</Badge>
										<div className="flex items-center text-xs text-muted-foreground">
											<Clock className="w-3 h-3 mr-1" />
											{post.readTime}
										</div>
									</div>
									<CardTitle className="text-lg text-balance leading-tight">{post.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription className="mb-4">{post.excerpt}</CardDescription>
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-2">
											<Avatar className="w-6 h-6">
												<AvatarImage src={post.authorImage || "/placeholder.svg"} />
												<AvatarFallback className="text-xs">
													{post.author
														.split(" ")
														.map((n) => n[0])
														.join("")}
												</AvatarFallback>
											</Avatar>
											<div className="text-xs">
												<p className="font-medium">{post.author}</p>
												<p className="text-muted-foreground">{post.date}</p>
											</div>
										</div>
										<Button
											variant="ghost"
											size="sm"
										>
											<ArrowRight className="w-4 h-4" />
										</Button>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Signup */}
			<section className="py-20 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay in the loop</h2>
						<p className="text-xl text-muted-foreground mb-8">
							Get the latest learning insights, tips, and PathWise updates delivered to your inbox.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-2 border border-input rounded-md bg-background"
							/>
							<Button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white">
								Subscribe
							</Button>
						</div>
						<p className="text-sm text-muted-foreground mt-4">No spam, unsubscribe at any time.</p>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
