---
title: Como funciona
description: Passo a passo para usar o Estime Ai, do link da mesa à estimativa final de cada tarefa.
---

# Como funciona

O Estime Ai é uma mesa de Scrum Poker no navegador. Cada pessoa do time abre o mesmo link, vota com uma carta em segredo e todos veem as cartas ao mesmo tempo. Nesta página, você encontra cada parte do app, na ordem em que costuma ser usada numa sessão.

![A mesa do Estime Ai durante uma votação: quem está na mesa à esquerda, a mensagem "Escolha sua carta!" no centro, as tarefas à direita e as cartas embaixo](/img/como-funciona/mesa-votacao.svg)

## 1. Abrir uma mesa

Ao abrir [app.estimeai.com.br](https://app.estimeai.com.br), uma mesa é criada para você na hora, com o nome "Mesa" seguido de um código. Quem cria a mesa é o dono dela e pode trocar o nome (por exemplo, "Time de Pagamentos" ou "Refinamento da Sprint 42") clicando no título.

Não há cadastro. Você aparece com o nome "Anônimo", que pode trocar clicando nele. Use o nome pelo qual o time conhece você, para todo mundo saber de quem é cada voto.

O app lembra da última mesa que você abriu neste navegador. No menu **"Minhas mesas"**, você cria uma mesa nova, por exemplo uma para cada time, e alterna entre as suas mesas. Quando você tem mais de uma, o menu também mostra "Apagar esta mesa". Apagar uma mesa apaga também as tarefas e os votos dela, sem como recuperar.

![O menu "Minhas mesas" aberto, com as opções "Criar nova mesa", "Apagar esta mesa" e "Ir para" outra mesa](/img/como-funciona/minhas-mesas.svg)

## 2. Chamar o time

Clique em **"Copiar link da mesa"** e mande o link no chat da reunião. Quem abre o link entra direto na sua mesa, também sem cadastro.

Qualquer pessoa com o link pode entrar e ver o que está na mesa. Por isso, compartilhe só com o seu time e não coloque informações confidenciais nos títulos das tarefas.

## 3. Escolher quem vota

Cada pessoa decide o seu papel:

- **Sentar na mesa:** a pessoa vota. Os votos dela entram no resultado.
- **Assistir:** a pessoa acompanha a sessão sem votar. É o papel ideal para o product owner, que explica as tarefas mas normalmente não estima, ou para quem está só conhecendo a técnica.

Dá para trocar de papel a qualquer momento. O app mostra quem está sentado e quem está assistindo.

## 4. Cadastrar as tarefas

Na lista de tarefas, adicione o que o time vai estimar. Cada tarefa tem um **título** e, se você quiser, um **link** para o card no Jira, no Azure DevOps, no Trello ou onde o time organiza o backlog. Assim, ninguém precisa procurar a história durante a discussão: o botão **"Abrir link"** leva direto ao card.

Qualquer participante pode criar, renomear e apagar tarefas. O app mostra quantas tarefas a mesa tem e a soma dos pontos já estimados, o que ajuda a comparar com a capacidade do time na sprint.

## 5. Votar

Clique em **"Votar nesta"** na tarefa que o time vai estimar agora, para todos saberem do que se trata. Depois, cada pessoa sentada na mesa escolhe uma carta:

- **0, 1, 2, 4, 8, 16, 32 e 64:** o esforço da tarefa. O 0 é para o que já está pronto. Os valores dobram de uma carta para a outra, porque, quanto maior a tarefa, maior a incerteza (veja [Story points e a sequência de Fibonacci](/guias/story-points-e-fibonacci));
- **?:** falta informação para estimar;
- **☕:** pausa para o café.

Os votos ficam em segredo: o app mostra quantos votos ainda faltam, mas não o valor de ninguém. Isso evita a ancoragem, quando o primeiro número dito em voz alta puxa a opinião de todo mundo. Você pode trocar de carta enquanto as cartas não forem reveladas.

## 6. Usar a contagem regressiva (opcional)

O dono da mesa pode iniciar uma **contagem regressiva** de alguns minutos para a votação ou para a discussão de uma tarefa. Ela mantém a sessão no ritmo e evita que uma única história tome a reunião inteira. Dá para adicionar um minuto ou reiniciar a contagem.

Inicie a contagem só quando todos estiverem na mesa: quem entra depois ou recarrega a página pode ver o tempo fora de sincronia.

## 7. Revelar as cartas e ver o resultado

Quando todos que estão sentados na mesa votaram, aparece o botão **"Revelar cartas"**. Ao clicar, as cartas de todos aparecem ao mesmo tempo, junto com:

- **quantos votos** cada carta recebeu;
- o **total** dos pontos;
- a **média** dos votos.

![O resultado de uma votação: o voto de cada pessoa, quantos votos cada carta recebeu, o total e a média](/img/como-funciona/cartas-reveladas.svg)

Se os votos ficaram próximos, o time define a estimativa da tarefa. Se ficaram distantes, é hora de conversar: veja o guia [O que fazer quando os votos divergem](/guias/votos-divergentes).

## 8. Registrar a estimativa e seguir

Clique em "Adicionar pontuação" na tarefa e digite a estimativa final. Ela fica marcada como votada, e o total de pontos da mesa é atualizado. Se o time quiser rever uma tarefa já estimada, é só clicar em **"Votar novamente"** nela.

Clique em **"Iniciar nova votação"** para limpar as cartas e passar para a próxima tarefa.

## 9. Sair da mesa

Ao clicar em **"Sair da mesa"**, os seus votos e a sua participação naquela mesa são apagados. A mesa continua existindo para os outros participantes.

## Sugestões e problemas

Encontrou um bug ou tem uma ideia? Use o botão **"Faça uma sugestão"** dentro do app ou escreva para a gente pela página de [Contato](/contato).

## Próximos passos

- Nunca fez Scrum Poker? Comece por [O que é Scrum Poker e por que ele funciona](/guias/o-que-e-scrum-poker).
- Vai conduzir a sessão? Leia [Como conduzir uma sessão de Scrum Poker](/guias/como-conduzir-uma-sessao).
- Pronto para estimar? [Abra o Estime Ai](https://app.estimeai.com.br).
