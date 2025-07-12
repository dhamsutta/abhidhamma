const audio = document.getElementById('player');
const container = document.getElementById('text-container');
let lines = [];

// โหลดข้อความ + เวลา
fetch('data/data.json')
  .then(res => res.json())
  .then(data => {
    lines = data;
    data.forEach((item, index) => {
      const div = document.createElement('div');
      div.classList.add('line');
      div.id = 'line-' + index;
      div.textContent = item.text;
      container.appendChild(div);
    });
  });

// ไฮไลต์ตามเวลา
audio.addEventListener('timeupdate', () => {
  const current = audio.currentTime;
  lines.forEach((line, index) => {
    const el = document.getElementById('line-' + index);
    if (current >= line.start && current <= line.end) {
      el.classList.add('highlight');
    } else {
      el.classList.remove('highlight');
    }
  });
});
