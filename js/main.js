// Load updates (optional: you can also hardcode them in HTML)
const updates = [
  // { date: '2025-07-01', text: 'Hotel block rooms now available.' },
];
const $upd = document.getElementById('updates-list');
updates.forEach(u => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${new Date(u.date).toLocaleDateString()}</strong>: ${u.text}`;
  $upd.appendChild(li);
});

// Load guest messages from JSON
fetch('data/messages.json')
  .then(r => r.json())
  .then(data => {
    const $msg = document.getElementById('messages-list');
    data.forEach(m => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${m.name}</strong> (${new Date(m.date).toLocaleDateString()}):<br>${m.message}`;
      $msg.appendChild(li);
    });
  })
  .catch(() => console.warn('No messages.json found'));
