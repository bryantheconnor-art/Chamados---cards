const chamados = [
  { "id": 1, "titulo": "Erro no login", "prioridade": "Alta", "status": "Aberto", "usuario": "Ana Silva" },
  { "id": 2, "titulo": "Tela branca no app", "prioridade": "Crítica", "status": "Aberto", "usuario": "Bruno Costa" },
  { "id": 3, "titulo": "Atualizar cadastro", "prioridade": "Baixa", "status": "Em progresso", "usuario": "Carlos Souza" },
  { "id": 4, "titulo": "Boleto não gerado", "prioridade": "Média", "status": "Aberto", "usuario": "Daniela Lima" },
  { "id": 5, "titulo": "Botão quebrado", "prioridade": "Baixa", "status": "Aberto", "usuario": "Eduardo Rocha" },
  { "id": 6, "titulo": "Lentidão na busca", "prioridade": "Média", "status": "Em progresso", "usuario": "Fernanda Alves" },
  { "id": 7, "titulo": "Recuperar senha", "prioridade": "Alta", "status": "Aberto", "usuario": "Gabriel Santos" },
  { "id": 8, "titulo": "Erro no Pix", "prioridade": "Crítica", "status": "Aberto", "usuario": "Amanda Melo" },
  { "id": 9, "titulo": "Mudar foto de perfil", "prioridade": "Baixa", "status": "Fechado", "usuario": "Igor Ribeiro" },
  { "id": 10, "titulo": "Exportar PDF falhou", "prioridade": "Média", "status": "Aberto", "usuario": "Juliana Vieira" },
  { "id": 11, "titulo": "Carrinho esvaziando", "prioridade": "Alta", "status": "Em progresso", "usuario": "Lucas Martins" },
  { "id": 12, "titulo": "Cupom inválido", "prioridade": "Média", "status": "Aberto", "usuario": "Mariana Dias" },
  { "id": 13, "titulo": "Página 404 no FAQ", "prioridade": "Baixa", "status": "Aberto", "usuario": "Nicolas Ferreira" },
  { "id": 14, "titulo": "Atraso na entrega", "prioridade": "Alta", "status": "Aberto", "usuario": "Patricia Gomes" },
  { "id": 15, "titulo": "Email de boas-vindas", "prioridade": "Baixa", "status": "Fechado", "usuario": "Rodrigo Ramos" },
  { "id": 16, "titulo": "Estorno pendente", "prioridade": "Alta", "status": "Em progresso", "usuario": "Sabrina Oliveira" },
  { "id": 17, "titulo": "Alerta de segurança", "prioridade": "Crítica", "status": "Aberto", "usuario": "Thiago Barbosa" },
  { "id": 18, "titulo": "Link quebrado no menu", "prioridade": "Baixa", "status": "Aberto", "usuario": "Vanessa Cunha" },
  { "id": 19, "titulo": "Nota fiscal sumiu", "prioridade": "Média", "status": "Aberto", "usuario": "Willian Cardoso" },
  { "id": 20, "titulo": "Modo escuro travando", "prioridade": "Baixa", "status": "Em progresso", "usuario": "Yasmim Lopes" },
  { "id": 21, "titulo": "Erro na API de CEP", "prioridade": "Alta", "status": "Aberto", "usuario": "Arthur Antunes" },
  { "id": 22, "titulo": "Notificação duplicada", "prioridade": "Baixa", "status": "Aberto", "usuario": "Beatriz Mendes" },
  { "id": 23, "titulo": "Sessão expirando rápido", "prioridade": "Média", "status": "Em progresso", "usuario": "Caio Nogueira" },
  { "id": 24, "titulo": "Erro no cartão de crédito", "prioridade": "Crítica", "status": "Aberto", "usuario": "Diana Prince" },
  { "id": 25, "titulo": "Traduzir termo em inglês", "prioridade": "Baixa", "status": "Fechado", "usuario": "Elton John" },
  { "id": 26, "titulo": "Chat de suporte offline", "prioridade": "Alta", "status": "Aberto", "usuario": "Fábio Assunção" },
  { "id": 27, "titulo": "Upload de comprovante", "prioridade": "Média", "status": "Aberto", "usuario": "Gisele Bündchen" },
  { "id": 28, "titulo": "Histórico sumiu", "prioridade": "Alta", "status": "Em progresso", "usuario": "Heitor Villa" },
  { "id": 29, "titulo": "Termos de uso desatualizados", "prioridade": "Baixa", "status": "Aberto", "usuario": "Isabela Garcia" },
  { "id": 30, "titulo": "Erro 500 no checkout", "prioridade": "Crítica", "status": "Aberto", "usuario": "Jorge Ben" },
  { "id": 31, "titulo": "Ajustar margem do header", "prioridade": "Baixa", "status": "Em progresso", "usuario": "Karina Bacchi" },
  { "id": 32, "titulo": "Filtro por data quebrado", "prioridade": "Média", "status": "Aberto", "usuario": "Leonardo Dicaprio" },
  { "id": 33, "titulo": "Assinatura não renovada", "prioridade": "Alta", "status": "Aberto", "usuario": "Marta Vieira" },
  { "id": 34, "titulo": "Áudio do vídeo não funciona", "prioridade": "Média", "status": "Aberto", "usuario": "Neymar Junior" },
  { "id": 35, "titulo": "Atualizar política de privacidade", "prioridade": "Baixa", "status": "Fechado", "usuario": "Otávio Mesquita" },
  { "id": 36, "titulo": "Queda do servidor interno", "prioridade": "Crítica", "status": "Em progresso", "usuario": "Paula Toller" },
  { "id": 37, "titulo": "Convite por email falhou", "prioridade": "Baixa", "status": "Aberto", "usuario": "Quintino Aires" },
  { "id": 38, "titulo": "Extrato em branco", "prioridade": "Alta", "status": "Aberto", "usuario": "Renata Vasconcellos" },
  { "id": 39, "titulo": "ícone errado no painel", "prioridade": "Baixa", "status": "Aberto", "usuario": "Samuel Rosa" },
  { "id": 40, "titulo": "Duplicidade de cobrança", "prioridade": "Crítica", "status": "Aberto", "usuario": "Tais Araújo" },
  { "id": 41, "titulo": "Validação de CNPJ", "prioridade": "Média", "status": "Em progresso", "usuario": "Umberto Eco" },
  { "id": 42, "titulo": "Mensagem de erro confusa", "prioridade": "Baixa", "status": "Aberto", "usuario": "Valéria Valenssa" },
  { "id": 43, "titulo": "Problema com fonte negrito", "prioridade": "Baixa", "status": "Aberto", "usuario": "Wagner Moura" },
  { "id": 44, "titulo": "Links de redes sociais fora do ar", "prioridade": "Média", "status": "Aberto", "usuario": "Xuxa Meneghel" },
  { "id": 45, "titulo": "Sem sinal de geolocalização", "prioridade": "Alta", "status": "Em progresso", "usuario": "Yuri Gagarin" },
  { "id": 46, "titulo": "Página recarregando sozinha", "prioridade": "Alta", "status": "Aberto", "usuario": "Zeca Pagodinho" },
  { "id": 47, "titulo": "Gráfico de vendas travado", "prioridade": "Média", "status": "Aberto", "usuario": "Alinne Moraes" },
  { "id": 48, "titulo": "Impossível remover endereço", "prioridade": "Média", "status": "Em progresso", "usuario": "Beto Jamaica" },
  { "id": 49, "titulo": "Vazamento de memória na aba", "prioridade": "Crítica", "status": "Aberto", "usuario": "Cláudia Raia" },
  { "id": 50, "titulo": "Ajustar alinhamento do rodapé", "prioridade": "Baixa", "status": "Fechado", "usuario": "Dado Dolabella" }
]

