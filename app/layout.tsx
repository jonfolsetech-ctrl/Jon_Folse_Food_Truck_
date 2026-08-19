import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jon-folse-food-truck.jon-folse-tech.chatgpt.site"),
  title: { default: "Jon Folse Food Truck | South Louisiana Food Truck & Catering", template: "%s | Jon Folse Food Truck" },
  description: "Louisiana food truck and catering serving Gonzales, Baton Rouge, New Orleans, and communities across South Louisiana with gumbo, po’boys, étouffée, and more.",
  keywords: ["Gonzales Louisiana food truck", "Baton Rouge food truck", "New Orleans food truck", "South Louisiana food truck", "Louisiana food truck catering", "Cajun catering", "gumbo", "po'boys", "étouffée"],
  applicationName: "Jon Folse Food Truck",
  category: "Food and beverage",
  icons: { icon: "/jonfolsefoodtrucklogo.png", apple: "/jonfolsefoodtrucklogo.png" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "Jon Folse Food Truck | South Louisiana Food Truck & Catering", description: "Louisiana food truck and catering serving Gonzales, Baton Rouge, New Orleans, and South Louisiana.", url: "/", locale: "en_US", type: "website", siteName: "Jon Folse Food Truck", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jon Folse Food Truck — Louisiana cooking on the move" }] },
  twitter: { card: "summary_large_image", title: "Jon Folse Food Truck | South Louisiana", description: "Louisiana food truck and catering serving Gonzales, Baton Rouge, New Orleans, and South Louisiana.", images: ["/og.png"] },
};

export const viewport: Viewport = { themeColor: "#071b2b", colorScheme: "dark light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
