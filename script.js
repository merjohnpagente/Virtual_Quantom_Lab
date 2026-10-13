
const icon = {
 book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"/><path d="M4 6h13M8 10h8M8 13h6"/></svg>',
 mechanics:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v18M5 7h14M7 7l-4 8h8L7 7Zm10 0-4 8h8l-4-8Z"/><circle cx="12" cy="18" r="2"/></svg>',
 bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m13 2-9 12h7l-1 8 10-13h-7l0-7Z"/></svg>',
 atom:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/></svg>',
 grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
 cube:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m12 3 9 5v8l-9 5-9-5V8l9-5Z"/><path d="m3.5 8.3 8.5 5 8.5-5M12 13.3V21M8 5.2l8.5 5M16 5.2l-8.5 5"/><circle cx="12" cy="10.5" r="1.1"/></svg>',
 arrow:'<svg class="arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>'
};
const lessons = [
{id:'faraday-law',title:"Faraday's Law",short:'Faraday’s Law',description:'Watch the reel and learn how a changing magnetic field creates an electric current.',icon:'book',category:'Electromagnetic Induction',level:'Beginner',duration:'1 min video',tags:['Magnetic Flux','Induced EMF','Electromagnetic Induction'],formula:'ε = −N × (ΔΦ / Δt)',video:'reels/video-1.mp4',intro:'Faraday’s Law explains how a changing magnetic field can produce an electric voltage in a conductor. This process is called electromagnetic induction — the same idea shown in Video 1.',sections:[{title:'What the video shows',body:'A changing magnetic field through a coil creates an electric current. The change can happen when a magnet moves near a coil, when the coil moves through a magnetic field, or when the magnetic field itself changes.'},{title:'Faraday’s law',body:'The induced electromotive force (EMF) depends on how quickly the magnetic flux changes and on the number of turns in the coil. A faster change or more coil turns creates a larger induced voltage.'},{title:'Key takeaway',body:'No change in flux means no induced current. Only a changing magnetic flux through a conductor induces voltage — this is the main idea to remember from the video.'}],example:'A coil has 20 turns and its magnetic flux changes by 0.5 weber in 2 seconds. The magnitude of the induced EMF is 20 × (0.5 / 2) = 5 volts.',quiz:[{q:'What is the main idea of Faraday’s Law?',opts:['A moving charge creates a magnetic field.','A changing magnetic field induces an electric current.','Electric current produces magnetic force.','A magnetic field cancels an electric field.'],a:1,why:'A changing magnetic flux through a conductor induces an emf and current — exactly what Video 1 shows.'},{q:'What causes electromagnetic induction?',opts:['A constant magnetic field only','A change in magnetic flux','The coil becoming heavier','A drop in temperature'],a:1,why:'Electromagnetic induction occurs only when the magnetic flux through a conductor changes.'},{q:'What is magnetic flux?',opts:['The flow of electric charge','The magnetic field passing through an area','The resistance of a coil','The speed of a magnet'],a:1,why:'Flux is the amount of magnetic field passing through an area.'},{q:'A coil has 20 turns and its flux changes by 0.5 Wb in 2 s. Induced emf magnitude?',opts:['2.5 V','5 V','10 V','20 V'],a:1,why:'EMF = N × (ΔΦ / Δt) = 20 × (0.5 / 2) = 5 V.'}]},
{id:'lenz-law',title:"Lenz's Law",short:'Lenz’s Law',description:'Watch the reel and learn why the induced current always opposes the change that produced it.',icon:'book',category:'Electromagnetic Induction',level:'Beginner',duration:'1 min video',tags:['Opposition','Conservation of Energy','Induced Direction'],formula:'Induced effects oppose the change',video:'reels/video-2.mp4',intro:'Lenz’s Law tells us the direction of the induced current — it always opposes the change that produced it. This is the focus of Video 2.',sections:[{title:'What the video shows',body:'When magnetic flux through a coil changes, a current is induced. The induced current creates its own magnetic field, and that field always pushes back against the original change.'},{title:'Why the negative sign matters',body:'The negative sign in Faraday’s law (ε = −N × ΔΦ/Δt) expresses Lenz’s Law. It is not about negative voltage — it means the induced effect opposes the change in flux.'},{title:'Energy is conserved',body:'If the induced current helped the change instead of opposing it, we would get energy for free. Lenz’s Law guarantees that energy is conserved: you must do work to push a magnet into a coil.'}],example:'Pushing a magnet toward a coil induces a current whose magnetic field repels the magnet. You feel this resistance — the work you do becomes electrical energy.',quiz:[{q:'What does Lenz’s Law tell us?',opts:['The size of the coil','The direction of the induced current','The color of the magnet','The temperature of the wire'],a:1,why:'Lenz’s Law gives the direction: the induced current opposes the change that produced it.'},{q:'What does the negative sign in Faraday’s law represent?',opts:['The coil has no resistance','The current is always negative','The induced effect opposes the change in flux','The magnetic field disappears'],a:2,why:'The negative sign expresses Lenz’s law — opposition to the change.'},{q:'Why must the induced current oppose the change?',opts:['To save copper wire','To conserve energy','To make magnets stronger','To stop all motion'],a:1,why:'Opposition guarantees energy conservation — pushing the magnet takes work, which becomes electrical energy.'},{q:'Which change increases the induced emf?',opts:['Slower flux change','Fewer coil turns','Faster flux change','Cooling the magnet'],a:2,why:'A faster change in flux (or more turns) creates a larger induced voltage.'}]},
{id:'generators',title:'Generators',short:'Generators',description:'Watch the reel and learn how rotating coils in magnetic fields power the world.',icon:'bolt',category:'Electromagnetic Induction',level:'Beginner',duration:'1 min video',tags:['Generators','Transformers','AC Power'],formula:'Motion + magnetism = electricity',video:'reels/video-3.mp4',intro:'Generators rotate coils inside magnetic fields to produce electricity, and transformers step the voltage up or down for the grid. This is what Video 3 is about.',sections:[{title:'What the video shows',body:'A coil spinning inside a magnetic field feels a constantly changing flux, so a current is continuously induced. This is how a generator turns motion into electricity.'},{title:'From generator to home',body:'Power stations spin giant coils with turbines. Transformers then use changing magnetic fields to transfer that electrical energy between coils and adjust the voltage for transmission.'},{title:'Where you meet induction daily',body:'Transformers charge your gadgets, induction cooktops heat compatible pans, and wireless chargers all rely on the same principle: a changing magnetic field inducing current.'}],example:'A bicycle dynamo is a tiny generator: as the wheel spins a magnet near a coil, the changing flux induces enough voltage to light the lamp.',quiz:[{q:'Which device uses induction to generate electricity?',opts:['Electric generator','Thermometer','Magnifying glass','Pendulum clock'],a:0,why:'Generators rotate coils in magnetic fields to induce voltage — the core of Video 3.'},{q:'What does a transformer do?',opts:['Measures temperature','Transfers electrical energy between coils using changing flux','Stores light','Cools the wires'],a:1,why:'Transformers use changing magnetic fields to transfer energy between coils and change voltage.'},{q:'Where is Faraday’s Law applied in daily life?',opts:['Transformers and induction cooktops','Only in thermometers','Only in microscopes','Nowhere in daily life'],a:0,why:'Transformers, induction heating, generators, and wireless chargers all use changing flux.'},{q:'What must keep happening inside a working generator?',opts:['The coil must keep rotating in the magnetic field','The magnet must be frozen','The wires must be cut','The flux must stay constant'],a:0,why:'Continuous rotation keeps the flux changing, so current is continuously induced.'}]}

];
let activeView='home',currentLesson=null,currentQuiz=null,studentName='',questionIndex=0,answers={},lastResult=null,theme='light',matCat='All',quizCat='All',modalConfirmCb=null;
const $=s=>document.querySelector(s);
function safe(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function showToast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove('show'),2300)}
function iconFor(name){return icon[name]||icon.atom}
function materialCard(l){return `<article class="material-card"><div class="feature-icon ${['electromagnetism','quantum','quantum-rng'].includes(l.id)?'violet':''}">${iconFor(l.icon)}</div><h3>${safe(l.title)}</h3><p>${safe(l.description)}</p><div class="material-meta"><span class="tag">${safe(l.category)}</span><span class="tag">${safe(l.duration)}</span>${l.video?`<span class="tag">Video included</span>`:``}</div><div class="card-action"><span>${l.tags.slice(0,2).map(safe).join(' · ')}</span><button class="text-link" data-lesson="${l.id}">Read lesson →</button></div></article>`}
function quizCard(l){return `<article class="quiz-card"><div class="feature-icon ${['electromagnetism','quantum','quantum-rng'].includes(l.id)?'violet':''}">${iconFor(l.icon)}</div><h3>${safe(l.title)}</h3><p>${safe(l.description)}</p><div class="material-meta"><span class="tag">${l.quiz.length} questions</span><span class="tag">${safe(l.duration)}</span></div><button class="btn btn-primary" style="margin-top:18px" data-startquiz="${l.id}">Start Quiz ${icon.arrow}</button></article>`}
function renderQuizzes(){const list=lessons.filter(l=>quizCat==='All'||l.category===quizCat);$('#quizGrid').innerHTML=list.length?list.map(quizCard).join(''):`<div class="empty-state" style="grid-column:1/-1">${icon.book}<strong>No quizzes found</strong><p>Try a different category.</p><button class="btn btn-outline" data-action="clearQuizFilter" style="margin-top:14px">Show all quizzes</button></div>`}
function renderLesson(l){currentLesson=l;$('#lessonContent').innerHTML=` <nav class="crumbs" aria-label="Breadcrumb"><button class="back-link" data-view="materials">← Learning Materials</button><span aria-hidden="true">›</span><span class="current">${safe(l.title)}</span></nav><div class="lesson-layout"><article class="lesson-panel"><div class="feature-icon">${iconFor(l.icon)}</div><div class="section-kicker">${safe(l.category)} · ${safe(l.duration)} read</div><h1>${safe(l.title)}</h1><p class="lead">${safe(l.intro)}</p>${l.video?`<video class="lesson-video" src="${l.video}" controls playsinline preload="auto"></video>`:``}<h2>Key formula</h2><div class="formula-box">${safe(l.formula)}</div>${l.sections.map(s=>`<h2>${safe(s.title)}</h2><p>${safe(s.body)}</p>`).join('')}<h2>Example</h2><div class="note">${safe(l.example)}</div><button class="btn btn-primary" data-startquiz="${l.id}">Take the optional quiz ${icon.arrow}</button></article><aside class="side-panel"><h3>In this lesson</h3><p>Use this quick checklist as you study.</p><div style="display:flex;gap:10px;align-items:flex-start;margin:16px 0;font-size:15px;font-weight:600"><span style="color:#4c8df0">✓</span><span>Understand the main concept</span></div><div style="display:flex;gap:10px;align-items:flex-start;margin:16px 0;font-size:15px;font-weight:600"><span style="color:#4c8df0">✓</span><span>Review the key formula</span></div><div style="display:flex;gap:10px;align-items:flex-start;margin:16px 0;font-size:15px;font-weight:600"><span style="color:#4c8df0">✓</span><span>Read the worked example</span></div><hr style="border:0;border-top:1px solid var(--line);margin:22px 0"><h3>Ready to practice?</h3><p>Test what you learned. You will enter your name before the quiz starts.</p><button class="btn btn-primary" data-startquiz="${l.id}">Start Quiz</button><button class="btn btn-outline" data-view="quizzes" style="width:100%;margin-top:8px">See All Quizzes</button></aside></div>`;showView('lesson')}
function beginQuiz(id){currentQuiz=lessons.find(l=>l.id===id);if(!currentQuiz)return;studentName='';questionIndex=0;answers={};lastResult=null;renderQuizStart();showView('quiz')}
function renderQuizStart(){$('#quizContent').innerHTML=`<div class="quiz-panel quiz-start"><button class="back-link" data-view="quizzes">← Back to quizzes</button><div class="feature-icon">${iconFor(currentQuiz.icon)}</div><div class="section-kicker">Optional knowledge check</div><h2>${safe(currentQuiz.title)} Quiz</h2><p>${safe(currentQuiz.description)}</p><div class="score-stats" style="display:flex;gap:9px;margin:18px 0"><span class="tag">${currentQuiz.quiz.length} questions</span><span class="tag">Multiple choice</span><span class="tag">Instant results</span></div><form id="studentNameForm"><div class="name-field"><label for="studentName">Enter your name to begin</label><input id="studentName" name="studentName" autocomplete="name" maxlength="70" placeholder="Type your full name" required></div><button class="btn btn-primary" type="submit">Begin Quiz ${icon.arrow}</button><button class="btn btn-outline" type="button" data-view="quizzes" style="margin-left:8px">Not now</button></form><p style="font-size:14px;font-weight:500;margin-top:18px">You can choose not to take this quiz and return to learning materials whenever you like.</p></div>`}
function renderQuestion(){const q=currentQuiz.quiz[questionIndex],pct=Math.round((questionIndex/currentQuiz.quiz.length)*100);$('#quizContent').innerHTML=`<div class="quiz-panel" style="max-width:780px;margin:auto"><div class="quiz-top"><button class="back-link" data-action="exitQuiz" style="margin:0">← Exit quiz</button><span>Question ${questionIndex+1} of ${currentQuiz.quiz.length}</span></div><div class="quiz-progress"><span style="width:${pct}%"></span></div><div class="question-number">Question ${questionIndex+1}</div><h2 class="question-title">${safe(q.q)}</h2><div id="answers">${q.opts.map((opt,i)=>`<label class="answer-option ${answers[questionIndex]===i?'selected':''}"><input type="radio" name="answer" value="${i}" ${answers[questionIndex]===i?'checked':''}><span class="answer-letter">${String.fromCharCode(65+i)}</span><span>${safe(opt)}</span></label>`).join('')}</div><div class="quiz-controls"><button class="btn btn-outline" data-action="previous" ${questionIndex===0?'disabled':''}>Previous</button>${questionIndex<currentQuiz.quiz.length-1?`<button class="btn btn-primary" data-action="next">Next Question ${icon.arrow}</button>`:`<button class="btn btn-primary" data-action="submit">Submit Quiz ✓</button>`}</div><p style="font-size:14px;font-weight:500;color:var(--muted);margin:17px 0 0">Your score will appear after you submit your answers.</p></div>`}
function submitQuiz(){const details=currentQuiz.quiz.map((q,i)=>({q:q.q,opts:q.opts,correctAnswer:q.a,selected:answers[i]??null,correct:answers[i]===q.a,why:q.why}));const score=details.filter(d=>d.correct).length;lastResult={name:studentName,title:currentQuiz.title,score,total:details.length,percent:Math.round(score/details.length*100),details};try{const all=JSON.parse(localStorage.getItem('vql_quiz_results')||'[]');all.push({...lastResult,date:new Date().toISOString()});localStorage.setItem('vql_quiz_results',JSON.stringify(all))}catch(e){}renderResult();showView('result')}
function renderResult(){const r=lastResult,good=r.percent>=80?'Excellent work!':r.percent>=60?'Good effort!':'Keep learning!';$('#resultContent').innerHTML=`<div class="result-panel"><div class="result-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m5 12 4 4L19 6"/><circle cx="12" cy="12" r="10"/></svg></div><div class="section-kicker">Quiz completed</div><h1>${good}</h1><p>Well done, <strong>${safe(r.name)}</strong>. Here is your result for ${safe(r.title)}.</p><div class="score-ring" style="--score:${r.percent*3.6}deg"><div><strong>${r.percent}%</strong><small>your score</small></div></div><div class="score-stats"><div class="score-stat"><strong>${r.score}/${r.total}</strong><span>Correct answers</span></div><div class="score-stat"><strong>${r.total-r.score}</strong><span>To review</span></div><div class="score-stat"><strong>${r.total}</strong><span>Total questions</span></div></div><div class="review-list"><h2>Answer review and explanations</h2>${r.details.map((d,i)=>`<div class="review ${d.correct?'correct':'incorrect'}"><strong>${i+1}. ${safe(d.q)}</strong><p class="${d.correct?'correct':'incorrect'}">${d.correct?'Correct answer':'Your answer: '+(d.selected===null?'Not answered':safe(d.opts[d.selected]))}</p><p><strong>Correct answer:</strong> ${safe(d.opts[d.correctAnswer])}</p><p><strong>Explanation:</strong> ${safe(d.why)}</p></div>`).join('')}</div><div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:25px"><button class="btn btn-primary" data-startquiz="${currentQuiz.id}">Try Again</button><button class="btn btn-outline" data-view="materials">Back to Learning</button><button class="btn btn-outline" data-view="home">Exit to Home</button></div></div>`}
function showView(view){activeView=view;document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));const el=$('#'+view+'View');if(el)el.classList.add('active');document.querySelectorAll('.nav [data-view]').forEach(a=>a.classList.toggle('active',a.dataset.view===view||(view==='lesson'&&a.dataset.view==='materials')||(view==='quiz'&&a.dataset.view==='quizzes')||(view==='result'&&a.dataset.view==='quizzes')));$('#nav').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'})}
function navigate(view){if(view==='progress')renderProgress();showView(view)}
document.addEventListener('click',e=>{const v=e.target.closest('[data-view]');if(v){e.preventDefault();navigate(v.dataset.view);return}const l=e.target.closest('[data-lesson]');if(l){const item=lessons.find(x=>x.id===l.dataset.lesson);if(item)renderLesson(item);return}const q=e.target.closest('[data-startquiz]');if(q){beginQuiz(q.dataset.startquiz);return}const c=e.target.closest('[data-cat]');if(c){if(c.dataset.target==='materialChips'){matCat=c.dataset.cat;renderChips('materialChips',matCat);renderMaterials($('#materialSearch').value)}else{quizCat=c.dataset.cat;renderChips('quizChips',quizCat);renderQuizzes()}return}const a=e.target.closest('[data-action]');if(!a)return;switch(a.dataset.action){case'exitQuiz':openConfirm('Exit this quiz?','Your current answers will not be scored.','Exit quiz',()=>showView('quizzes'));break;case'previous':questionIndex=Math.max(0,questionIndex-1);renderQuestion();break;case'next':if(answers[questionIndex]===undefined){showToast('Please choose an answer first.');return}questionIndex++;renderQuestion();break;case'submit':if(Object.keys(answers).length<currentQuiz.quiz.length){openConfirm('Submit anyway?','Some questions are unanswered.','Submit quiz',submitQuiz);return}submitQuiz();break;case'clearSearch':$('#materialSearch').value='';matCat='All';renderChips('materialChips',matCat);renderMaterials('');$('#materialSearch').focus();break;case'clearQuizFilter':quizCat='All';renderChips('quizChips',quizCat);renderQuizzes();break}});
document.addEventListener('change',e=>{if(e.target.matches('input[name="answer"]')){answers[questionIndex]=Number(e.target.value);document.querySelectorAll('.answer-option').forEach((el,i)=>el.classList.toggle('selected',i===answers[questionIndex]))}});
document.addEventListener('submit',e=>{if(e.target.id==='studentNameForm'){e.preventDefault();const name=$('#studentName').value.trim();if(!name){showToast('Please enter your name.');return}studentName=name;questionIndex=0;answers={};renderQuestion()}});
$('#materialSearch').addEventListener('input',e=>renderMaterials(e.target.value));
$('#clearSearch').addEventListener('click',()=>{$('#materialSearch').value='';matCat='All';renderChips('materialChips',matCat);renderMaterials('');$('#materialSearch').focus()});
$('#menuToggle').addEventListener('click',()=>$('#nav').classList.toggle('open'));
document.addEventListener('click',e=>{const n=$('#nav');if(n.classList.contains('open')&&!e.target.closest('#nav,#menuToggle'))n.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('.feature-card[data-lesson]')){e.preventDefault();const item=lessons.find(x=>x.id===e.target.dataset.lesson);if(item)renderLesson(item)}});
const themeIconSun='<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>';
const themeIconMoon='<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M20 13.5A8 8 0 0 1 10.5 4 8 8 0 1 0 20 13.5Z"/></svg>';
function applyTheme(t,announce){theme=t;document.documentElement.setAttribute('data-theme',t);try{localStorage.setItem('vql_theme',t)}catch(e){}$('#themeToggle').innerHTML=t==='dark'?themeIconMoon:themeIconSun;$('#themeToggle').setAttribute('aria-label',t==='dark'?'Switch to light theme':'Switch to dark theme');if(announce)showToast(t==='dark'?'Dark theme enabled':'Light theme enabled')}
try{const sv=localStorage.getItem('vql_theme');if(sv==='dark'||sv==='light')theme=sv}catch(e){}
$('#themeToggle').addEventListener('click',()=>applyTheme(theme==='light'?'dark':'light',true));
function getResults(){try{return JSON.parse(localStorage.getItem('vql_quiz_results')||'[]')}catch(e){return[]}}
function renderChips(elId,active){const cats=['All',...new Set(lessons.map(l=>l.category))];$('#'+elId).innerHTML=cats.map(c=>`<button class="chip${c===active?' active':''}" data-cat="${safe(c)}" data-target="${elId}">${safe(c)}</button>`).join('')}
function openConfirm(title,message,confirmText,cb){$('#modalTitle').textContent=title;$('#modalMessage').textContent=message;$('#modalConfirm').textContent=confirmText;modalConfirmCb=cb;$('#modalBackdrop').classList.add('open');$('#modalConfirm').focus()}
function closeModal(){$('#modalBackdrop').classList.remove('open');modalConfirmCb=null}
function renderProgress(){const all=getResults().filter(r=>r&&typeof r.percent==='number');if(!all.length){$('#progressContent').innerHTML=`<div class="result-panel"><div class="result-icon">${icon.book}</div><div class="section-kicker">My progress</div><h1>No quiz results yet</h1><p>Take a quiz and your scores will appear here.</p><div style="display:flex;justify-content:center;margin-top:20px"><button class="btn btn-primary" data-view="quizzes">Explore Quizzes ${icon.arrow}</button></div></div>`;return}const avg=Math.round(all.reduce((s,r)=>s+r.percent,0)/all.length);const best=Math.max.apply(null,all.map(r=>r.percent));const topics={};all.forEach(r=>{if(!topics[r.title]||r.percent>topics[r.title].percent)topics[r.title]=r});const recent=all.slice(-5).reverse();$('#progressContent').innerHTML=`<div class="result-panel" style="text-align:left"><div class="section-kicker" style="text-align:center">My progress</div><h1 style="text-align:center">${all.length} ${all.length===1?'quiz':'quizzes'} taken</h1><div class="score-stats"><div class="score-stat"><strong>${avg}%</strong><span>Average score</span></div><div class="score-stat"><strong>${best}%</strong><span>Best score</span></div><div class="score-stat"><strong>${Object.keys(topics).length}</strong><span>Topics tried</span></div></div><div class="review-list"><h2>Best score per topic</h2>${Object.keys(topics).map(t=>{const r=topics[t];return`<div class="history-item"><div><strong>${safe(t)}</strong><small>${safe(r.name||'Student')} · ${r.score}/${r.total} correct</small></div><span class="history-score">${r.percent}%</span></div>`}).join('')}</div><div class="review-list"><h2>Recent attempts</h2>${recent.map(r=>{let d='';try{d=new Date(r.date).toLocaleDateString()}catch(e){}return`<div class="history-item"><div><strong>${safe(r.title)}</strong><small>${safe(r.name||'Student')}${d?' · '+d:''}</small></div><span class="history-score">${r.percent}%</span></div>`}).join('')}</div><div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:25px"><button class="btn btn-primary" data-view="quizzes">Take Another Quiz</button><button class="btn btn-outline" data-view="materials">Back to Learning</button></div></div>`}
$('#modalConfirm').addEventListener('click',()=>{const cb=modalConfirmCb;closeModal();if(cb)cb()});
$('#modalCancel').addEventListener('click',closeModal);
$('#modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal()});
/* ---------- Reels engine (Learning Materials as vertical video reels) ---------- */
let reelIndex = 0, reelObs = null, reelLikes = {};
let audioUnlocked = false, quizOffered = {};
function unlockAudio() {
  audioUnlocked = true;
  try {
    const cards = reelCards();
    const c = cards[reelIndex] || cards[0];
    if (c) {
      const v = c.querySelector("video");
      if (v && !v.paused && v.muted) {
        v.muted = false;
        try { v.volume = 1; } catch (e2) {}
        v.play().catch(() => {});
        c.classList.add("audible");
      }
    }
  } catch (e) {}
}
// Autoplay helper: browsers only allow autoplay when muted, so always
// start muted and only unmute after the student has interacted.
function tryPlayReel(card, withSound) {
  const v = card && card.querySelector("video");
  if (!v) return;
  try {
    v.muted = withSound ? false : true;
    if (withSound) { try { v.volume = 1; } catch (e2) {} }
    card.classList.toggle("audible", withSound === true);
    const pr = v.play();
    if (pr && pr.catch) pr.catch(() => {
      // Fallback: stay muted and play anyway (guaranteed to be allowed)
      try { v.muted = true; card.classList.remove("audible"); v.play().catch(() => {}); } catch (e2) {}
    });
  } catch (e) {}
}
function autoplayVisibleReel() {
  const cards = reelCards();
  if (!cards.length) return;
  // Pick the card closest to the viewport center (works with page scroll)
  let best = 0, bestScore = -1;
  const mid = window.innerHeight / 2;
  cards.forEach((c, i) => {
    try {
      const r = c.getBoundingClientRect();
      // Visible only if at least partly on screen and materials view is active
      if (r.bottom > 0 && r.top < window.innerHeight) {
        const score = 1 - Math.min(1, Math.abs((r.top + r.bottom) / 2 - mid) / window.innerHeight);
        if (score > bestScore) { bestScore = score; best = i; }
      }
    } catch (e) {}
  });
  setActiveReel(best);
}
document.addEventListener("pointerdown", unlockAudio);
document.addEventListener("keydown", unlockAudio);
try { reelLikes = JSON.parse(localStorage.getItem("vql_likes") || "{}"); } catch (e) { reelLikes = {}; }
function fmtT(s) { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); }
const RIC = {
  play: '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><rect x="6" y="4.5" width="4.5" height="15" rx="1"/><rect x="13.5" y="4.5" width="4.5" height="15" rx="1"/></svg>',
  mute: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none"/><path d="m16 9 5 6m0-6-5 6"/></svg>',
  sound: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg>',
  heart: '<svg viewBox="0 0 24 24" width="22" height="22" fill="FILLCOLOR" stroke="currentColor" stroke-width="1.8"><path d="M12 20.5C7 16.5 3 13.2 3 9.3 3 6.4 5.2 4.5 7.7 4.5c1.7 0 3.3.9 4.3 2.4 1-1.5 2.6-2.4 4.3-2.4 2.5 0 4.7 1.9 4.7 4.8 0 3.9-4 7.2-9 11.2z"/></svg>'
};
function reelCardHTML(l, i, n) {
  const liked = !!reelLikes[l.id];
  return `<article class="reel-card" data-reel="${l.id}" data-idx="${i}" tabindex="0" aria-label="${safe(l.title)}, video ${i + 1} of ${n}">`
  + `<div class="reel-screen"><video src="${l.video}" muted autoplay playsinline preload="auto"></video>`
  + `<button class="reel-play" data-ract="play" aria-label="Play or pause">${RIC.play}</button>`
  + `<button class="reel-sound" data-ract="sound" aria-label="Tap for sound">🔇 Tap for sound</button>`
  + `</div>`
  + `<div class="reel-side">`
  + `<button class="reel-icon${liked ? " liked" : ""}" data-ract="like" aria-label="Like this video">${RIC.heart.split("FILLCOLOR").join(liked ? "currentColor" : "none")}<small>${liked ? "Liked" : "Like"}</small></button>`
  + `<button class="reel-icon" data-ract="lesson" aria-label="Read the full lesson">${icon.book}<small>Lesson</small></button>`
  + `</div>`
  + `<div class="reel-info"><p>${safe(l.description)}</p>`
  + `<div class="reel-formula">${safe(l.formula)}</div>`
  + `<button class="btn btn-primary reel-quiz" data-ract="quiz">Take the Quiz ${icon.arrow}</button>`
  + `<div class="reel-time"><span data-rt>0:00 / 0:00</span></div>`
  + `</div>`
  + (i < n - 1 ? `<div class="reel-scrollcue">Scroll ↓ for next video</div>` : ``)
  + `<div class="reel-progress"><span data-bar style="width:0%"></span></div>`
  + `</article>`;
}
function renderMaterials(filter) {
  const q = String(filter || "").toLowerCase();
  const list = lessons.filter(l => (matCat === "All" || l.category === matCat) && (l.title + " " + l.description + " " + l.tags.join(" ")).toLowerCase().includes(q));
  const grid = $("#materialsGrid");
  grid.className = list.length ? "reels-feed" : "materials-grid";
  grid.innerHTML = list.length ? list.map((l, i) => reelCardHTML(l, i, list.length)).join("") : `<div class="empty-state" style="grid-column:1/-1">${icon.book}<strong>No materials found</strong><p>No topics match your search. Try another term or pick a different category.</p><button class="btn btn-outline" data-action="clearSearch" style="margin-top:14px">Reset filters</button></div>`;
  setupReelObserver();
}
function reelCards() { const g = $("#materialsGrid"); return g ? Array.prototype.slice.call(g.querySelectorAll(".reel-card")) : []; }
function updateReelPlayIcon(card) {
  const v = card.querySelector("video"), b = card.querySelector('[data-ract="play"]');
  if (!v || !b) return;
  const playing = !v.paused && !v.ended;
  card.classList.toggle("playing", playing);
  b.innerHTML = playing ? RIC.pause : RIC.play;
}
function pauseAllReels(except) {
  reelCards().forEach(c => {
    const v = c.querySelector("video");
    if (v && v !== except && !v.paused) { try { v.pause(); } catch (e) {} }
    updateReelPlayIcon(c);
  });
}
function setActiveReel(i) {
  const cards = reelCards();
  if (!cards.length) return;
  reelIndex = (i + cards.length) % cards.length;
  cards.forEach((c, ci) => {
    const v = c.querySelector("video");
    if (!v) return;
    if (ci === reelIndex) { tryPlayReel(c, audioUnlocked); }
    else { try { v.pause(); } catch (e) {} c.classList.remove("audible"); }
    updateReelPlayIcon(c);
  });
}
function setupReelObserver() {
  try { if (reelObs) reelObs.disconnect(); } catch (e) {}
  reelObs = null;
  const grid = $("#materialsGrid");
  if (!grid) return;
  reelIndex = 0;
  if (typeof IntersectionObserver === "undefined") { autoplayVisibleReel(); return; }
  try {
    // Direct page scroll: observe against the viewport (root:null), not a nested box
    reelObs = new IntersectionObserver(entries => {
      for (const en of entries) {
        if (en.isIntersecting && en.intersectionRatio >= 0.4) {
          const i = Number(en.target.dataset.idx);
          const card = reelCards()[i];
          const v = card && card.querySelector("video");
          // Fix: also start playback when the first reel is already visible
          // on load (i === reelIndex but still paused).
          if (i !== reelIndex || (v && v.paused && !v.ended)) setActiveReel(i);
        }
      }
    }, { root: null, rootMargin: "-10% 0px -10% 0px", threshold: [0.4, 0.6] });
    grid.querySelectorAll(".reel-card").forEach(c => reelObs.observe(c));
    reelCards().forEach(c => updateReelPlayIcon(c));
    // Autoplay whichever reel is actually visible right now
    setTimeout(autoplayVisibleReel, 120);
  } catch (e) {}
}
function scrollReel(d) {
  const cards = reelCards();
  if (!cards.length) return;
  const n = (reelIndex + d + cards.length) % cards.length;
  const el = cards[n];
  if (el && el.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "center" });
  setActiveReel(n);
}
/* reel feed interactions */
$("#materialsGrid").addEventListener("click", e => {
  const btn = e.target.closest("[data-ract]");
  const card = e.target.closest(".reel-card");
  if (!card) return;
  const id = card.dataset.reel;
  const l = lessons.find(x => x.id === id);
  const v = card.querySelector("video");
  if (!btn) {
    if (v && e.target === v) { if (suppressTap) return; if (v.paused) { pauseAllReels(v); audioUnlocked = true; tryPlayReel(card, true); } else { v.pause(); } updateReelPlayIcon(card); }
    return;
  }
  const act = btn.dataset.ract;
  if (act === "play") {
    reelIndex = Number(card.dataset.idx) || 0;
    if (!v) return;
    if (v.paused) { pauseAllReels(v); audioUnlocked = true; tryPlayReel(card, true); } else { v.pause(); }
    updateReelPlayIcon(card);
  } else if (act === "sound") {
    if (!v) return;
    audioUnlocked = true;
    tryPlayReel(card, v.muted);
    updateReelPlayIcon(card);
    if (!v.muted) showToast("Sound on");
  } else if (act === "like") {
    if (reelLikes[id]) { delete reelLikes[id]; } else { reelLikes[id] = 1; }
    try { localStorage.setItem("vql_likes", JSON.stringify(reelLikes)); } catch (err) {}
    const on = !!reelLikes[id];
    btn.classList.toggle("liked", on);
    btn.querySelector("svg").setAttribute("fill", on ? "currentColor" : "none");
    btn.querySelector("small").textContent = on ? "Liked" : "Like";
    if (on) showToast("Added to your liked videos");
  } else if (act === "back" || act === "fwd") {
    if (!v) return;
    try { let t = v.currentTime + (act === "fwd" ? 10 : -10); const dd = v.duration; t = (dd && isFinite(dd)) ? Math.min(Math.max(0, t), dd) : Math.max(0, t); v.currentTime = t; } catch (e2) {}
  } else if (act === "quiz") {
    if (!l) return;
    pauseAllReels();
    beginQuiz(id);
  } else if (act === "lesson") {
    if (!l) return;
    pauseAllReels();
    renderLesson(l);
  }
});
/* video progress + play state + ENDED -> quiz popup (skippable) */
$("#materialsGrid").addEventListener("timeupdate", e => {
  const v = e.target;
  if (!v || v.tagName !== "VIDEO") return;
  const card = v.closest(".reel-card");
  if (!card) return;
  const dur = v.duration || 0, cur = v.currentTime || 0;
  card.querySelectorAll("[data-bar]").forEach(bar => { if (dur) bar.style.width = (cur / dur * 100) + "%"; });
  const t = card.querySelector("[data-rt]");
  if (t) t.textContent = fmtT(cur) + " / " + fmtT(dur);
}, true);
$("#materialsGrid").addEventListener("loadedmetadata", e => {
  const v = e.target;
  if (!v || v.tagName !== "VIDEO") return;
  const card = v.closest(".reel-card");
  if (!card) return;
  const t = card.querySelector("[data-rt]");
  if (t) t.textContent = "0:00 / " + fmtT(v.duration || 0);
}, true);
["play", "pause"].forEach(ev => {
  $("#materialsGrid").addEventListener(ev, e => {
    const v = e.target;
    if (!v || v.tagName !== "VIDEO") return;
    const card = v.closest(".reel-card");
    if (card) updateReelPlayIcon(card);
  }, true);
});
$("#materialsGrid").addEventListener("ended", e => {
  const v = e.target;
  if (!v || v.tagName !== "VIDEO") return;
  const card = v.closest(".reel-card");
  if (!card) return;
  updateReelPlayIcon(card);
  const mv = $("#materialsView");
  if (!mv || !mv.classList.contains("active")) return;
  const id = card.dataset.reel;
  const l = lessons.find(x => x.id === id);
  if (!l) return;
  if (quizOffered[id]) return;
  quizOffered[id] = 1;
  openConfirm("Video finished", 'You finished "' + l.title + '". Take the quiz now?', "Take Quiz", () => beginQuiz(id));
  $("#modalCancel").textContent = "Skip";
}, true);
/* pause reels when leaving to another view / lesson / quiz */
document.addEventListener("click", e => {
  if (e.target.closest("[data-view],[data-lesson],[data-startquiz]")) { audioUnlocked = true; pauseAllReels(); }
  // Pag pasok sa Learn Physics: i-autoplay kung aling reel ang kita (may tunog na, kasi may click = interaction)
  if (e.target.closest('[data-view="materials"]')) setTimeout(() => { try { autoplayVisibleReel(); } catch (err) {} }, 350);
});
/* restore Skip/Cancel label after the quiz offer closes */
["modalConfirm", "modalCancel"].forEach(mid => {
  document.getElementById(mid).addEventListener("click", () => { $("#modalCancel").textContent = "Cancel"; });
});
$("#modalBackdrop").addEventListener("click", e => { if (e.target.id === "modalBackdrop") $("#modalCancel").textContent = "Cancel"; });
/* keyboard: up/down to move between reels */
document.addEventListener("keydown", e => {
  const mv = $("#materialsView");
  if (!mv || !mv.classList.contains("active")) return;
  if (e.target.matches("input,textarea")) return;
  if (e.key === "ArrowDown") { e.preventDefault(); scrollReel(1); }
  if (e.key === "ArrowUp") { e.preventDefault(); scrollReel(-1); }
});

