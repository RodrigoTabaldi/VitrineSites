export const BIZ = {
  name: "Vitrine Sites",
  whatsapp: "5566996308666",
  whatsappDisplay: "(66) 99630-8666",
  email: "contatovitrinesites@gmail.com",
};

export const MSG = {
  nav: "Olá! Vim pelo site e quero um orçamento para o meu negócio.",
  hero: "Olá! Quero um site profissional para o meu negócio. Pode me passar um orçamento?",
  plansPresenca: "Olá! Tenho interesse no plano Vitrine Fixa (R$ 499 + R$ 99,90/mês). Pode me explicar melhor?",
  plansBusiness: "Olá! Tenho interesse no plano Vitrine de Fluxo Contínuo (R$ 499 + R$ 149,90/mês). Pode me explicar melhor?",
  contact: "Olá! Vim pelo site da Vitrine Sites e quero tirar uma dúvida sobre os planos.",
  float: "Olá! Quero saber mais sobre os sites da Vitrine Sites.",
  cardPresenca: "Olá! Quero assinar o plano Vitrine Fixa no cartão de crédito. Pode me mandar o link seguro?",
  cardBusiness: "Olá! Quero assinar o plano Vitrine de Fluxo Contínuo no cartão de crédito. Pode me mandar o link seguro?",
  pixComprovante: "Olá! Fiz o pagamento no Pix e estou enviando o comprovante.\n\nPlano: \nValor: \nNome do negócio: ",
};

export const wa = (k) =>
  `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(MSG[k] || MSG.contact)}`;

export const I = {
  search: '<path d="M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"/><path d="m21 21-4.3-4.3"/>',
  wa: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.7 8.9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.6 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"/>',
  route: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h6a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h3"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  lock: '<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="m10.8 12.2 8-8M17 6l2 2M14 9l2 2"/>',
  eyeOff: '<path d="M9.9 5.2A9.6 9.6 0 0 1 12 5c6 0 10 7 10 7a17 17 0 0 1-3 3.7M6.6 7.6A17 17 0 0 0 2 12s4 7 10 7a9.3 9.3 0 0 0 4.2-1"/><path d="m2 2 20 20"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  star: '<path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.2l5.9-.9z"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"/>',
  utensils: '<path d="M3 2v7c0 1.7 1.3 3 3 3s3-1.3 3-3V2M6 12v10M18 2v20M18 2c-1.7 1.5-3 4-3 7 0 2 1 3 3 3"/>',
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  car: '<path d="M5 17h14M4 17v-4l2-5h12l2 5v4"/><circle cx="7.5" cy="17.5" r="1.6"/><circle cx="16.5" cy="17.5" r="1.6"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7.2-7.2A2 2 0 0 1 3 12V4a1 1 0 0 1 1-1h8a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z"/><circle cx="7.5" cy="7.5" r="1.3"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 0 1 5 1c0 1.7-2.5 2-2.5 3.5"/><path d="M12 17h.01"/>',
  pix: '<path d="M12 2.8 21.2 12 12 21.2 2.8 12z"/><path d="M8 8l4 4 4-4M8 16l4-4 4 4"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
};

export const NAV = [
  { id: "inicio", label: "Início", icon: I.home },
  { id: "servicos", label: "O que ganha", icon: I.star },
  { id: "exemplos", label: "Exemplos", icon: I.image },
  { id: "planos", label: "Planos", icon: I.tag },
  { id: "pagamento", label: "Pagamento", icon: I.card },
  { id: "depoimentos", label: "Confiança", icon: I.shield },
  { id: "faq", label: "Dúvidas", icon: I.help },
];

export const BENEFITS = [
  { i: I.search, t: "Te acham no Google", d: "Quando alguém busca o seu serviço na sua região, o seu negócio aparece — em vez de você ficar invisível pra quem já queria comprar." },
  { i: I.wa, t: "O cliente te chama com um toque", d: "Botão de WhatsApp fixo na tela. O cliente aperta e já cai na sua conversa. Nada de formulário que ninguém preenche." },
  { i: I.pin, t: "Te encontram no mapa", d: "Seu ponto no Google Maps com botão “Como chegar”. O cliente abre a rota no GPS e vai direto até a sua porta." },
  { i: I.phone, t: "Fica perfeito no celular", d: "8 em cada 10 clientes acessam pelo celular. Seu site abre rápido e bonito em qualquer tela, sem travar e sem apertar os dedos." },
  { i: I.image, t: "Mostra o seu trabalho", d: "Galeria com fotos dos seus serviços e resultados. O cliente vê a qualidade antes de chamar e já chega decidido." },
  { i: I.shield, t: "Passa profissionalismo", d: "Um endereço próprio, tipo www.seunegocio.com.br, pra colocar no Instagram, no cartão e no WhatsApp. Vira a sua vitrine 24h." },
];

