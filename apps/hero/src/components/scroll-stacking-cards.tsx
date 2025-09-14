import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Zap } from "lucide-react";

const cards = [
	{
		icon: Target,
		title: "AI-Powered Personal Tutor",
		description:
			"Your personal AI tutor understands exactly how you learn best. It adapts content, pacing, and teaching methods to match your unique learning style and goals.",
		gradient: "from-blue-500 to-blue-600",
		features: ["Personalized learning assessment", "Adaptive content delivery", "Real-time progress optimization"],
		color: "blue",
	},
	{
		icon: Zap,
		title: "Smart Adaptation",
		description:
			"Tutr learns from every interaction, continuously refining your learning experience for maximum effectiveness and engagement.",
		gradient: "from-green-500 to-green-600",
		features: ["Real-time difficulty adjustment", "Learning pattern recognition", "Performance optimization"],
		color: "green",
	},
	{
		icon: Users,
		title: "Learning Community",
		description:
			"Connect with fellow learners, share insights, and grow together in our supportive learning ecosystem with collaborative features.",
		gradient: "from-purple-500 to-purple-600",
		features: ["Peer learning groups", "Expert mentorship", "Progress sharing"],
		color: "purple",
	},
];

export function ScrollStackingCards() {
	return (
		<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			{cards.map((card, index) => {
				const Icon = card.icon;

				return (
					<Card
						key={index}
						className="shadow-lg border-2 bg-background/95 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
					>
						<CardHeader>
							<div
								className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6`}
							>
								<Icon className="w-8 h-8 text-white" />
							</div>
							<CardTitle className="text-xl mb-3">{card.title}</CardTitle>
							<CardDescription className="text-base leading-relaxed">{card.description}</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								{card.features.map((feature, featureIndex) => (
									<div
										key={featureIndex}
										className="flex items-center gap-3"
									>
										<div className={`w-2 h-2 bg-${card.color}-500 rounded-full`}></div>
										<span className="text-sm text-muted-foreground">{feature}</span>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
