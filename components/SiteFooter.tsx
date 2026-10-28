import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter(){
  return <footer className="site-footer">
    <div className="footer-grid">
      <div><Link className="wordmark" href="/"><span>DJ</span>HOTWAX</Link></div>
      <div><small>Explore</small><Link href="/music">Music</Link><Link href="/worlds">Worlds</Link><Link href="/about">About</Link></div>
      <div><small>Work</small><Link href="/licensing">Licensing</Link><a href={site.youtube} target="_blank" rel="noreferrer">YouTube ↗</a></div>
    </div>

    <div className="footer-bottom" style={{alignItems:'center',flexWrap:'wrap',rowGap:'.7rem'}}>
      <span><b aria-hidden="true" style={{color:'#E7C45A',fontWeight:900}}>©</b> 2026 DJ HOTWAX</span>
      <span>Jazz · Hip-hop · Global rhythms · Electronic</span>
      
    </div>
  </footer>
}
