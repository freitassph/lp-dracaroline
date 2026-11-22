export const articles = [
  {
    slug: 'primeira-consulta-psiquiatrica',
    title: 'Como se preparar para a primeira consulta psiquiátrica',
    description: 'O que você pode anotar, levar e perguntar durante a conversa.',
    icon: 'book',
    sections: [
      { heading: 'Anote o que você quer conversar', text: 'Pode ser uma mudança que você percebeu, uma dúvida ou algo que alguém próximo comentou. Se for útil, escreva quando você notou essa mudança e como ela interfere no seu dia.' },
      { heading: 'Separe as informações que tiver à mão', text: 'Se usa medicamentos ou suplementos, leve a lista com os nomes e as doses que já utiliza. Receitas, exames e relatórios anteriores podem ajudar a contar essa história. Guarde esses documentos para a consulta, em vez de enviá-los no primeiro contato.' },
      { heading: 'Use a consulta para fazer perguntas', text: 'Você pode perguntar o que a médica observou, quais opções serão discutidas e como saber quando voltar. Se algum termo ficar difícil de entender, peça uma explicação com exemplos.' },
    ],
    sources: [{ title: 'Preparing to talk to your health care provider · NIMH', url: 'https://www.nimh.nih.gov/health/publications/tips-for-talking-with-your-health-care-provider' }],
  },
  {
    slug: 'consulta-psiquiatrica-online',
    title: 'O que esperar de uma consulta psiquiátrica online',
    description: 'Como se organizar para conversar por vídeo com privacidade.',
    icon: 'video',
    sections: [
      { heading: 'Combine o acesso com o consultório', text: 'Confirme o dia e o horário e siga as orientações enviadas pela equipe. Teste a câmera, o microfone e a conexão com alguma antecedência. Se tiver uma dificuldade de acesso, avise o consultório pelo canal de agendamento.' },
      { heading: 'Escolha um lugar em que você possa conversar', text: 'Procure um espaço reservado. Fones de ouvido podem ajudar. Separe o que gostaria de dizer ou perguntar e converse com a médica se quiser a presença de alguém de confiança.' },
      { heading: 'Converse sobre a modalidade mais adequada', text: 'Em uma consulta por vídeo, pode haver limites para examinar ou avaliar algumas situações. A médica orienta quando o atendimento precisa ser presencial e como organizar a continuidade do cuidado.' },
    ],
    sources: [{ title: 'Resolução sobre telemedicina · Conselho Federal de Medicina', url: 'https://sistemas.cfm.org.br/normas/visualizar/resolucoes/BR/2022/2314' }],
  },
  {
    slug: 'apoiar-alguem-a-buscar-cuidado',
    title: 'Como apoiar alguém a buscar cuidado em saúde mental',
    description: 'Maneiras de oferecer ajuda preservando a escolha da pessoa.',
    icon: 'chat',
    sections: [
      { heading: 'Escolha um momento para ouvir', text: 'Diga o que você percebeu em termos concretos e pergunte como a pessoa está. Dê tempo para ela responder. Você pode perguntar de que tipo de ajuda ela gostaria nesse momento.' },
      { heading: 'Ofereça ajuda com uma tarefa específica', text: 'Se a pessoa quiser, ofereça companhia para procurar informações, consultar horários ou chegar ao primeiro atendimento. Combine com ela o que você pode fazer e o que prefere fazer por conta própria.' },
      { heading: 'Saiba onde procurar ajuda imediata', text: 'Em uma urgência, procure um serviço de pronto atendimento ou ligue para o SAMU 192. Se a situação exigir ajuda imediata, use esse caminho em vez de aguardar uma resposta de agendamento.' },
    ],
    sources: [{ title: 'Rede de Atenção Psicossocial · Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps/caps/' }],
  },
] as const;

export const legal = {
  '/privacidade': {
    title: 'Política de Privacidade',
    description: 'Como os dados e as preferências são tratados no site da Dra. Caroline Aires.',
  },
  '/termos': {
    title: 'Termos de Uso',
    description: 'Condições de uso do site e informações sobre o contato com o consultório.',
  },
} as const;