export const LOCAL = [
  { i: I.pin, t: "Seu ponto fixo no Google Maps", d: "O cliente vê exatamente onde você fica, com endereço, bairro e ponto de referência sempre à mão." },
  { i: I.route, t: "Botão “Como chegar” que abre o GPS", d: "Um toque e a rota abre no Waze ou no Maps do cliente. Menos “onde fica?” no WhatsApp, mais gente chegando na porta." },
  { i: I.search, t: "Apareça nas buscas “perto de mim”", d: "Quem procura “mecânica perto de mim” ou “salão no meu bairro” encontra você — mesmo sem nunca ter ouvido seu nome." },
];

export const CHECKS = [
  "Botão de WhatsApp flutuante",
  "Mapa com rota e “Como chegar”",
  "Horário com “aberto agora”",
  "Seção de depoimentos de clientes",
  "Links para suas redes sociais",
  "Perguntas frequentes (FAQ)",
  "Tabela de preços (se quiser)",
  "Site seguro com cadeado (https)",
  "Hospedagem inclusa",
  "Link bonito pra compartilhar no WhatsApp",
];

export const DEMOS = [
  {
    id: "vertice-automoveis", label: "Automóveis", icon: I.car, name: "Vértice Automóveis", color: "#0E2A47",
    tagline: "Seminovos com laudo e garantia.", href: "/exemplos/vertice-automoveis.html",
    items: ["Estoque com fotos e preço", "Simulação e contato pelo WhatsApp", "Laudo, garantia e localização"],
  },
  {
    id: "noir-atelier", label: "Salão", icon: I.scissors, name: "Noir Atelier", color: "#141414",
    tagline: "Salão de beleza premium.", href: "/exemplos/noir-atelier.html",
    items: ["Galeria de serviços e resultados", "Agendamento direto no WhatsApp", "Equipe, horários e depoimentos"],
  },
  {
    id: "casa-yang", label: "Restaurante", icon: I.utensils, name: "Casa Yang", color: "#7A1220",
    tagline: "Cozinha chinesa autoral.", href: "/exemplos/casa-yang.html",
    items: ["Cardápio ilustrado com fotos", "Reserva e pedido pelo WhatsApp", "Ambiente, história e localização"],
  },
];

export const PLANS = [
  {
    id: "presenca", name: "Vitrine Fixa", focus: "Cartão de visitas online", setup: "R$ 499,00", val: "R$ 99,90",
    desc: "Site moderno e seguro que funciona 24h, sem necessidade de atualizações frequentes.",
    outcome: "Ideal pra quem não mexe no site com frequência.", featured: false, msg: "plansPresenca",
    features: ["Site otimizado pro celular", "Hospedagem e segurança (SSL)", "WhatsApp fixo e ativo", "1 atualização por mês", "Suporte em até 48h"],
  },
  {
    id: "business", name: "Vitrine de Fluxo Contínuo", focus: "Atualizações e mudanças frequentes", setup: "R$ 499,00", val: "R$ 149,90",
    desc: "Para negócios que mudam preço, fotos e promoções regularmente, com suporte prioritário.",
    outcome: "Ideal pra quem quer mudar o site frequentemente.", featured: true, msg: "plansBusiness",
    features: ["Tudo do plano Vitrine Fixa", "Até 4 atualizações por mês", "Suporte prioritário (até 24h)", "Fotos e promoções sempre atualizadas", "Você manda — a gente faz"],
  },
];

export const COMPARE = [
  { f: "Taxa de criação", a: "R$ 499,00", b: "R$ 499,00" },
  { f: "Mensalidade", a: "R$ 99,90", b: "R$ 149,90" },
  { f: "Site otimizado pro celular", a: true, b: true },
  { f: "Hospedagem e SSL", a: true, b: true },
  { f: "WhatsApp ativo", a: true, b: true },
  { f: "Atualizações", a: "1/mês", b: "Até 4/mês" },
  { f: "Suporte", a: "48h", b: "24h prioritário" },
  { f: "Melhor para", a: "Cartão de visitas", b: "Mudanças frequentes" },
];

