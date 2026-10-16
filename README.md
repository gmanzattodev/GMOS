<div align="center">

# GM OS
### Um sistema operacional web em construção.

Uma experiência de desktop criada com **HTML, CSS, JavaScript, React e GSAP**.

<img src="https://img.shields.io/badge/status-em_desenvolvimento-eab308?style=for-the-badge" alt="Status: em desenvolvimento" />
<img src="https://img.shields.io/badge/interface-web-38bdf8?style=for-the-badge" alt="Interface web" />

<br /><br />

<img src="https://skillicons.dev/icons?i=html,css,js,react,vite,git" alt="HTML, CSS, JavaScript, React, Vite e Git" />

**Interface · Interação · Animação · Aprendizado**

</div>

---

## Sobre o projeto

Estou criando o **GM OS**, um sistema operacional web que leva a experiência de um desktop para dentro do navegador. A proposta é construir um ambiente interativo, com identidade visual própria, aplicativos e transições que tornem a navegação mais envolvente.

Quero desenvolver cada parte dessa experiência: da entrada no sistema à área de trabalho, dos menus aos painéis de configuração. O projeto reúne meus estudos de front-end e evolui conforme aprendo, testo ideias e melhoro o código.

O GM OS funciona como uma simulação de ambiente de sistema operacional no navegador. Seus recursos são implementados com tecnologias web.

> 🚧 **Desenvolvimento ativo:** telas, componentes e comportamentos podem mudar durante a construção do projeto.

## A experiência que estou construindo

- **Entrada no sistema:** tela de login, validação demonstrativa de credenciais, alternância de visibilidade da senha e feedback visual.
- **Área de trabalho:** um ambiente para reunir aplicativos, menus e atalhos.
- **Aplicativos:** componentes de navegador interno, gerenciador de arquivos, calculadora e terminal simulado.
- **Personalização:** interfaces de configuração e escolha de papéis de parede.
- **Conectividade simulada:** painel de Wi-Fi com seleção de rede e estados de conexão.
- **Movimento:** animações com GSAP para dar continuidade às ações e transições da interface.

Esses módulos estão em diferentes estágios de implementação. A presença de um componente no código não significa que todos os seus comportamentos estejam concluídos.

## Minha direção para o GM OS

Nas próximas etapas, estou explorando uma estética mais cinematográfica, com fundos marcantes, transparência, desfoque e animações suaves. Quero que o sistema tenha uma composição própria, com atenção aos detalhes de cada interação.

As ideias mais recentes incluem:

- Tela de bloqueio com hora e data atualizadas.
- Transição animada entre bloqueio, login e desktop.
- Melhorias no fluxo de login e nas mensagens de erro.
- Painel de Wi-Fi com botão de ligar/desligar e indicação da rede selecionada e conectada.
- Controle de volume com ícones que acompanham o nível escolhido.
- Refinamento da organização da área de trabalho e da responsividade.

Essa direção reúne os recursos que estou desenvolvendo e planejando; algumas dessas mudanças podem ainda não estar publicadas neste repositório.

## Tecnologias

| Tecnologia | Papel no projeto |
| --- | --- |
| **HTML / JSX** | Estrutura das telas e dos componentes |
| **CSS** | Layouts, cores, efeitos visuais e responsividade |
| **JavaScript** | Lógica, eventos e comportamentos da interface |
| **React** | Componentização, estados e renderização da aplicação |
| **GSAP** | Animações e sequências de transição |
| **Vite** | Ambiente de desenvolvimento e build |
| **Git e GitHub** | Versionamento e acompanhamento da evolução |

## O que estou praticando

Construir o GM OS é uma forma de aprender resolvendo problemas reais de interface:

- Organizar uma aplicação em componentes reutilizáveis.
- Controlar interações com estados e eventos do React.
- Renderizar telas e elementos de forma condicional.
- Trabalhar com formulários e feedback ao usuário.
- Integrar animações à lógica dos componentes.
- Transformar ideias de layout em interfaces navegáveis.
- Melhorar a legibilidade e a organização do código a cada etapa.

## Executar localmente

Com Node.js e npm disponíveis:

```bash
git clone https://github.com/gmanzattodev/GMOS.git
cd GMOS
npm install
npm run dev
```

Abra o endereço informado pelo Vite no terminal.

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Permite visualizar o build localmente |
| `npm run lint` | Executa a análise de código com Oxlint |

## Próximos passos

- [ ] Consolidar o fluxo de bloqueio → login → desktop.
- [ ] Refinar os painéis de Wi-Fi e volume.
- [ ] Evoluir o gerenciamento de janelas e a integração entre aplicativos.
- [ ] Ampliar as opções de personalização.
- [ ] Melhorar a experiência em diferentes tamanhos de tela.
- [ ] Revisar animações, acessibilidade e desempenho.
- [ ] Publicar uma demonstração da versão atual.

## Observações sobre a simulação

A conexão Wi-Fi representa estados da interface e não altera a conexão real do dispositivo. O login atual é uma demonstração no front-end; autenticação com servidor fica fora dessa implementação.

## Autor

Desenvolvido por **Giovani Manzatto** — [@gmanzattodev](https://github.com/gmanzattodev).

Sugestões e feedbacks sobre a interface e o código são bem-vindos.

## Licença

Este projeto está sob a [licença MIT](./LICENSE).

---

<div align="center">
  <strong>GM OS — construindo uma experiência, componente por componente.</strong>
</div>
