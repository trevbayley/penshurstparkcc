
// ===== CONFIG: replace these with real values =====
const CFG={w3w:'https://what3words.com/crisp.dates.daily',playCricket:'https://penshurstpark.play-cricket.com/',
 form:'https://forms.cloud.microsoft/r/4ELsii0BbM',availability:'https://example.com/availability-app',
 taster:'https://forms.cloud.microsoft/r/KKpWD1TPC1',camp:'https://forms.cloud.microsoft/r/3DTM6zih0w',
 /* Team gallery: list JPEG files here in display order. Paths are relative to index.html. */
 teamPhotos:[
  ['media/teams/ladies-softball-team-2026.webp','Ladies softball team 2026'],
  ['media/teams/ladies-1st-xi-2026.webp','Ladies 1st XI 2026'],
  ['media/teams/sunday-1st-xi-2026.webp','Sunday 1st XI 2026']
 ],
 /* sponsors = [['Sponsor name','https://sponsor-website','sponsors/logo.png'], ...] (logo optional; the Sponsors footer stays hidden until at least one is added). */
 sponsors:[['Sevenoaks Window Cleaning Ltd','https://sevenoaks-cleaning.co.uk','media/sponsors/sevenoaks-window-cleaning.jpg'],['Making Scents Dog Training','https://makingscentsdogtraining.co.uk/','media/sponsors/making-scents-dog-training.webp'],['Amherst Consultancy','https://www.amherstaccountancy.co.uk','media/sponsors/amherst-consultancy.webp'],['Holme Run Fitness','https://www.holmerunfitness.com','media/sponsors/holme-run-fitness.webp'],['NSJ Joinery','https://www.nsjjoinery.co.uk','media/sponsors/nsj-joinery.webp'],['Estate and Field','https://www.estateandfield.co.uk','media/sponsors/estate-and-field.webp'],['Kent Heritage Works','https://www.kentheritageworks.uk','media/sponsors/kent-heritage-works.webp'],['Penshurst Fuels','https://penshurstfuels.com','media/sponsors/penshurst-fuels.webp'],['Kewell Converters','https://www.kewell-converters.co.uk','media/sponsors/kewell-converters.webp'],['The Leicester Arms','https://www.theleicesterarmspenshurst.co.uk/','media/sponsors/the-leicester-arms.webp'],['JMO Garden Services','mailto:jake_cheesman@yahoo.com','media/sponsors/jmo-garden-services.webp']],
 /* booking = address of the separate booking app (blank = shows 'coming soon'). */
 booking:'',
 phone:'0791 7730761',social:[['Facebook','https://www.facebook.com/PenshurstPark'],['Instagram','https://www.instagram.com/penshurstparkcc/'],['YouTube','https://www.youtube.com/@PPCC-Cam']],email:'jake_cheesman@yahoo.com',mapQ:'Penshurst+Park+Cricket+Club+TN11+8DH',
 teams:[['Men\'s 1st XI','Kent County Village League – Top Division'],['Men\'s 2nd XI','Kent Village League'],['Ladies','West Kent Ladies August League / Kent Women\'s Softball League'],['Juniors','Softball & hardball age groups (c. 90 members)']]};
