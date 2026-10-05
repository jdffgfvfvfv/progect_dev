import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './fonts.css';
import './style.css';
import './indices.css';

const assets = {
  logo: '/assets/logo.svg',
  arrow: '/assets/chevron.svg',
  language: '/assets/language.svg',
  shield: '/assets/regulation-shield.png',
};
const navigation = ['Trading', 'Company', 'Resources', 'Partnership'];
const menus = {
  Trading: ['交易市场111', '交易平台111', '账户类型'],
  Company: ['牌照与监管', '关于 QUBE', '联系我们'],
  Resources: ['交易学院', '市场资讯', '交易工具'],
  Partnership: ['合作伙伴', '经纪商计划'],
  EN: ['English'],
};

function Header({ onAccount }) {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    const close = event => { if (event.key === 'Escape') setMenu(null); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return <header className="site-header" data-node-id="8799:2843">
    <div className="header-inner">
      <div className="header-left">
        <a className="brand" href="/" aria-label="QUBE Markets"><img src={assets.logo} alt="QUBE" /></a>
        <nav aria-label="主导航">{navigation.map(label => <div className="nav-item" key={label}>
          <button className="nav-trigger" aria-expanded={menu === label} onClick={() => setMenu(menu === label ? null : label)}>{label}<img src={assets.arrow} alt="" /></button>
          {menu === label && <div className="nav-dropdown">{menus[label].map(item => item === '关于 QUBE' || item === '牌照与监管' ? <a key={item} href={item === '关于 QUBE' ? '/global-indices' : '/'}>{item}</a> : <button key={item} onClick={() => { setMenu(null); onAccount(item); }}>{item}</button>)}</div>}
        </div>)}</nav>
      </div>
      <div className="header-actions">
        <button className="login" onClick={() => onAccount('登录')}>Login</button>
        <button className="signup" onClick={() => onAccount('开立真实账户')}>Sign up</button>
        <div className="nav-item language">
          <button className="language-trigger" aria-label="选择语言" aria-expanded={menu === 'EN'} onClick={() => setMenu(menu === 'EN' ? null : 'EN')}><img className="globe" src={assets.language} alt="" /><span>EN</span><img className="chevron" src={assets.arrow} alt="" /></button>
          {menu === 'EN' && <div className="nav-dropdown"><button onClick={() => setMenu(null)}>English</button></div>}
        </div>
      </div>
    </div>
  </header>;
}

function AccountDialog({ title, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const close = event => { if (event.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', close);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close); };
  }, [onClose]);
  return <div className="modal-backdrop" onClick={onClose}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onClick={event => event.stopPropagation()}>
    <button className="close" aria-label="关闭" onClick={onClose}>×</button>
    <h2 id="dialog-title">{title}</h2>
    <p className="demo-note">当前为本地界面演示，尚未连接账户或交易服务。</p>
    {submitted ? <p role="status">演示表单已提交，未发送任何数据。</p> : <form onSubmit={event => { event.preventDefault(); setSubmitted(true); }}>
      <label>电子邮箱<input autoFocus required type="email" placeholder="you@example.com" /></label>
      {title === '登录' && <label>密码<input required type="password" minLength={6} autoComplete="current-password" /></label>}
      <button className="submit" type="submit">继续演示</button>
    </form>}
  </section></div>;
}

function App() {
  // 使用实际内容宽度，排除浏览器纵向滚动条占用的空间。
  const getScale = () => {
    const width = document.documentElement.clientWidth;
    return width < 768 ? 1 : Math.min(width / 1920, 1);
  };
  const [scale, setScale] = useState(getScale);
  const [dialog, setDialog] = useState(null);
  useEffect(() => {
    const resize = () => setScale(getScale());
    const observer = new ResizeObserver(resize);
    observer.observe(document.documentElement);
    window.addEventListener('resize', resize);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
    };
  }, []);
  return <>
    {window.location.pathname === '/global-indices' ? <main className="regulation-page indices-page" style={{ zoom: scale }} data-node-id="8806:3081">
      <section className="indices-hero">
        <Header onAccount={setDialog} />
        <div className="indices-art" data-node-id="8806:3493"><img src="/assets/global-indices.png" alt="银色柱状图与向上箭头" /></div>
        <div className="indices-copy" data-node-id="8806:3495">
          <div className="indices-text">
            <h1 data-node-id="8806:3498">Master Global Markets. Trade World Indices.</h1>
            <p data-node-id="8806:3499">Access major global indices and capture market opportunities with fast, reliable execution.</p>
          </div>
          <div className="hero-actions">
            <button className="action action-primary" onClick={() => setDialog('开立真实账户')}>Start Trading</button>
            <button className="action action-secondary" onClick={() => setDialog('登录')}>Log In Now</button>
          </div>
        </div>
      </section>
      <nav className="market-navigation" aria-label="交易市场">
        {['Precious Metals','Commodities','Global Indices','Stocks','Forex','ETFs & Bonds','Cryptocurrencies'].map(label => <button key={label} className={label === 'Global Indices' ? 'active' : ''} aria-current={label === 'Global Indices' ? 'page' : undefined} onClick={() => { if(label !== 'Global Indices') setDialog(label); }}>{label}</button>)}
      </nav>
    </main> : <main className="regulation-page" style={{ zoom: scale }} data-node-id="8799:2773">
      <section className="regulation-hero">
        <div className="hero-background" data-node-id="8799:2774" />
        <Header onAccount={setDialog} />
        <div className="hero-copy" data-node-id="8799:2879">
          <h1 data-node-id="8799:2880">Global Oversight. A Trading Environment Built on Trust.</h1>
          <p className="hero-description" data-node-id="8799:2881">Qube Markets is committed to transparency, regulatory compliance and client interests, operating in accordance with applicable regulatory requirements across relevant jurisdictions to support a robust foundation for its global operations.</p>
          <div className="hero-actions" data-node-id="8799:2883">
            <button className="action action-primary" data-node-id="8799:2884" onClick={() => setDialog('开立真实账户')}>Open a Live Account</button>
            <button className="action action-secondary" data-node-id="8799:2886" onClick={() => setDialog('试用模拟账户')}>Try a Demo Account</button>
          </div>
        </div>
        <div className="shield-frame" data-node-id="8799:2888"><img src={assets.shield} alt="银色盾牌与勾号，象征监管与信任" /></div>
      </section>
      <div className="page-bottom" />
    </main>}
    {dialog && <AccountDialog title={dialog} onClose={() => setDialog(null)} />}
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
