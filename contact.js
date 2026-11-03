(function () {
  var EMAIL = 'arabindadas214@gmail.com';
  var OPTIONS = [
    { label: 'I\'d like to interview you', note: 'Hiring for a role',
      subject: 'Interview: [Role] at [Company]',
      body: 'Hi Arabinda,\n\nI\'m [your name], [your role] at [company]. I saw your portfolio and would like to talk to you about a [role] position.\n\nRole:\nTeam:\nLocation / remote:\nA few times that work for a call:\n\nThanks,\n[your name]' },
    { label: 'Let\'s explore working together', note: 'A project, collaboration or partnership',
      subject: 'Exploring working together',
      body: 'Hi Arabinda,\n\nI\'m [your name] from [company]. I\'d like to explore working together on:\n\n[what you have in mind]\n\nA few times that work for a call:\n\nThanks,\n[your name]' },
    { label: 'I\'d like career advice', note: 'Product, AI or breaking into tech',
      subject: 'Career advice',
      body: 'Hi Arabinda,\n\nI\'m [your name], currently [what you do]. I\'d love your advice on:\n\n[your question]\n\nThanks,\n[your name]' },
    { label: 'Something else', note: 'Just say hello',
      subject: 'Hello from your portfolio',
      body: 'Hi Arabinda,\n\n' }
  ];
  var css = '' +
    '.cdlg{margin:auto;border:0;padding:0;max-height:calc(100vh - 32px);overflow:auto;border-radius:18px;width:min(460px,calc(100vw - 32px));background:var(--paper,#FBFBF9);color:var(--ink,#1A1F1C);box-shadow:0 24px 60px rgba(0,0,0,.35)}' +
    '.cdlg::backdrop{background:rgba(12,16,14,.6)}' +
    '.cdlg .ci{padding:24px 24px 20px;font-family:"Hanken Grotesk",system-ui,sans-serif}' +
    '.cdlg h2{font-size:1.3rem;line-height:1.25;letter-spacing:-.02em;font-weight:600;margin:0 32px 4px 0}' +
    '.cdlg .cs{color:var(--muted,#5E6660);font-size:.95rem;margin:0 0 16px}' +
    '.cdlg .co{display:grid;gap:8px;list-style:none;margin:0;padding:0}' +
    '.cdlg .co a{display:flex;flex-direction:column;gap:2px;padding:12px 14px;border:1px solid var(--line,#E2E5E0);border-radius:12px;text-decoration:none;color:inherit}' +
    '.cdlg .co a:hover,.cdlg .co a:focus-visible{border-color:var(--leaf,#2E6A4F);background:var(--leaf-soft,#E8F0EB);outline:none}' +
    '.cdlg .co b{font-weight:600;font-size:1rem}' +
    '.cdlg .co span{font-size:.88rem;color:var(--muted,#5E6660)}' +
    '.cdlg .cf{margin-top:16px;padding-top:14px;border-top:1px solid var(--line,#E2E5E0);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:.88rem;color:var(--muted,#5E6660)}' +
    '.cdlg .cc{font:inherit;font-weight:600;border:1px solid var(--line,#E2E5E0);background:none;color:var(--ink,#1A1F1C);border-radius:999px;padding:6px 12px;cursor:pointer;min-height:36px}' +
    '.cdlg .cx{position:absolute;top:12px;right:12px;width:40px;height:40px;border:0;border-radius:50%;background:none;color:var(--muted,#5E6660);font-size:1.6rem;line-height:1;cursor:pointer}' +
    '.cdlg .cx:hover{background:var(--line,#E2E5E0)}' +
    '.cdlg .cc:focus-visible,.cdlg .cx:focus-visible{outline:2px solid var(--leaf,#2E6A4F);outline-offset:2px}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var d = document.createElement('dialog'); d.className = 'cdlg'; d.setAttribute('aria-labelledby', 'cdlg-t');
  var items = OPTIONS.map(function (o) {
    var href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(o.subject) + '&body=' + encodeURIComponent(o.body);
    return '<li><a href="' + href + '"><b>' + o.label + '</b><span>' + o.note + '</span></a></li>';
  }).join('');
  d.innerHTML = '<div class="ci"><button type="button" class="cx" aria-label="Close">×</button>' +
    '<h2 id="cdlg-t">What would you like to talk about?</h2>' +
    '<p class="cs">Pick one and your email opens with a short draft ready to fill in.</p>' +
    '<ul class="co">' + items + '</ul></div>';
  document.body.appendChild(d);
  d.querySelector('.cx').addEventListener('click', function () { d.close(); });
  d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
  d.querySelectorAll('.co a').forEach(function (a) { a.addEventListener('click', function () { setTimeout(function () { d.close(); }, 150); }); });
  document.querySelectorAll('a[data-contact]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (typeof d.showModal !== 'function') return;
      e.preventDefault(); d.showModal();
    });
  });
})();
