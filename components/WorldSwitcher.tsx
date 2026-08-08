"use client";
import { useState } from "react";
import type { CSSProperties } from "react";
import { worlds } from "@/lib/releases";
export function WorldSwitcher(){const[active,setActive]=useState(0);const w=worlds[active];return <div className="world-switcher" style={{"--world-accent":w.accent} as CSSProperties}><div className="world-visual"><img src={w.image} alt={`${w.name} visual environment`}/><span>WORLD / 0{active+1}</span></div><div className="world-panel"><div className="world-tabs">{worlds.map((item,i)=><button key={item.name} className={i===active?"active":""} onClick={()=>setActive(i)}>0{i+1} {item.name}</button>)}</div><small>{w.styles}</small><h3>{w.name}</h3><p>{w.copy}</p></div></div>}
