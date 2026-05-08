// ===========================================
// CONTEUDO.JS — Hub de Estudos TCE-PE & ALEPE
// ===========================================
// Estrutura completa — 26 matérias
// Para adicionar aula: entregue aulaNN.js + este arquivo atualizado
// ===========================================

window.MATERIAS = {
  // CONHECIMENTO BÁSICO
  dc:  {nome:'Direito Constitucional',        tipo:'basico',    cor:'var(--p2)'},
  da:  {nome:'Direito Administrativo',         tipo:'basico',    cor:'var(--b2c)'},
  lp:  {nome:'Língua Portuguesa',              tipo:'basico',    cor:'var(--g2)'},
  rl:  {nome:'Raciocínio Lógico e Matemático', tipo:'basico',    cor:'var(--go2)'},
  ap:  {nome:'Administração Pública',          tipo:'basico',    cor:'var(--t2c)'},
  ti:  {nome:'Tecnologia da Informação',       tipo:'basico',    cor:'var(--o2)'},
  ea:  {nome:'Estatística Aplicada',           tipo:'basico',    cor:'var(--r2)'},
  mf:  {nome:'Matemática Financeira',          tipo:'basico',    cor:'var(--p3)'},
  // CONHECIMENTO ESPECÍFICO
  cg:  {nome:'Contabilidade Geral e Societária',       tipo:'especifico', cor:'var(--go3)'},
  cp:  {nome:'Contabilidade Pública',                  tipo:'especifico', cor:'var(--g3)'},
  afo: {nome:'Administração Financeira e Orçamentária',tipo:'especifico', cor:'var(--b3c)'},
  lrf: {nome:'Lei de Responsabilidade Fiscal',         tipo:'especifico', cor:'var(--r2)'},
  df:  {nome:'Direito Financeiro',                     tipo:'especifico', cor:'var(--p2)'},
  dt:  {nome:'Direito Tributário',                     tipo:'especifico', cor:'var(--o2)'},
  lt:  {nome:'Legislação Tributária',                  tipo:'especifico', cor:'var(--go2)'},
  ce:  {nome:'Controle Externo',                       tipo:'especifico', cor:'var(--t2c)'},
  ag:  {nome:'Auditoria Governamental',                tipo:'especifico', cor:'var(--g2)'},
  ai:  {nome:'Auditoria Independente',                 tipo:'especifico', cor:'var(--b2c)'},
  nbc: {nome:'Normas Brasileiras de Contabilidade',    tipo:'especifico', cor:'var(--p3)'},
  adc: {nome:'Análise das Demonstrações Contábeis',    tipo:'especifico', cor:'var(--go3)'},
  fp:  {nome:'Finanças Públicas',                      tipo:'especifico', cor:'var(--g3)'},
  gp:  {nome:'Gestão Pública',                         tipo:'especifico', cor:'var(--b3c)'},
  dp:  {nome:'Direito Previdenciário',                 tipo:'especifico', cor:'var(--r2)'},
  pa:  {nome:'Direito Processual Administrativo',      tipo:'especifico', cor:'var(--p2)'},
  ep:  {nome:'Ética no Serviço Público',               tipo:'especifico', cor:'var(--o2)'},
  cc:  {nome:'Contabilidade de Custos',                tipo:'especifico', cor:'var(--go2)'},
};

// ===========================================
// AULAS — cresce conforme PDFs chegam
// Cada entrada = +1.000 no teto de XP
// ===========================================
window.AULAS = {
  dc:  ['Aula 00 — Normas Constitucionais e Poder Constituinte','Aula 01 — Gerações e Características dos Direitos Fundamentais'],
  da:  [], lp:  [], rl:  [], ap:  [], ti:  [], ea:  [], mf:  [],
  cg:  [], cp:  [], afo: [], lrf: [], df:  [], dt:  [], lt:  [],
  ce:  [], ag:  [], ai:  [], nbc: [], adc: [], fp:  [], gp:  [],
  dp:  [], pa:  [], ep:  [], cc:  [],
};

