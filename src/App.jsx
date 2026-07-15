import { useEffect, useRef, useState } from "react";
import {
  BIZ, wa, I, NAV, BENEFITS, LOCAL, CHECKS, DEMOS, PLANS, COMPARE,
  WARRANTIES, SEALS, QUOTES, FAQ, AMOUNTS, PIX_KEY,
} from "./data";
import { STAGE_HTML, MAP_SVG } from "./rawMarkup";
import "./index.css";

/* ícone inline a partir dos paths de data.js */
const Ico = ({ d, ...rest }) => (
  <svg
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
    dangerouslySetInnerHTML={{ __html: d }} {...rest}
  />
);

const WaLink = ({ msg, className, children, ...rest }) => (
  <a className={className} href={wa(msg)} target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
);

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2z" />
  </svg>
);

/* revela elementos ao entrar na viewport */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  const [active, setActive] = useState("inicio");
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [picked, setPicked] = useState(0);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const trackRef = useRef(null);

  useReveal();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        setShowFab(window.scrollY > 560);
        ticking = false;
      });
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  /* scrollspy + auto-centralização da aba ativa */
  useEffect(() => {
    const spy = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const chip = track?.querySelector(`a[href="#${active}"]`);
    if (!track || !chip) return;
    track.scrollTo({
      left: chip.offsetLeft - (track.clientWidth - chip.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [active]);

  const copyPix = async () => {
    try { await navigator.clipboard.writeText(PIX_KEY); }
    catch {
      const ta = document.createElement("textarea");
      ta.value = PIX_KEY; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2600);
  };

  const demo = DEMOS[tab];
  const yes = <Ico d={I.check} />;
  const no = <span className="no">—</span>;
  const cell = (v) => (v === true ? yes : v === false ? no : v);

  return (
    <>
      <a href="#inicio" className="skip-link">Pular para o conteúdo</a>

      {/* ================= HEADER ================= */}
      <header id="header" className={scrolled ? "scrolled" : ""}>
        <div className="wrap bar">
          <a href="#inicio" className="logo" aria-label="Vitrine Sites — ir para o início">
            <svg className="mark" viewBox="0 0 120 120" role="img" aria-hidden="true">
              <circle cx="60" cy="60" r="48" fill="none" stroke="#101828" strokeWidth="7.68" />
              <ellipse cx="60" cy="60" rx="21.6" ry="48" fill="none" stroke="#2E5BFF" strokeWidth="7.68" />
              <line x1="12" y1="60" x2="108" y2="60" stroke="#101828" strokeWidth="7.68" strokeLinecap="round" />
              <line x1="19.26" y1="36" x2="100.74" y2="36" stroke="#101828" strokeWidth="7.68" strokeLinecap="round" />
              <line x1="19.26" y1="84" x2="100.74" y2="84" stroke="#101828" strokeWidth="7.68" strokeLinecap="round" />
            </svg>
            <span className="word"><b>vitrine <em>sites</em></b></span>
          </a>

          <nav className="main" aria-label="Navegação principal">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""}>
                {n.id === "servicos" ? "O que você ganha" : n.label}
              </a>
            ))}
          </nav>

          <WaLink msg="nav" className="btn btn-ink btn-sm head-cta">
            <Ico d={I.wa} /> Pedir orçamento
          </WaLink>

          <WaLink msg="nav" className="head-wa" aria-label="Falar no WhatsApp">
            <WaIcon /> Orçamento
          </WaLink>
        </div>

        {/* abas mobile */}
        <nav className="tabbar" aria-label="Navegação por seções">
          <div className="track" ref={trackRef}>
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className={active === n.id ? "active" : ""}>
                <Ico d={n.icon} strokeWidth="2" />{n.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section className="hero" id="inicio">
          <div className="wrap hero-grid">
            <div className="reveal">
              <span className="eyebrow"><span className="dot" />Atendimento 100% online, para todo o Brasil</span>
              <h1>Seu negócio com um site que <span className="hl">traz cliente</span></h1>
              <p className="lede">
                Sites one-page profissionais para comércios e prestadores de serviço. Rápido, no
                celular, no Google e com o cliente chamando direto no seu WhatsApp.
              </p>
              <div className="cta">
                <WaLink msg="hero" className="btn btn-wa"><WaIcon /> Falar no WhatsApp</WaLink>
                <a className="btn btn-ghost" href="#planos">Ver planos e preços</a>
              </div>
              <div className="micro">
                {["Prévia antes de pagar", "No ar em poucos dias", "Sem fidelidade"].map((t) => (
                  <span key={t}><Ico d={I.check} strokeWidth="2.4" />{t}</span>
                ))}
              </div>
            </div>

            {/* mockups (notebook + celular) */}
            <div dangerouslySetInnerHTML={{ __html: STAGE_HTML }} />
          </div>
        </section>

        {/* ================= TRUST STRIP ================= */}
        <div className="strip">
          <div className="wrap" style={{ padding: 0 }}>
            <div className="strip-grid">
              {[
                [I.clock, "Poucos dias", "do combinado ao site no ar"],
                [I.wa, "Sem robô", "você fala direto comigo"],
                [I.lock, "Site seguro", "https e hospedagem inclusos"],
                [I.shield, "Sem fidelidade", "cancele quando quiser"],
              ].map(([ic, t, d]) => (
                <div className="strip-item" key={t}>
                  <Ico d={ic} />
                  <span><b>{t}</b><span>{d}</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= SERVIÇOS ================= */}
        <section id="servicos">
          <div className="wrap">
            <div className="head center reveal">
              <span className="eyebrow"><span className="dot" />O que você ganha</span>
              <h2>Tudo que o seu negócio precisa pra <span className="hl">vender mais</span></h2>
              <p>Nada de site enfeitado que não traz ninguém. Cada peça aqui existe pra o cliente te achar, confiar e te chamar.</p>
            </div>

            <div className="segs reveal" style={{ marginBottom: 44 }}>
              {[
                [I.wrench, "Mecânicas"], [I.scissors, "Salões"], [I.utensils, "Restaurantes"],
                [I.image, "Lojas"], [I.shield, "Clínicas"], [I.star, "Academias"],
              ].map(([ic, t]) => (
                <span className="seg" key={t}><Ico d={ic} strokeWidth="1.9" />{t}</span>
              ))}
            </div>

            <div className="grid-3">
              {BENEFITS.map((b) => (
                <article className="card" key={b.t}>
                  <span className="ic"><Ico d={b.i} /></span>
                  <h3>{b.t}</h3>
                  <p>{b.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MAPA / LOCAL ================= */}
        <section className="tinted" id="local">
          <div className="wrap split">
            <div className="reveal">
              <span className="eyebrow"><span className="dot" />Presença local</span>
              <h2 style={{ margin: "18px 0 14px" }}>Faça o cliente <span className="hl">chegar até você</span></h2>
              <p>A maior parte das vendas locais começa com um “onde fica?”. Seu site responde isso sozinho: ponto no mapa, rota no GPS e presença nas buscas de quem está por perto.</p>
              <div className="local-list">
                {LOCAL.map((l) => (
                  <div className="local-item" key={l.t}>
                    <span className="ic"><Ico d={l.i} /></span>
                    <div><h3>{l.t}</h3><p>{l.d}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="map-art reveal" dangerouslySetInnerHTML={{ __html: MAP_SVG }} />
          </div>
        </section>

        {/* ================= INCLUSO ================= */}
        <section id="incluso">
          <div className="wrap">
            <div className="head reveal">
              <span className="eyebrow"><span className="dot" />Já vem tudo dentro</span>
              <h2 style={{ margin: "18px 0 14px" }}>Você não precisa contratar <span className="hl">dez coisas</span></h2>
              <p>O seu site já sai completo, seguro e pronto pra receber cliente. Sem plugin, sem mensalidade escondida, sem dor de cabeça.</p>
            </div>
            <div className="checks reveal">
              {CHECKS.map((c) => (
                <div className="check" key={c}><Ico d={I.check} /><span>{c}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= EXEMPLOS ================= */}
        <section className="tinted" id="exemplos">
          <div className="wrap">
            <div className="head center reveal">
              <span className="eyebrow"><span className="dot" />Exemplos</span>
              <h2>Como fica o site do <span className="hl">seu ramo</span></h2>
              <p>Cada negócio tem uma necessidade. O site é montado em cima dela — não em cima de um modelo genérico.</p>
            </div>

            <div className="tabs reveal" role="tablist" aria-label="Exemplos por segmento">
              {DEMOS.map((d, i) => (
                <button
                  key={d.id} className="tab" role="tab" id={`tab-${d.id}`} aria-controls="demo"
                  aria-selected={i === tab} tabIndex={i === tab ? 0 : -1}
                  onClick={() => setTab(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight") setTab((t) => (t + 1) % DEMOS.length);
                    if (e.key === "ArrowLeft") setTab((t) => (t - 1 + DEMOS.length) % DEMOS.length);
                  }}
                >
                  <Ico d={d.icon} />{d.label}
                </button>
              ))}
            </div>

            <div id="demo" className="reveal">
              <div className="demo fade-in" key={demo.id}>
                <div
                  className="demo-visual"
                  style={{ background: `linear-gradient(150deg, ${demo.color}, ${demo.color}CC 55%, #101828)` }}
                >
                  <span className="badge">{demo.label}</span>
                  <h3>{demo.name}</h3>
                  <p>{demo.tagline}</p>
                </div>
                <div className="demo-side">
                  <h4>O que esse site tem</h4>
                  <ul>
                    {demo.items.map((x) => (
                      <li key={x}><Ico d={I.check} /><span>{x}</span></li>
                    ))}
                  </ul>
                  <div className="demo-actions">
                    <a className="btn btn-ghost btn-full" href={demo.href || `/exemplos/${demo.id}`}
                      {...(demo.href ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      Ver exemplo completo
                    </a>
                    <WaLink msg="hero" className="btn btn-wa btn-full">Quero um site assim</WaLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PLANOS ================= */}
        <section id="planos">
          <div className="wrap">
            <div className="head center reveal">
              <span className="eyebrow"><span className="dot" />Planos e preços</span>
              <h2>Uma taxa de criação. <span className="hl">Você escolhe a mensalidade</span></h2>
              <p>A criação do site custa o mesmo nos dois planos. A diferença é o nível de atualização e suporte que você quer no dia a dia.</p>
            </div>

            <div className="plans reveal">
              {PLANS.map((p) => (
                <article className={`plan${p.featured ? " featured" : ""}`} key={p.id}>
                  <span className="focus">{p.focus}</span>
                  <h3>{p.name}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="price">
                    <div className="setup"><span>Taxa de criação (única)</span><b>{p.setup}</b></div>
                    <div className="sep" />
                    <div className="mo"><span className="val">{p.val}</span><span className="per">/mês</span></div>
                  </div>
                  <ul>
                    {p.features.map((f) => (
                      <li key={f}><Ico d={I.check} /><span>{f}</span></li>
                    ))}
                  </ul>
                  <WaLink msg={p.msg} className={`btn ${p.featured ? "btn-ink" : "btn-ghost"} btn-full`}>
                    Assinar {p.name}
                  </WaLink>
                  <p className="outcome">{p.outcome}</p>
                </article>
              ))}
            </div>

            <div className="table-wrap reveal">
              <table>
                <caption style={{ position: "absolute", left: "-9999px" }}>
                  Comparativo entre os planos Vitrine Fixa e Vitrine de Fluxo Contínuo
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Benefício</th>
                    <th scope="col" style={{ textAlign: "center" }}>Vitrine Fixa</th>
                    <th scope="col" style={{ textAlign: "center" }}>Fluxo Contínuo</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.f}>
                      <th scope="row">{r.f}</th>
                      <td>{cell(r.a)}</td>
                      <td>{cell(r.b)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="warranties reveal">
              {WARRANTIES.map((w) => (
                <div className="warranty" key={w.t}>
                  <Ico d={w.i} />
                  <div><b>{w.t}</b><p>{w.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PAGAMENTO ================= */}
        <section className="tinted" id="pagamento">
          <div className="wrap">
            <div className="head center reveal">
              <span className="eyebrow"><span className="dot" />Pagamento</span>
              <h2>Pague com <span className="hl">total segurança</span></h2>
              <p>Cartão de crédito com tokenização em ambiente certificado, ou Pix com envio de comprovante. Você escolhe.</p>
            </div>

            <div className="pay reveal">
              {/* PIX */}
              <div className="pay-card">
                <h3><Ico d={I.pix} />Pix</h3>
                <p>Copie a chave Pix (nosso e-mail), pague no app do seu banco com o valor do seu plano e mande o comprovante.</p>

                <div className="amounts" role="group" aria-label="Escolha o valor do Pix">
                  {AMOUNTS.map((a, i) => (
                    <button key={a.id} className="amt" aria-pressed={i === picked} onClick={() => setPicked(i)}>
                      <span style={{ display: "flex", alignItems: "center", gap: 11 }}>
                        <span className="rad" aria-hidden="true" />{a.label}
                      </span>
                      <b>{a.display}</b>
                    </button>
                  ))}
                </div>

                <div className="pix-key">
                  <span className="k">Chave Pix · e-mail</span>
                  <b>{PIX_KEY}</b>
                </div>

                <button className="btn btn-ink btn-full" onClick={copyPix}>
                  <Ico d={I.copy} strokeWidth="1.9" />Copiar chave Pix
                </button>
                <p className={`copied${copied ? " on" : ""}`} role="status">
                  <Ico d={I.check} strokeWidth="2.6" />Chave copiada!
                </p>

                <ol className="steps">
                  <li>Toque em “Copiar chave Pix” (a chave é o nosso e-mail).</li>
                  <li>Abra o app do seu banco, em Pix › Pagar com chave.</li>
                  <li>Cole a chave, digite o valor do plano e confirme.</li>
                  <li>Volte aqui e nos envie o comprovante pelo WhatsApp.</li>
                </ol>

                <WaLink msg="pixComprovante" className="btn btn-wa btn-full">
                  <WaIcon /> Já paguei — enviar comprovante
                </WaLink>
              </div>

              {/* CARTÃO */}
              <div className="pay-card">
                <h3><Ico d={I.card} />Cartão de crédito</h3>
                <p>O pagamento no cartão abre o checkout seguro do nosso gateway certificado. Os dados do seu cartão são digitados e tokenizados lá — nunca ficam guardados neste site.</p>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  <WaLink msg="cardPresenca" className="btn btn-brand btn-full">Assinar Vitrine Fixa no cartão</WaLink>
                  <WaLink msg="cardBusiness" className="btn btn-ghost btn-full">Assinar Fluxo Contínuo no cartão</WaLink>
                </div>

                <div style={{ border: "1px dashed var(--line)", borderRadius: "var(--r-md)", padding: 18, background: "var(--paper)" }}>
                  <b style={{ display: "block", fontSize: ".9rem", marginBottom: 10 }}>O que você vai pagar?</b>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: ".92rem", color: "var(--ink-2)" }}>
                    {AMOUNTS.map((a) => (
                      <li key={a.id} style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>{a.label}</span>
                        <b style={{ fontVariantNumeric: "tabular-nums" }}>{a.display}</b>
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: ".83rem", color: "var(--ink-3)", marginTop: 12 }}>
                    Taxa de criação única de R$ 499,00. Depois, só a mensalidade do plano que você escolher.
                  </p>
                </div>
              </div>
            </div>

            <div className="seals reveal">
              {SEALS.map((s) => (
                <div className="seal" key={s.t}>
                  <Ico d={s.i} /><b>{s.t}</b><p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= DEPOIMENTOS ================= */}
        <section id="depoimentos">
          <div className="wrap">
            <div className="head center reveal">
              <span className="eyebrow"><span className="dot" />Confiança</span>
              <h2>Quem já tem site <span className="hl">recomenda</span></h2>
              <p>Negócios reais que saíram da invisibilidade e passaram a ser encontrados.</p>
            </div>
            <div className="grid-3 reveal">
              {QUOTES.map((q) => (
                <figure className="quote" key={q.n}>
                  <div className="stars" aria-label="5 de 5 estrelas">
                    {Array.from({ length: 5 }, (_, i) => <Ico key={i} d={I.star} />)}
                  </div>
                  <blockquote>{q.q}</blockquote>
                  <figcaption className="who">
                    <span className="avatar" style={{ background: q.c }} aria-hidden="true">{q.ini}</span>
                    <span><b>{q.n}</b><span>{q.r}</span></span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="tinted" id="faq">
          <div className="wrap">
            <div className="head center reveal">
              <span className="eyebrow"><span className="dot" />Dúvidas</span>
              <h2>Ficou com <span className="hl">alguma dúvida?</span></h2>
              <p>As perguntas que mais recebo de quem está pensando em ter um site.</p>
            </div>

            <div className="faq reveal">
              {FAQ.map((f, i) => (
                <div className="q" key={f.q}>
                  <h3 style={{ fontFamily: "inherit" }}>
                    <button
                      aria-expanded={openFaq === i} aria-controls={`a-${i}`} id={`qb-${i}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{f.q}</span>
                      <span className="chev"><Ico d='<path d="m6 9 6 6 6-6"/>' /></span>
                    </button>
                  </h3>
                  <div className={`a${openFaq === i ? " open" : ""}`} id={`a-${i}`} role="region" aria-labelledby={`qb-${i}`}>
                    <div><p>{f.a}</p></div>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ textAlign: "center", marginTop: 34, color: "var(--ink-3)", fontSize: ".95rem" }}>
              Não achou a sua pergunta?{" "}
              <WaLink msg="contact" style={{ color: "var(--brand)", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>
                Me chama no WhatsApp.
              </WaLink>
            </p>
          </div>
        </section>

        {/* ================= CTA FINAL ================= */}
        <section className="final" id="contato">
          <div className="wrap">
            <h2 className="reveal">Bora colocar o seu negócio <span className="hl">no mapa</span></h2>
            <p className="reveal">Me chama no WhatsApp com o nome do seu negócio. O orçamento sai em minutos, sem compromisso.</p>
            <div className="cta reveal">
              <WaLink msg="hero" className="btn btn-wa"><WaIcon /> Pedir meu orçamento</WaLink>
              <a className="btn btn-ghost" href="#planos">Rever os planos</a>
            </div>
            <div className="contact reveal">
              <WaLink msg="contact"><Ico d={I.wa} strokeWidth="1.9" />{BIZ.whatsappDisplay}</WaLink>
              <a href={`mailto:${BIZ.email}`}><Ico d={I.mail} strokeWidth="1.9" />{BIZ.email}</a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="wrap">
          <div className="foot">
            <div>
              <span className="logo">
                <svg className="mark" viewBox="0 0 120 120" aria-hidden="true">
                  <circle cx="60" cy="60" r="48" fill="none" stroke="#101828" strokeWidth="7.68" />
                  <ellipse cx="60" cy="60" rx="21.6" ry="48" fill="none" stroke="#2E5BFF" strokeWidth="7.68" />
                  <line x1="12" y1="60" x2="108" y2="60" stroke="#101828" strokeWidth="7.68" strokeLinecap="round" />
                  <line x1="19.26" y1="36" x2="100.74" y2="36" stroke="#101828" strokeWidth="7.68" strokeLinecap="round" />
                  <line x1="19.26" y1="84" x2="100.74" y2="84" stroke="#101828" strokeWidth="7.68" strokeLinecap="round" />
                </svg>
                <span className="word"><b>vitrine <em>sites</em></b></span>
              </span>
              <p>Sites profissionais para negócios locais que querem ser encontrados e vender mais. Atendimento 100% online, para todo o Brasil.</p>
            </div>
            <div>
              <h4>Navegação</h4>
              <ul>
                {NAV.filter((n) => n.id !== "inicio").map((n) => (
                  <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li><WaLink msg="contact">WhatsApp {BIZ.whatsappDisplay}</WaLink></li>
                <li><a href={`mailto:${BIZ.email}`}>{BIZ.email}</a></li>
              </ul>
            </div>
          </div>
          <div className="copy">
            <span>© {new Date().getFullYear()} Vitrine Sites. Feito com capricho para negócios locais.</span>
            <span>Taxa de criação única de R$ 499,00 · Mensalidade a partir de R$ 99,90</span>
          </div>
        </div>
      </footer>

      <WaLink msg="float" className={`fab${showFab ? " show" : ""}`} aria-label="Falar no WhatsApp">
        <WaIcon /><span className="lbl">Falar no WhatsApp</span>
      </WaLink>
    </>
  );
}
