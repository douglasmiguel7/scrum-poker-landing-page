---
title: O que fazer quando os votos divergem
description: Como transformar votos muito diferentes no Scrum Poker em uma conversa útil, e quando parar de votar.
---

# O que fazer quando os votos divergem

As cartas são reveladas e a mesa mostra um 2, dois 5 e um 13. Para quem está começando com Scrum Poker, esse é o momento em que a técnica parece ter falhado. Na verdade, é o momento em que ela mais funciona: a divergência mostra que o time não tem o mesmo entendimento da tarefa, e é muito melhor descobrir isso agora do que no meio da sprint.

## Por que os votos divergem

Quase sempre, votos muito diferentes têm uma destas causas:

- **Entendimentos diferentes do que precisa ser feito.** Uma pessoa pensou só na tela, outra lembrou que também é preciso mudar a API e migrar os dados.
- **Conhecimento diferente do sistema.** Quem já mexeu naquele código sabe que ele é frágil e não tem testes. Quem não mexeu imagina que é uma mudança simples.
- **Uma solução diferente em mente.** Uma pessoa pensou em reaproveitar algo que já existe, outra em construir do zero.
- **Riscos que só alguém enxergou.** Uma dependência de outro time, um caso extremo, uma regra de negócio pouco conhecida.
- **Réguas diferentes.** Quando o time ainda não tem tarefas de referência, cada pessoa entende um "5" de um jeito.

Em todos esses casos, a solução é a mesma: conversar.

## O roteiro da conversa

### 1. Ouça os extremos primeiro

Peça para quem votou o número mais alto e quem votou o mais baixo explicarem o que consideraram. Não peça justificativa ("por que você votou tão alto?"), peça o raciocínio ("o que você levou em conta para votar 13?"). A diferença no tom muda tudo: ninguém precisa defender o voto, só contar o que pensou.

### 2. Procure a informação que faltava

Na maioria das vezes, uma das explicações traz algo que o resto do time não sabia: "essa tela também é usada no app do parceiro" ou "já existe um componente que faz isso". Quando isso acontece, a divergência já cumpriu o seu papel.

### 3. Esclareça o escopo com o product owner

Se a diferença vem de entendimentos diferentes do que precisa ser feito, o product owner decide o escopo. Às vezes, a melhor saída é dividir a tarefa: a parte essencial agora, o resto numa tarefa separada.

### 4. Vote de novo

Depois da conversa, todos votam outra vez, ainda em segredo. Não é preciso que todos mudem de ideia: o objetivo é que cada pessoa vote com a informação nova. No Estime Ai, clique em "Iniciar nova votação" para limpar as cartas e votar de novo na mesma tarefa.

## Quando os votos estão perto, mas não iguais

Se o resultado foi 3, 5 e 5, não vale uma rodada inteira de discussão. Combine com o time uma regra simples para esses casos, por exemplo:

- **ficar com o valor mais votado**, quando a maioria é clara;
- **ficar com o maior valor**, quando a diferença é de uma carta só. Estimar um pouco para cima protege contra a incerteza;
- **olhar a média** que o Estime Ai mostra depois de revelar as cartas, como apoio, e escolher a carta mais próxima dela.

O importante é que a regra seja combinada antes da sessão, para não virar discussão toda vez.

## Quando parar de votar

Às vezes, a conversa não resolve. Se a tarefa já teve três rodadas e os votos continuam distantes, insistir só cansa o time. Algumas saídas:

- **A tarefa é grande demais.** Votos altos e espalhados, como 8, 13 e 20, costumam indicar isso. Quebre a tarefa em partes menores e estime cada uma.
- **Falta informação.** Muitas cartas de interrogação, ou uma discussão que gira em torno de "depende", mostram que a tarefa não está pronta. Devolva para o product owner com as dúvidas anotadas.
- **É preciso investigar.** Se ninguém sabe ao certo como resolver, crie uma tarefa curta de investigação (um spike), com tempo limitado, e estime a tarefa original depois.
- **Registre a estimativa mais alta como provisória** e siga em frente, revisando na próxima sessão.

## Erros que pioram a divergência

- **Pressionar quem votou diferente.** Se a pessoa sente que "errou", na próxima vez ela vota igual aos outros e o time perde exatamente a informação que o Scrum Poker existe para revelar.
- **Usar a média como resposta automática.** A média de 2 e 13 é 7,5, e esse número não representa o que ninguém pensou. Converse antes.
- **Deixar a pessoa mais experiente decidir.** A experiência ajuda na conversa, mas a decisão é do time. Se a pessoa mais experiente sempre dá a palavra final, os outros param de pensar.
- **Discutir a solução técnica em detalhes.** O objetivo é entender o tamanho da tarefa, não desenhar a implementação. Se a conversa entrar em detalhes de código, anote e continue.

## Resumo

- Divergência é informação, não problema.
- Ouça os extremos, procure o que faltava e vote de novo.
- Para votos próximos, use uma regra combinada antes.
- Depois de três rodadas sem convergir, quebre, investigue ou adie a tarefa.

Para o roteiro completo da sessão, veja [Como conduzir uma sessão de Scrum Poker](/guias/como-conduzir-uma-sessao).