// ===========================================
// TEMAS — contexto para geração de questões IA
// ===========================================
window.TEMAS = {
  dc: [
    {id:'dc_0',nome:'Aula 00 — Normas · Hierarquia · Poder Constituinte',ctx:`Eficácia Plena: direta, imediata, integral — autoaplicável, não restringível. Eficácia Contida: nasce plena, pode ser restringida por lei. Eficácia Limitada: indireta, mediata, reduzida — gera efeito negativo e vinculativo. Maria Helena Diniz: absoluta, plena, relativa restringível (=contida), relativa complementável (=limitada). Hierarquia: Constitucional = originárias + ECs + tratados DH §3 art.5. Supralegal = tratados DH rito ordinário (SV 25). Legal = LC, LO, MP. Infralegal = decretos. NÃO há hierarquia entre LC e LO nem entre leis federal/estadual/municipal. PCO: político, inicial, incondicionado, permanente, ilimitado juridicamente. PCD: reformador (ECs 3/5 em 2 turnos), decorrente (Estados; Municípios=Lei Orgânica, NÃO têm PC decorrente), revisor (exaurido), difuso (mutação constitucional). ADI 815: rejeita Otto Bachof. SOCIDIVAPLU art.1. ERRADICAR pobreza, REDUZIR desigualdades art.3. Cláusulas pétreas art.60§4.`},
    {id:'dc_1',nome:'Aula 01 — Gerações e Características dos Direitos Fundamentais',ctx:`Direitos do homem (jusnaturalista) x Direitos fundamentais (CF, Título II) x Direitos humanos (tratados internacionais). Direitos=bens protegidos; Garantias=instrumentos de proteção (habeas corpus). Gerações: 1ª=liberdade/não fazer/civis e políticos; 2ª=igualdade/fazer/sociais econômicos culturais/programáticas; 3ª=fraternidade/difusos e coletivos; 4ª=Bonavides:democracia,informação,pluralismo / Bobbio:engenharia genética; 5ª=paz. Lema Revolução Francesa. Gerações se ACUMULAM — doutrina prefere dimensões. STF MS 22.164-SP. Jellinek: passivo=sujeição; negativo=liberdade; positivo=prestação; ativo=direitos políticos. Características: universalidade (exceção:grupos específicos); historicidade; indivisibilidade; inalienabilidade; imprescritibilidade; irrenunciabilidade (exceção:autolimitação voluntária); relatividade=MAIS COBRADA/NÃO HÁ DIREITO ABSOLUTO/concordância prática; efeito cliquet. Teoria interna(absoluta) x externa(relativa/ponderação). Limites dos limites: adequação+necessidade+proporcionalidade. Eficácia vertical x horizontal(STF RE 201.819/RJ, teoria direta e imediata prevalece) x diagonal. Catálogo Título II: 5 categorias, TODAS espécies do gênero. Art.5§2: sistema aberto.`},
  ],
  da:[], lp:[], rl:[], ap:[], ti:[], ea:[], mf:[],
  cg:[], cp:[], afo:[], lrf:[], df:[], dt:[], lt:[],
  ce:[], ag:[], ai:[], nbc:[], adc:[], fp:[], gp:[],
  dp:[], pa:[], ep:[], cc:[],
};

