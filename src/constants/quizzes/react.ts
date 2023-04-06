import { Quiz } from ".";

export const react: Quiz = {
  title: "React",
  slug: "react",
  category: "coding",
  thumbnail: "REACT.jfif",
  quiz: [
    {
      question: "O que é React JS?",
      options: [
        "Um framework JavaScript para construção de aplicações mobile",
        "Uma biblioteca JavaScript para construção de interfaces de usuário",
        "Um serviço de streaming de vídeos",
        "Uma linguagem de programação orientada a objetos",
      ],
      answer:
        "Uma biblioteca JavaScript para construção de interfaces de usuário",
    },
    {
      question: "O que é o Virtual DOM em React?",
      options: [
        "Uma representação na memória da árvore de elementos da interface de usuário",
        "Uma ferramenta para depuração de aplicações React",
        "Um plugin de otimização para aumentar a velocidade de renderização",
        "Uma biblioteca externa que deve ser importada para usar React",
      ],
      answer:
        "Uma representação na memória da árvore de elementos da interface de usuário",
    },
    {
      question: "Qual a diferença entre state e props em React?",
      options: [
        "State é utilizado para armazenar dados imutáveis enquanto props é utilizado para dados mutáveis",
        "State é utilizado para dados mutáveis enquanto props é utilizado para armazenar dados imutáveis",
        "State e props são a mesma coisa",
        "Não existe diferença entre state e props em React",
      ],
      answer:
        "State é utilizado para dados mutáveis enquanto props é utilizado para armazenar dados imutáveis",
    },
    {
      question: "O que é o hook useState em React?",
      options: [
        "Uma função que permite utilizar um estado local em componentes funcionais",
        "Um recurso que permite renderizar componentes diretamente no servidor",
        "Um plugin para criar animações em React",
        "Uma ferramenta para testar a performance da aplicação",
      ],
      answer:
        "Uma função que permite utilizar um estado local em componentes funcionais",
    },
    {
      question:
        "Qual a diferença entre componentes funcionais e componentes de classe em React?",
      options: [
        "Componentes funcionais são mais eficientes em termos de performance do que componentes de classe",
        "Componentes de classe são mais fáceis de escrever do que componentes funcionais",
        "Componentes funcionais são usados apenas para componentes simples",
        "Componentes de classe são usados apenas para componentes complexos",
      ],
      answer:
        "Componentes funcionais são mais eficientes em termos de performance do que componentes de classe",
    },
    {
      question: "Qual a diferença entre React e React Native?",
      options: [
        "React é para desenvolvimento web, enquanto React Native é para desenvolvimento mobile",
        "React é para desenvolvimento mobile, enquanto React Native é para desenvolvimento web",
        "Não há diferença, ambos são usados para desenvolvimento web e mobile",
        "React é para desenvolvimento de aplicações desktop, enquanto React Native é para desenvolvimento de jogos",
      ],
      answer:
        "React é para desenvolvimento web, enquanto React Native é para desenvolvimento mobile",
    },
    {
      question: "O que é JSX?",
      options: [
        "Uma extensão do JavaScript que permite escrever HTML dentro do código JavaScript",
        "Um pré-processador CSS para estilização de componentes React",
        "Um pacote NPM para criação de rotas em aplicações React",
        "Uma linguagem de programação utilizada para desenvolvimento de aplicações React",
      ],
      answer:
        "Uma extensão do JavaScript que permite escrever HTML dentro do código JavaScript",
    },
    {
      question: "O que é um state em React?",
      options: [
        "Uma propriedade imutável que deve ser passada para os componentes filhos",
        "Uma função que recebe como argumento as propriedades de um componente e retorna um novo elemento",
        "Uma propriedade de um componente que pode ser alterada e que causa uma atualização no DOM",
        "Um objeto global que pode ser acessado por todos os componentes da aplicação",
      ],
      answer:
        "Uma propriedade de um componente que pode ser alterada e que causa uma atualização no DOM",
    },
    {
      question: "O que é uma prop em React?",
      options: [
        "Uma função que recebe como argumento as propriedades de um componente e retorna um novo elemento",
        "Uma propriedade imutável que deve ser passada para os componentes filhos",
        "Uma propriedade de um componente que pode ser alterada e que causa uma atualização no DOM",
        "Um objeto global que pode ser acessado por todos os componentes da aplicação",
      ],
      answer:
        "Uma propriedade imutável que deve ser passada para os componentes filhos",
    },
    {
      question:
        "Qual a diferença entre uma função e uma classe de componente em React?",
      options: [
        "Funções de componente são mais performáticas do que classes de componente",
        "Classes de componente permitem a utilização de state e lifecycle methods, enquanto funções de componente não permitem",
        "Funções de componente são mais fáceis de escrever do que classes de componente",
        "Classes de componente permitem a utilização de props, enquanto funções de componente não permitem",
      ],
      answer:
        "Classes de componente permitem a utilização de state e lifecycle methods, enquanto funções de componente não permitem",
    },
    {
      question: "Qual comando é utilizado para criar um novo projeto em React?",
      options: [
        "npx create-react-app",
        "npm start",
        "npm install react",
        "create-react-app",
      ],
      answer: "npx create-react-app",
    },
    {
      question: "O que é uma prop em React?",
      options: [
        "Uma função que retorna um componente React",
        "Um objeto que contém informações sobre o estado do componente",
        "Um objeto que contém informações sobre as props do componente pai",
        "Uma propriedade de um componente React",
      ],
      answer: "Uma propriedade de um componente React",
    },
    {
      question:
        "Qual hook é utilizado para adicionar estado a um componente em React?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      answer: "useState",
    },
    {
      question: "O que é uma callback em React?",
      options: [
        "Uma função que é passada como prop para um componente filho",
        "Uma função que é executada antes de renderizar o componente",
        "Uma função que é executada após o componente ser montado",
        "Uma função que é executada quando ocorre um evento no componente",
      ],
      answer: "Uma função que é passada como prop para um componente filho",
    },
    {
      question: "O que é o virtual DOM em React?",
      options: [
        "Uma versão otimizada do DOM real",
        "Uma ferramenta para testes de desempenho",
        "Uma ferramenta para testes de acessibilidade",
        "Um conjunto de bibliotecas adicionais para React",
      ],
      answer: "Uma versão otimizada do DOM real",
    },
    {
      question:
        "Qual hook é utilizado para realizar efeitos colaterais em React?",
      options: ["useContext", "useReducer", "useEffect", "useCallback"],
      answer: "useEffect",
    },
    {
      question: "O que é o estado de um componente em React?",
      options: [
        "As propriedades do componente",
        "As funções do componente",
        "Os valores internos do componente",
        "As informações sobre a renderização do componente",
      ],
      answer: "Os valores internos do componente",
    },
    {
      question: "Qual é a função principal do React?",
      options: [
        "Criar interfaces de usuário",
        "Criar aplicações server-side",
        "Criar bases de dados",
        "Criar APIs",
      ],
      answer: "Criar interfaces de usuário",
    },
    {
      question: "Qual é a forma correta de definir um componente em React?",
      options: [
        "Como uma classe ou como uma função",
        "Como uma string",
        "Como um objeto",
        "Como um número",
      ],
      answer: "Como uma classe ou como uma função",
    },
    {
      question: "Qual é a forma correta de atualizar o state em React?",
      options: [
        "Usando o método setState()",
        "Usando o método updateState()",
        "Usando o método changeState()",
        "Usando o método state()",
      ],
      answer: "Usando o método setState()",
    },
    {
      question: "O que é o ciclo de vida de um componente em React?",
      options: [
        "Uma sequência de eventos que ocorrem durante a criação, atualização e destruição de um componente",
        "Uma sequência de métodos que manipulam o estado do componente",
        "Uma sequência de métodos que manipulam as props do componente",
        "Uma sequência de eventos que ocorrem durante a criação e destruição de um componente",
      ],
      answer:
        "Uma sequência de eventos que ocorrem durante a criação, atualização e destruição de um componente",
    },
    {
      question: "O que é o ReactDOM em React?",
      options: [
        "Biblioteca para manipulação do DOM",
        "Biblioteca para manipulação do Virtual DOM",
        "Framework JavaScript",
        "Linguagem de programação",
      ],
      answer: "Biblioteca para manipulação do DOM",
    },
    {
      question: "O que é o useEffect em React?",
      options: [
        "Hook para lidar com efeitos colaterais",
        "Hook para lidar com o estado de um componente",
        "Hook para lidar com as props de um componente",
        "Hook para lidar com o ciclo de vida de um componente",
      ],
      answer: "Hook para lidar com efeitos colaterais",
    },
  ],
};
