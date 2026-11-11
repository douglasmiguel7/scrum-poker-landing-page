---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Estime Ai
  text: Scrum Poker
  tagline: Ferramenta gratuita de Scrum Poker para times ágeis estimarem tarefas com precisão. Simples, online e sem complicações.
  actions:
    - theme: brand
      text: Acessar
      link: https://app.estimeai.com.br
    - theme: alt
      text: Como funciona
      link: /como-funciona

features:
  - title: Fácil & Gratuito
    details: Faça estimativas rápidas com um site focado em agilidade
  - title: Convide e Estime Juntos
    details: Separe times por mesas, convide pessoas e estime juntos
  - title: Separe as Tarefas
    details: Crie tarefas e estime elas separadamente ou juntas
  - title: Sem cadastro
    details: Não pede e-mail nem senha. Abra o app, escolha um nome e comece a estimar
  - title: Votos em segredo
    details: Ninguém vê o voto dos outros até as cartas serem reveladas, para uma opinião não puxar a outra
  - title: Resultado na hora
    details: Veja quantos votos cada carta teve, o total e a média assim que as cartas forem reveladas
---

<div class="home-content">

## Como funciona

O Estime Ai leva para o navegador o Scrum Poker (também chamado de planning poker), a técnica em que o time estima cada tarefa votando ao mesmo tempo com cartas numeradas.

![A mesa do Estime Ai durante uma votação](/img/como-funciona/mesa-votacao.svg)

1. **Abra o app.** Uma mesa é criada na hora para você, sem cadastro.
2. **Chame o time.** Clique em "Copiar link da mesa" e mande o link no chat da reunião. Quem abre o link já está na mesa.
3. **Cadastre as tarefas.** Dê um título a cada uma e, se quiser, cole o link do card no Jira, no Trello ou na ferramenta que o time usa.
4. **Votem em segredo.** Cada pessoa escolhe uma carta. Quando todos votaram, alguém clica em "Revelar cartas" e o resultado aparece para todos.
5. **Conversem e decidam.** Se os votos ficaram distantes, quem votou mais alto e quem votou mais baixo explicam o motivo, e o time vota de novo.

Veja o passo a passo completo em [Como funciona](/como-funciona).

## Para quem é

- **Times que usam Scrum ou Kanban** e estimam o backlog em story points no refinamento ou na planning.
- **Scrum masters e agile coaches** que querem uma sessão de estimativa rápida, sem planilha nem cartas físicas.
- **Times remotos ou híbridos**, que precisam votar ao mesmo tempo mesmo estando em lugares diferentes.
- **Quem está começando com estimativas** e quer experimentar a técnica sem instalar nada nem criar conta.

## Aprenda a estimar melhor

Escrevemos guias curtos sobre estimativa ágil, a partir do que vemos os times fazerem:

- [O que é Scrum Poker e por que ele funciona](/guias/o-que-e-scrum-poker)
- [Story points e a sequência de Fibonacci](/guias/story-points-e-fibonacci)
- [Como conduzir uma sessão de Scrum Poker](/guias/como-conduzir-uma-sessao)
- [Scrum Poker com time remoto](/guias/scrum-poker-remoto)
- [O que fazer quando os votos divergem](/guias/votos-divergentes)

## Perguntas frequentes

### O Estime Ai é gratuito?

Sim. O Estime Ai é gratuito e é mantido com anúncios. Não há plano pago.

### Preciso criar uma conta?

Não. Ao abrir o app, você recebe um nome provisório ("Anônimo") que pode trocar a qualquer momento. Não pedimos e-mail, senha nem telefone.

### Como convido o meu time?

Na mesa, clique em "Copiar link da mesa" e envie o link. Quem abrir o link entra na mesma mesa. Compartilhe só com o seu time: qualquer pessoa com o link pode entrar.

### Dá para participar só assistindo, sem votar?

Sim. Cada pessoa escolhe se senta na mesa para votar ou se fica assistindo. É útil para o product owner ou para quem só acompanha a sessão.

### Preciso instalar alguma coisa?

Não. O Estime Ai funciona no navegador. Ele foi pensado para a tela do computador, que é onde a reunião do time costuma acontecer.

### O que acontece com os dados da mesa?

A mesa fica guardada até o dono apagá-la, e apagar a mesa apaga também as tarefas e os votos. Os detalhes estão na [Política de Privacidade](/privacidade).

</div>

<style>
.home-content {
  max-width: 768px;
  margin: 64px auto 0;
  padding: 0 24px;
}
.home-content h2 {
  margin: 48px 0 16px;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}
.home-content h3 {
  margin: 24px 0 8px;
  font-size: 18px;
  font-weight: 600;
}
.home-content p,
.home-content li {
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.home-content ol,
.home-content ul {
  padding-left: 20px;
  margin: 12px 0;
}
.home-content ol {
  list-style: decimal;
}
.home-content ul {
  list-style: disc;
}
.home-content li + li {
  margin-top: 8px;
}
.home-content img {
  max-width: 100%;
  margin: 24px 0 8px;
}
.home-content a {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}
</style>
