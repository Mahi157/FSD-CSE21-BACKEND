function renderPortfolio(profile) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="${profile.name} - ${profile.role}">
        <title>${profile.name} | ${profile.role}</title>
        <style>${styles}</style>
    </head>
    <body>
        <header class="site-header"><a class="brand" href="#top">${profile.name}</a><nav><a href="#work">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav><div class="header-actions"><button class="theme-toggle" type="button" aria-label="Switch to dim theme"><span></span></button><a class="header-link" href="mailto:${profile.email}">Let's talk <span>↗</span></a></div></header>
        <main id="top">
            <section class="hero wrap">
                <div class="hero-copy"><h1>Hi, I'm<br><em>${profile.name}</em></h1><p class="intro">I'm a ${profile.role} who likes turning rough ideas into clear, friendly experiences. I am still learning, still experimenting, and always looking for a better way to build.</p><div class="hero-actions"><a class="button button-dark" href="#work">See my projects <span>↓</span></a><a class="text-link" href="mailto:${profile.email}">${profile.email}</a></div></div>
                <div class="hero-note"><div class="portrait">${profile.name.split(' ').map(part => part[0]).join('')}</div><p>Currently studying<br><strong>Computer Science & Engineering</strong><br>at ${profile.college}</p><span class="line"></span><p class="location">${profile.location} <span>•</span> ${profile.timeline}</p></div>
            </section>
            <section class="proof wrap"><p class="section-kicker">01 / A little about me</p><div class="proof-grid"><p class="statement">I enjoy making complex things feel <strong>clear, useful, and human.</strong> The best part is seeing a small idea become something that actually helps someone.</p><div class="stats"><div><strong>03</strong><span>Projects built</span></div><div><strong>02</strong><span>Years learning</span></div><div><strong>∞</strong><span>Ideas to try</span></div></div></div></section>
            <section id="work" class="wrap work"><div class="section-heading"><div><p class="section-kicker">02 / Things I've made</p><h2>Learning by building.</h2></div><p>These are a few projects from my journey so far. Each one taught me something I could not have learned by only reading about it.</p></div><div class="project-grid">${profile.projects.map((project, index) => `<article class="project project-${index + 1}"><div class="project-top"><span class="project-number">0${index + 1}</span><span class="project-type">${project.subtitle}</span></div><h3>${project.title}</h3><p>${project.description}</p><div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="project-actions"><a class="project-link" href="${project.github}" target="_blank" rel="noopener noreferrer">View repository <span>↗</span></a>${project.demo ? `<a class="project-link project-demo" href="${project.demo}" target="_blank" rel="noopener noreferrer">Live demo <span>↗</span></a>` : ''}</div></article>`).join('')}</div></section>
            <section id="skills" class="skills-band"><div class="wrap"><div class="section-heading"><div><p class="section-kicker">03 / Capabilities</p><h2>Tools I reach for.</h2></div><p>Comfortable moving from a visual idea to a working product, one thoughtful layer at a time.</p></div><div class="skill-grid"><div><span>01</span><h3>Languages</h3><p>${profile.skills.languages.join('  ·  ')}</p></div><div><span>02</span><h3>Frontend</h3><p>${profile.skills.frontend.join('  ·  ')}</p></div><div><span>03</span><h3>Backend</h3><p>${profile.skills.backend.join('  ·  ')}</p></div><div><span>04</span><h3>Workflow</h3><p>${profile.skills.tools.join('  ·  ')}</p></div></div></div></section>
            <section class="education wrap"><p class="section-kicker">04 / The journey</p><div class="education-content"><h2>Learning by<br><em>making.</em></h2><div><p class="date">${profile.timeline}</p><h3>${profile.college}</h3><p>B.Tech in Computer Science and Engineering</p><span>Building a strong foundation in object-oriented programming, data structures, and modern web development, while finding my own way of doing things.</span></div></div></section>
            <section id="contact" class="contact wrap"><p class="section-kicker">05 / Say hello</p><h2>Have a good idea?<br><em>Let's make it real.</em></h2><a class="contact-email" href="mailto:${profile.email}">${profile.email} <span>↗</span></a><div class="contact-footer"><span>${profile.location}</span><span>© ${new Date().getFullYear()} ${profile.name}</span></div></section>
        </main>
        <script>
            const page = document.body;
            const themeToggle = document.querySelector('.theme-toggle');
            themeToggle.addEventListener('click', () => {
                const dim = page.classList.toggle('dim-theme');
                themeToggle.setAttribute('aria-label', dim ? 'Switch to light theme' : 'Switch to dim theme');
            });

            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });
            document.querySelectorAll('section.hero, section.proof, section.work, section.skills-band, section.education, section.contact').forEach((section) => {
                section.classList.add('reveal');
                revealObserver.observe(section);
            });

            document.querySelectorAll('.project').forEach((card) => {
                card.addEventListener('pointermove', (event) => {
                    const bounds = card.getBoundingClientRect();
                    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
                    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
                    card.style.transform = 'perspective(900px) rotateX(' + (-y * 3) + 'deg) rotateY(' + (x * 3) + 'deg) translateY(-6px)';
                });
                card.addEventListener('pointerleave', () => { card.style.transform = ''; });
            });
        </script>
    </body>
    </html>
    `;
}

const styles = `
:root { --ink:#263238; --paper:#eef5f7; --muted:#607078; --accent:#e07a5f; --sage:#d7e8e3; --line:#c6d6da; }
.dim-theme { --ink:#f2f5f3; --paper:#263238; --muted:#b8c8c8; --sage:#38504f; --line:#506366; } .dim-theme .site-header { background:var(--paper); border-color:var(--line); } .dim-theme .project-2 { background:#594c48; } .dim-theme .project { box-shadow:none; }
* { box-sizing:border-box; } html { scroll-behavior:smooth; } body { margin:0; background:var(--paper); color:var(--ink); font-family:'Trebuchet MS', Arial, sans-serif; } a { color:inherit; text-decoration:none; } .wrap { width:min(1060px, calc(100% - 64px)); margin:auto; }
.site-header { position:relative; z-index:5; height:76px; width:min(1060px, calc(100% - 64px)); margin:24px auto 0; padding:0 20px; display:flex; align-items:center; justify-content:space-between; border-bottom:3px solid var(--ink); background:var(--paper); } .brand { font-family:'Palatino Linotype', Palatino, serif; font-weight:700; font-size:20px; } em { color:var(--accent); font-style:normal; } nav { display:flex; gap:30px; font:12px 'Trebuchet MS', Arial, sans-serif; text-transform:uppercase; letter-spacing:1px; } nav a { transition:color .2s ease; } nav a:hover, .text-link:hover { color:var(--accent); } .header-actions { display:flex; align-items:center; gap:11px; } .theme-toggle { width:34px; height:34px; padding:0; border:1px solid var(--ink); border-radius:50%; background:transparent; cursor:pointer; display:grid; place-items:center; } .theme-toggle span { width:12px; height:12px; border-radius:50%; background:var(--accent); box-shadow:4px -3px 0 var(--paper); transition:transform .3s ease; } .theme-toggle:hover span { transform:rotate(35deg) scale(1.15); } .header-link { border:1px solid var(--ink); padding:11px 16px; font-size:12px; font-weight:700; transition:background .2s ease,color .2s ease; } .header-link:hover { background:var(--ink); color:var(--paper); } .header-link span, .button span, .project-link span, .contact-email span { margin-left:10px; color:var(--accent); }
.reveal { opacity:0; transform:translateY(28px); transition:opacity .75s ease, transform .75s ease; } .reveal.is-visible { opacity:1; transform:none; }
.hero { min-height:610px; display:grid; grid-template-columns:1.5fr .7fr; align-items:center; gap:80px; } .eyebrow, .section-kicker, .project-type, .date { color:var(--accent); font:11px 'Trebuchet MS', Arial, sans-serif; text-transform:uppercase; letter-spacing:1px; } h1, h2, h3, p { margin-top:0; } h1, h2, h3 { font-family:'Palatino Linotype', Palatino, serif; } h1 { font-size:clamp(48px, 7vw, 86px); line-height:1.08; letter-spacing:-2px; margin:25px 0 28px; font-weight:700; } .intro { color:var(--muted); max-width:470px; line-height:1.8; font-size:17px; } .hero-actions { display:flex; align-items:center; gap:26px; margin-top:38px; } .button { display:inline-flex; padding:16px 20px; font-size:12px; font-weight:700; } .button-dark { background:var(--ink); color:var(--paper); } .button-dark:hover { background:var(--accent); } .text-link { font:11px 'Trebuchet MS', Arial, sans-serif; border-bottom:1px solid var(--ink); padding-bottom:5px; } .hero-note { border-left:3px solid var(--accent); padding-left:42px; color:var(--muted); line-height:1.7; font-size:13px; } .portrait { width:88px; height:88px; display:grid; place-items:center; background:var(--accent); color:var(--paper); font-size:27px; font-weight:800; letter-spacing:-2px; margin-bottom:28px; } .hero-note strong { color:var(--ink); } .line { display:block; width:54px; border-top:1px solid var(--ink); margin:27px 0 18px; } .location { font:11px 'Trebuchet MS', Arial, sans-serif; } .location span { color:var(--accent); padding:0 7px; }
.proof { border-top:1px solid var(--line); padding:68px 0 112px; } .proof-grid, .section-heading { display:grid; grid-template-columns:1fr 1fr; gap:70px; } .statement { font-size:25px; line-height:1.45; max-width:500px; letter-spacing:-1px; } .stats { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; } .stats div { border-left:1px solid var(--line); padding-left:17px; } .stats strong { display:block; font-size:37px; letter-spacing:-2px; } .stats span { color:var(--muted); font-size:11px; line-height:1.4; }
.work { padding-bottom:130px; } .section-heading { align-items:end; margin-bottom:45px; } .section-heading h2, .education h2, .contact h2 { font-size:clamp(34px,5vw,54px); letter-spacing:-3px; line-height:1.05; margin:14px 0 0; } .section-heading > p { color:var(--muted); max-width:340px; font-size:13px; line-height:1.8; margin:0; }.project-grid { display:grid; grid-template-columns:repeat(6,1fr); gap:18px; }.project { padding:27px; min-height:370px; display:flex; flex-direction:column; background:#e9e5dc; transition:transform .25s ease, box-shadow .25s ease; transform-style:preserve-3d; }.project:hover { box-shadow:0 20px 45px rgba(29,39,33,.13); }.project-1 { grid-column:span 3; background:var(--sage); }.project-2 { grid-column:span 3; background:#e5d4c3; }.project-3 { grid-column:2 / span 4; background:var(--ink); color:var(--paper); }.project-top { display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(29,39,33,.2); padding-bottom:17px; }.project-3 .project-top { border-color:rgba(244,240,232,.2); }.project-number { font:12px 'DM Mono',monospace; }.project h3 { font-size:29px; letter-spacing:-1.5px; margin:31px 0 12px; }.project p { color:var(--muted); font-size:13px; line-height:1.75; max-width:420px; }.project-3 p { color:#b9c1b8; }.tags { display:flex; gap:7px; flex-wrap:wrap; margin-top:auto; }.tags span { border:1px solid rgba(29,39,33,.25); padding:6px 8px; font:10px 'DM Mono',monospace; }.project-3 .tags span { border-color:rgba(244,240,232,.25); }.project-actions { display:flex; flex-wrap:wrap; gap:18px; margin-top:25px; }.project-link { margin-top:0; font-size:12px; font-weight:700; }.project-demo { color:inherit; }.project-link:hover { color:var(--accent); }
.skills-band { background:var(--ink); color:var(--paper); padding:100px 0 112px; }.skills-band .section-heading > p { color:#aab5aa; }.skill-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }.skill-grid > div { border-top:1px solid #526055; padding-top:19px; }.skill-grid span { color:var(--accent); font:11px 'DM Mono',monospace; }.skill-grid h3 { font-size:18px; margin:35px 0 13px; }.skill-grid p { color:#aab5aa; line-height:1.8; font-size:12px; }
.education { padding:120px 0; }.education-content { margin-top:45px; border-top:1px solid var(--line); padding-top:30px; display:grid; grid-template-columns:1fr 1fr; gap:70px; }.education h2 { margin:0; }.education h3 { font-size:24px; margin:5px 0 8px; }.education-content p:not(.date) { font-size:14px; }.education-content span { color:var(--muted); display:block; font-size:13px; line-height:1.8; max-width:390px; margin-top:22px; }
.contact { border-top:1px solid var(--line); padding:100px 0 32px; }.contact h2 { margin:25px 0 38px; }.contact-email { display:inline-block; font-size:clamp(20px,3vw,31px); font-weight:700; border-bottom:2px solid var(--ink); padding-bottom:9px; }.contact-email:hover { color:var(--accent); border-color:var(--accent); }.contact-footer { border-top:1px solid var(--line); margin-top:110px; padding-top:18px; display:flex; justify-content:space-between; color:var(--muted); font:10px 'DM Mono',monospace; text-transform:uppercase; }
@media (max-width:700px) { .wrap, .site-header { width:min(100% - 38px, 1120px); } .site-header { height:72px; } nav { display:none; } .header-link { padding:9px 11px; } .hero { min-height:650px; display:block; padding-top:100px; } h1 { letter-spacing:-3px; } .hero-actions { display:block; }.text-link { display:inline-block; margin-top:24px; }.hero-note { margin-top:70px; padding-left:22px; }.proof-grid, .section-heading, .education-content { grid-template-columns:1fr; gap:25px; }.proof { padding:50px 0 85px; }.stats { gap:10px; }.work { padding-bottom:90px; }.project-grid { display:block; }.project { margin-bottom:14px; min-height:360px; }.project-3 { margin-left:0; }.skills-band { padding:75px 0 85px; }.skill-grid { grid-template-columns:1fr 1fr; gap:35px 18px; }.education { padding:85px 0; }.contact { padding-top:75px; }.contact-footer { margin-top:75px; gap:20px; flex-direction:column; } }
`;

module.exports = renderPortfolio;