// ===========================================
// CARDS — flashcards de todas as matérias
// ===========================================
window.CARDS = [
  {id:'dc001',q:'Quais os três tipos de eficácia das normas (José Afonso da Silva)?',a:'<strong>Plena</strong>: direta, imediata, integral — não restringível.<br><strong>Contida</strong>: nasce plena, pode ser restringida por lei.<br><strong>Limitada</strong>: indireta, mediata — gera efeito negativo e vinculativo.',mat:'DC · Aula 00'},
  {id:'dc002',q:'Qual o efeito IMEDIATO das normas de eficácia LIMITADA?',a:'<strong>Efeito negativo</strong>: revoga leis contrárias e proíbe novas.<br><strong>Efeito vinculativo</strong>: obriga o legislador a regulamentar.<br>Limitada ≠ sem efeito!',mat:'DC · Aula 00'},
  {id:'dc003',q:'Qual o mnemônico para os Fundamentos da República (Art. 1º CF/88)?',a:'<strong>SOCIDIVAPLU</strong>:<br>SO→Soberania · CI→Cidadania · DI→Dignidade · VA→Valores sociais · PLU→Pluralismo político',mat:'DC · Aula 00'},
  {id:'dc004',q:'A CF/88 visa ERRADICAR ou REDUZIR a pobreza? E as desigualdades?',a:'<strong>ERRADICAR</strong> a pobreza (art. 3º, III).<br><strong>REDUZIR</strong> as desigualdades.<br>⚠️ Banca troca "erradicar" por "reduzir/diminuir" — assertiva ERRADA!',mat:'DC · Aula 00'},
  {id:'dc005',q:'Existe hierarquia entre LC e LO?',a:'<strong>NÃO!</strong> Conflito resolvido por <strong>competência</strong>, não hierarquia.',mat:'DC · Aula 00'},
  {id:'dc006',q:'O que é Mutação Constitucional e qual poder a realiza?',a:'Altera o <strong>sentido e interpretação</strong> sem modificar o texto.<br>Realizada pelo <strong>Poder Constituinte Difuso</strong>.<br>Ex: SV 25 e ADI 4277.',mat:'DC · Aula 00'},
  {id:'dc007',q:'O Município possui Poder Constituinte Decorrente?',a:'<strong>NÃO!</strong> Municípios elaboram <strong>Leis Orgânicas</strong>.<br>Estados possuem PC Decorrente (Constituições Estaduais).',mat:'DC · Aula 00'},
  {id:'dc008',q:'A tese de Otto Bachof é aceita pelo STF?',a:'<strong>NÃO!</strong> Rejeitada na <strong>ADI 815</strong>.<br>Não há hierarquia entre normas originárias.',mat:'DC · Aula 00'},
  {id:'dc101',q:'Qual a diferença entre Direitos do Homem, Fundamentais e Humanos?',a:'<strong>Do homem</strong>: plano jusnaturalista, sem positivação.<br><strong>Fundamentais</strong>: positivados na CF (Título II).<br><strong>Humanos</strong>: positivados em tratados internacionais.',mat:'DC · Aula 01'},
  {id:'dc102',q:'Qual a diferença entre Direitos e Garantias Fundamentais?',a:'<strong>Direitos</strong>: bens protegidos (vida, liberdade, propriedade).<br><strong>Garantias</strong>: instrumentos de proteção (ex: habeas corpus).',mat:'DC · Aula 01'},
  {id:'dc103',q:'Quais os valores-fonte das 3 primeiras gerações? Mnemônico?',a:'<strong>1ª</strong>: Liberdade · <strong>2ª</strong>: Igualdade · <strong>3ª</strong>: Fraternidade.<br>📌 Lema da Revolução Francesa.',mat:'DC · Aula 01'},
  {id:'dc104',q:'O que diz Paulo Bonavides sobre a 4ª geração? E Norberto Bobbio?',a:'<strong>Bonavides</strong>: democracia, informação e pluralismo (globalização).<br><strong>Bobbio</strong>: engenharia genética.<br><strong>5ª geração</strong>: direito à paz.',mat:'DC · Aula 01'},
  {id:'dc105',q:'Por que doutrina prefere "dimensões" em vez de "gerações"?',a:'Porque gerações não se <strong>substituem</strong> — se <strong>acumulam</strong>.<br>Dimensões expressa melhor essa ideia.',mat:'DC · Aula 01'},
  {id:'dc106',q:'Quais os 4 Status da teoria de Georg Jellinek?',a:'<strong>Passivo</strong>: sujeição ao Estado.<br><strong>Negativo</strong>: liberdade perante o Estado.<br><strong>Positivo</strong>: exigir prestação do Estado.<br><strong>Ativo</strong>: direitos políticos (voto).',mat:'DC · Aula 01'},
  {id:'dc107',q:'Existe direito fundamental absoluto?',a:'<strong>NÃO!</strong> Característica mais cobrada: <strong>relatividade/limitabilidade</strong>.<br>No conflito: concordância prática (harmonização proporcional).',mat:'DC · Aula 01'},
  {id:'dc108',q:'O que é o efeito cliquet?',a:'Proibição do retrocesso — direitos fundamentais <strong>não podem ser suprimidos ou enfraquecidos</strong>.<br>Princípio do não retrocesso social.',mat:'DC · Aula 01'},
  {id:'dc109',q:'Qual teoria de eficácia horizontal prevalece no Brasil?',a:'<strong>Teoria direta e imediata</strong> — adotada pelo STF (RE 201.819/RJ, Min. Ellen Gracie, 2005).<br>Direitos fundamentais aplicam-se diretamente entre particulares.',mat:'DC · Aula 01'},
  {id:'dc110',q:'Quais as 5 categorias do catálogo de direitos fundamentais (Título II CF/88)?',a:'a) Individuais e coletivos (art. 5º)<br>b) Sociais (arts. 6º–11)<br>c) Nacionalidade (arts. 12–13)<br>d) Políticos (arts. 14–16)<br>e) Partidos políticos (art. 17)<br>⚠️ TODAS são espécies do gênero "direitos fundamentais".',mat:'DC · Aula 01'},
];

// ===========================================
// INICIALIZAR — adicione novas aulas aqui
// ===========================================
function inicializarConteudo(){
  if(typeof inserirAula_dc0==='function') inserirAula_dc0();
  if(typeof inserirAula_dc1==='function') inserirAula_dc1();
  restaurarBotoesConteudo();
}

function inserirAula(mat, idx){
  const el = document.getElementById(`aula-${mat}-${idx}`);
  if(!el) return;
  const fn = window[`inserirAula_${mat}${idx}`];
  if(typeof fn === 'function') fn();
}

function restaurarBotoesConteudo(){
  Object.keys(AULAS).forEach(mat => {
    AULAS[mat].forEach((_, idx) => {
      const concl = localStorage.getItem(`aula_concl_${mat}_${idx}`);
      if(concl){
        const b = document.getElementById(`btn-concluir-${mat}${idx}`);
        if(b){ b.disabled=true; b.textContent='✅ Aula Concluída!'; }
        const msg = document.getElementById(`aula-concluir-msg-${mat}${idx}`);
        if(msg){ msg.style.display='block'; msg.textContent=`✅ Concluída em ${new Date(concl).toLocaleDateString('pt-BR')} · Revisões agendadas!`; }
      }
    });
  });
}
