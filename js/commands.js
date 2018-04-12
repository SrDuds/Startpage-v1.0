window.searchEngine = 'G'
window.searchEngineUrlMap = {
  G: 'https://www.google.com',
  S: 'https://soundcloud.com/stream',
  O: 'https://stackoverflow.com',
  Y: 'https://www.youtube.com',
  R: 'https://www.reddit.com',
  N: 'https://www.netflix.com',
  F: 'https://www.facebook.com',
  A: '',
  T: 'https://twitter.com',
  M: 'https://mail.google.com/mail/u/1/#inbox',
  I: 'https://www.instagram.com',
  D: '',
  W: 'https://www.twitch.tv',
};

setSearchEngine('G')

function start() {
  document.addEventListener("keypress", handleKeyPress);
};

function handleKeyPress(event) {
  const isTyping = event.target.id === 'search';
  const hasCtrl = event.ctrlKey;
  const key = event.shiftKey ? event.key.toUpperCase() : event.key;
  const search = document.getElementById('search');
  const choice = document.querySelector(`[data-key='${key}']`);

  if (!isTyping && key === ' ') return search.focus();
  if (isTyping && key === 'Escape') return search.blur();
  if (isTyping && key === 'Enter') return submit();
  if (isTyping && !hasCtrl) return;
  if (isTyping && hasCtrl && choice) {
    event.preventDefault();
    return setSearchEngine(key);
  }
  if (!isTyping && !hasCtrl && choice) return choice.click()
};

function setSearchEngine(engineId) {
  window.searchEngine = engineId;
  document.getElementById('search-label').innerHTML = `
  <img src="${window.searchEngineIconMap[engineId]}" height="40px" id="search-engine-icon" />
  `;
};

function submit() {
  const search = document.getElementById('search').value;
  const tool = window.searchEngineUrlMap[window.searchEngine];
  switch (window.searchEngine) {

    case 'G':
      window.location = `${tool}/search?q=${search}`;
      break;
    case 'N':
      window.location = `${tool}/search?q=${search}`;
      break;
    case 'A':
      window.location = `${tol}/search?q=${search}`;
      break;
    case 'S':
      window.location = `${tool}/search?q=${search}`;
      break;
    case 'Y':
      window.location = `${tool}/results?search_query=${search}`;
      break;
    case 'R':
      window.location = `${tool}/search?q=${search}`;
      break;
    case 'F':
      window.location = `${tool}/search/top/?q=${search}`;
      break;
    case 'T':
      window.location = `${tool}/search/top/?q=${search}`;
      break;
    case 'M':
      window.location = `${tool}/search/top/?q=${search}`;
      break;
    case 'I':
      window.location = `${tool}/search/top/?q=${search}`;
      break;
    case 'D':
      window.location = `${tool}/search/top/?q=${search}`;
      break;
    case 'W':
      window.location = `${tool}/search/top/?q=${search}`;
      break;
    case 'O':
      window.location = `${tool}/search/top/?q=${search}`;
      break;

    default:
      return;
  };
};
