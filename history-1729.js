// Attach the Norwich newspaper reference image to the 1729 Club History entry.
const history1729 = CLUB_DATA.history.find(entry => entry[0] === '1729');
if (history1729) history1729[2] = 'media/1729 Cricket References in Norwich Newspapers.jpg';
if (location.hash === '#history') route();
