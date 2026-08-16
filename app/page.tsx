import Link from "next/link";
import { TurntableHero } from "@/components/TurntableHero";
import { ReleaseExplorer } from "@/components/ReleaseExplorer";
import { WorldSwitcher } from "@/components/WorldSwitcher";
import { featuredRelease, releases } from "@/lib/releases";
import { site } from "@/lib/site";

export default function Home(){return <main>
  <section className="hero">
    <div className="hero-copy">
      <div className="hero-status"><i/> INDEPENDENT / PHOENIX / 2026</div>
      <p className="kicker">SONIC DISTRIBUTION / MUSIC CATALOG</p>
      <h1>Sound with<br/><em>a pulse.</em></h1>
      <p>DJ Hotwax is an independent catalog moving through French jazz, global rhythm, hip-hop, and electronic music — built as one cinematic identity for late hours, long drives, and rooms with the lights down.</p>
      <div className="hero-actions"><Link className="primary" href="/music">Explore the catalog</Link><a className="text-link" href={site.appleMusic} target="_blank" rel="noreferrer">Stream on Apple Music ↗</a></div>
      <div className="hero-meta"><span>08 SELECTED RELEASES</span><span>04 SONIC WORLDS</span><span>LICENSING READY</span></div>
    </div>
    <TurntableHero/>
  </section>

  <section className="platform-rail" aria-label="Listen to DJ Hotwax">
    <span>LISTEN ACROSS THE NETWORK</span>
    <a href={site.youtube} target="_blank" rel="noreferrer"><strong>YouTube</strong><small>VIDEO / FULL MIXES ↗</small></a>
    <a href={site.appleMusic} target="_blank" rel="noreferrer"><strong>Apple Music</strong><small>ARTIST CATALOG ↗</small></a>
    <a href={site.amazonMusic} target="_blank" rel="noreferrer"><strong>Amazon Music</strong><small>LATEST ALBUM ↗</small></a>
  </section>

  <section className="section featured-release">
    <div className="section-head"><div><p className="kicker">LATEST DISTRIBUTED ALBUM</p><h2>Nuits Feutrées</h2></div><p>Seventeen tracks of late-night French jazz: brushed drums, dim rooms, rain-lit streets, and melodies that move at the speed of midnight.</p></div>
    <div className="latest-grid">
      <div className="latest-art"><img src="/covers/nuits-wide.svg" alt="Nuits Feutrées visual artwork"/><span className="scan-line" aria-hidden="true"/></div>
      <div className="latest-copy"><span>DJ HOTWAX · 2026</span><h3>Velvet light.<br/>Rain outside.<br/><em>No rush.</em></h3><p>Available through the DJ Hotwax distribution network on YouTube, Apple Music, and Amazon Music.</p><div className="latest-actions"><a className="primary" href={featuredRelease.url} target="_blank" rel="noreferrer">Play the album ↗</a><a className="text-link" href={site.appleMusic} target="_blank" rel="noreferrer">Artist page ↗</a></div><div className="release-facts"><span><b>17</b> TRACKS</span><span><b>2026</b> RELEASE</span><span><b>03</b> PLATFORMS</span></div></div>
    </div>
  </section>

  <section className="section black-section catalog-section">
    <div className="section-head"><div><p className="kicker">SELECTED CATALOG</p><h2>Choose your hour.</h2></div><p>Move through the catalog like a record wall: select a release, open its world, and jump directly into the music.</p></div>
    <ReleaseExplorer/>
  </section>

  <section className="catalog-pulse" aria-label="DJ Hotwax catalog overview">
    <div><small>CATALOG</small><strong>{String(releases.length).padStart(2,"0")}</strong><span>selected releases</span></div>
    <div><small>SONIC SYSTEM</small><strong>04</strong><span>distinct worlds</span></div>
    <div><small>DISTRIBUTION</small><strong>03</strong><span>direct listening paths</span></div>
    <div><small>IDENTITY</small><strong>01</strong><span>name after dark</span></div>
  </section>

  <section className="section worlds-section">
    <div className="section-head"><div><p className="kicker">ONE NAME / FOUR WORLDS</p><h2>Genre is the palette.<br/><em>Atmosphere is the signature.</em></h2></div><p>Every release lives inside a broader visual and sonic environment. Switch worlds to see the identity change without losing the DJ Hotwax fingerprint.</p></div>
    <WorldSwitcher/>
  </section>

  <section className="statement"><small>INDEPENDENT SOUND, WITHOUT BORDERS</small><h2>From a Paris lounge to a Havana night, a California drive to a warehouse at 2 A.M.</h2><p>That is the DJ Hotwax universe.</p></section>

  <section className="cta-band"><div><small>PLACEMENTS · LICENSING · CREATIVE WORK</small><h2>Put the right sound<br/>in the right world.</h2></div><Link className="primary dark" href="/licensing">Work with DJ Hotwax ↗</Link></section>
</main>}
