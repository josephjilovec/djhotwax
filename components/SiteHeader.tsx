"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
const links=[["Music","/music"],["Worlds","/worlds"],["Licensing","/licensing"],["About","/about"]] as const;
export function SiteHeader(){const[open,setOpen]=useState(false);return <header className="site-header"><Link className="wordmark" href="/"><span>DJ</span>HOTWAX</Link><nav className="desktop-nav">{links.map(([l,h])=><Link key={h} href={h}>{l}</Link>)}</nav><div className="header-actions"><a className="listen-link" href={site.youtube} target="_blank" rel="noreferrer">Listen now ↗</a><button className="menu" onClick={()=>setOpen(v=>!v)} aria-label="Toggle navigation" aria-expanded={open}><i/><i/></button></div>{open&&<nav className="mobile-nav">{links.map(([l,h])=><Link key={h} href={h} onClick={()=>setOpen(false)}>{l}</Link>)}<a href={site.youtube} target="_blank" rel="noreferrer">Listen now ↗</a></nav>}</header>}
