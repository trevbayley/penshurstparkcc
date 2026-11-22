
// ===== CONFIG: replace these with real values =====
const CFG={w3w:'https://what3words.com/crisp.dates.daily',
 form:'https://forms.cloud.microsoft/r/4ELsii0BbM',
 taster:'https://forms.cloud.microsoft/r/KKpWD1TPC1',camp:'https://forms.cloud.microsoft/r/3DTM6zih0w',
 /* Team photos: set currentSeason once each year. Home shows that season, or the latest available season as a fallback. */
 currentSeason:2026,
 teamPhotos:[
  {image:'media/teams/ladies-softball-team-2026.webp',caption:'Ladies softball team 2026',season:2026},
  {image:'media/teams/ladies-1st-xi-2026.webp',caption:'Ladies 1st XI 2026',season:2026},
  {image:'media/teams/sunday-1st-xi-2026.webp',caption:'Sunday 1st XI 2026',season:2026},
  {image:'media/teams/sunday-2nd-xi-2026.webp',caption:'Sunday 2nd XI 2026',season:2026},
  {image:'media/teams/u13-girls-kent-champions.webp',caption:'U13 Girls Kent Champions',season:2026},
  {image:'media/teams/2024-ladies-softball-team-lords.webp',caption:"2024 Ladies Softball team go to Lord's",season:2024},
  {image:'media/teams/2023-touring-side-boys-go-dutch.webp',caption:'2023 Touring side - Boys go Dutch',season:2023},
  {image:'media/teams/2023-ladies-softball-three-time-winners.webp',caption:'Ladies Softball three-time winners - 2021, 2022 and 2023',season:2023},
  {image:'media/teams/2022-ladies-softball-two-time-winners.webp',caption:'Ladies Softball two-time winners - 2021 and 2022',season:2022},
  {image:'media/teams/2022-ladies-softball-team.webp',caption:'2022 Ladies Softball team',season:2022},
  {image:'media/teams/2021-ladies-softball-kent-winners.webp',caption:'Ladies Softball Kent Winners 2021',season:2021},
  {image:'media/teams/2021-u9-softball-kent-finals-beckenham.webp',caption:'U9 Softball - Kent Finals Day at Beckenham - 4th place',season:2021}
 ],
 /* sponsors = [['Sponsor name','https://sponsor-website','sponsors/logo.png'], ...] (logo optional; the Sponsors footer stays hidden until at least one is added). */
 sponsors:[['Sevenoaks Window Cleaning Ltd','https://sevenoaks-cleaning.co.uk','media/sponsors/sevenoaks-window-cleaning.webp'],['Making Scents Dog Training','https://makingscentsdogtraining.co.uk/','media/sponsors/making-scents-dog-training.webp'],['Amherst Consultancy','https://www.amherstaccountancy.co.uk','media/sponsors/amherst-consultancy.webp'],['Holme Run Fitness','https://www.holmerunfitness.com','media/sponsors/holme-run-fitness.webp'],['NSJ Joinery','https://www.nsjjoinery.co.uk','media/sponsors/nsj-joinery.webp'],['Estate and Field','https://www.estateandfield.co.uk','media/sponsors/estate-and-field.webp'],['Kent Heritage Works','https://www.kentheritageworks.uk','media/sponsors/kent-heritage-works.webp'],['Penshurst Fuels','https://penshurstfuels.com','media/sponsors/penshurst-fuels.webp'],['Kewell Converters','https://www.kewell-converters.co.uk','media/sponsors/kewell-converters.webp'],['The Leicester Arms','https://www.theleicesterarmspenshurst.co.uk/','media/sponsors/the-leicester-arms.webp'],['JMO Garden Services','mailto:jake_cheesman@yahoo.com','media/sponsors/jmo-garden-services.webp'],['Penshurst Fine Foods','https://www.penshurstfinefoods.co.uk/','media/sponsors/penshurst-fine-foods.webp']],
 /* booking = address of the separate booking app (blank = shows 'coming soon'). */
 booking:'',
 phone:'0791 7730761',social:[['Facebook','https://www.facebook.com/PenshurstPark'],['Instagram','https://www.instagram.com/penshurstparkcc/'],['YouTube','https://www.youtube.com/@PPCC-Cam']],email:'jake_cheesman@yahoo.com',mapQ:'Penshurst+Park+Cricket+Club+TN11+8DH'};
