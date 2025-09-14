import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type React from "react";
import { Suspense } from "react";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
	title: "Tutr - Your Learning, Perfected",
	description:
		"Tutr creates AI-powered learning experiences that adapt to your unique style, pace, and goals. Experience education that's truly made for you.",
	generator: "Tutr",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
		>
			<body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Suspense fallback={null}>{children}</Suspense>
				</ThemeProvider>
			</body>
		</html>
	);
}
