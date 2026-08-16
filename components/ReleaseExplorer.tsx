"use client";
import { useState } from "react";
import { releases } from "@/lib/releases";
import { site } from "@/lib/site";

export function ReleaseExplorer(){
  const [active,setActive]=useState(releases[0].id);
  const current=releases.find(r=>r.id===active)??releases[0];
  const currentIndex=releases.findIndex(r=>r.id===current.id)+1;
  return <div className="release-explorer">
    <div className="release-list">
      <div className="release-list-head"><span>CATALOG INDEX</span><span>{String(releases.length).padStart(2,"0")} RELEASES</span></div>
      {releases.map((r,i)=><button key={r.id} onClick={()=>setActive(r.id)} className={r.id===active?"active":""} aria-pressed={r.id===active}>
        <span>{String(i+1).padStart(2,"0")}</span><strong>{r.title}</strong><small>{r.category}</small>
      </button>)}
    </div>
    <div className="release-stage">
      <div className="release-stage-image">
        <div className="release-badge">SELECTED / {String(currentIndex).padStart(2,"0")}</div>
        <img key={current.cover} src={current.cover} alt={`${current.title} artwork`}/>
        <a className="play-orb" href={current.url} target="_blank" rel="noreferrer" aria-label={`Play ${current.title} on YouTube`}><span>▶</span><small>PLAY</small></a>
      </div>
      <div className="release-stage-copy">
        <div className="release-meta-row"><span>{current.world}</span><span>{current.category} · {current.year}</span></div>
        <p className="eyebrow">DJ HOTWAX / CATALOG</p>
        <h3>{current.title}</h3>
        <p>{current.description}</p>
        <div className="release-actions"><a className="primary small" href={current.url} target="_blank" rel="noreferrer">Play on YouTube ↗</a><a className="text-link" href={site.appleMusic} target="_blank" rel="noreferrer">Apple Music ↗</a></div>
      </div>
    </div>
  </div>
}
