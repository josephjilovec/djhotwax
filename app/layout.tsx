import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";
import "./globals.css";
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:site.title,template:`%s — ${site.name}`},description:site.description,openGraph:{title:site.title,description:site.description,url:site.url,siteName:site.name,type:"website",images:[{url:"/brand/og-hotwax.svg",width:1200,height:630,alt:"DJ Hotwax — Music for After Dark"}]},twitter:{card:"summary_large_image",title:site.title,description:site.description,images:["/brand/og-hotwax.svg"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/>{children}<SiteFooter/><Analytics/><SpeedInsights/></body></html>}
