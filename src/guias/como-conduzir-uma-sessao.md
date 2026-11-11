---
title: Como conduzir uma sessão de Scrum Poker
description: Roteiro para quem facilita uma sessão de estimativa, do preparo do backlog ao encerramento, sem estourar o tempo da reunião.
---

# Como conduzir uma sessão de Scrum Poker

Uma boa sessão de Scrum Poker termina com o backlog estimado, o time entendendo o trabalho que vem pela frente e ninguém com a sensação de que perdeu a tarde. Quem facilita, em geral o scrum master ou alguém do time, tem papel importante nisso. Este roteiro mostra o que fazer antes, durante e depois.

## Antes da sessão

### Prepare o backlog

O maior inimigo de uma sessão rápida é uma tarefa que ninguém entende. Antes da reunião, o product owner deve revisar as tarefas que serão estimadas:

- Cada tarefa tem um **título claro** e uma **descrição** do que precisa ser feito e por quê.
- Os **critérios de aceite** estão escritos: como o time vai saber que a tarefa está pronta?
- As **dúvidas conhecidas** já foram respondidas, ou pelo menos anotadas.

Escolha um número realista de tarefas. Um time que nunca estimou junto costuma levar de cinco a dez minutos por tarefa no começo. Com prática, a maioria das rodadas cai para um ou dois minutos.

### Prepare a mesa

Abra uma mesa no [Estime Ai](https://app.estimeai.com.br), dê um nome a ela (como "Refinamento da Sprint 12") e cadastre as tarefas, com o link para o card no Jira ou na ferramenta que o time usa. Assim, na hora da reunião, é só mandar o link da mesa no chat.

### Combine os papéis

- **Quem facilita** conduz a sessão, controla o tempo e garante que todos falem. Se também faz parte do time de desenvolvimento, vota normalmente.
- **O product owner** explica as tarefas e responde às dúvidas. Em geral, não vota: no Estime Ai, ele pode ficar como espectador.
- **O time de desenvolvimento** é quem vota, porque é quem vai fazer o trabalho.

## Durante a sessão

### Comece com a referência

Se o time já tem tarefas de referência (veja [Story points e a sequência de Fibonacci](/guias/story-points-e-fibonacci)), relembre quais são e quanto valem. Isso coloca todos na mesma régua antes da primeira rodada.

### Conduza cada rodada no mesmo ritmo

1. **Apresente a tarefa.** O product owner lê o título e explica o objetivo em poucas frases.
2. **Abra para perguntas curtas.** Só o necessário para cada um conseguir estimar. Discussões sobre como implementar ficam para depois do voto.
3. **Peça o voto.** Todos escolhem a carta ao mesmo tempo, em segredo.
4. **Revele as cartas.**
5. **Se os votos ficaram próximos**, como 3, 3 e 5, decida rápido. Uma regra comum é ficar com o valor mais votado ou com o maior, quando a diferença é de uma carta só.
6. **Se ficaram distantes**, peça a quem votou mais alto e a quem votou mais baixo para explicar o raciocínio, e vote de novo. O guia [O que fazer quando os votos divergem](/guias/votos-divergentes) traz mais detalhes.
7. **Registre a estimativa** na tarefa e passe para a próxima.

### Cuide do tempo

Combine um limite por tarefa, por exemplo cinco minutos. A contagem regressiva do Estime Ai ajuda: quando o tempo acabar, o time decide entre votar mais uma vez, aceitar a estimativa mais alta ou deixar a tarefa de lado para o product owner detalhar melhor.

Faça uma pausa a cada 45 minutos, mais ou menos. Estimativas feitas com o time cansado são piores, e a carta do café existe por um motivo.

### Proteja a honestidade dos votos

- **Não comente o voto antes da revelação.** Frases como "essa é fácil, né?" ancoram o time.
- **Não cobre ninguém pelo voto.** Um voto fora da curva é informação, não erro.
- **Faça perguntas abertas.** "O que você considerou para votar 8?" funciona melhor do que "por que você votou tão alto?".

## Sinais de alerta

- **Uma tarefa recebe 13 ou mais.** Provavelmente é grande demais para uma sprint. Proponha quebrá-la em partes menores e estime cada parte.
- **Muitos votos de interrogação.** A tarefa não está pronta para ser estimada. Devolva para o product owner com as dúvidas anotadas.
- **A mesma tarefa já teve três rodadas sem convergir.** Pare de votar. Registre a estimativa mais alta como provisória ou marque uma conversa técnica curta só com as pessoas envolvidas.
- **Sempre as mesmas pessoas explicam.** Reveze quem fala primeiro na discussão.

## Depois da sessão

- **Confira o total de pontos.** O Estime Ai mostra a soma dos pontos estimados na mesa. Compare com a velocidade do time para saber se o que foi estimado cabe na próxima sprint.
- **Leve as tarefas pendentes adiante.** As que ficaram sem estimativa precisam de mais detalhes do product owner antes da próxima sessão.
- **Ajuste o processo na retrospectiva.** Se a sessão demorou demais, vale perguntar ao time o que atrasou: tarefas mal descritas, discussões técnicas longas ou tarefas grandes demais.

## Resumo para quem facilita

- Backlog preparado antes, com tarefas claras e critérios de aceite.
- Uma mesa pronta, com as tarefas cadastradas e o link para enviar.
- Rodadas curtas: apresentar, perguntar, votar, revelar e decidir.
- Divergência é conversa, não problema.
- Tempo controlado e pausas a cada 45 minutos.
