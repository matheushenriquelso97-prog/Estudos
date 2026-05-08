// Contabilidade Pública — Aula 00 — Conceito, Campo de Aplicação, Objeto e Objetivo
// Tipo: Específico

function inserirAula_cp0(){
  const el=g('aula-cp-0');if(!el)return;
  el.innerHTML=`
<div class="tema-header">
  <div class="tema-tag">AULA 00 · CP · CONTABILIDADE PÚBLICA</div>
  <div class="tema-title">Conceito · Campo de Aplicação · Objeto · Objetivo · Usuários</div>
  <div class="tema-desc">A base da Contabilidade Aplicada ao Setor Público (CASP) passa pela compreensão do seu conceito, das entidades que estão no seu campo de aplicação, do seu objeto — o patrimônio público — e dos objetivos da informação contábil para o setor público.</div>
</div>

<div class="cblock">
  <div class="cblock-title">🧠 A) Conceito e Base Normativa da CASP</div>
  <p>Atualmente, <strong>não existe um conceito oficial</strong> para a Contabilidade Aplicada ao Setor Público (CASP). O conceito previsto na NBC T 16.1 foi <strong>revogado</strong>, mas ainda é cobrado em prova:</p>
  <div class="callout gold"><div class="callout-lbl">📌 Conceito NBC T 16.1 (revogada — ainda cobrado em prova)</div>"Contabilidade Aplicada ao Setor Público é o ramo da ciência contábil que aplica, no processo gerador de informações, os Princípios de Contabilidade e as normas contábeis direcionados ao controle patrimonial de entidades do setor público."</div>
  <div class="callout red"><div class="callout-lbl">⚠️ ATENÇÃO — Norma Revogada ainda cai em prova</div>Os Princípios de Contabilidade foram revogados pela NBC TSP – Estrutura Conceitual, mas a própria norma os trata direta ou indiretamente, de maneira que ainda possuem aplicabilidade.</div>

  <p><strong>Base normativa da disciplina:</strong></p>
  <ul>
    <li><strong>Lei n. 4.320/64:</strong> "Estatui Normas Gerais de Direito Financeiro para elaboração e controle dos orçamentos e balanços da União, dos Estados, dos Municípios e do Distrito Federal." O Título IX trata dos aspectos patrimoniais e demonstrações contábeis.</li>
    <li><strong>Lei 10.180/2001:</strong> Organiza e disciplina os Sistemas de Planejamento e de Orçamento Federal, de Administração Financeira Federal, de Contabilidade Federal e de Controle Interno do Poder Executivo Federal.</li>
    <li><strong>Lei Complementar n. 101/2000 (LRF):</strong> Estabelece normas de finanças públicas voltadas para a responsabilidade na gestão fiscal. Atende aos arts. 163, 169, 165 §9º e 250 da CF/88.</li>
    <li><strong>NBC TSP (Normas Brasileiras de Contabilidade Aplicadas ao Setor Público):</strong> Editadas pelo CFC no contexto de convergência aos padrões internacionais.</li>
    <li><strong>MCASP (Manual de Contabilidade Aplicada ao Setor Público):</strong> Não é norma — é conjunto de procedimentos editado pela STN. Dividido em 6 partes: Parte Geral, Parte I (Orçamentários), Parte II (Patrimoniais), Parte III (Específicos), Parte IV (PCASP), Parte V (DCASP).</li>
  </ul>

  <p><strong>Artigos constitucionais atendidos pela LRF:</strong></p>
  <ul>
    <li><strong>Art. 163 CF/88:</strong> Lei complementar disporá sobre finanças públicas, dívida pública, operações de câmbio, fiscalização financeira, entre outros.</li>
    <li><strong>Art. 169 CF/88:</strong> Limites para despesas com pessoal ativo e inativo.</li>
    <li><strong>Art. 165, §9º CF/88:</strong> Cabe à LC estabelecer normas de gestão financeira e patrimonial da administração direta e indireta.</li>
    <li><strong>Art. 250 CF/88:</strong> Constituição de fundo para pagamento de benefícios do regime geral de previdência social.</li>
  </ul>

  <p><strong>Competências das unidades do Sistema de Contabilidade Federal (Lei 10.180/2001):</strong></p>
  <ul>
    <li>Manter e aprimorar o Plano de Contas Único da União;</li>
    <li>Estabelecer normas e procedimentos para o adequado registro contábil;</li>
    <li>Efetuar registros e adotar providências sobre atos ilegais ou irregulares;</li>
    <li>Instituir, manter e aprimorar sistemas de informação para contabilização e geração de informações gerenciais;</li>
    <li>Realizar tomadas de contas dos ordenadores de despesa e demais responsáveis;</li>
    <li>Consolidar os balanços da União, Estados, DF e Municípios para elaboração do Balanço do Setor Público Nacional;</li>
    <li>Elaborar os Balanços Gerais da União;</li>
    <li>Promover integração com os demais Poderes e esferas de governo.</li>
  </ul>
</div>

<div class="cblock">
  <div class="cblock-title">📋 B) Normas Brasileiras de Contabilidade Aplicadas ao Setor Público — NBC TSP</div>
  <div class="table-wrap"><table>
    <tr><th>Norma</th><th>Título</th></tr>
    <tr><td><strong>NBC TSP Estrutura Conceitual</strong></td><td>Estrutura Conceitual para Elaboração e Divulgação de Informação Contábil de Propósito Geral pelas Entidades do Setor Público</td></tr>
    <tr><td><strong>NBC TSP 01</strong></td><td>Receitas de Transação sem Contraprestação</td></tr>
    <tr><td><strong>NBC TSP 02</strong></td><td>Receitas de Transação com Contraprestação</td></tr>
    <tr><td><strong>NBC TSP 03</strong></td><td>Provisões, Passivos Contingentes e Ativos Contingentes</td></tr>
    <tr><td><strong>NBC TSP 04</strong></td><td>Estoques</td></tr>
    <tr><td><strong>NBC TSP 05</strong></td><td>Contratos de Concessão de Serviços Públicos: Concedente</td></tr>
    <tr><td><strong>NBC TSP 06</strong></td><td>Propriedade para Investimento</td></tr>
    <tr><td><strong>NBC TSP 07</strong></td><td>Ativo Imobilizado</td></tr>
    <tr><td><strong>NBC TSP 08</strong></td><td>Ativo Intangível</td></tr>
    <tr><td><strong>NBC TSP 09</strong></td><td>Redução ao Valor Recuperável de Ativo Não Gerador de Caixa</td></tr>
    <tr><td><strong>NBC TSP 10</strong></td><td>Redução ao Valor Recuperável de Ativo Gerador de Caixa</td></tr>
    <tr><td><strong>NBC TSP 11</strong></td><td>Apresentação das Demonstrações Contábeis</td></tr>
    <tr><td><strong>NBC TSP 12</strong></td><td>Demonstração dos Fluxos de Caixa</td></tr>
    <tr><td><strong>NBC TSP 13</strong></td><td>Apresentação de Informação Orçamentária nas Demonstrações Contábeis</td></tr>
    <tr><td><strong>NBC TSP 14</strong></td><td>Custos de Empréstimos</td></tr>
    <tr><td><strong>NBC TSP 15</strong></td><td>Benefícios a Empregados</td></tr>
    <tr><td><strong>NBC TSP 16</strong></td><td>Demonstrações Contábeis Separadas</td></tr>
    <tr><td><strong>NBC TSP 17</strong></td><td>Demonstrações Contábeis Consolidadas</td></tr>
    <tr><td><strong>NBC TSP 18</strong></td><td>Investimento em Coligada e em Empreendimento Controlado em Conjunto</td></tr>
    <tr><td><strong>NBC TSP 19</strong></td><td>Acordos em Conjunto</td></tr>
    <tr><td><strong>NBC TSP 20</strong></td><td>Divulgação de Participações em Outras Entidades</td></tr>
    <tr><td><strong>NBC TSP 21</strong></td><td>Combinações no Setor Público</td></tr>
    <tr><td><strong>NBC TSP 22</strong></td><td>Divulgação sobre Partes Relacionadas</td></tr>
    <tr><td><strong>NBC TSP 23</strong></td><td>Políticas Contábeis, Mudança de Estimativa e Retificação de Erro</td></tr>
    <tr><td><strong>NBC TSP 24</strong></td><td>Efeitos das Mudanças nas Taxas de Câmbio e Conversão de Demonstrações Contábeis</td></tr>
    <tr><td><strong>NBC TSP 25</strong></td><td>Evento Subsequente</td></tr>
    <tr><td><strong>NBC TSP 26</strong></td><td>Ativo Biológico e Produto Agrícola</td></tr>
    <tr><td><strong>NBC TSP 27</strong></td><td>Informações por Segmento</td></tr>
    <tr><td><strong>NBC TSP 28</strong></td><td>Divulgação de Informação Financeira do Setor Governo Geral</td></tr>
    <tr><td><strong>NBC TSP 29</strong></td><td>Benefícios Sociais</td></tr>
    <tr><td><strong>NBC TSP 30</strong></td><td>Instrumentos Financeiros: Apresentação</td></tr>
    <tr><td><strong>NBC TSP 31</strong></td><td>Instrumentos Financeiros: Reconhecimento e Mensuração</td></tr>
    <tr><td><strong>NBC TSP 32</strong></td><td>Instrumentos Financeiros: Reconhecimento e Mensuração (Contabilidade de Hedge)</td></tr>
    <tr><td><strong>NBC TSP 33</strong></td><td>Instrumentos Financeiros: Divulgações</td></tr>
    <tr><td><strong>NBC TSP 34</strong></td><td>Custos no Setor Público</td></tr>
  </table></div>
</div>

<div class="cblock">
  <div class="cblock-title">🏛️ C) Campo de Aplicação</div>
  <p>"O campo de aplicação é o espaço de atuação do Profissional de Contabilidade que demanda estudo, interpretação, identificação, mensuração, avaliação, registro, controle e evidenciação de fenômenos contábeis, decorrentes de variações patrimoniais em entidades do setor público."</p>
  <div class="callout red"><div class="callout-lbl">⚠️ ATENÇÃO — Examinadores cobram norma revogada</div>Quando há alterações normativas, os examinadores gostam de inserir aquilo que já foi revogado em suas questões. Conheça os dois campos de aplicação.</div>

  <p><strong>Campo de Aplicação Antigo — NBC T 16.1 (revogada):</strong></p>
  <div class="table-wrap"><table>
    <tr><th>Escopo</th><th>Entidades Abrangidas</th></tr>
    <tr><td><strong>INTEGRALMENTE</strong></td><td>▪ Entidades Governamentais (inclui estatais dependentes)<br>▪ Serviços Sociais (Sistema S)<br>▪ Conselhos Profissionais</td></tr>
    <tr><td><strong>PARCIALMENTE</strong></td><td>▪ Demais Entidades (inclui estatais independentes)<br>▪ Pessoas Físicas Equiparadas<br>▪ Objetivo → Prestação de Contas e Instrumentalização do Controle Social</td></tr>
  </table></div>

  <p><strong>Campo de Aplicação Novo — NBC TSP Estrutura Conceitual:</strong></p>
  <div class="table-wrap"><table>
    <tr><th>Escopo</th><th>Entidades</th></tr>
    <tr><td><strong>OBRIGATÓRIO</strong><br>(orçamento fiscal e da seguridade social)</td><td>▪ Governos nacionais, estaduais, distrital e municipais (todos os Poderes, Tribunais de Contas, Defensorias e MP)<br>▪ Órgãos, secretarias, departamentos, agências, autarquias, fundações públicas<br>▪ Fundos, consórcios públicos e repartições congêneres<br>▪ Empresas estatais dependentes</td></tr>
    <tr><td><strong>FACULTATIVO</strong><br>(orçamento de investimento)<br>ou por determinação dos órgãos reguladores</td><td>▪ Demais Entidades<br>▪ Estatais Independentes</td></tr>
  </table></div>

  <p><strong>Empresas Estatais Dependentes:</strong> "são empresas controladas que recebem do ente controlador recursos financeiros para pagamento de despesas com pessoal, despesas de custeio em geral ou despesas de capital, excluídos, no último caso, aqueles provenientes de aumento de participação acionária." Devem aplicar tanto a legislação societária (Lei n. 6.404/76) como a legislação do setor público.</p>
  <p><strong>Empresas Estatais Independentes:</strong> "são todas as demais empresas controladas pelas entidades do setor público que não se enquadram nas características das dependentes." Aplicam a estrutura de maneira facultativa ou por determinação de órgãos reguladores.</p>

  <div class="table-wrap"><table>
    <tr><th>Tipo</th><th>Empresas Públicas</th><th>Sociedades de Economia Mista</th></tr>
    <tr><td><strong>Dependentes</strong></td><td>Embrapa, EBC, Imbel</td><td>Nuclep, INB</td></tr>
    <tr><td><strong>Independentes</strong></td><td>Correios, Caixa Econômica Federal</td><td>Petrobras, Banco do Brasil</td></tr>
  </table></div>

  <div class="callout red"><div class="callout-lbl">⚠️ ATENÇÃO — Fora do campo de aplicação</div>Pessoas físicas ou jurídicas prestadoras de serviços públicos remuneradas por serviço prestado NÃO estão no campo de aplicação da CASP. O mesmo vale para quem recebe recursos decorrentes de indenização ou sentença judicial.</div>

  <p><strong>Casos Especiais:</strong></p>
  <ul>
    <li><strong>Conselhos de regulamentação profissional:</strong>
      <ul>
        <li><strong>CFC:</strong> Conselhos são autarquias → escopo obrigatório.</li>
        <li><strong>STN (MCASP):</strong> Conselhos aplicam facultativamente.</li>
      </ul>
    </li>
    <li><strong>Sistema "S" (Serviços Sociais Autônomos):</strong>
      <ul>
        <li>NBC T 16.1 (revogada): aplicava <strong>integralmente</strong>.</li>
        <li>CFC (ITG 2002 (R1)): escopo <strong>facultativo</strong>.</li>
      </ul>
    </li>
  </ul>
  <div class="callout gold"><div class="callout-lbl">📌 Acórdão TCU n. 1.567/2020 (ampliou Acórdão TCU n. 991/2019)</div>Há determinação para que os Serviços Sociais Autônomos apliquem as normas da CASP. Entendimento mais atualizado: Sistema S está no <strong>escopo OBRIGATÓRIO da CASP por determinação do TCU</strong>.</div>
</div>

<div class="cblock">
  <div class="cblock-title">⚖️ D) Objeto — Patrimônio Público</div>
  <div class="callout red"><div class="callout-lbl">⚠️ PEGADINHA CLÁSSICA — Objeto da Contabilidade Pública</div>O objeto da Contabilidade Pública é o <strong>PATRIMÔNIO PÚBLICO</strong>. NÃO é o orçamento público. NÃO é o planejamento público.</div>

  <p><strong>Definição de Patrimônio Público:</strong> "Patrimônio Público é o conjunto de direitos e bens, tangíveis ou intangíveis, onerados ou não, adquiridos, formados, produzidos, recebidos, mantidos ou utilizados pelas entidades do setor público, que seja portador ou represente um fluxo de benefícios, presente ou futuro, inerente à prestação de serviços públicos ou à exploração econômica por entidades do setor público e suas obrigações."</p>

  <p><strong>Componentes do Patrimônio:</strong></p>
  <ul>
    <li><strong>Bens:</strong> Itens avaliados em moeda capazes de satisfazer às necessidades das entidades.
      <ul>
        <li><strong>Tangíveis (materiais/corpóreos):</strong> possuem substância física (veículos, imóveis).</li>
        <li><strong>Intangíveis (imateriais/incorpóreos):</strong> sem substância física (marcas, patentes).</li>
        <li><strong>Onerados:</strong> dados em garantia ao credor (hipotecas, penhores).</li>
        <li>Podem ser: adquiridos, formados/produzidos, recebidos, mantidos ou utilizados.</li>
      </ul>
    </li>
    <li><strong>Direitos:</strong> Valores a receber de terceiros gerados por operações da entidade (ex: contas a receber).</li>
    <li><strong>Obrigações:</strong> Dívidas contraídas junto a terceiros (ex: contas a pagar).</li>
  </ul>

  <p><strong>Bens Públicos — Art. 99 do Código Civil:</strong></p>
  <div class="table-wrap"><table>
    <tr><th>Tipo</th><th>Definição</th><th>Exemplos</th><th>Controle pela CASP</th></tr>
    <tr><td><strong>Uso comum do povo</strong></td><td>Toda a sociedade usufrui</td><td>Rios, mares, estradas, ruas, praças</td><td>Somente os que absorveram recursos públicos ou foram recebidos em doação. Bens naturais (rios, mares) NÃO integram o patrimônio público.</td></tr>
    <tr><td><strong>Uso especial</strong></td><td>Administração usa para atingir seus fins</td><td>Hospitais, bibliotecas, museus, agências, quartéis</td><td>Todos são controlados.</td></tr>
    <tr><td><strong>Dominicais (dominiais)</strong></td><td>Domínio do Poder Público sem fim específico</td><td>Prédio público não ocupado, terrenos sem uso</td><td>Todos são controlados.</td></tr>
  </table></div>

  <div class="callout red"><div class="callout-lbl">⚠️ ATENÇÃO — Alienação e Usucapião</div>Bens de uso comum e de uso especial são <strong>inalienáveis</strong> enquanto conservarem a qualificação. Bens dominicais <strong>podem ser alienados</strong>. <strong>TODOS os bens públicos são insuscetíveis de usucapião.</strong></div>

  <p><strong>Bens Imóveis em Andamento (MCASP):</strong> Valores de bens imóveis em andamento, ainda não concluídos — obras em andamento, estudos, projetos.</p>
</div>

<div class="cblock">
  <div class="cblock-title">🎯 E) Objetivo da CASP</div>
  <p><strong>Art. 83, Lei n. 4.320/64:</strong> "A contabilidade evidenciará perante a Fazenda Pública a situação de todos quantos, de qualquer modo, arrecadem receitas, efetuem despesas, administrem ou guardem bens a ela pertencentes ou confiados."</p>
  <p><strong>Art. 89, Lei n. 4.320/64:</strong> "A contabilidade evidenciará os fatos ligados à administração orçamentária, financeira, patrimonial e industrial."</p>

  <p><strong>Naturezas das informações contábeis:</strong></p>
  <ul>
    <li><strong>Orçamentária:</strong> Relacionada ao orçamento público (previsão da receita, fixação e execução da despesa).</li>
    <li><strong>Financeira:</strong> Relacionada ao fluxo de caixa (entradas e saídas de recursos financeiros).</li>
    <li><strong>Econômica:</strong> Relacionada aos resultados obtidos no período e às escolhas de aplicação dos recursos.</li>
    <li><strong>Física:</strong> Relacionada à existência física dos elementos patrimoniais (ativos).</li>
  </ul>

  <p><strong>Apoio da informação contábil a:</strong></p>
  <ul>
    <li><strong>Tomada de Decisão:</strong> Para gestores públicos (âmbito interno).</li>
    <li><strong>Prestação de Contas:</strong> Para Controladorias e Tribunais de Contas.</li>
    <li><strong>Instrumentalização do Controle Social:</strong> Para a sociedade civil organizada.</li>
  </ul>

  <div class="callout blue"><div class="callout-lbl">📌 Objetivo segundo a NBC TSP — Estrutura Conceitual</div>O objetivo da elaboração e divulgação da informação contábil é o <strong>FORNECIMENTO DE INFORMAÇÕES ÚTEIS AOS USUÁRIOS DOS RCPGs</strong> com a finalidade de <strong>prestação de contas e responsabilização (accountability) e tomada de decisão</strong>.</div>

  <p><strong>Relatório Contábil de Propósito Geral (RCPG):</strong></p>
  <ul>
    <li>São os componentes centrais da transparência da informação contábil.</li>
    <li>Abrangem as demonstrações contábeis (incluindo notas explicativas) e informações financeiras e não financeiras que aprimoram, complementam e suplementam as demonstrações.</li>
  </ul>
  <div class="callout red"><div class="callout-lbl">⚠️ ATENÇÃO — RCPGs não atendem necessidades específicas</div>"Os RCPGs são relatórios contábeis elaborados para atender às necessidades dos usuários em geral, não tendo o propósito de atender a finalidades ou necessidades específicas de determinados grupos de usuários."</div>
</div>

<div class="cblock">
  <div class="cblock-title">👥 F) Usuários da Informação Contábil</div>
  <p><strong>Usuários Primários:</strong></p>
  <ul>
    <li>Os usuários dos serviços e seus representantes (membros do Poder Legislativo).</li>
    <li>Os provedores de recursos e seus representantes.</li>
  </ul>

  <div class="callout red"><div class="callout-lbl">⚠️ PEGADINHA — Conflito na Norma</div>A NBC TSP – Estrutura Conceitual informa que os membros do Poder Legislativo são usuários primários, mas depois informa que as <strong>"Comissões do Poder Legislativo" NÃO são usuários primários</strong>.</div>

  <p><strong>NÃO são usuários primários (utilizam os RCPGs para propósitos distintos):</strong></p>
  <ul>
    <li>Responsáveis pelas estatísticas de finanças públicas</li>
    <li>Analistas</li>
    <li>Mídia</li>
    <li>Consultores financeiros</li>
    <li>Grupos de interesse público ou privado</li>
    <li>Agências reguladoras e supervisoras</li>
    <li>Entidades de auditoria</li>
    <li>Comissões do Poder Legislativo ou de outro órgão do governo</li>
    <li>Órgãos centrais de orçamento e controle</li>
    <li>Agências de classificação de risco</li>
    <li>Entidades emprestadoras de recursos e de fomento</li>
  </ul>
</div>

<div class="cblock" style="background:rgba(5,150,105,.04);border-color:rgba(5,150,105,.25)">
  <div class="cblock-title" style="color:var(--g3)">⚡ Insumos para Revisão — Flashcards</div>
  <div class="resumo-item">"O conceito oficial da CASP foi revogado com a NBC T 16.1, mas ainda é cobrado em provas. Conceito: ramo da ciência contábil que aplica Princípios de Contabilidade e normas contábeis direcionados ao controle patrimonial de entidades do setor público."</div>
  <div class="resumo-item">"O OBJETO da Contabilidade Pública é o PATRIMÔNIO PÚBLICO — não é o orçamento, não é o planejamento."</div>
  <div class="resumo-item">"Empresas estatais DEPENDENTES: recebem recursos do ente controlador para pessoal, custeio ou capital. Obrigatório aplicar a CASP. Ex: Embrapa, EBC, Nuclep."</div>
  <div class="resumo-item">"Empresas estatais INDEPENDENTES: não recebem recursos do controlador para essas finalidades. Aplicação facultativa. Ex: Petrobras, Banco do Brasil, Caixa, Correios."</div>
  <div class="resumo-item">"Bens naturais (rios, mares, praias) NÃO integram o patrimônio público — o Poder Público não consumiu recursos para construí-los."</div>
  <div class="resumo-item">"Todos os bens públicos são INSUSCETÍVEIS de usucapião. Bens dominicais podem ser alienados; bens de uso comum e especial são inalienáveis enquanto conservarem a qualificação."</div>
  <div class="resumo-item">"Sistema S: pela NBC T 16.1 (revogada) = escopo integral. Pelo CFC (ITG 2002) = facultativo. Pelo TCU (Acórdão 1.567/2020) = OBRIGATÓRIO."</div>
  <div class="resumo-item">"Objetivo da CASP (NBC TSP): fornecer informações úteis aos usuários dos RCPGs para accountability e tomada de decisão. RCPGs não atendem necessidades específicas."</div>
  <div class="resumo-item">"Comissões do Poder Legislativo NÃO são usuários primários — mesmo que membros do Legislativo individualmente sejam."</div>
</div>

<div class="aula-concluir">
  <div class="aula-concluir-row">
    <div>
      <div class="aula-concluir-title">✅ Concluiu esta aula?</div>
      <div class="aula-concluir-sub">Marque como concluída para registrar +200 XP e ativar as revisões adaptativas automáticas (1, 7, 30 e 90 dias).</div>
    </div>
    <button class="btn-concluir" id="btn-concluir-cp0" onclick="marcarConcluida('cp',0)">✓ Marcar como Concluída</button>
  </div>
  <div class="aula-concluir-msg" id="aula-concluir-msg-cp0"></div>
</div>
<div class="tema-nav">
  <button class="btn-nav sec" onclick="showView('dashboard')">← Hub</button>
  <button class="btn-nav primary" onclick="showAula(1)">Aula 01 →</button>
</div>`;}
