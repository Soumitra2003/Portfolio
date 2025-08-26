import React, { useState } from 'react';
import me1 from './assets/me1.jpg.jpg';
import me2 from './assets/me2.jpg.jpg';
import { Container, Typography, Button, Avatar, Stack, Grid, Paper } from '@mui/material';
import './App.css';

function App() {
  const [flipped, setFlipped] = useState(false);
  const [glowBox, setGlowBox] = useState(null);
  // Multicolored code lines as JSX for background
  // More lines for a longer animated background
  const codeLines = [
    <><span className="code-keyword">function</span> <span className="code-function">helloWorld</span>() {'{'}</>,
    <>&nbsp;&nbsp;<span className="code-keyword">console</span>.<span className="code-function">log</span>(<span className="code-string">'Hello, world!'</span>);</>,
    <>{'}'}</>,
    <><span className="code-comment">// Portfolio background animation</span></>,
    <><span className="code-keyword">const</span> <span className="code-variable">skills</span> = [<span className="code-string">'Yapping'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'Python'</span>, <span className="code-string">'C++'</span>];</>,
    <><span className="code-keyword">for</span> (<span className="code-keyword">let</span> <span className="code-variable">skill</span> <span className="code-keyword">of</span> <span className="code-variable">skills</span>) {'{'}</>,
    <>&nbsp;&nbsp;<span className="code-keyword">console</span>.<span className="code-function">log</span>(<span className="code-variable">skill</span>);</>,
    <>{'}'}</>,
    <><span className="code-comment">// ...random nonsense...</span></>,
    <><span className="code-keyword">let</span> <span className="code-variable">x</span> = <span className="code-number">42</span>;</>,
    <><span className="code-keyword">if</span> (<span className="code-variable">x</span> &gt; <span className="code-number">10</span>) {'{'}</>,
    <>&nbsp;&nbsp;<span className="code-function">doSomething</span>();</>,
    <>{'}'}</>,
    <><span className="code-comment">// Animation by Studio Ghibli</span></>,
    <><span className="code-keyword">export</span> <span className="code-keyword">default</span> <span className="code-function">App</span>;</>,
    <><span className="code-keyword">function</span> <span className="code-function">helloWorld</span>() {'{'}</>,
    <>&nbsp;&nbsp;<span className="code-keyword">console</span>.<span className="code-function">log</span>(<span className="code-string">'Hello, world!'</span>);</>,
    <>{'}'}</>,
    <><span className="code-comment">// Portfolio background animation</span></>,
    <><span className="code-keyword">const</span> <span className="code-variable">skills</span> = [<span className="code-string">'React'</span>, <span className="code-string">'HTML'</span>, <span className="code-string">'Python'</span>, <span className="code-string">'Yapping'</span>];</>,
    <><span className="code-keyword">for</span> (<span className="code-keyword">let</span> <span className="code-variable">skill</span> <span className="code-keyword">of</span> <span className="code-variable">skills</span>) {'{'}</>,
    <>&nbsp;&nbsp;<span className="code-keyword">console</span>.<span className="code-function">log</span>(<span className="code-variable">skill</span>);</>,
    <>{'}'}</>,
    <><span className="code-comment">// ...random nonsense...</span></>,
    <><span className="code-keyword">let</span> <span className="code-variable">x</span> = <span className="code-number">42</span>;</>,
    <><span className="code-keyword">if</span> (<span className="code-variable">x</span> &gt; <span className="code-number">10</span>) {'{'}</>,
    <>&nbsp;&nbsp;<span className="code-function">doSomething</span>();</>,
    <>{'}'}</>,
    <><span className="code-comment">// Hi hehe</span></>,
    <><span className="code-keyword">export</span> <span className="code-keyword">default</span> <span className="code-function">App</span>;</>,
  <><span className="code-comment">// Leetcode grind</span></>,
    <><span className="code-keyword">const</span> <span className="code-variable">skills</span> = [<span className="code-string">'Node.js'</span>, <span className="code-string">'C++'</span>, <span className="code-string">'HTML'</span>, <span className="code-string">'CSS'</span>];</>,
    <><span className="code-keyword">for</span> (<span className="code-keyword">let</span> <span className="code-variable">skill</span> <span className="code-keyword">of</span> <span className="code-variable">skills</span>) {'{'}</>,
    <>&nbsp;&nbsp;<span className="code-keyword">console</span>.<span className="code-function">log</span>(<span className="code-variable">skill</span>);</>,
    <>{'}'}</>,
 
  ];

  // Scroll progress state for right bar
  const [scroll, setScroll] = useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setScroll(total ? window.scrollY / total : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Animated code background */}
      <div className="code-bg">
        <div className="code-lines">
          {codeLines.map((line, i) => (
            <div className="code-line" key={i} style={{ animationDelay: `${i * 0.7}s` }}>
              {line}
            </div>
          ))}
        </div>
      </div>


      <Container
        maxWidth="md"
        sx={{
          py: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        {/* Photo & About Me */}
        <Paper
          elevation={4}
          className={`glow-box${glowBox === 0 ? ' glow' : ''}`}
          onMouseEnter={() => setGlowBox(0)}
          onMouseLeave={() => setGlowBox(null)}
          onFocus={() => setGlowBox(0)}
          onBlur={() => setGlowBox(null)}
          sx={{
            p: 0,
            mb: 4,
            width: '100%',
            maxWidth: 650,
            borderRadius: 4,
            overflow: 'hidden',
            background: 'linear-gradient(120deg, #00eaff 0%, #185a9d 100%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            position: 'relative',
          }}
        >
          <div
            className="about-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              padding: '2.5rem 2rem 2rem 2rem',
              background: 'rgba(0,0,0,0.25)',
              position: 'relative',
            }}
          >
            {/* Avatar Flip Card */}
            <div
              className="avatar-flip"
              tabIndex={0}
              style={{ width: 120, height: 120 }}
            >
              <div className="avatar-flip-inner">
                <Avatar
                  alt="Soumitra"
                  src={me1}
                  className="avatar-flip-front"
                  sx={{ width: 120, height: 120, border: '4px solid #fff', boxShadow: '0 2px 16px #00eaff88', position: 'absolute' }}
                />
                <Avatar
                  alt="Soumitra 2"
                  src={me2}
                  className="avatar-flip-back"
                  sx={{ width: 120, height: 120, border: '4px solid #fff', boxShadow: '0 2px 16px #00eaff88', position: 'absolute' }}
                />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: '#fff', letterSpacing: 1, mb: 1 }}>
                Soumitra
              </Typography>
              <Typography variant="h6" sx={{ color: '#e0f7fa', mb: 1 }}>
                Problem Solver & Creative Developer
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff', opacity: 0.92 }}>
                Passionate about solving algorithms, building interactive web experiences, and solving real-world problems with the weapon of code.
              </Typography>
              <div style={{
                marginTop: 18,
                background: 'linear-gradient(90deg, #ffd700 0%, #fffbe7 100%)',
                color: '#7a5c00',
                borderRadius: 10,
                padding: '10px 18px',
                fontWeight: 600,
                fontSize: '1.01rem',
                boxShadow: '0 2px 12px #ffd70044',
                display: 'inline-block',
                maxWidth: '100%',
              }}>
                <span style={{ fontStyle: 'italic', fontWeight: 500 }}>
                  "Programs must be written for people to read, and only incidentally for machines to execute."<br />
                  <span style={{ fontSize: '0.95em', fontWeight: 700, marginLeft: 8 }}>– Harold Abelson</span>
                </span>
              </div>
            </div>
          </div>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 120,
            height: 120,
            background: 'radial-gradient(circle at 80% 20%, #fff3 0%, #00eaff00 80%)',
            zIndex: 0,
          }} />
        </Paper>

        {/* Education - improved visual */}
        <Paper
          elevation={2}
          className={`glow-box${glowBox === 1 ? ' glow' : ''}`}
          onMouseEnter={() => setGlowBox(1)}
          onMouseLeave={() => setGlowBox(null)}
          onFocus={() => setGlowBox(1)}
          onBlur={() => setGlowBox(null)}
          sx={{
            p: 3,
            mb: 4,
            width: '100%',
            maxWidth: 600,
            background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
            color: '#fff',
            borderRadius: 4,
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, color: '#00eaff', mb: 2 }}>
            <span role="img" aria-label="Education" style={{marginRight: 8}}>🎓</span> Education
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ fontSize: 28, color: '#ffd200' }}>🏫</span>
              <div>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#fff' }}>B.Tech in Chemical Engineering</Typography>
                <Typography variant="body2" sx={{ color: '#e0f7fa' }}>IIT Patna, 2022 - 2026</Typography>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
              <span style={{ fontSize: 28, color: '#ffb300' }}>🏫</span>
              <div>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#fff' }}>12th, PCM</Typography>
                <Typography variant="body2" sx={{ color: '#e0f7fa' }}>Sunbeam Bhagwanpur, 2020 - 2021</Typography>
              </div>
            </div>
          </div>
        </Paper>


        {/* Floating Resume Download Button */}
        <a
          href="https://drive.google.com/file/d/1lnNc0GtrMqcO6v9YZpfGyj7by8F6ZRmg/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-fab"
          style={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1000,
            background: 'linear-gradient(120deg, #00eaff 0%, #185a9d 100%)',
            color: '#fff',
            borderRadius: '50%',
            width: 64,
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 24px #00eaff88',
            textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          title="Download Resume"
        >
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span style={{ fontSize: 12, marginTop: 2 }}>Resume</span>
          </span>
        </a>

        {/* Projects - Modern Card Layout */}
        <section className="projects-section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-list modern-projects-list triangle-projects-list">
            <div className="project-card modern-project-card project-top-left">
              <h3>Job Portal</h3>
              <p>A seamless recruitment portal for job seekers and recruiters.</p>
              <a href="https://github.com/Soumitra2003/Job-Portal" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="devicon-github-original colored" style={{ fontSize: 24, marginRight: 8 }}></i>
                GitHub
              </a>
            </div>
            <div className="project-card modern-project-card project-top-right">
              <h3>Bihta Bird</h3>
              <p>Inspired by Flappy Bird, with a touch of my college. Fun and challenging!</p>
              <a href="https://github.com/Soumitra2003/IITP-library-saver" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="devicon-github-original colored" style={{ fontSize: 24, marginRight: 8 }}></i>
                GitHub
              </a>
            </div>
            <div className="project-card modern-project-card project-bottom-center">
              <h3>Weather App</h3>
              <p>Weather app using API integration to check real-time weather.</p>
              <a href="https://github.com/Soumitra2003/Weather-app" target="_blank" rel="noopener noreferrer" className="project-link">
                <i className="devicon-github-original colored" style={{ fontSize: 24, marginRight: 8 }}></i>
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Tech Stacks */}
        <Paper
          elevation={4}
          className={`glow-box${glowBox === 4 ? ' glow' : ''}`}
          onMouseEnter={() => setGlowBox(4)}
          onMouseLeave={() => setGlowBox(null)}
          onFocus={() => setGlowBox(4)}
          onBlur={() => setGlowBox(null)}
          sx={{
            p: 3,
            mb: 4,
            width: '100%',
            maxWidth: 600,
            backdropFilter: 'blur(12px)',
            background: 'linear-gradient(135deg, #00eaffcc 0%, #ffb300cc 100%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Typography variant="h5" gutterBottom sx={{ color: '#222', fontWeight: 700 }}>
              Tech Stacks
            </Typography>
            {/* Tech stack logo slider */}
            <div className="tech-slider-container">
              <div className="tech-slider">
                {/* Cyclic slider: repeat logos for seamless loop, only requested techs */}
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" title="C++" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" title="Tailwind CSS" className="tech-logo" />
                {/* Repeat for smooth loop */}
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" title="C++" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" title="Tailwind CSS" className="tech-logo" />
                {/* Repeat for seamless infinite loop */}
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" title="C++" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" className="tech-logo" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" title="Tailwind CSS" className="tech-logo" />
              </div>
            </div>
          </Paper>

        {/* Socials */}
        <Paper
          elevation={4}
          className={`glow-box${glowBox === 5 ? ' glow' : ''}`}
          onMouseEnter={() => setGlowBox(5)}
          onMouseLeave={() => setGlowBox(null)}
          onFocus={() => setGlowBox(5)}
          onBlur={() => setGlowBox(null)}
          sx={{
            p: 3,
            mb: 4,
            width: '100%',
            maxWidth: 600,
            textAlign: 'center',
            backdropFilter: 'blur(12px)',
            background: 'linear-gradient(135deg, #f7971ecc 0%, #ffd200cc 100%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            borderRadius: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: '#222', fontWeight: 700 }}>
            Socials
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" className="socials-stack">
            <Button
              variant="contained"
              color="primary"
              href="https://www.linkedin.com/in/soumitra-upadhyay-a51bb7262/"
              target="_blank"
              startIcon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={{height: 24}} />}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="https://github.com/Soumitra2003"
              target="_blank"
              startIcon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={{height: 24, filter: 'invert(1)'}} />}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              color="info"
              href="mailto:soumitrau2003@gmail.com"
              target="_blank"
              startIcon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Gmail" style={{height: 24}} />}
            >
              Gmail
            </Button>
            <Button
              variant="contained"
              style={{ background: '#FFA116', color: '#222' }}
              href="https://leetcode.com/u/soumitra29/"
              target="_blank"
              startIcon={<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg" alt="LeetCode" style={{height: 24}} />}
            >
              LeetCode
            </Button>
          </Stack>
        </Paper>

        {/* Footer */}
        <footer style={{ width: '100%', textAlign: 'center', color: '#fff', opacity: 0.7, fontSize: 18, marginTop: 32, marginBottom: 8, letterSpacing: 1 }}>
          Made by Soumitra with ❤️
        </footer>
      </Container>
    </>
  );
}

export default App;
