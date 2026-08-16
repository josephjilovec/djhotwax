export type Release = { id:string; title:string; category:string; year:string; url:string; cover:string; world:string; description:string };

export const releases: Release[] = [
 {id:"nuits",title:"Nuits Feutrées",category:"French jazz",year:"2026",url:"https://www.youtube.com/watch?v=pXP0UFn44Bs",cover:"/covers/nuits.svg",world:"Velvet Rooms",description:"Late-night French jazz shaped by velvet rooms, rain-lit streets, brushed drums, and the hour when the city finally lowers its voice."},
 {id:"cuban",title:"Cuban Nights Vol. 1",category:"Global jazz",year:"2025",url:"https://www.youtube.com/watch?v=WhzEOrAUdBY",cover:"/covers/cuban.svg",world:"Velvet Rooms",description:"Brass, hand percussion, piano, and heat moving through a cinematic Havana-night palette."},
 {id:"hot-jazz-two",title:"Hot Jazz Vol. 2",category:"Jazz",year:"2025",url:"https://www.youtube.com/watch?v=EWUhjg5sZSg",cover:"/covers/hot-jazz.svg",world:"Velvet Rooms",description:"Faster swing, glowing brass, velvet sizzle, and a crowded room that keeps getting warmer."},
 {id:"hot-jazz-one",title:"Hot Jazz Vol. 1",category:"Jazz",year:"2025",url:"https://www.youtube.com/watch?v=yFeNZFz_muY",cover:"/covers/hot-jazz-one.svg",world:"Velvet Rooms",description:"Warm streets, midnight secrets, upright bass, and patient brass — the first chapter of the Hot Jazz series."},
 {id:"palm",title:"Palm Tree Dreams",category:"West Coast",year:"2025",url:"https://www.youtube.com/watch?v=J9k2-J8IJNA",cover:"/covers/palm.svg",world:"Coastal Motion",description:"Chrome, palms, sunset color, and drums engineered for motion through a neon coastal night."},
 {id:"empire",title:"Empire of Quiet Air",category:"Trap-soul",year:"2025",url:"https://www.youtube.com/watch?v=bUWYskXNvnw",cover:"/covers/empire.svg",world:"Heavy Gold",description:"Understated power, cinematic isolation, low-end gravity, and quiet dominance."},
 {id:"velocity",title:"Velocity Luxe",category:"Hip-hop",year:"2025",url:"https://www.youtube.com/watch?v=c1psrvjRHzE",cover:"/covers/velocity.svg",world:"Heavy Gold",description:"Premium drums, forward motion, polished bass, and clean late-night confidence."},
 {id:"house",title:"Electronic House Fusion",category:"Electronic",year:"2025",url:"https://www.youtube.com/watch?v=7TG2GmTS7_Q",cover:"/covers/house.svg",world:"Night Current",description:"Long-form momentum, spectral synths, and a pulse designed to keep the room open."}
];

export const featuredRelease = releases[0];

export const worlds = [
 {name:"Velvet Rooms",styles:"French jazz · Cuban nights · hot jazz",copy:"Warm horns, brushed drums, low light, and records that take their time.",image:"/worlds/velvet.svg",accent:"#A855F7"},
 {name:"Coastal Motion",styles:"West Coast · soul · cruising music",copy:"Sunset reflections, chrome edges, and music built for forward motion.",image:"/worlds/coastal.svg",accent:"#E879F9"},
 {name:"Heavy Gold",styles:"Hip-hop · trap-soul · instrumental beats",copy:"Weight, polish, cinematic bass, and confident drums without the noise around them.",image:"/worlds/heavy.svg",accent:"#FF3B70"},
 {name:"Night Current",styles:"House · trance · electronic fusion",copy:"Long-form energy for the part of the night that does not want to end.",image:"/worlds/night.svg",accent:"#C084FC"}
] as const;