function seekFromEvent(v, bar, e) {
  try {
    const r = bar.getBoundingClientRect();
    const x = (e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX);
    const ratio = Math.min(1, Math.max(0, (x - r.left) / r.width));
    if (v.duration) v.currentTime = ratio * v.duration;
  } catch (err) {}
}
let scrubbing = null;
$("#materialsGrid").addEventListener("pointerdown", e => {
  const bar = e.target.closest(".reel-progress");
  if (!bar) return;
  const card = e.target.closest(".reel-card");
  const v = card && card.querySelector("video");
  if (!v) return;
  e.preventDefault();
  scrubbing = { v, bar };
  seekFromEvent(v, bar, e);
});
document.addEventListener("pointermove", e => { if (scrubbing && e.buttons) { seekFromEvent(scrubbing.v, scrubbing.bar, e); showScrubTip(scrubbing.bar.closest(".reel-card"), fmtT(scrubbing.v.currentTime) + " / " + fmtT(scrubbing.v.duration || 0)); } });
document.addEventListener("pointerup", () => { scrubbing = null; hideScrubTip(); });
function showScrubTip(card, text) {
  try {
    if (!card) return;
    let tip = card.querySelector(".reel-scrub-tip");
    if (!tip) { tip = document.createElement("div"); tip.className = "reel-scrub-tip"; const scr = card.querySelector(".reel-screen"); (scr || card).appendChild(tip); }
    tip.textContent = text;
    tip.classList.add("show");
  } catch (err) {}
}
function flashSeekDir(card, dir) {
  try {
    if (!card) return;
    let f = card.querySelector(".reel-seek-flash");
    if (!f) { f = document.createElement("div"); f.className = "reel-seek-flash"; const scr = card.querySelector(".reel-screen"); (scr || card).appendChild(f); }
    f.textContent = dir === "fwd" ? "\u00BB" : "\u00AB";
    f.classList.remove("fwd", "back", "show");
    void f.offsetWidth;
    f.classList.add("show", dir);
  } catch (err) {}
}
function hideSeekFlash() { try { document.querySelectorAll(".reel-seek-flash.show").forEach(t => t.classList.remove("show", "fwd", "back")); } catch (err) {} }
function hideScrubTip() { try { document.querySelectorAll(".reel-scrub-tip.show").forEach(t => t.classList.remove("show")); } catch (err) {} }
let hdrag = null, suppressTap = false, holdTimer = null;
$("#materialsGrid").addEventListener("pointerdown", e => {
  if (e.target.closest("[data-ract]")) return;
  const scr = e.target.closest(".reel-screen");
  if (!scr) return;
  const card = e.target.closest(".reel-card");
  const v = card && card.querySelector("video");
  if (!v || !v.duration || !isFinite(v.duration)) return;
  hdrag = { v, card, x0: e.clientX, y0: e.clientY, t0: v.currentTime, dur: v.duration, active: false };
  try { clearTimeout(holdTimer); } catch (err) {}
  holdTimer = setTimeout(() => {
    if (!hdrag || hdrag.active) return;
    hdrag.held = true;
    hdrag.active = true;
    try { hdrag.v.pause(); } catch (err2) {}
    try { if (navigator.vibrate) navigator.vibrate(10); } catch (err2) {}
    showScrubTip(hdrag.card, fmtT(hdrag.v.currentTime) + " / " + fmtT(hdrag.dur));
  }, 350);
});
document.addEventListener("pointermove", e => {
  if (!hdrag) return;
  const dx = e.clientX - hdrag.x0, dy = e.clientY - hdrag.y0;
  if (!hdrag.active) {
    if (Math.abs(dx) < 12) return;
    if (Math.abs(dy) > Math.abs(dx)) { hdrag = null; return; }
    hdrag.active = true;
    try { hdrag.v.pause(); } catch (err) {}
    showScrubTip(hdrag.card, fmtT(hdrag.t0) + " / " + fmtT(hdrag.dur));
  }
  if (e.buttons === 0 && e.pointerType === "mouse") return;
  const W = (hdrag.card && hdrag.card.clientWidth) || 300;
  let t = hdrag.t0 + (dx / W) * hdrag.dur;
  t = Math.min(Math.max(0, t), hdrag.dur);
  try { hdrag.v.currentTime = t; } catch (err) {}
  showScrubTip(hdrag.card, fmtT(t) + " / " + fmtT(hdrag.dur));
  flashSeekDir(hdrag.card, dx >= 0 ? "fwd" : "back");
});
document.addEventListener("pointerup", () => { if (hdrag && hdrag.active) { suppressTap = true; setTimeout(() => { suppressTap = false; }, 80); } try { clearTimeout(holdTimer); } catch (err) {} hdrag = null; hideScrubTip(); hideSeekFlash(); });
$("#materialsGrid").addEventListener("contextmenu", e => { if (e.target.closest(".reel-screen")) e.preventDefault(); });
document.addEventListener("pointercancel", () => { try { clearTimeout(holdTimer); } catch (err) {} hdrag = null; hideScrubTip(); hideSeekFlash(); });
/* SINGLE-PLAY-ENFORCER: only one video may play at a time (reels + lesson videos) */
document.addEventListener("play", e => {
  const v = e.target;
  if (!v || v.tagName !== "VIDEO") return;
  try {
    document.querySelectorAll("video").forEach(o => {
      if (o !== v && !o.paused) { try { o.pause(); } catch (err) {} }
    });
  } catch (err) {}
  try {
    const card = v.closest ? v.closest(".reel-card") : null;
    if (card) updateReelPlayIcon(card);
  } catch (err) {}
}, true);
applyTheme(theme);renderMaterials();renderQuizzes();renderChips('materialChips',matCat);renderChips('quizChips',quizCat);