export const WARRANTIES = [
  { i: I.eye, t: "Prévia antes de pagar o final", d: "Você vê o site pronto no seu celular e só paga o valor final depois de aprovar. Não compra nada no escuro." },
  { i: I.refresh, t: "Ajustes inclusos na mensalidade", d: "Mudou o horário, o preço ou quer trocar uma foto? É só me chamar. Os ajustes do dia a dia já estão inclusos." },
  { i: I.shield, t: "Sem fidelidade, sem pegadinha", d: "Nada de contrato amarrando você por anos. Cancele quando quiser, sem multa e sem burocracia." },
];

export const SEALS = [
  { i: I.lock, t: "Conexão criptografada (SSL)", d: "Todo o site roda em https, com o cadeado de segurança do começo ao fim." },
  { i: I.shield, t: "Ambiente PCI-DSS", d: "O cartão é processado no gateway certificado — o padrão dos bancos e das grandes lojas." },
  { i: I.key, t: "Tokenização do cartão", d: "Os dados viram um token seguro no gateway. Nenhum número de cartão fica guardado com a gente." },
  { i: I.eyeOff, t: "Nada de dado sensível no site", d: "Este site não pede nem armazena número, validade ou CVV. Você digita direto na página do gateway." },
];

export const QUOTES = [
  { q: "Antes eu perdia cliente porque ninguém me achava. Agora mando o link no grupo do bairro e o pessoal já chega sabendo onde é e o que eu faço.", n: "João", r: "Dono de mecânica", ini: "JO", c: "#8C1D1D" },
  { q: "Ficou com a minha cara e os agendamentos pelo WhatsApp aumentaram. O melhor é que eu não precisei entender nada de tecnologia.", n: "Bela", r: "Dona de salão", ini: "BE", c: "#7A1140" },
  { q: "Mandei as fotos e em poucos dias o cardápio já estava no ar. O botão de rota trouxe gente que nunca tinha vindo aqui. Recomendo demais.", n: "Marcos", r: "Dono de restaurante", ini: "MA", c: "#8A4009" },
];

export const FAQ = [
  { q: "Preciso entender de tecnologia?", a: "Não. Você não precisa mexer em nada. Eu cuido de tudo: criação, publicação e manutenção. Você só me manda as informações pelo WhatsApp e aprova o resultado." },
  { q: "Em quanto tempo meu site fica pronto?", a: "Na maioria dos casos, entre 3 e 7 dias depois que você me envia o material (fotos, textos e endereço). Se for algo sob medida, combinamos o prazo antes de começar." },
  { q: "Qual a diferença entre os dois planos?", a: "A taxa de criação é a mesma nos dois: R$ 499, uma única vez. A diferença está na mensalidade e no suporte. O Vitrine Fixa (R$ 99,90/mês) é pra quem quase nunca mexe no site. O Vitrine de Fluxo Contínuo (R$ 149,90/mês) é pra quem muda preços, fotos e promoções: até 4 atualizações por mês inclusas e suporte prioritário." },
  { q: "A taxa de criação de R$ 499 é única?", a: "Sim, é paga uma só vez, na criação do site. Depois disso você paga apenas a mensalidade do plano que escolher (R$ 99,90 ou R$ 149,90), que mantém o site no ar, seguro e com as atualizações inclusas." },
  { q: "Como eu pago com segurança?", a: "Você paga por Pix ou cartão de crédito. No cartão, o pagamento acontece no ambiente seguro e certificado (PCI-DSS) do gateway. No Pix, você copia a chave (nosso e-mail), paga no seu banco e envia o comprovante pelo WhatsApp." },
  { q: "O cliente vai conseguir me achar no mapa?", a: "Sim. Todo site já vem com o seu ponto no mapa e um botão “Como chegar” que abre a rota no GPS do cliente." },
  { q: "Preciso ir até algum lugar?", a: "Não. Tudo é feito à distância, pelo WhatsApp. Você manda as informações, recebe a prévia no celular e aprova de onde estiver." },
  { q: "Já tenho Instagram. Preciso de site mesmo assim?", a: "O Instagram é ótimo, mas ele é da rede social, não seu. Um site próprio aparece no Google, tem endereço fixo, mapa com rota e botão de WhatsApp — e passa muito mais profissionalismo." },
  { q: "E se eu quiser cancelar?", a: "Sem multa e sem burocracia. Você pode cancelar a mensalidade quando quiser." },
];

export const AMOUNTS = [
  { id: "setup", label: "Taxa de criação (setup)", display: "R$ 499,00" },
  { id: "presenca", label: "Mensalidade · Vitrine Fixa", display: "R$ 99,90" },
  { id: "business", label: "Mensalidade · Fluxo Contínuo", display: "R$ 149,90" },
];

export const PIX_KEY = BIZ.email;
