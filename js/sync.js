const audio = document.getElementById('player');
const container = document.getElementById('text-container');
let verses = [];

fetch('data/sample.json')
  .then(response => response.json())
  .then(data => {
    verses = data;
    data.forEach((item, index) => {
      const div = document.createElement('div');
      div.classList.add('verse');
      div.id = `verse-${index}`;
      div.textContent = item.text;
      container.appendChild(div);
    });
  });

audio.addEventListener('timeupdate', () => {
  const current = audio.currentTime;
  verses.forEach((item, index) => {
    const verseEl = document.getElementById(`verse-${index}`);
    if (current >= item.start && current <= item.end) {
      verseEl.classList.add('highlight');
    } else {
      verseEl.classList.remove('highlight');
    }
  });
});