const iso=d=>{const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`};
// ===== CLUB DATA: edit these entries in this file, then republish =====
const CLUB_DATA={
 ev:[
  {id:'event-winter-training-2026',type:'event',date:'2026-11-14',time:'',title:'Winter training',detail:'',photo:'media/events/winter-training-2026.webp'},
  {id:'event-1',type:'event',date:'2026-10-03',time:'18:00',title:'2026 Club dinner and awards',detail:'Venue: Penshurst Place',photo:'media/events/club-dinner-awards-2026.webp'},
  {id:'event-2',type:'event',date:'2026-12-13',time:'17:00',title:'2026 Christmas Raffle',detail:'Prizes in abundance from bats to fine dining',url:'https://www.zeffy.com/en-GB/ticketing/penshurst-park-cricket-clubs-christmas-raffle--2026',photo:'media/events/christmas-raffle-2026.jpg'},
  {id:'event-3',type:'event',date:'2027-01-07',time:'19:30',title:'2027 Club AGM',detail:'Venue: The Leicester Arms'},
  {id:'event-4',type:'event',date:'2027-02-06',time:'18:30',title:'2027 Club quiz',detail:'Venue: Penshurst Village Hall',url:'https://wa.me/447917730761?text=I%20would%20like%20to%20book%20a%20table%20for%20a%20quiz%20team%20on%20the%206th%20Feb.%20Our%20team%20has%206%20members%20and%20our%20Team%20name%20is%3A',action:'Book a quiz table on WhatsApp',photo:'media/events/quiz-night.webp'}
 ],
history:[
  ['1723','The club is founded, as is shown on our crest.'],
  ['1724','First recorded match at Penshurst Park (Penshurst, Tonbridge & Wadhurst v Dartford).'],
  ['1728–29','Kent patron Edwin Stead stages major matches at the ground.'],
  ['1969 & 1972','Club hosts the visiting Toronto Cricket Club.'],
  ['1996','Club begins unbroken spell in the top division of the Kent County Village League.'],
  ['2012–2014','Three consecutive league titles.'],
  ['2019','Ladies and junior cricket (re)introduced; junior section grows from 32 to c. 90.'],
  ['2023',"Third consecutive Kent Women's Softball League title; hosts the Finals Day."],
  ['2026',"Ladies 1st XI win Kent Women's Championship League title."]
 ],
links:[
  {title:'Cricket resources',items:[
   ['Force Cricket Centre, Westerham','https://forcecricketcentre.com/','Indoor cricket net centre, Westerham TN16 2DN'],
   ['Play-Cricket','https://penshurstpark.play-cricket.com/','Our fixtures, results and teams'],
   ['England and Wales Cricket Board','https://www.ecb.co.uk/','The national governing body'],
   ['Kent Cricket','https://www.kentcricket.co.uk/','County news, pathways and clubs'],
   ['The Laws of Cricket (MCC)','https://www.lords.org/mcc/the-laws-of-cricket','The official Laws of the game']]},
  {title:'Training videos on YouTube',items:[
   ['Batting','https://www.youtube.com/results?search_query=cricket+batting+technique+coaching','Grip, stance, shots and drills'],
   ['Spin bowling','https://www.youtube.com/results?search_query=cricket+spin+bowling+coaching+tutorial','Grips, action and variations'],
   ['Seam bowling','https://www.youtube.com/results?search_query=cricket+seam+bowling+coaching+tutorial','Action, seam position and line and length'],
   ['Wicket keeping','https://www.youtube.com/results?search_query=cricket+wicket+keeping+drills+coaching','Stance, catching and stumping drills'],
   ['Fielding','https://www.youtube.com/results?search_query=cricket+fielding+drills+coaching','Catching, ground fielding and throwing']]}
 ]
};
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
const isPH=u=>!u||/^https?:\/\/(?:www\.)?example\.com(?:\/|$)/i.test(u);
const availBtn=()=>isPH(CFG.availability)?'<span class="btn" aria-disabled="true" title="Availability – coming soon">Availability – coming soon</span>':`<a class="btn" href="${safeHref(CFG.availability)}" target="_blank" rel="noopener noreferrer">Availability</a>`;
const bookBtn=c=>isPH(CFG.booking)?'<span class="btn" aria-disabled="true" title="Bookings – coming soon">Bookings – coming soon</span>':`<a class="btn ${c||''}" href="${safeHref(CFG.booking)}" target="_blank" rel="noopener noreferrer">Book coaching &amp; lanes ↗</a>`;
const pages={home,aboutUs,history,members,join,fundraising,admin};
let cur=location.hash.slice(1)||'home';
function nav(){const p=cur;
 const labels={home:'Home',aboutUs:'About us',history:'History',members:'Members area',join:'Join us',fundraising:'Fundraising',admin:'Site updates'};
 const a=k=>`<a href="#${k}" class="${k==p?'on':''}" ${k==p?'aria-current="page"':''}>${labels[k]}</a>`;const links=['home','aboutUs','history','members','join'].map(a);
 links.push(`<a href="https://penshurstpark.play-cricket.com/Teams" target="_blank" rel="noopener noreferrer">Our teams ↗</a>`,isPH(CFG.booking)?'<span class="navsoon" aria-disabled="true" title="Bookings – coming soon">Bookings – coming soon</span>':`<a href="${safeHref(CFG.booking)}" target="_blank" rel="noopener noreferrer">Bookings ↗</a>`,a('fundraising'));
 $('#nav').innerHTML=links.join('')}
let initialRoute=true;
function enhancePageMedia(){
 document.querySelectorAll('#app img:not(.hero-logo):not(.hero-ball-grass),#sponsorList img').forEach(img=>{img.loading='lazy';img.decoding='async'});
 document.querySelectorAll('#app iframe').forEach(frame=>{frame.loading='lazy';if(!frame.referrerPolicy)frame.referrerPolicy='no-referrer-when-downgrade'});
}
function route(){
 const k=pages[cur]?cur:'home';
 nav();
 pages[k]();
 enhancePageMedia();
 document.title=`${({home:'Home',aboutUs:'About us',members:'Members',join:'Join us',admin:'Site updates'})[k]||k[0].toUpperCase()+k.slice(1)} | Penshurst Park Cricket Club`;
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

// Mobile menu regression test. Run in the browser console with: runMobileMenuTest()
window.runMobileMenuTest=async function(){
 const results=[];
 const check=(name,pass,detail='')=>results.push({name,pass:Boolean(pass),detail});
 const wait=()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
 const originalOpen=mainNav.classList.contains('open');
 const originalFocus=document.activeElement;
 try{
  closeMenu();
  check('Starts closed',!mainNav.classList.contains('open'));
  check('Collapsed ARIA state',menuToggle.getAttribute('aria-expanded')==='false');
  check('Collapsed label',menuToggle.textContent.trim()==='Menu');

  menuToggle.click();await wait();
  check('Opens from toggle',mainNav.classList.contains('open'));
  check('Expanded ARIA state',menuToggle.getAttribute('aria-expanded')==='true');
  check('Open label',menuToggle.textContent.trim()==='Close menu');
  const firstLink=mainNav.querySelector('a');
  check('Focus moves to first link',!firstLink||document.activeElement===firstLink);

  document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));await wait();
  check('Escape closes menu',!mainNav.classList.contains('open'));
  check('Escape returns focus',document.activeElement===menuToggle);

  menuToggle.click();await wait();
  closeMenu();
  check('Programmatic close resets ARIA',menuToggle.getAttribute('aria-expanded')==='false');
  check('Programmatic close resets label',menuToggle.textContent.trim()==='Menu');
 }finally{
  if(originalOpen){mainNav.classList.add('open');menuToggle.setAttribute('aria-expanded','true');menuToggle.textContent='Close menu'}else closeMenu();
  if(originalFocus&&typeof originalFocus.focus==='function')originalFocus.focus({preventScroll:true});
 }
 const passed=results.filter(x=>x.pass).length;
 const summary={passed,total:results.length,success:passed===results.length,results};
 console.group(`Mobile menu test: ${passed}/${results.length} passed`);
 results.forEach(x=>console[x.pass?'log':'error'](`${x.pass?'PASS':'FAIL'}: ${x.name}`,x.detail));
 console.groupEnd();
 return summary;
};


// Desktop navigation regression test. Run in the browser console with: runDesktopNavigationTest()
window.runDesktopNavigationTest=async function(){
 const results=[];
 const check=(name,pass,detail='')=>results.push({name,pass:Boolean(pass),detail});
 const wait=()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
 const originalHash=location.hash;
 const originalCur=cur;
 try{
  closeMenu();nav();await wait();
  const expected=['Home','About us','History','Members area','Join us','Our teams ↗','Bookings – coming soon','Fundraising'];
  const items=[...mainNav.children].map(x=>x.textContent.trim());
  check('Desktop navigation contains every expected item',expected.every(x=>items.includes(x)),items.join(' | '));
  check('Mobile menu is not open',!mainNav.classList.contains('open'));

  const internal=[...mainNav.querySelectorAll('a[href^="#"]')];
  check('Internal navigation links are present',internal.length>=6,String(internal.length));
  check('Exactly one current-page link',mainNav.querySelectorAll('a[aria-current="page"]').length===1);

  const about=mainNav.querySelector('a[href="#aboutUs"]');
  if(about){about.click();await wait();}
  check('About us route opens',cur==='aboutUs'&&location.hash==='#aboutUs');
  check('About us becomes current page',mainNav.querySelector('a[href="#aboutUs"]')?.getAttribute('aria-current')==='page');
  check('Page title updates',document.title.startsWith('About us |'));

  const members=mainNav.querySelector('a[href="#members"]');
  if(members){members.click();await wait();}
  check('Members route opens',cur==='members'&&location.hash==='#members');
  check('Members heading renders',document.querySelector('#app h1')?.textContent.trim()==='Members');

  const external=[...mainNav.querySelectorAll('a[target="_blank"]')];
  check('External navigation links use noopener',external.every(a=>a.rel.split(/\s+/).includes('noopener')));
  check('Desktop navigation stays closed after routing',!mainNav.classList.contains('open'));
 }finally{
  cur=originalCur;
  try{history.replaceState(null,'',originalHash||'#home')}catch(e){}
  route();closeMenu();
 }
 const passed=results.filter(x=>x.pass).length;
 const summary={passed,total:results.length,success:passed===results.length,results};
 console.group(`Desktop navigation test: ${passed}/${results.length} passed`);
 results.forEach(x=>console[x.pass?'log':'error'](`${x.pass?'PASS':'FAIL'}: ${x.name}`,x.detail));
 console.groupEnd();
 return summary;
};

addEventListener('hashchange',()=>{cur=location.hash.slice(1)||'home';closeMenu();route()});
document.addEventListener('click',e=>{const a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();closeMenu();cur=a.getAttribute('href').slice(1)||'home';try{history.replaceState(null,'','#'+cur)}catch(x){}route()});
function evLine(e){const photo=e.photo?`<div class="event-media"><img src="${safeAsset(e.photo)}" loading="lazy" decoding="async" alt="${esc(e.title)} event poster"></div>`:'';const linkedPhoto=e.url&&photo?`<a class="event-media-link" href="${safeHref(e.url,['https:','mailto:'])}" target="_blank" rel="noopener noreferrer" title="Open ${esc(e.title)} link">${photo}</a>`:photo;return `<div class="card">${linkedPhoto}<b>${esc(e.title)}</b><br><span class="mut">${fmt(e.date)} ${e.time||''}</span>${e.detail?`<br>${esc(e.detail)}`:''}${e.url?`<br><a class="btn" href="${safeHref(e.url,['https:','mailto:'])}" target="_blank" rel="noopener noreferrer" title="${esc(e.action||'Open event link')}">${esc(e.action||'Buy raffle tickets')} ↗</a>`:''}</div>`}
function home(){const recent=S.ev.filter(e=>e.date<today).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5);
 const upcoming=S.ev.filter(e=>e.date>=today).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,7);
 $('#app').innerHTML=`<section class="hero"><div class="txt"><div class="hero-heading"><h1 class="hero-title">Welcome to Penshurst Park Cricket Club</h1></div><div class="hero-marks"><img src="media/club/club-crest.webp" alt="" width="70" class="hero-logo"></div><img class="hero-ball-grass" src="media/club/red-cricket-ball-grass.webp" alt="Red cricket ball resting on short-cut grass"><img class="hero-ball-grass hero-ball-grass-pink" src="media/club/pink-cricket-ball-grass.webp" alt="Pink cricket ball resting on short-cut grass"></div></section>
 <div class="grid"><aside><h2>Recent events</h2><div id="recentEventCycle"></div></aside>
 <section><h2>About the club</h2><p>One of England's oldest cricket grounds, Penshurst Park hosted its first recorded match in 1724, and the club has played here since 1723 in the grounds of Penshurst Place. We are a friendly village club with men's, ladies and junior sections, and have been in the top division of the Kent County Village League since 1996, winning titles in 2012–14. Our ladies are Kent Women's Softball League champions (2023), <a href="https://www.kentcricket.co.uk/news/kwcl-champions-tunbridge-wells-penshurst-park-cc/" target="_blank" rel="noopener noreferrer" title="https://www.kentcricket.co.uk/news/kwcl-champions-tunbridge-wells-penshurst-park-cc/">KWCL Championship winners (2026)</a>, and the junior section has grown to around 180 members.</p>
 <section class="team-gallery" aria-labelledby="team-gallery-title"><h3 id="team-gallery-title">Team photo gallery</h3><div id="teamGallery"></div></section>
 
</section>
 <aside><h2>Upcoming events</h2><div id="upcomingEventCycle"></div></aside></div>`;initEventCycle('#recentEventCycle',recent,true);initEventCycle('#upcomingEventCycle',upcoming,false);initTeamGallery()}
function initEventCycle(selector,events,isRecent){const host=$(selector);if(!host)return;if(!events.length){host.innerHTML=isRecent?'<div class="photo" aria-hidden="true"></div><p class="mut">No recent events yet.</p>':'<p class="mut">No upcoming events at the moment.</p>';return}let current=0,timer=null,fadeTimer=null;const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;host.innerHTML='<div class="event-cycle-content"></div>';const content=host.querySelector('.event-cycle-content');function render(index){current=(index+events.length)%events.length;content.innerHTML=evLine(events[current])}function show(index){clearTimeout(fadeTimer);if(reduceMotion){render(index);return}content.classList.add('is-fading');fadeTimer=setTimeout(()=>{render(index);requestAnimationFrame(()=>content.classList.remove('is-fading'))},500)}function start(){if(events.length>1&&!reduceMotion)timer=setInterval(()=>show(current+1),12000)}render(0);start()}

function initTeamGallery(){
 const host=$('#teamGallery');if(!host)return;const photos=(CFG.teamPhotos||[]).filter(x=>x&&x[0]);
 if(!photos.length){host.innerHTML='<div class="team-gallery-empty">Team photos will be added here.</div>';return}
 let current=0,timer=null,fadeTimer=null;const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 host.innerHTML=`<div class="team-gallery-frame"><img id="teamGalleryImage" src="" alt=""></div><div id="teamGalleryName" class="team-gallery-name" aria-live="polite"></div>`;
 const image=$('#teamGalleryImage'),name=$('#teamGalleryName');
 function render(index){current=(index+photos.length)%photos.length;image.src=photos[current][0];const team=photos[current][1]||`Penshurst Park Cricket Club team photo ${current+1}`;image.alt=team;name.textContent=team}
 function show(index){clearTimeout(fadeTimer);if(reduceMotion){render(index);return}image.classList.add('is-fading');fadeTimer=setTimeout(()=>{render(index);requestAnimationFrame(()=>image.classList.remove('is-fading'))},500)}
 function start(){if(photos.length>1&&!reduceMotion)timer=setInterval(()=>show(current+1),12000)}
 render(0);start()
}
function aboutUs(){$('#app').innerHTML=`<h1 class="page-title">About us</h1><div class="grid location-grid"><div class="card"><b>Address</b><br>Penshurst Park Cricket Club<br>Penshurst Place, Penshurst<br>Tonbridge, Kent TN11 8DH<p><a class="w3w-link" href="${safeHref(CFG.w3w)}" target="_blank" rel="noopener noreferrer" title="Open ///crisp.dates.daily in what3words"><span class="w3w-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect width="24" height="24" rx="5"/><path d="M9.1 6.6 6.2 17.4M13.6 6.6l-2.9 10.8M18.1 6.6l-2.9 10.8"/></svg></span><span>///crisp.dates.daily</span></a></p><p><b>Contact</b><br><a class="phone-line phone-link" href="${safeHref('tel:'+CFG.phone.replace(/\s+/g,''),['tel:'])}" title="Call ${esc(CFG.phone)}"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.7c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.2 2.2Z"/></svg></span><span>${esc(CFG.phone)}</span></a><br><a class="email-link" href="${safeHref('mailto:'+CFG.email,['mailto:'])}" title="Email ${esc(CFG.email)}"><span class="email-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l9 5.6 9-5.6V7H3Zm18 10V9.8l-8.47 5.27a1 1 0 0 1-1.06 0L3 9.8V17h18Z"/></svg></span><span>${esc(CFG.email)}</span></a></p><p><a class="btn" href="https://penshurstpark.play-cricket.com/Aboutus#collapseTwo" target="_blank" rel="noopener noreferrer" title="Open Penshurst Park CC club officials on Play-Cricket">Club officials ↗</a></p></div>
 <iframe class="location-map" title="Map" loading="lazy" src="https://www.google.com/maps?q=${encodeURIComponent(CFG.mapQ)}&output=embed"></iframe></div>`}
function history(){
 $('#app').innerHTML=`<h1 class="page-title">History</h1><div class="tl">${S.history.map(x=>`<div><b>${esc(x[0])}</b><br>${esc(x[1])}</div>`).join('')}</div>`}

function members(){$('#app').innerHTML=`<h1 class="page-title">Members</h1><div class="members-layout"><div class="members-main"><div class="card">${availBtn()} ${bookBtn()}</div><section class="card" aria-labelledby="winter-training-title"><h2 id="winter-training-title">Winter training schedules</h2><section aria-labelledby="junior-training-title"><h3 id="junior-training-title">Junior training</h3><div class="scroll"><table class="training-table"><caption class="sr-only">Junior winter training schedule</caption><thead><tr><th scope="col">Age group</th><th scope="col">Venue</th><th scope="col">Time</th><th scope="col">Dates</th></tr></thead><tbody><tr><th scope="row">U6/7</th><td rowspan="2">Holmewood House</td><td>13:00–14:00</td><td rowspan="2">24th, 31st Jan; 7th, 14th, 21st, 28th Feb; 14th, 21st Mar</td></tr><tr><th scope="row">U8/9/10</th><td>14:00–15:00</td></tr><tr><th scope="row">U11</th><td rowspan="2">The Judd School</td><td>14:00–15:00</td><td rowspan="2">1st, 15th, 29th Nov; 13th Dec; 10th, 17th, 24th, 31st Jan; 7th, 14th, 21st, 28th Feb; 7th, 14th, 21st Mar</td></tr><tr><th scope="row">U13s and U15 girls</th><td>15:00–16:00</td></tr></tbody></table></div></section><section class="senior-training" aria-labelledby="senior-training-title"><h3 id="senior-training-title">Senior training</h3><div class="scroll"><table class="training-table"><caption class="sr-only">Senior winter training schedule</caption><thead><tr><th scope="col">Group</th><th scope="col">Venue</th><th scope="col">Time</th><th scope="col">Dates</th></tr></thead><tbody><tr><th scope="row">Ladies hardball</th><td>The Judd School</td><td>17:30–18:30</td><td>9th, 23rd Jan; 6th, 20th Feb; 6th, 20th Mar</td></tr><tr><th scope="row">Ladies softball</th><td>Details will follow</td><td>Details will follow</td><td>Details will follow</td></tr><tr><th scope="row">U15 boys, invited players and men</th><td>Holmewood House</td><td>19:00–20:30</td><td>15th, 22nd, 29th Jan; 5th, 12th, 19th, 26th Feb; 5th, 12th, 19th, 26th Mar; 2nd, 9th, 16th Apr</td></tr></tbody></table></div></section></section>
<section class="card" aria-labelledby="club-kit-title"><h2 id="club-kit-title">Club kit</h2><p>Order Penshurst Park Cricket Club match kit from the club shop.</p><p><a class="btn y" href="https://www.mrcrickethockey.com/product-category/club-shop/penshurst-cricket-club/penshurst-cricket-club-match-kit/" target="_blank" rel="noopener noreferrer" title="Open Penshurst Cricket Club match kit shop">Club kit shop ↗</a></p><div class="note">See members WhatsApp channel for Club shop access code.</div><p><b>U15 boy and senior men team players:</b> please have a <a href="https://www.mrcrickethockey.com/product/penshurst-cricket-club-ergo-match-shirt-long-sleeve-navy/" target="_blank" rel="noopener noreferrer">white senior shirt</a>.</p><p><b>U15 girls and senior ladies team players:</b> please have a <a href="https://www.mrcrickethockey.com/product/penshurst-cricket-club-dual-ladies-bespoke-hardball-match-shirt/" target="_blank" rel="noopener noreferrer">blue senior shirt</a>.</p></section>
<section class="card" aria-labelledby="player-development-title"><h2 id="player-development-title">Player development resources</h2><p>Resources for players who want to develop their cricket skills through additional practice and learning. icoachcricket includes games and practices covering batting, bowling, fielding and wicketkeeping, together with technical, tactical, physical and mental areas.</p><p><a class="btn" href="https://icoachcricket.ecb.co.uk/index.php?r=site/index" target="_blank" rel="noopener noreferrer">icoachcricket resources ↗</a> <a class="btn" href="https://www.ecb.co.uk/play/coaching/workshops" target="_blank" rel="noopener noreferrer">ECB player development workshops ↗</a></p></section>
<section class="card" aria-labelledby="coach-training-title"><h2 id="coach-training-title">Coach training</h2><p>Coaches and anyone interested in developing their coaching can use the ECB coaching resources and icoachcricket for ongoing learning, ideas and session support.</p><p><a class="btn" href="https://www.ecb.co.uk/play/coaching/coaches-association" target="_blank" rel="noopener noreferrer">ECB Coaches Association ↗</a> <a class="btn" href="https://icoachcricket.ecb.co.uk/index.php?r=site/login" target="_blank" rel="noopener noreferrer">icoachcricket ↗</a></p></section>
<section class="card" aria-labelledby="umpire-training-title"><h2 id="umpire-training-title">Umpire training</h2><p>The ECB Association of Cricket Officials provides information and development opportunities for cricket officials, including umpires. The ECB also provides umpiring courses for people starting their umpiring journey.</p><p><a class="btn" href="https://www.ecb.co.uk/play/officials/ecb-aco" target="_blank" rel="noopener noreferrer">ECB Association of Cricket Officials ↗</a> <a class="btn" href="https://www.ecb.co.uk/play/officials/courses" target="_blank" rel="noopener noreferrer">ECB umpiring courses ↗</a></p></section>
<section class="card" aria-labelledby="useful-title"><h2 id="useful-title">Useful links</h2><div class="link-cols">${S.links.filter(g=>g.title!=='Training videos on YouTube').map(g=>`<div><h4>${esc(g.title)}</h4><ul class="link-list">${g.items.map(x=>`<li><a href="${safeHref(x[1],['https:','mailto:'])}" target="_blank" rel="noopener noreferrer">${esc(x[0])} ↗</a>${x[2]?`<br><span class="mut">${safeAsset(x[2])}</span>`:''}</li>`).join('')}</ul></div>`).join('')}</div></section></div><aside class="card members-side-panel" aria-labelledby="youtube-links-title"><h2 id="youtube-links-title">Training videos on YouTube</h2><ul class="link-list">${(S.links.find(g=>g.title==='Training videos on YouTube')?.items||[]).map(x=>`<li><a href="${safeHref(x[1],['https:','mailto:'])}" target="_blank" rel="noopener noreferrer">${esc(x[0])} ↗</a>${x[2]?`<br><span class="mut">${safeAsset(x[2])}</span>`:''}</li>`).join('')}</ul></aside></div>`}
function join(){$('#app').innerHTML=`<h1 class="page-title">Join us</h1><div class="card"><a class="btn y" href="${safeHref(CFG.form)}" target="_blank" rel="noopener noreferrer">Register as a new member</a> <a class="btn" href="${safeHref(CFG.taster)}" target="_blank" rel="noopener noreferrer">Trial session registration</a> <a class="btn" href="${safeHref(CFG.camp)}" target="_blank" rel="noopener noreferrer">Summer camp registration</a></div><section class="card cricketer-exchange" aria-labelledby="cricketer-exchange-title"><img class="cricketer-exchange-logo" src="https://ucarecdn.com/a72ef50a-d149-4d69-b32a-ccd6ea97e0b6/-/preview/400x200/CricketerExchange.png" alt="Cricketer Exchange"><div><h2 id="cricketer-exchange-title">Cricketer Exchange</h2><a class="btn y" href="https://cricketerexchange.com/club/penshurst-park-cricket-club" target="_blank" rel="noopener noreferrer">View Penshurst Park CC on Cricketer Exchange ↗</a></div></section><div class="join-posters"><section class="poster-card"><h2>Recruitment poster</h2><img id="poster2026" loading="lazy" decoding="async" src="media/posters/recruitment-poster.jpg" alt="Penshurst Park recruitment poster 2026"><div class="poster-actions"><button type="button" class="y" data-save-poster="poster2026" data-filename="Penshurst-Park-Recruitment-2026.jpeg">Save poster</button><button type="button" data-print-poster="poster2026">Send to printer</button></div></section><section class="poster-card"><h2>Youth recruitment poster</h2><img id="poster2027" loading="lazy" decoding="async" src="media/posters/youth-recruitment-poster.jpg" alt="Penshurst Park youth recruitment poster 2027"><div class="poster-actions"><button type="button" class="y" data-save-poster="poster2027" data-filename="Penshurst-Park-Youth-Recruitment-2027.jpeg">Save poster</button><button type="button" data-print-poster="poster2027">Send to printer</button></div></section></div>`;initPosterActions()}
function initPosterActions(){
 document.querySelectorAll('[data-save-poster]').forEach(b=>b.addEventListener('click',()=>{const img=document.getElementById(b.dataset.savePoster);if(!img)return;const a=document.createElement('a');a.href=img.src;a.download=b.dataset.filename||'poster.jpeg';document.body.appendChild(a);a.click();a.remove()}));
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
function fundraising(){$('#app').innerHTML=`<h1 class="page-title">Fundraising</h1><section class="card"><p>The fundraising committee welcomes members, suggestions and contributions. We will shortly be raising funds towards some major projects, including the extension of our fabulous clubhouse.</p><section aria-labelledby="easyfundraising-title"><h2 id="easyfundraising-title">Easyfundraising</h2><p>Our easyfundraising page is available all year round and can help make some funds for the club. It can be used to turn everyday online shopping into FREE donations when you use it to shop, with over 8,000 retailers such as eBay, John Lewis &amp; Partners, Argos, ASOS and Tesco.</p><p>Register here and we'll get an extra £5 when you reach your first £5 in donations:</p><a class="btn y" href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?invite=ZI7EXX&amp;referral-campaign=c2s&amp;utm_campaign=web-referral&amp;utm_medium=referral&amp;utm_source=whatsapp&amp;char=186585" target="_blank" rel="noopener noreferrer">Register with Easyfundraising ↗</a></section></section>`}
function admin(){
 $('#app').innerHTML=`<h1 class="page-title">Admin maintenance</h1><div class="note"><b>No external or browser data storage is used.</b> Permanent club content is stored directly in <code>app.js</code>.</div><div class="card"><h3>How to update the site</h3><ol><li>Open <code>app.js</code> in a text editor.</li><li>Find <code>CLUB_DATA</code> to update recent/upcoming events, the history timeline or the Useful links.</li><li>Find <code>CFG</code> to update club links, contact details, registration forms and sponsors.</li><li>Save the file and republish the site to replace the previous version.</li></ol><p class="mut">Fixtures, results and selections are handled in the external apps. The Booking and Availability/Selection links remain placeholders until those services are ready. Play-Cricket remains an external link only and is not used as a data source.</p></div>`;
}
const SOCIAL_ICONS={
 Facebook:'<svg class="social-svg social-facebook" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#0866FF"/><path fill="#fff" d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H8.3v3h2.8v8h2.4Z"/></svg>',
 Instagram:'<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="igGradient" x1="2" y1="22" x2="22" y2="2"><stop offset="0" stop-color="#FFDC80"/><stop offset=".28" stop-color="#F77737"/><stop offset=".5" stop-color="#E1306C"/><stop offset=".72" stop-color="#C13584"/><stop offset="1" stop-color="#833AB4"/></linearGradient></defs><path fill="url(#igGradient)" fill-rule="evenodd" d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm9.3 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
 YouTube:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg>'
};
$('#soc').innerHTML=CFG.social.map(s=>{const name=s[0],url=s[1],icon=SOCIAL_ICONS[name]||esc(name);return `<a class="btn social-btn" href="${url}" target="_blank" rel="noopener noreferrer" title="Open ${esc(name)}" aria-label="Open ${esc(name)} (opens in a new tab)">${icon}<span class="sr-only">${esc(name)}</span></a>`}).join('');
if(CFG.sponsors.length){$('#sponsorList').innerHTML=CFG.sponsors.map(x=>`<li><a href="${safeHref(x[1],['https:','mailto:'])}" target="_blank" rel="noopener noreferrer">${x[2]?`<img src="${safeAsset(x[2])}" loading="lazy" decoding="async" alt="${esc(x[0])}">`:esc(x[0])}</a></li>`).join('');$('#sponsors').hidden=false}
route();