// ...array chamados existente...
const resumoContainer = document.querySelector("#resumo-chamados");
const listaContainer = document.querySelector("#lista-chamados");

function criarElemento(tag, classe, texto) {
  const elemento = document.createElement(tag);
  elemento.className = classe;
  elemento.textContent = texto;
  return elemento;
}

function normalizarClasse(valor) {
  return valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");
}

function renderizarResumo() {
  if (!resumoContainer) return;

  const categorias = [
    { titulo: "Total de chamados", filtro: () => true },
    { titulo: "Abertos", filtro: chamado => chamado.status === "Aberto" },
    {
      titulo: "Em progresso",
      filtro: chamado => chamado.status === "Em progresso"
    },
    { titulo: "Fechados", filtro: chamado => chamado.status === "Fechado" },
    {
      titulo: "Prioridade crítica",
      filtro: chamado => chamado.prioridade === "Crítica"
    }
  ];

  resumoContainer.replaceChildren();

  categorias.forEach(categoria => {
    const quantidade = chamados.filter(categoria.filtro).length;
    const card = document.createElement("article");
    card.className = "resumo-card";

    card.append(
      criarElemento("h3", "resumo-titulo", categoria.titulo),
      criarElemento("p", "resumo-valor", quantidade)
    );

    resumoContainer.appendChild(card);
  });
}

