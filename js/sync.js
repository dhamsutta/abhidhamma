const audio = document.getElementById('player');
const container = document.getElementById('text-container');
let verses = [];

fetch('data/sample-dual.json')
  .then(res => res.json())
  .then(data => {
    verses = data;
    data.forEach((item, index) => {
      const row = document.createElement('div');
      row.classList.add('verse-row');
      row.id = `verse-${index}`;

      const pali = document.createElement('div');
      pali.classList.add('pali');
      pali.textContent = item.pali;

      const thai = document.createElement('div');
      thai.classList.add('thai');
      thai.textContent = item.thai;

      row.appendChild(pali);
      row.appendChild(thai);
      container.appendChild(row);
    });
  });

audio.addEventListener('timeupdate', () => {
  const current = audio.currentTime;
  verses.forEach((item, index) => {
    const el = document.getElementById(`verse-${index}`);
    if (current >= item.start && current <= item.end) {
      el.classList.add('highlight');
    } else {
      el.classList.remove('highlight');
    }
  });
});
