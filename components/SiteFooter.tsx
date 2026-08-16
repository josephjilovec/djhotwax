import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter(){
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-brand"><Link className="wordmark" href="/"><span>DJ</span><b>HOTWAX</b></Link><p>Independent sound, cinematic atmosphere, and a catalog designed to move between rooms, cities, and genres.</p></div>
      <div><small>Explore</small><Link href="/music">Music</Link><Link href="/worlds">Worlds</Link><Link href="/about">About</Link></div>
      <div><small>Listen</small><a href={site.youtube} target="_blank" rel="noreferrer">YouTube ↗</a><a href={site.appleMusic} target="_blank" rel="noreferrer">Apple Music ↗</a><a href={site.amazonMusic} target="_blank" rel="noreferrer">Amazon Music ↗</a></div>
      <div><small>Work</small><Link href="/licensing">Licensing</Link><a href={`mailto:${site.email}`}>Contact</a></div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 DJ HOTWAX</span>
      <span>SONIC DISTRIBUTION · MUSIC CATALOG</span>
      <span className="venture-links"><a href={site.venture}>A Joseph Jilovec Venture</a><span aria-hidden="true">/</span><a href={site.venture}>Venture Studio →</a></span>
    </div>
  </footer>
}