const iso=d=>{const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`};
// ===== CLUB DATA: edit these entries in this file, then republish =====
const CLUB_DATA={
 ev:[
  {id:'event-winter-training-2026',type:'event',date:'2026-11-14',time:'',title:'Winter training',detail:'',photo:'media/events/winter-training-2026.webp'},
  {id:'event-1',type:'event',date:'2026-10-03',time:'18:00',title:'2026 Club dinner and awards',detail:'Venue: Penshurst Place',photo:'media/events/club-dinner-awards-2026.webp'},
  {id:'event-2',type:'event',date:'2026-12-13',time:'17:00',title:'2026 Christmas Raffle',detail:'Prizes in abundance from bats to fine dining',url:'https://www.zeffy.com/en-GB/ticketing/penshurst-park-cricket-clubs-christmas-raffle--2026',photo:'media/events/christmas-raffle-2026.webp'},
  {id:'event-3',type:'event',date:'2027-01-07',time:'19:30',title:'2027 Club AGM',detail:'Venue: The Leicester Arms'},
  {id:'event-4',type:'event',date:'2027-02-06',time:'18:30',title:'2027 Club quiz',detail:'Venue: Penshurst Village Hall',url:'https://wa.me/447917730761?text=I%20would%20like%20to%20book%20a%20table%20for%20a%20quiz%20team%20on%20the%206th%20Feb.%20Our%20team%20has%206%20members%20and%20our%20Team%20name%20is%3A',action:'Book a quiz table on WhatsApp',photo:'media/events/quiz-night.webp'}
 ],
history:[
  ['1719','Penshurst cricketers at bowling practice','media/history/1719.webp'],
  ['1723','The club is founded, as is shown on our crest.','media/history/1723-club-crest.webp'],
  ['1724','First recorded match at Penshurst Park (Penshurst, Tonbridge & Wadhurst v Dartford).'],
  ['1728',"Edwin Stead's XI played two matches at Penshurst Park, against the 2nd Duke of Richmond's XI and Sir William Gage's XI. Stead's XI defeated Gage's XI by 7 runs in a match played for 50 guineas."],
  ['1729',"Stead's XI played Sir William Gage's XI at Penshurst Park for 100 guineas. Gage's XI achieved what is believed to be the earliest known innings victory in cricket; a contemporary report appeared in the Norwich Gazette of 30 August 1729."],
  ['1747',"George Vertue's print of 1747, with new dedication, included in Volume I of Hasted's Kent in 1778.",'media/history/1747.webp'],
  ['1760',"Dukes, of Penshurst, credited with manufacturing the first ‘modern’ cricket ball."],
  ['1949','Britain from the Air image.','media/history/1949.webp'],
  ['1960','A home game played c.1960.','media/history/1960.webp'],
  ['1969 & 1972','Club hosts the visiting Toronto Cricket Club.'],
  ['1996','Club begins unbroken spell in the top division of the Kent County Village League.'],
  ['2012–2014','Three consecutive league titles.'],
  ['2019','Singapore CC touring side v Penshurst Park. Ladies and junior cricket (re)introduced; junior section grows from 32 to c. 90.','media/history/2019.webp'],
  ['2022','Jake wins another award - Kent Cricket Innovators Award 2022.','media/history/2022-kent-cricket-innovators-award.webp'],
  ['2023',"Third consecutive Kent Women's Softball League title; hosts the Finals Day."],
  ['2024',"The club marked 300 years of cricket at Penshurst Park in July 2024 with a celebratory week and a 25-over match between a President's XI (featuring Penshurst Place heir Dr Hon Phillip Sidney) and a Penshurst Park XI.",'media/history/2024-presidents-day.webp'],
    ['2024','Opening of Net 1 by Russell Hammond, son of George Hammond, a long standing Chairman of the club.','media/history/2024-net-1-opening.webp'],
  ['2025',"Great Estates from Above: a film crew visits the estate on President's Match Day.",'media/history/2025-great-estates-from-above.webp','https://www.channel4.com/programmes/great-estates-from-above/on-demand/77687-003','Watch on Channel 4'],
  ['2026',"Ladies 1st XI win Kent Women's Championship League title.",'media/history/2026-ladies-1st-xi.webp']
 ],
links:[
  {title:'Cricket resources',items:[
   ['Play-Cricket','https://penshurstpark.play-cricket.com/','Our fixtures, results and teams'],
   ['England and Wales Cricket Board','https://www.ecb.co.uk/','The national governing body'],
   ['Kent Cricket','https://www.kentcricket.co.uk/','County news, pathways and clubs'],
   ['The Laws of Cricket (MCC)','https://www.lords.org/mcc/the-laws-of-cricket','The official Laws of the game'],
   ['Force Cricket Centre, Westerham','https://forcecricketcentre.com/','Indoor cricket net centre, Westerham TN16 2DN']]},
  {title:'Training videos on YouTube',items:[
   ['Batting','https://www.youtube.com/results?search_query=cricket+batting+technique+coaching','Grip, stance, shots and drills'],
   ['Spin bowling','https://www.youtube.com/results?search_query=cricket+spin+bowling+coaching+tutorial','Grips, action and variations'],
   ['Seam bowling','https://www.youtube.com/results?search_query=cricket+seam+bowling+coaching+tutorial','Action, seam position and line and length'],
   ['Wicket keeping','https://www.youtube.com/results?search_query=cricket+wicket+keeping+drills+coaching','Stance, catching and stumping drills'],
   ['Fielding','https://www.youtube.com/results?search_query=cricket+fielding+drills+coaching','Catching, ground fielding and throwing']]}
 ]
};
const COACHING_TEAM=[
 {name:'Jake Cheesman',quals:'Foundation',roles:['Head coach']},
 {name:'Adam Ranson',quals:'Level 1 (AUS)',roles:['Senior men']},
 {name:'Trev Bayley',quals:'Core',roles:['Senior women','Transition']},
 {name:'Neil Hudson',quals:'Foundation',roles:['Junior hardball']},
 {name:'Charlotte Imison',quals:'Foundation',roles:['Junior softball']},
 {name:'Michael Noding',quals:'Foundation',roles:['Junior softball']}
];
const TEAM_DIRECTORY=[
 {group:'Senior men hardball',teams:[
  {name:'Saturday 1st XI',league:'Kent County Village League Division 1'},
  {name:'Saturday 2nd XI',league:'Kent County Village League Division 6'},
  {name:'Sunday 1st XI',league:'To be confirmed',photo:'media/teams/sunday-1st-xi-2026.webp'},
  {name:'Sunday 2nd XI',league:'To be confirmed',photo:'media/teams/sunday-2nd-xi-2026.webp'}
 ]},
 {group:'Senior women hardball',teams:[
  {name:'Women’s 1st XI',league:'Kent Women’s Premiership',photo:'media/teams/ladies-1st-xi-2026.webp'},
  {name:'Women’s 2nd XI',league:'Kent Women’s Championship'}
 ]},
 {group:'Junior hardball',teams:[
  {name:'U15 Girls A',league:'To be confirmed'},
  {name:'U15 Boys A',league:'To be confirmed'},
  {name:'U13 Boys A',league:'To be confirmed'},
  {name:'U13 Boys B',league:'To be confirmed'},
  {name:'U13 Boys C',league:'To be confirmed'},
  {name:'U13 Girls A',league:'To be confirmed',photo:'media/teams/u13-girls-kent-champions.webp'},
  {name:'U11 Boys A',league:'To be confirmed'},
  {name:'U11 Girls A',league:'To be confirmed'},
  {name:'U9 Boys A',league:'To be confirmed'},
  {name:'U9 Girls A',league:'To be confirmed'}
 ]},
 {group:'Senior women softball',teams:[
  {name:'Women’s Softball 1st Team',league:'To be confirmed',photo:'media/teams/ladies-softball-team-2026.webp'}
 ]},
 {group:'Junior softball',teams:[
  {name:'Mixed U10',league:'To be confirmed'},
  {name:'Mixed U9',league:'To be confirmed'},
  {name:'Mixed U8',league:'To be confirmed'},
  {name:'Mixed U7',league:'To be confirmed'},
  {name:'Mixed U6',league:'To be confirmed'}
 ]}
];
const S=CLUB_DATA;
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const safeHref=(value,allowed=['https:'])=>{
 try{
  const raw=String(value??'').trim();
  const url=new URL(raw,location.href);
  if(!allowed.includes(url.protocol))return '#';
  return esc(url.href);
 }catch{return '#'}
};
const safeAsset=value=>{
 const raw=String(value??'').trim();
 if(!raw||raw.startsWith('//')||raw.includes('\\'))return '';
 // Local static assets are deliberately relative to index.html. This also works when previewed via file://.
 if(/^(?:\.\/)?media\/[A-Za-z0-9_./-]+$/i.test(raw)&&!raw.split('/').includes('..'))return esc(raw);
 try{
  const url=new URL(raw,location.href);
  if(!['http:','https:'].includes(url.protocol)||url.origin!==location.origin)return '';
  return esc(url.href);
 }catch{return ''}
};
const fmt=d=>new Date(d+'T00:00').toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});
const today=iso(new Date());
const teamSeasons=()=>[...new Set((CFG.teamPhotos||[]).map(x=>Number(x.season)).filter(Number.isFinite))].sort((a,b)=>b-a);
function homeTeamSelection(){const seasons=teamSeasons();const selected=seasons.includes(Number(CFG.currentSeason))?Number(CFG.currentSeason):(seasons[0]||Number(CFG.currentSeason));return {season:selected,photos:(CFG.teamPhotos||[]).filter(x=>Number(x.season)===selected)}}
const isPH=u=>!u||/^https?:\/\/(?:www\.)?example\.com(?:\/|$)/i.test(u);
const pages={home,aboutUs,history,members,teams,join,fundraising,admin};
const routeCleanups=[];
const registerRouteCleanup=fn=>routeCleanups.push(fn);
function cleanupRoute(){while(routeCleanups.length){try{routeCleanups.pop()()}catch(error){console.error('Route cleanup failed',error)}}}
let cur=location.hash.slice(1)||'home';
function nav(){const p=cur;
 const labels={home:'Home',aboutUs:'About us',history:'History',members:'Members area',teams:'Our teams',join:'Join us',fundraising:'Fundraising',admin:'Site updates'};
 const a=k=>`<a href="#${k}" class="${k==p?'on':''}" ${k==p?'aria-current="page"':''}>${labels[k]}</a>`;const links=['home','aboutUs','history','members','teams','join'].map(a);
 links.push(isPH(CFG.booking)?'<span class="navsoon" aria-disabled="true" title="Bookings – coming soon">Bookings – coming soon</span>':`<a href="${safeHref(CFG.booking)}" target="_blank" rel="noopener noreferrer">Bookings ↗</a>`,a('fundraising'));
 $('#nav').innerHTML=links.join('')}
let initialRoute=true;

function enhancePageMedia(){
 document.querySelectorAll('#app img:not(.hero-logo):not(.hero-ball-grass),#sponsorList img').forEach(img=>{img.loading='lazy';img.decoding='async'});
 document.querySelectorAll('#app iframe').forEach(frame=>{frame.loading='lazy';if(!frame.referrerPolicy)frame.referrerPolicy='no-referrer-when-downgrade'});
}
function route(){
 cleanupRoute();
 const k=pages[cur]?cur:'home';
 nav();
 pages[k]();
 enhancePageMedia();
 document.title=`${({home:'Home',aboutUs:'About us',members:'Members area',teams:'Our teams',join:'Join us',admin:'Site updates'})[k]||k[0].toUpperCase()+k.slice(1)} | Penshurst Park Cricket Club`;
 window.scrollTo(0,0);
 if(!initialRoute){
  const heading=document.querySelector('#app h1');
  if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true})}
  else $('#app').focus({preventScroll:true});
 }
 initialRoute=false;
}
const menuToggle=$('#menuToggle'),mainNav=$('#nav');
menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'Close menu':'Menu';if(open){const firstLink=mainNav.querySelector('a');if(firstLink)firstLink.focus()}});
function closeMenu(){mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='Menu'}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mainNav.classList.contains('open')){closeMenu();menuToggle.focus()}});
const mobileMenuQuery=window.matchMedia('(max-width:760px)');
function resetMenuForViewport(){if(!mobileMenuQuery.matches)closeMenu()}
if(mobileMenuQuery.addEventListener)mobileMenuQuery.addEventListener('change',resetMenuForViewport);else mobileMenuQuery.addListener(resetMenuForViewport);

addEventListener('hashchange',()=>{cur=location.hash.slice(1)||'home';closeMenu();route()});
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();closeMenu();cur=a.getAttribute('href').slice(1)||'home';try{history.replaceState(null,'','#'+cur)}catch(x){}route()});
function evLine(e){const photo=e.photo?`<div class="event-media"><img src="${safeAsset(e.photo)}" loading="lazy" decoding="async" alt="${esc(e.title)} event poster"></div>`:'';const linkedPhoto=e.url&&photo?`<a class="event-media-link" href="${safeHref(e.url,['https:','mailto:'])}" target="_blank" rel="noopener noreferrer" title="Open ${esc(e.title)} link">${photo}</a>`:photo;return `<div class="card">${linkedPhoto}<b>${esc(e.title)}</b><br><span class="mut">${fmt(e.date)} ${e.time||''}</span>${e.detail?`<br>${esc(e.detail)}`:''}${e.url?`<br><a class="btn" href="${safeHref(e.url,['https:','mailto:'])}" target="_blank" rel="noopener noreferrer" title="${esc(e.action||'Open event link')}">${esc(e.action||'Buy raffle tickets')} ↗</a>`:''}</div>`}
function home(){const homeTeams=homeTeamSelection();const recent=S.ev.filter(e=>e.date<today).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5);
 const upcoming=S.ev.filter(e=>e.date>=today).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,7);
 $('#app').innerHTML=`<section class="hero"><div class="txt"><div class="hero-heading"><h1 class="hero-title">Welcome to Penshurst Park Cricket Club</h1></div><div class="hero-marks"><img src="media/club/club-crest.webp" alt="" width="70" class="hero-logo"></div><img class="hero-ball-grass" src="media/club/red-cricket-ball-grass.webp" alt="Red cricket ball resting on short-cut grass"><img class="hero-ball-grass hero-ball-grass-pink" src="media/club/pink-cricket-ball-grass.webp" alt="Pink cricket ball resting on short-cut grass"></div></section>
 <div class="grid"><aside><h2>Recent events</h2><div id="recentEventCycle"></div></aside>
 <section><h2>About the club</h2><p>One of England’s oldest cricket venues, Penshurst Park has hosted cricket since the early 18th century, with its first recorded match played here in 1724. More than 300 years later, cricket continues in the historic surroundings of Penshurst Place.</p><p>Today, Penshurst Park is a thriving village club with men’s, women’s and junior cricket for a wide range of ages and abilities. Our women’s section has grown from softball cricket to become <a href="https://www.kentcricket.co.uk/news/kwcl-champions-tunbridge-wells-penshurst-park-cc/" target="_blank" rel="noopener noreferrer">2026 Kent Women’s Cricket League Championship winners</a>, while our expanding junior section is helping introduce a new generation to the game.</p><p><a class="btn" href="#aboutUs">More about us</a></p>
 <section class="team-gallery" aria-labelledby="team-gallery-title"><h3 id="team-gallery-title">Our teams</h3><p class="team-season-label">${esc(homeTeams.season)} season</p><div id="teamGallery"></div><p class="home-team-action"><a class="btn y" href="#teams">View all our teams</a></p></section>
 
</section>
 <aside class="home-upcoming"><h2><span class="home-upcoming-mark" aria-hidden="true"></span>Upcoming events</h2><div id="upcomingEventCycle"></div></aside></div>`;initEventCycle('#recentEventCycle',recent,true);initEventCycle('#upcomingEventCycle',upcoming,false);initTeamGallery(homeTeams.photos)}
function initEventCycle(selector,events,isRecent){const host=$(selector);if(!host)return;if(!events.length){host.innerHTML=isRecent?'<div class="photo" aria-hidden="true"></div><p class="mut">No recent events yet.</p>':'<p class="mut">No upcoming events at the moment.</p>';return}let current=0,timer=null,fadeTimer=null;const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;host.innerHTML='<div class="event-cycle-content"></div>';const content=host.querySelector('.event-cycle-content');function render(index){current=(index+events.length)%events.length;content.innerHTML=evLine(events[current])}function show(index){clearTimeout(fadeTimer);if(reduceMotion){render(index);return}content.classList.add('is-fading');fadeTimer=setTimeout(()=>{render(index);requestAnimationFrame(()=>content.classList.remove('is-fading'))},500)}function start(){if(events.length>1&&!reduceMotion)timer=setInterval(()=>show(current+1),12000)}registerRouteCleanup(()=>{clearTimeout(timer);clearTimeout(fadeTimer)});render(0);start()}

function initTeamGallery(teamPhotos){
 const host=$('#teamGallery');if(!host)return;const photos=(teamPhotos||[]).filter(x=>x&&x.image);
 if(!photos.length){host.innerHTML='<div class="team-gallery-empty">Team photos will be added here.</div>';return}
 let current=0,timer=null,fadeTimer=null;const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 host.innerHTML=`<div class="team-gallery-frame"><img id="teamGalleryImage" src="" alt=""></div><div id="teamGalleryName" class="team-gallery-name" aria-live="polite"></div>`;
 const image=$('#teamGalleryImage'),name=$('#teamGalleryName');
 function render(index){current=(index+photos.length)%photos.length;image.src=photos[current].image;const team=photos[current].caption||`Penshurst Park Cricket Club team photo ${current+1}`;image.alt=team;name.textContent=team}
 function show(index){clearTimeout(fadeTimer);if(reduceMotion){render(index);return}image.classList.add('is-fading');fadeTimer=setTimeout(()=>{render(index);requestAnimationFrame(()=>image.classList.remove('is-fading'))},500)}
 function start(){if(photos.length>1&&!reduceMotion)timer=setInterval(()=>show(current+1),12000)}
 registerRouteCleanup(()=>{clearTimeout(timer);clearTimeout(fadeTimer)});render(0);start()
}
function aboutUs(){$('#app').innerHTML=`<h1 class="page-title">About us</h1><div class="grid location-grid"><section class="card about-contact" aria-labelledby="club-location-title"><h2 id="club-location-title">Address</h2><address>Penshurst Park Cricket Club<br>Penshurst Place, Penshurst<br>Tonbridge, Kent TN11 8DH</address><div class="about-location-actions"><a class="w3w-link" href="${safeHref(CFG.w3w)}" target="_blank" rel="noopener noreferrer" title="Open ///crisp.dates.daily in what3words"><span class="w3w-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5"/><path d="M9.1 6.6 6.2 17.4M13.6 6.6l-2.9 10.8M18.1 6.6l-2.9 10.8"/></svg></span><span>///crisp.dates.daily</span></a><a class="btn about-directions" href="${safeHref('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(CFG.mapQ))}" target="_blank" rel="noopener noreferrer">Get directions ↗</a></div><h2>Contact</h2><div class="about-contact-actions"><a class="phone-line phone-link" href="${safeHref('tel:'+CFG.phone.replace(/\s+/g,''),['tel:'])}" title="Call ${esc(CFG.phone)}"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z"/></svg></span><span>${esc(CFG.phone)}</span></a><a class="email-link" href="${safeHref('mailto:'+CFG.email,['mailto:'])}" title="Email ${esc(CFG.email)}"><span class="email-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l9 5.6 9-5.6V7H3Zm18 10V9.8l-8.47 5.27a1 1 0 0 1-1.06 0L3 9.8V17h18Z"/></svg></span><span>${esc(CFG.email)}</span></a></div><p><a class="btn" href="${safeHref('https://penshurstpark.play-cricket.com/Aboutus#collapseTwo')}" target="_blank" rel="noopener noreferrer" title="Open Penshurst Park CC club officials on Play-Cricket">Club officials ↗</a></p></section><iframe class="location-map" title="Map showing Penshurst Park Cricket Club at Penshurst Place" loading="lazy" src="https://www.google.com/maps?q=${encodeURIComponent(CFG.mapQ)}&output=embed"></iframe></div>`}
function history(){
 $('#app').innerHTML=`<h1 class="page-title">History</h1><div class="history-toolbar"><div class="history-tabs" role="tablist" aria-label="History sections"><button type="button" role="tab" id="clubHistoryTab" aria-controls="clubHistoryPanel" aria-selected="true">Club history</button><button type="button" role="tab" id="teamHistoryTab" aria-controls="teamHistoryPanel" aria-selected="false" tabindex="-1">Team history</button></div><div class="history-toolbar-controls" aria-label="History entry controls"><button class="history-step history-toolbar-prev" type="button">&#8593;<span>Previous</span></button><output class="history-position history-toolbar-position" aria-live="polite">1 of 1</output><button class="history-step history-toolbar-next" type="button"><span>Next</span>&#8595;</button></div></div><section id="clubHistoryPanel" role="tabpanel" aria-labelledby="clubHistoryTab"></section><section id="teamHistoryPanel" role="tabpanel" aria-labelledby="teamHistoryTab" hidden></section>`;
 const tabs=[...document.querySelectorAll('.history-tabs [role="tab"]')],clubPanel=$('#clubHistoryPanel'),teamPanel=$('#teamHistoryPanel');
  const toolbarPrevious=$('.history-toolbar-prev'),toolbarNext=$('.history-toolbar-next'),toolbarPosition=$('.history-toolbar-position');
  let activeHistoryControls=null;
  function setHistoryToolbar(state){activeHistoryControls=state;toolbarPrevious.disabled=state.current===0;toolbarNext.disabled=state.current===state.length-1;toolbarPosition.value=`${state.current+1} of ${state.length}`;toolbarPosition.textContent=toolbarPosition.value}
  toolbarPrevious.addEventListener('click',()=>{if(activeHistoryControls)activeHistoryControls.select(activeHistoryControls.current-1,{focus:true})});
  toolbarNext.addEventListener('click',()=>{if(activeHistoryControls)activeHistoryControls.select(activeHistoryControls.current+1,{focus:true})});
 function selectTab(tab,focus=true){tabs.forEach(button=>{const active=button===tab;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1});const club=tab.id==='clubHistoryTab';clubPanel.hidden=!club;teamPanel.hidden=club;if(focus)tab.focus();if(club){renderClubHistory();clubPanel.querySelector('.history-year.is-active')?.click()}else{renderTeamHistory();teamPanel.querySelector('.history-year.is-active')?.click()}}
 tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>selectTab(tab,false));tab.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();let next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(index+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;selectTab(tabs[next])})});
 function renderTeamHistory(){
  if(teamPanel.dataset.ready)return;
  teamPanel.dataset.ready='true';
  const displayedSeason=homeTeamSelection().season;
  const items=(CFG.teamPhotos||[]).filter(x=>Number(x.season)<displayedSeason).sort((a,b)=>Number(b.season)-Number(a.season));
  if(!items.length){teamPanel.innerHTML='<p class="mut">Previous-season team photographs will appear here.</p>';return}
  teamPanel.innerHTML=`<section class="history-experience history-rebuilt team-history-rebuilt">
   <div class="history-visual" aria-live="polite">
    <div class="history-image-frame"><img id="teamHistoryImage" alt=""></div>
   </div>
   <div class="history-timeline-shell">
    <div class="history-timeline team-history-list" role="listbox" tabindex="0" aria-label="Team History photographs">
     ${items.map((x,i)=>`<button class="history-year team-history-entry" type="button" role="option" aria-selected="${i===0?'true':'false'}" data-team-history-index="${i}"><strong>${esc(x.season)} season</strong><span>${esc(x.caption)}</span></button>`).join('')}
    </div>
   </div>
  </section>`;
  const list=teamPanel.querySelector('.team-history-list');
  const buttons=[...teamPanel.querySelectorAll('.team-history-entry')];
  const image=teamPanel.querySelector('#teamHistoryImage');
  const imageFrame=image.closest('.history-image-frame');
    const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current=0;
  function select(index,{focus=false,scroll=true}={}){
   current=Math.max(0,Math.min(items.length-1,index));
   const item=items[current];
   buttons.forEach((button,i)=>{const active=i===current;button.classList.toggle('is-active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1});
   if(!teamPanel.hidden)setHistoryToolbar({current,length:items.length,select});
   const src=safeAsset(item.image);imageFrame.classList.toggle('is-empty',!src);if(src){image.src=src;image.alt=item.caption;image.hidden=false}else{image.removeAttribute('src');image.alt='';image.hidden=true}
   const active=buttons[current];if(scroll)active.scrollIntoView({block:'nearest',behavior:reduceMotion?'auto':'smooth'});if(focus)active.focus({preventScroll:true});
  }
  buttons.forEach((button,i)=>button.addEventListener('click',()=>select(i)));
    list.addEventListener('keydown',e=>{const keys=['ArrowDown','ArrowUp','Home','End'];if(!keys.includes(e.key))return;e.preventDefault();const target=e.key==='Home'?0:e.key==='End'?items.length-1:current+(e.key==='ArrowDown'?1:-1);select(target,{focus:true})});
  select(0,{scroll:false});
 }
 function renderClubHistory(){
  if(clubPanel.dataset.ready)return;
  clubPanel.dataset.ready='true';
  const items=S.history.map((x,i)=>({year:x[0],description:x[1],image:x[2]||'',url:x[3]||'',linkLabel:x[4]||'',index:i}));
  clubPanel.innerHTML=`<section class="history-experience history-rebuilt">
   <div class="history-visual" aria-live="polite">
    <div class="history-image-frame"><img id="historyImage" alt="" hidden></div>
   </div>
   <div class="history-timeline-shell">
    <div class="history-timeline" role="listbox" tabindex="0" aria-label="Club history entries">
     ${items.map((x,i)=>`<button class="history-year" type="button" role="option" aria-selected="${i===0?'true':'false'}" data-history-index="${i}"><strong>${esc(x.year)}</strong><span>${esc(x.description)}</span></button>`).join('')}
    </div>
   </div>
  </section>`;
  const timeline=clubPanel.querySelector('.history-timeline');
  const buttons=[...clubPanel.querySelectorAll('.history-year')];
  const image=clubPanel.querySelector('#historyImage');
  const imageFrame=image.closest('.history-image-frame');
    const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current=0,timer=null;
  function select(index,{focus=false,scroll=true}={}){
   current=Math.max(0,Math.min(items.length-1,index));
   const item=items[current];
   buttons.forEach((button,i)=>{const active=i===current;button.classList.toggle('is-active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1});
   if(!clubPanel.hidden)setHistoryToolbar({current,length:items.length,select});
   const src=item.image?safeAsset(item.image):'';imageFrame.classList.toggle('is-empty',!src);if(src){image.src=src;image.alt=`${item.year}: ${item.description}`;image.hidden=false}else{image.removeAttribute('src');image.alt='';image.hidden=true}
   const active=buttons[current];
   if(scroll)active.scrollIntoView({block:'nearest',behavior:reduceMotion?'auto':'smooth'});
   if(focus)active.focus({preventScroll:true});
  }
  function restart(){clearTimeout(timer);if(items.length>1&&!reduceMotion)timer=setTimeout(()=>{select(current<items.length-1?current+1:0);restart()},7000)}
  buttons.forEach((button,i)=>button.addEventListener('click',()=>{select(i);restart()}));
    timeline.addEventListener('keydown',e=>{const keys=['ArrowDown','ArrowUp','Home','End'];if(!keys.includes(e.key))return;e.preventDefault();const target=e.key==='Home'?0:e.key==='End'?items.length-1:current+(e.key==='ArrowDown'?1:-1);select(target,{focus:true});restart()});
  registerRouteCleanup(()=>clearTimeout(timer));
  select(0,{scroll:false});
  restart();
 }
 renderClubHistory()
}
function members(){$('#app').innerHTML=`<h1 class="page-title">Members area</h1><div class="members-layout"><div class="members-main"><details class="card training-season"><summary>Winter training schedules</summary><div class="training-season-content"><section aria-labelledby="junior-training-title"><h3 id="junior-training-title">Junior training</h3><div class="scroll"><table class="training-table"><caption class="sr-only">Junior winter training schedule</caption><thead><tr><th scope="col">Age group</th><th scope="col">Venue</th><th scope="col">Time</th><th scope="col">Dates</th></tr></thead><tbody><tr><th scope="row">U6/7</th><td rowspan="2">Holmewood House</td><td>13:00–14:00</td><td rowspan="2">24th, 31st Jan; 7th, 14th, 21st, 28th Feb; 14th, 21st Mar</td></tr><tr><th scope="row">U8/9/10</th><td>14:00–15:00</td></tr><tr><th scope="row">U11</th><td rowspan="2">The Judd School</td><td>14:00–15:00</td><td rowspan="2">1st, 15th, 29th Nov; 13th Dec; 10th, 17th, 24th, 31st Jan; 7th, 14th, 21st, 28th Feb; 7th, 14th, 21st Mar</td></tr><tr><th scope="row">U13s and U15 girls</th><td>15:00–16:00</td></tr></tbody></table></div></section><section class="senior-training" aria-labelledby="senior-training-title"><h3 id="senior-training-title">Senior training</h3><div class="scroll"><table class="training-table"><caption class="sr-only">Senior winter training schedule</caption><thead><tr><th scope="col">Group</th><th scope="col">Venue</th><th scope="col">Time</th><th scope="col">Dates</th></tr></thead><tbody><tr><th scope="row">Ladies hardball</th><td>The Judd School</td><td>17:30–18:30</td><td>9th, 23rd Jan; 6th, 20th Feb; 6th, 20th Mar</td></tr><tr><th scope="row">Ladies softball</th><td>Details will follow</td><td>Details will follow</td><td>Details will follow</td></tr><tr><th scope="row">U15 boys, invited players and men</th><td>Holmewood House</td><td>19:00–20:30</td><td>15th, 22nd, 29th Jan; 5th, 12th, 19th, 26th Feb; 5th, 12th, 19th, 26th Mar; 2nd, 9th, 16th Apr</td></tr></tbody></table></div></section></div></details>
<details class="card training-season"><summary>Summer training schedules</summary><div class="training-season-content"><section><h3>Junior training</h3><div class="scroll"><table class="training-table"><caption class="sr-only">Junior summer training schedule</caption><thead><tr><th scope="col">Age group</th><th scope="col">Venue</th><th scope="col">Time</th><th scope="col">Dates</th></tr></thead><tbody><tr><th scope="row">U6/7</th><td>Penshurst Park Cricket Club</td><td></td><td></td></tr><tr><th scope="row">U8/9/10</th><td>Penshurst Park Cricket Club</td><td></td><td></td></tr><tr><th scope="row">U11</th><td>Penshurst Park Cricket Club</td><td></td><td></td></tr><tr><th scope="row">U13s and U15 girls</th><td>Penshurst Park Cricket Club</td><td></td><td></td></tr></tbody></table></div></section><section class="senior-training"><h3>Senior training</h3><div class="scroll"><table class="training-table"><caption class="sr-only">Senior summer training schedule</caption><thead><tr><th scope="col">Group</th><th scope="col">Venue</th><th scope="col">Time</th><th scope="col">Dates</th></tr></thead><tbody><tr><th scope="row">Ladies hardball</th><td>Penshurst Park Cricket Club</td><td></td><td></td></tr><tr><th scope="row">Ladies softball</th><td>Penshurst Park Cricket Club</td><td></td><td></td></tr><tr><th scope="row">U15 boys, invited players and men</th><td>Penshurst Park Cricket Club</td><td></td><td></td></tr></tbody></table></div></section></div></details><section class="card" aria-labelledby="club-kit-title"><h2 id="club-kit-title">Club kit</h2><p>Order Penshurst Park Cricket Club match kit from the club shop.</p><p><a class="btn y" href="https://www.mrcrickethockey.com/product-category/club-shop/penshurst-cricket-club/penshurst-cricket-club-match-kit/" target="_blank" rel="noopener noreferrer" title="Open Penshurst Cricket Club match kit shop">Club kit shop ↗</a></p><div class="note">See members WhatsApp channel for Club shop access code.</div><p><b>U15 boy and senior men team players:</b> please have a <a href="https://www.mrcrickethockey.com/product/penshurst-cricket-club-ergo-match-shirt-long-sleeve-navy/" target="_blank" rel="noopener noreferrer">white senior shirt</a>.</p><p><b>U15 girls and senior ladies team players:</b> please have a <a href="https://www.mrcrickethockey.com/product/penshurst-cricket-club-dual-ladies-bespoke-hardball-match-shirt/" target="_blank" rel="noopener noreferrer">blue senior shirt</a>.</p></section>
<section class="card" aria-labelledby="player-development-title"><h2 id="player-development-title">Player development resources</h2><p>Resources for players who want to develop their cricket skills through additional practice and learning. icoachcricket includes games and practices covering batting, bowling, fielding and wicketkeeping, together with technical, tactical, physical and mental areas.</p><p><a class="btn" href="https://icoachcricket.ecb.co.uk/index.php?r=site/index" target="_blank" rel="noopener noreferrer">icoachcricket resources ↗</a> <a class="btn" href="https://www.ecb.co.uk/play/coaching/workshops" target="_blank" rel="noopener noreferrer">ECB player development workshops ↗</a></p></section>
<section class="card" aria-labelledby="coach-training-title"><h2 id="coach-training-title">Coach training</h2><p>Coaches and anyone interested in developing their coaching can use the ECB coaching resources and icoachcricket for ongoing learning, ideas and session support.</p><p><a class="btn" href="https://www.ecb.co.uk/play/coaching/coaches-association" target="_blank" rel="noopener noreferrer">ECB Coaches Association ↗</a> <a class="btn" href="https://icoachcricket.ecb.co.uk/index.php?r=site/login" target="_blank" rel="noopener noreferrer">icoachcricket ↗</a></p></section>
<section class="card" aria-labelledby="umpire-training-title"><h2 id="umpire-training-title">Umpire training</h2><p>The ECB Association of Cricket Officials provides information and development opportunities for cricket officials, including umpires. The ECB also provides umpiring courses for people starting their umpiring journey.</p><p><a class="btn" href="https://www.ecb.co.uk/play/officials/ecb-aco" target="_blank" rel="noopener noreferrer">ECB Association of Cricket Officials ↗</a> <a class="btn" href="https://www.ecb.co.uk/play/officials/courses" target="_blank" rel="noopener noreferrer">ECB umpiring courses ↗</a></p></section>
</div><div class="members-side-stack"><section class="card" aria-labelledby="useful-title"><h2 id="useful-title">Useful links</h2><div class="link-cols">${S.links.filter(g=>g.title!=='Training videos on YouTube').map(g=>`<div><h4>${esc(g.title)}</h4><ul class="link-list">${g.items.map(x=>`<li><a href="${safeHref(x[1],['https:','mailto:'])}" target="_blank" rel="noopener noreferrer">${esc(x[0])}<span class="external-mark" aria-hidden="true">&nbsp;↗</span></a>${x[2]?`<br><span class="mut">${esc(x[2])}</span>`:''}</li>`).join('')}</ul></div>`).join('')}</div><div class="useful-youtube"><h4>Training videos on YouTube</h4><ul class="link-list">${(S.links.find(g=>g.title==='Training videos on YouTube')?.items||[]).map(x=>`<li><a href="${safeHref(x[1],['https:','mailto:'])}" target="_blank" rel="noopener noreferrer">${esc(x[0])}<span class="external-mark" aria-hidden="true">&nbsp;↗</span></a>${x[2]?`<br><span class="mut">${esc(x[2])}</span>`:''}</li>`).join('')}</ul></div></section></div></div>`
 document.querySelectorAll('.training-season').forEach(section=>{section.open=false;section.removeAttribute('open')});
}
function teams(){
 const contactFallback='To be confirmed after the club elections';
 const coaching=`<details class="teams-group coaching-group"><summary><span>Coaching team</span><span class="teams-count">${COACHING_TEAM.length} coaches</span></summary><div class="coaching-grid">${COACHING_TEAM.map(coach=>{const photo=coach.photo?`<img class="coach-photo" src="${safeAsset(coach.photo)}" loading="lazy" decoding="async" alt="${esc(coach.name)}">`:`<div class="coach-photo-placeholder"><img src="media/club/club-crest.webp" loading="lazy" decoding="async" alt=""><small>Photo to be added</small></div>`;return `<article class="coach-card">${photo}<div class="coach-copy"><h3>${esc(coach.name)}</h3><dl><div><dt>Quals.</dt><dd>${esc(coach.quals)}</dd></div><div><dt>Role(s)</dt><dd>${coach.roles.map(esc).join('<br>')}</dd></div></dl></div></article>`}).join('')}</div></details>`;
 const groups=TEAM_DIRECTORY.map(group=>`<details class="teams-group"><summary><span>${esc(group.group)}</span><span class="teams-count">${group.teams.length} ${group.teams.length===1?'team':'teams'}</span></summary><div class="teams-grid">${group.teams.map(team=>{const photo=team.photo?`<img src="${safeAsset(team.photo)}" loading="lazy" decoding="async" alt="${esc(team.name)} team photograph">`:`<div class="team-photo-placeholder"><img src="media/club/club-crest.webp" loading="lazy" decoding="async" alt="Penshurst Park Cricket Club crest"><small>Team photo will be added</small></div>`;const contact=team.contact||contactFallback;const whatsapp=team.whatsapp?`<a class="btn team-whatsapp" href="${safeHref(team.whatsapp)}" target="_blank" rel="noopener noreferrer">Contact on WhatsApp ↗</a>`:`<span class="team-contact-pending">WhatsApp link will be added</span>`;return `<article class="team-directory-card">${photo}<div class="team-directory-copy"><h3>${esc(team.name)}</h3><dl><div><dt>Current league</dt><dd>${esc(team.league||'To be confirmed')}</dd></div><div><dt>Contact</dt><dd>${esc(contact)}</dd></div></dl>${whatsapp}</div></article>`}).join('')}</div></details>`).join('');
 $('#app').innerHTML=`<h1 class="page-title">Our teams</h1><p class="teams-intro">Choose a section to view our coaching or playing teams.</p><section class="teams-directory" aria-label="Penshurst Park Cricket Club teams">${coaching}${groups}</section><section class="card teams-play-cricket" aria-labelledby="play-cricket-teams-title"><h2 id="play-cricket-teams-title">Fixtures, results and statistics</h2><p>Visit Play-Cricket for published team fixtures, results, tables and player statistics.</p><a class="btn y" href="https://penshurstpark.play-cricket.com/Teams" target="_blank" rel="noopener noreferrer">View PPCC teams on Play-Cricket ↗</a></section>`;
 document.querySelectorAll('.teams-group').forEach(section=>{section.open=false;section.removeAttribute('open')});
}

function join(){$('#app').innerHTML=`<h1 class="page-title">Join us</h1><div class="card"><a class="btn y" href="${safeHref(CFG.form)}" target="_blank" rel="noopener noreferrer">Register as a new member</a> <a class="btn" href="${safeHref(CFG.taster)}" target="_blank" rel="noopener noreferrer">Trial session registration</a> <a class="btn" href="${safeHref(CFG.camp)}" target="_blank" rel="noopener noreferrer">Summer camp registration</a></div><section class="card cricketer-exchange" aria-labelledby="cricketer-exchange-title"><img class="cricketer-exchange-logo" src="media/club/cricketer-exchange.png" alt="Cricketer Exchange"><div><h2 id="cricketer-exchange-title">Cricketer Exchange</h2><a class="btn y" href="https://cricketerexchange.com/club/penshurst-park-cricket-club" target="_blank" rel="noopener noreferrer">View Penshurst Park CC on Cricketer Exchange ↗</a></div></section><div class="join-posters"><section class="poster-card"><h2>Recruitment poster</h2><img id="poster2026" loading="lazy" decoding="async" src="media/posters/recruitment-poster.webp" alt="Penshurst Park recruitment poster 2026"><div class="poster-actions"><button type="button" class="y" data-save-poster="poster2026" data-filename="Penshurst-Park-Recruitment-2026.webp">Save poster</button><button type="button" data-print-poster="poster2026">Send to printer</button></div></section><section class="poster-card"><h2>Youth recruitment poster</h2><img id="poster2027" loading="lazy" decoding="async" src="media/posters/youth-recruitment-poster.webp" alt="Penshurst Park youth recruitment poster 2027"><div class="poster-actions"><button type="button" class="y" data-save-poster="poster2027" data-filename="Penshurst-Park-Youth-Recruitment-2027.webp">Save poster</button><button type="button" data-print-poster="poster2027">Send to printer</button></div></section></div>`;initPosterActions()}
function initPosterActions(){
 document.querySelectorAll('[data-save-poster]').forEach(b=>b.addEventListener('click',()=>{const img=document.getElementById(b.dataset.savePoster);if(!img)return;const a=document.createElement('a');a.href=img.src;a.download=b.dataset.filename||'poster.webp';document.body.appendChild(a);a.click();a.remove()}));
 document.querySelectorAll('[data-print-poster]').forEach(b=>b.addEventListener('click',()=>{
  const img=document.getElementById(b.dataset.printPoster);
  if(!img)return;
  const frame=document.createElement('iframe');
  frame.title='Poster print view';
  frame.setAttribute('aria-hidden','true');
  frame.style.position='fixed';
  frame.style.width='1px';
  frame.style.height='1px';
  frame.style.right='0';
  frame.style.bottom='0';
  frame.style.border='0';
  frame.style.opacity='0';
  document.body.appendChild(frame);
  const doc=frame.contentDocument;
  doc.open();
  doc.write('<!doctype html><html><head><title>Print poster</title><style>@page{margin:10mm}html,body{margin:0;width:100%;height:100%}body{display:flex;align-items:center;justify-content:center}img{display:block;max-width:100%;max-height:100vh;object-fit:contain}</style></head><body><img id="print-image" src="'+img.src+'" alt="Poster"></body></html>');
  doc.close();
  const printImage=doc.getElementById('print-image');
  const printAndRemove=()=>{try{frame.contentWindow.focus();frame.contentWindow.print()}finally{setTimeout(()=>frame.remove(),1000)}};
  if(printImage.complete)printAndRemove();else printImage.addEventListener('load',printAndRemove,{once:true});
 }))
}
function fundraising(){$('#app').innerHTML=`<h1 class="page-title">Fundraising</h1><section class="card"><p>The fundraising committee welcomes members, suggestions and contributions. We will shortly be raising funds towards some major projects, including the extension of our fabulous clubhouse.</p></section><section class="card fundraising-sponsor" aria-labelledby="sponsor-title"><h2 id="sponsor-title">Join as a Sponsor</h2><p>Interested in supporting Penshurst Park Cricket Club? Get in touch to discuss sponsorship opportunities.</p><p><a class="btn y" href="mailto:jake_cheesman@yahoo.com?subject=Becoming%20a%20sponsor%20of%20PPCC">Join as a Sponsor</a></p></section><section class="card"><section aria-labelledby="easyfundraising-title"><h2 id="easyfundraising-title">Easyfundraising</h2><p>Our easyfundraising page is available all year round and can help make some funds for the club. It can be used to turn everyday online shopping into FREE donations when you use it to shop, with over 8,000 retailers such as eBay, John Lewis &amp; Partners, Argos, ASOS and Tesco.</p><p>Register here and we'll get an extra £5 when you reach your first £5 in donations:</p><a class="btn y" href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?invite=ZI7EXX&amp;referral-campaign=c2s&amp;utm_campaign=web-referral&amp;utm_medium=referral&amp;utm_source=whatsapp&amp;char=186585" target="_blank" rel="noopener noreferrer">Register with Easyfundraising ↗</a></section></section>`}
function admin(){
 $('#app').innerHTML=`<h1 class="page-title">Admin maintenance</h1><div class="note"><b>No external or browser data storage is used.</b> Permanent club content is stored directly in <code>app.js</code>.</div><div class="card"><h3>How to update the site</h3><ol><li>Open <code>app.js</code> in a text editor.</li><li>Find <code>CLUB_DATA</code> to update recent/upcoming events, the history timeline or the Useful links.</li><li>Find <code>CFG</code> to update club links, contact details, registration forms and sponsors.</li><li>Save the file and republish the site to replace the previous version.</li></ol><p class="mut">Fixtures, results and selections are handled in the external apps. The Booking and Availability/Selection links remain placeholders until those services are ready. Play-Cricket remains an external link only and is not used as a data source.</p></div>`;
}
const SOCIAL_ICONS={
 Facebook:'<svg class="social-svg social-facebook" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#0866FF"/><path fill="#fff" d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H8.3v3h2.8v8h2.4Z"/></svg>',
 Instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="igGradient" x1="2" y1="22" x2="22" y2="2"><stop offset="0" stop-color="#FFDC80"/><stop offset=".28" stop-color="#F77737"/><stop offset=".5" stop-color="#E1306C"/><stop offset=".72" stop-color="#C13584"/><stop offset="1" stop-color="#833AB4"/></linearGradient></defs><path fill="url(#igGradient)" fill-rule="evenodd" d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm9.3 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
 YouTube:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg>'
};
$('#soc').innerHTML=CFG.social.map(s=>{const name=s[0],url=s[1],icon=SOCIAL_ICONS[name]||esc(name);return `<a class="btn social-btn" href="${safeHref(url)}" target="_blank" rel="noopener noreferrer" title="Open ${esc(name)}" aria-label="Open ${esc(name)} (opens in a new tab)">${icon}<span class="sr-only">${esc(name)}</span></a>`}).join('');
if(CFG.sponsors.length){$('#sponsorList').innerHTML=CFG.sponsors.map(x=>`<li><a href="${safeHref(x[1],['https:','mailto:'])}" target="_blank" rel="noopener noreferrer">${x[2]?`<img src="${safeAsset(x[2])}" loading="lazy" decoding="async" alt="${esc(x[0])}">`:esc(x[0])}</a></li>`).join('');$('#sponsors').hidden=false}
route();

// Discourage casual saving of club photographs while leaving logos/posters unaffected.
document.addEventListener('contextmenu',e=>{
 const img=e.target.closest('img');
 if(!img)return;
 const src=img.getAttribute('src')||'';
 if(src.startsWith('media/history/')||src.startsWith('media/teams/')||img.closest('.event-media'))e.preventDefault();
});
document.addEventListener('dragstart',e=>{
 const img=e.target.closest('img');
 if(!img)return;
 const src=img.getAttribute('src')||'';
 if(src.startsWith('media/history/')||src.startsWith('media/teams/')||img.closest('.event-media'))e.preventDefault();
});
