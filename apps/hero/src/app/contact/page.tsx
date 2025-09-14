"use client";

import type React from "react";

import { Footer } from "@/components/footer";
import { ParticleBackground } from "@/components/particle-background";
import { ScrollHeader } from "@/components/scroll-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		// Reset form
		setFormData({ name: "", email: "", subject: "", message: "" });
		alert("Thank you for your message! We'll get back to you soon.");
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

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
							📞 Get in Touch
						</Badge>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
							We'd love to{" "}
							<span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
								hear from you
							</span>
						</h1>
						<p className="text-xl text-muted-foreground text-balance mb-8">
							Have questions about PathWise? Need help getting started? Want to share feedback? Our team is here to help
							you succeed in your learning journey.
						</p>
					</div>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="py-20 relative z-10">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
						{/* Contact Form */}
						<Card>
							<CardHeader>
								<CardTitle>Send us a message</CardTitle>
								<CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
							</CardHeader>
							<CardContent>
								<form
									onSubmit={handleSubmit}
									className="space-y-6"
								>
									<div className="grid md:grid-cols-2 gap-4">
										<div className="space-y-2">
											<Label htmlFor="name">Name</Label>
											<Input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												placeholder="Your full name"
												required
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="your@email.com"
												required
											/>
										</div>
									</div>
									<div className="space-y-2">
										<Label htmlFor="subject">Subject</Label>
										<Input
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											placeholder="What's this about?"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="message">Message</Label>
										<Textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Tell us more about how we can help..."
											rows={6}
											required
										/>
									</div>
									<Button
										type="submit"
										className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white"
									>
										Send Message
									</Button>
								</form>
							</CardContent>
						</Card>

						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="text-2xl font-bold mb-6">Other ways to reach us</h2>
								<div className="space-y-6">
									<div className="flex items-start space-x-4">
										<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
											<Mail className="w-6 h-6 text-white" />
										</div>
										<div>
											<h3 className="font-semibold mb-1">Email Support</h3>
											<p className="text-muted-foreground mb-2">For general inquiries and support questions</p>
											<a
												href="mailto:support@pathwise.com"
												className="text-blue-600 hover:text-blue-700 transition-colors"
											>
												support@pathwise.com
											</a>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
											<MessageCircle className="w-6 h-6 text-white" />
										</div>
										<div>
											<h3 className="font-semibold mb-1">Live Chat</h3>
											<p className="text-muted-foreground mb-2">Chat with our support team in real-time</p>
											<p className="text-sm text-muted-foreground">Available 9 AM - 6 PM PST</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
											<Phone className="w-6 h-6 text-white" />
										</div>
										<div>
											<h3 className="font-semibold mb-1">Phone Support</h3>
											<p className="text-muted-foreground mb-2">Speak directly with our team</p>
											<p className="text-blue-600">+1 (555) 123-4567</p>
											<p className="text-sm text-muted-foreground">Monday - Friday, 9 AM - 6 PM PST</p>
										</div>
									</div>
								</div>
							</div>

							<Card>
								<CardContent className="pt-6">
									<div className="flex items-start space-x-4">
										<div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
											<MapPin className="w-6 h-6 text-white" />
										</div>
										<div>
											<h3 className="font-semibold mb-2">Our Office</h3>
											<p className="text-muted-foreground mb-4">
												123 Learning Street
												<br />
												San Francisco, CA 94105
												<br />
												United States
											</p>
											<div className="flex items-center text-sm text-muted-foreground">
												<Clock className="w-4 h-4 mr-2" />
												Monday - Friday, 9 AM - 6 PM PST
											</div>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className="pt-6">
									<h3 className="font-semibold mb-4">Frequently Asked Questions</h3>
									<p className="text-muted-foreground mb-4">
										Looking for quick answers? Check out our comprehensive FAQ section for common questions about
										PathWise features, pricing, and getting started.
									</p>
									<Button
										variant="outline"
										asChild
									>
										<Link href="/faq">View FAQ</Link>
									</Button>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
