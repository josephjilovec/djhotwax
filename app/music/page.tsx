import type {Metadata} from "next";
import {ReleaseExplorer} from "@/components/ReleaseExplorer";
import {releases} from "@/lib/releases";
import {site} from "@/lib/site";

export const metadata:Metadata={title:"Music Catalog",description:"Explore the DJ Hotwax catalog across jazz, hip-hop, global rhythm, and electronic music."};

export default function MusicPage(){return <main>
  <section className="page-hero music-hero"><div><p className="kicker">CATALOG / DISTRIBUTION</p><h1>Choose<br/><em>your hour.</em></h1><p>Albums, long-form mixes, and original instrumentals across jazz, hip-hop, global rhythm, and electronic music — organized as one late-night catalog.</p><div className="hero-actions"><a className="primary" href={site.appleMusic} target="_blank" rel="noreferrer">Apple Music ↗</a><a className="text-link" href={site.youtube} target="_blank" rel="noreferrer">YouTube catalog ↗</a></div></div><img src="/covers/catalog-wall.svg" alt="DJ Hotwax catalog artwork wall"/></section>
  <section className="platform-rail compact" aria-label="Music platforms"><span>DISTRIBUTION</span><a href={site.youtube} target="_blank" rel="noreferrer"><strong>YouTube</strong><small>FULL MIXES ↗</small></a><a href={site.appleMusic} target="_blank" rel="noreferrer"><strong>Apple Music</strong><small>ARTIST PAGE ↗</small></a><a href={site.amazonMusic} target="_blank" rel="noreferrer"><strong>Amazon Music</strong><small>LATEST ALBUM ↗</small></a></section>
  <section className="section"><div className="section-head"><div><p className="kicker">INTERACTIVE INDEX</p><h2>Open the catalog.</h2></div><p>Select a release to surface its visual world, genre, release year, and direct listening path.</p></div><ReleaseExplorer/></section>
  <section className="release-wall">{releases.map((r,i)=><a key={r.id} href={r.url} target="_blank" rel="noreferrer"><div className="release-wall-art"><img src={r.cover} alt={`${r.title} cover`}/><span>{String(i+1).padStart(2,"0")}</span></div><div><span>{r.category} · {r.year}</span><strong>{r.title}</strong><small>{r.world} / PLAY ↗</small></div></a>)}</section>
</main>}
