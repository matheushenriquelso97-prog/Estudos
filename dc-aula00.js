// AULA 00 — Normas Constitucionais e Poder Constituinte
// Direito Constitucional · Conhecimento Básico

function inserirAula_dc0(){
  const el=g('aula-dc-0');if(!el)return;
  el.innerHTML=`
<div class="tema-header">
  <div class="tema-tag">AULA 00 · CF/88 · DIREITO CONSTITUCIONAL</div>
  <div class="tema-title">Aplicabilidade das Normas · Hierarquia · Poder Constituinte · Princípios Fundamentais</div>
  <div class="tema-desc">A compreensão estrutural do Direito Constitucional passa por quatro eixos centrais: a aplicabilidade das normas, a hierarquia, o poder constituinte e os princípios fundamentais.</div>
</div>
<div class="cblock">
  <div class="cblock-title">🧠 A) Aplicabilidade das Normas Constitucionais — José Afonso da Silva</div>
  <p>A eficácia jurídica é comum a <strong>todas as normas</strong>, variando apenas o seu <strong>grau</strong>.</p>
  <div class="table-wrap"><table><tr><th>Tipo de Norma</th><th>Aplicabilidade</th><th>Precisam de regulamentação?</th><th>Podem ser Restringidas?</th></tr><tr><td><strong>Eficácia Plena</strong></td><td>Direta, Imediata e Integral</td><td>Não (são completas)</td><td>Não</td></tr><tr><td><strong>Eficácia Contida</strong> (Prospectiva)</td><td>Direta, Imediata e Possivelmente Não Integral</td><td>Não (nascem aptas)</td><td><strong>Sim</strong> (por lei/norma)</td></tr><tr><td><strong>Eficácia Limitada</strong></td><td>Indireta, Mediata e Reduzida</td><td><strong>Sim</strong> (para eficácia total)</td><td>Não aplicável (dependem de ampliação)</td></tr></table></div>
  <p><strong>Eficácia Plena:</strong> São autoaplicáveis e não restringíveis. Desde a promulgação, produzem ou podem produzir todos os efeitos.</p>
  <p><strong>Eficácia Contida (ou Prospectiva):</strong> São autoaplicáveis e restringíveis. Nascem plenas, mas a lei, outra norma constitucional ou conceitos ético-jurídicos podem limitar seu alcance.</p>
  <p><strong>Eficácia Limitada:</strong> Não são autoaplicáveis. Dependem de lei. Subdividem-se em <strong>Princípios Institutivos/Organizativos</strong> (estruturam o Estado) e <strong>Princípios Programáticos</strong> (traçam diretrizes sociais).</p>
  <p><strong>Efeitos imediatos das normas de Eficácia Limitada:</strong> efeito <strong>negativo</strong> (revoga leis anteriores contrárias e proíbe novas) e efeito <strong>vinculativo</strong> (obriga o legislador a regulamentar). Limitada ≠ sem efeito!</p>
  <div class="callout gold"><div class="callout-lbl">💡 Classificação de Maria Helena Diniz</div>Eficácia <strong>absoluta</strong> (cláusulas pétreas) · <strong>plena</strong> · <strong>relativa restringível</strong> (= contida) · <strong>relativa complementável</strong> (= limitada).</div>
  <div class="callout red"><div class="callout-lbl">⚠️ PEGADINHA — Eficácia Limitada ≠ Sem Efeito</div>Candidatos confundem a necessidade de regulamentação com ausência de efeito. As normas limitadas geram <strong>efeito negativo</strong> e <strong>vinculativo</strong> imediatamente.</div>
</div>
<div class="cblock">
  <div class="cblock-title">🏛️ B) Hierarquia das Normas — Pirâmide de Kelsen</div>
  <div class="table-wrap"><table><tr><th>Nível</th><th>Normas</th><th>Observação</th></tr><tr><td><strong>Constitucional</strong></td><td>Normas Originárias + ECs + Tratados DH (art. 5º, §3º)</td><td>Rito especial = 3/5 em 2 turnos em cada Casa</td></tr><tr><td><strong>Supralegal</strong></td><td>Tratados de DH aprovados pelo rito ordinário</td><td>Ex: Pacto de São José — SV 25 (depositário infiel)</td></tr><tr><td><strong>Legal (Primário)</strong></td><td>LC, LO, Leis Delegadas, MPs, Decretos Autônomos</td><td>Criam direitos e obrigações</td></tr><tr><td><strong>Infralegal (Secundário)</strong></td><td>Decretos regulamentares, portarias</td><td>Não inovam na ordem jurídica</td></tr></table></div>
  <div class="callout red"><div class="callout-lbl">⚠️ ATENÇÃO — Hierarquias que NÃO existem</div><strong>NÃO HÁ</strong> hierarquia entre Lei Complementar e Lei Ordinária. <strong>NÃO HÁ</strong> hierarquia entre leis Federal, Estadual e Municipal. Conflitos são resolvidos pela <strong>repartição de competências</strong>.</div>
</div>
<div class="cblock">
  <div class="cblock-title">⚡ C) Poder Constituinte</div>
  <p>O <strong>titular do poder constituinte é o povo</strong>.</p>
  <div class="table-wrap"><table><tr><th>Característica</th><th>Poder Originário (PCO)</th><th>Poder Derivado (PCD)</th></tr><tr><td><strong>Natureza</strong></td><td>Político (Extrajurídico)</td><td>Jurídico (criado pela CF)</td></tr><tr><td><strong>Limitação</strong></td><td>Ilimitado juridicamente</td><td>Limitado (subordinado à CF)</td></tr><tr><td><strong>Forma</strong></td><td>Incondicionado</td><td>Condicionado (art. 60)</td></tr><tr><td><strong>Início</strong></td><td>Inicial (Rompimento)</td><td>Derivado</td></tr></table></div>
  <p><strong>PCD subdivide-se em:</strong></p>
  <ul><li><strong>Reformador:</strong> Emendas Constitucionais (3/5 em 2 turnos em cada Casa).</li><li><strong>Decorrente:</strong> Constituições Estaduais. <u>Municípios elaboram Leis Orgânicas — NÃO têm PC Decorrente.</u></li><li><strong>Revisor:</strong> Sessão unicameral, maioria absoluta, exaurido (ADCT, art. 3º).</li><li><strong>Difuso:</strong> Mutação Constitucional — altera a interpretação sem modificar o texto.</li></ul>
  <div class="callout red"><div class="callout-lbl">⚠️ PEGADINHA — PCO é Ilimitado Juridicamente</div>A corrente positivista (adotada no Brasil) afirma que o PCO é juridicamente ilimitado. Contudo, aceita-se modernamente o "efeito cliquet" (vedação ao retrocesso).</div>
  <div class="callout red"><div class="callout-lbl">⚠️ CONFUSÃO — Município e PC Decorrente</div>Municípios elaboram <strong>Leis Orgânicas</strong>. A doutrina nega que isso configure Poder Constituinte Decorrente.</div>
</div>
<div class="cblock">
  <div class="cblock-title">🏛️ D) Base Normativa — Arts. 1º a 4º e Art. 60, §4º CF/88</div>
  <p><strong>Art. 1º — Fundamentos:</strong></p>
  <div class="callout blue"><div class="callout-lbl">📌 MNEMÔNICO — SOCIDIVAPLU</div><strong>SO</strong>berania · <strong>CI</strong>dadania · <strong>DI</strong>gnidade da pessoa humana · <strong>VA</strong>lores sociais do trabalho e livre iniciativa · <strong>PLU</strong>ralismo político</div>
  <p><strong>Art. 3º — Objetivos Fundamentais:</strong></p>
  <div class="callout red"><div class="callout-lbl">⚠️ PEGADINHA CLÁSSICA — Art. 3º, III</div>A CF visa <strong>ERRADICAR</strong> a pobreza, mas busca <strong>REDUZIR</strong> as desigualdades. Banca escreve "reduzir a pobreza" → assertiva <strong>ERRADA</strong>.</div>
  <p><strong>Art. 60, §4º — Cláusulas Pétreas:</strong> I-forma federativa de Estado; II-voto direto, secreto, universal e periódico; III-separação dos Poderes; IV-direitos e garantias individuais.</p>
</div>
<div class="cblock">
  <div class="cblock-title">⚖️ E) Jurisprudência Relevante — STF</div>
  <div class="callout gold"><div class="callout-lbl">📌 ADI 815 — Tese de Otto Bachof</div>REJEITADA pelo STF. Não há hierarquia entre normas originárias nem entre estas e as cláusulas pétreas.</div>
  <div class="callout gold"><div class="callout-lbl">📌 SV 25 — Controle de Convencionalidade</div>É ilícita a prisão civil de depositário infiel. Pacto de São José da Costa Rica (supralegal) prevaleceu sobre lei infraconstitucional.</div>
  <div class="callout gold"><div class="callout-lbl">📌 ADI 4277 — União Homoafetiva</div>Reconhecida como entidade familiar por mutação constitucional — princípios da igualdade, dignidade e busca pela felicidade.</div>
</div>
<div class="cblock" style="background:rgba(5,150,105,.04);border-color:rgba(5,150,105,.25)">
  <div class="cblock-title" style="color:var(--g3)">⚡ Insumos para Revisão — Flashcards</div>
  <div class="resumo-item">"As normas de eficácia contida possuem aplicabilidade direta e imediata desde a promulgação, mas podem ter seu alcance restringido por legislação futura."</div>
  <div class="resumo-item">"Normas de eficácia limitada possuem eficácia jurídica mínima, gerando desde logo o efeito negativo e o efeito vinculativo."</div>
  <div class="resumo-item">"NÃO existe hierarquia entre LC e LO, nem entre leis federal, estadual e municipal."</div>
  <div class="resumo-item">"A tese de Otto Bachof é expressamente rejeitada pelo STF (ADI 815)."</div>
  <div class="resumo-item">"O PCO é inicial, autônomo, incondicionado, permanente e ilimitado juridicamente."</div>
  <div class="resumo-item">"Municípios elaboram Leis Orgânicas — NÃO exercem Poder Constituinte Decorrente."</div>
</div>
<div class="aula-concluir">
  <div class="aula-concluir-row">
    <div>
      <div class="aula-concluir-title">✅ Concluiu esta aula?</div>
      <div class="aula-concluir-sub">Marque como concluída para registrar +200 XP e ativar as revisões adaptativas automáticas (1, 7, 30 e 90 dias).</div>
    </div>
    <button class="btn-concluir" id="btn-concluir-dc0" onclick="marcarConcluida('dc',0)">✓ Marcar como Concluída</button>
  </div>
  <div class="aula-concluir-msg" id="aula-concluir-msg-dc0"></div>
</div>
<div class="tema-nav">
  <button class="btn-nav sec" onclick="showView('dashboard')">← Hub</button>
  <button class="btn-nav primary" onclick="showAula(1)">Aula 01 →</button>
</div>`;}