function renderizarChamados() {
  if (!listaContainer) return;

  listaContainer.replaceChildren();

  chamados.forEach(chamado => {
    const card = document.createElement("article");
    card.className = "chamado-card";

    const cabecalho = document.createElement("div");
    cabecalho.className = "chamado-cabecalho";
    cabecalho.append(
      criarElemento("span", "chamado-id", `#${chamado.id}`),
      criarElemento(
        "span",
        `badge prioridade-${normalizarClasse(chamado.prioridade)}`,
        chamado.prioridade
      )
    );

    const informacoes = document.createElement("div");
    informacoes.className = "chamado-informacoes";
    informacoes.append(
      criarElemento("h3", "chamado-titulo", chamado.titulo),
      criarElemento("p", "chamado-usuario", `Solicitante: ${chamado.usuario}`),
      criarElemento(
        "span",
        `badge status-${normalizarClasse(chamado.status)}`,
        chamado.status
      )
    );

    card.append(cabecalho, informacoes);
    listaContainer.appendChild(card);
  });
}

function renderizarGrafico() {
  const canvas = document.querySelector("#grafico-status");
  if (!canvas) return;

  const contexto = canvas.getContext("2d");
  if (!contexto) return;

  const dados = [
    { nome: "Abertos", status: "Aberto", cor: "#ff8175" },
    { nome: "Em progresso", status: "Em progresso", cor: "#ffd166" },
    { nome: "Fechados", status: "Fechado", cor: "#54d6a0" }
  ].map(item => ({
    ...item,
    quantidade: chamados.filter(
      chamado => chamado.status === item.status
    ).length
  }));

  function desenhar() {
    const largura = canvas.clientWidth;
    const altura = canvas.clientHeight;

    if (!largura || !altura) return;

    const escala = window.devicePixelRatio || 1;
    canvas.width = largura * escala;
    canvas.height = altura * escala;

    contexto.setTransform(escala, 0, 0, escala, 0, 0);
    contexto.clearRect(0, 0, largura, altura);

    const inicioBarra = Math.min(112, largura * 0.38);
    const larguraBarra = Math.max(largura - inicioBarra - 38, 20);
    const maximo = Math.max(...dados.map(item => item.quantidade), 1);

    contexto.font = '500 13px "Inter", Arial, sans-serif';
    contexto.textBaseline = "middle";

    dados.forEach((item, indice) => {
      const y = 20 + indice * 56;
      const preenchimento = (item.quantidade / maximo) * larguraBarra;

      contexto.fillStyle = "#aab6c2";
      contexto.textAlign = "left";
      contexto.fillText(item.nome, 0, y + 12);

      contexto.fillStyle = "#303b45";
      contexto.beginPath();
      contexto.roundRect(inicioBarra, y, larguraBarra, 24, 6);
      contexto.fill();

      if (preenchimento > 0) {
        contexto.fillStyle = item.cor;
        contexto.beginPath();
        contexto.roundRect(inicioBarra, y, preenchimento, 24, 6);
        contexto.fill();
      }

      contexto.fillStyle = "#edf2f7";
      contexto.textAlign = "right";
      contexto.fillText(String(item.quantidade), largura, y + 12);
    });
  }

  desenhar();
  window.addEventListener("resize", desenhar);
}

function iniciarPagina() {
  if (!resumoContainer || !listaContainer) {
    console.error(
      "Confira se o HTML contém #resumo-chamados e #lista-chamados."
    );
    return;
  }

  renderizarGrafico();
  renderizarResumo();
  renderizarChamados();
}

iniciarPagina();