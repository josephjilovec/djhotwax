"use client";
import { useState } from "react";
import { featuredRelease } from "@/lib/releases";

export function TurntableHero(){
  const [playing,setPlaying]=useState(true);
  const r=featuredRelease;
  return <div className={`turntable-hero ${playing?"playing":""}`}>
    <div className="deck-chrome" aria-hidden="true"/>
    <div className="ambient a" aria-hidden="true"/>
    <div className="ambient b" aria-hidden="true"/>
    <div className="deck-topline"><span>DJ HOTWAX / AUDIO OBJECT 001</span><span className="signal"><i/> LIVE VISUAL</span></div>
    <button className="record-button" onClick={()=>setPlaying(v=>!v)} aria-label={playing?"Pause visualizer":"Play visualizer"}>
      <img className="record-cover" src={r.cover} alt={`${r.title} cover art`}/>
      <span className="record-ring" aria-hidden="true"/>
      <span className="record-center">HOT<br/>WAX</span>
    </button>
    <div className="tone-arm" aria-hidden="true"><i/><b/></div>
    <div className="equalizer" aria-hidden="true">{Array.from({length:36},(_,i)=><i key={i} style={{animationDelay:`${(i%9)*.065}s`}}/>)}</div>
    <div className="deck-label"><span>NOW SPINNING</span><strong>{r.title}</strong><small>{playing?"MOTION ON":"MOTION HOLD"}</small></div>
    <div className="deck-specs"><span><b>2026</b> RELEASE</span><span><b>17</b> TRACKS</span><span><b>∞</b> AFTER DARK</span></div>
  </div>
}
