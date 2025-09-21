module.exports = {
  // tipagem dos commits em português
  types: [
    { value: 'feat', name: 'feat: Adiciona uma nova funcionalidade.' },
    { value: 'fix', name: 'fix: Corrige um bug.' },
    { value: 'docs', name: 'docs: Adiciona ou atualiza a documentação.' },
    { value: 'style', name: 'style: Adiciona ou atualiza estilos.' },
    { value: 'refactor', name: 'refactor: Refatora o código sem alterar a funcionalidade.' },
    { value: 'perf', name: 'perf: Adiciona melhorias de performance.' },
    { value: 'test', name: 'test: Adiciona ou atualiza testes.' },
    { value: 'build', name: 'build: Adiciona ou atualiza scripts de build ou dependências externas.' },
    { value: 'ci', name: 'ci: Adiciona ou atualiza arquivos de configuração de CI.' },
    { value: 'chore', name: 'chore: Adiciona ou atualiza tarefas de build ou outras ferramentas e bibliotecas.' },
    { value: 'revert', name: 'revert: Reverte um commit anterior.' }
  ],

  // escopos dos commits
  scopes: [{ name: 'frontend' }, { name: 'backend' }, { name: 'fullstack' }, { name: 'ui' }, { name: 'database' }, { name: 'docs' }, { name: 'infra' }, { name: 'devops' }],

  // Desativa ou ativa a pergunta do 'breaking change' (Alteração que quebra a compatibilidade)
  // O padrão é false
  allowBreakingChanges: ['feat', 'fix'],

  // Configuração das mensagens
  messages: {
    type: 'Selecione o tipo de mudança que você está commitando:',
    scope: '\nSelecione o ESCOPO da sua mudança (opcional):',
    // customizando a pergunta
    customScope: 'Qual o escopo desta alteração? (ex: componentes, api):',
    subject: 'Escreva uma DESCRIÇÃO CURTA e IMPERATIVA da mudança:\n',
    body: 'Escreva uma DESCRIÇÃO MAIS DETALHADA (opcional). Use "|" para nova linha:\n',
    breaking: 'Descreva as ALTERAÇÕES QUE QUEBRAM A COMPATIBILIDADE (opcional):\n',
    footer: 'Descreva todas as ISSUES fechadas. Ex: #31, #34 (opcional):\n',
    confirmCommit: 'Tem certeza que quer continuar com o commit acima?'
  },

  // define o comprimento máximo da linha do commit
  subjectLimit: 100
};