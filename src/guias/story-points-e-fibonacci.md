---
title: Story points e a sequência de Fibonacci
description: O que um story point mede, por que tantos times usam a sequência de Fibonacci nas cartas e como criar a primeira referência do time.
---

# Story points e a sequência de Fibonacci

A maioria dos times que fazem Scrum Poker estima em story points, usando cartas com números como 1, 2, 3, 5, 8 e 13. Para quem está começando, as duas coisas parecem estranhas: por que não estimar em horas? E por que esses números, e não 1 a 10? Este guia explica as duas escolhas e mostra como o time pode criar a sua primeira referência.

## O que é um story point

Um story point é uma medida relativa do esforço de uma tarefa. Ele junta três coisas numa mesma ideia:

- **a quantidade de trabalho:** quanto código, testes, telas ou configuração a tarefa envolve;
- **a complexidade:** quão difícil é resolver o problema;
- **a incerteza:** quanto o time ainda não sabe sobre ela.

O mais importante é a palavra **relativa**. Um story point não tem um valor fixo em horas. Uma tarefa de 2 pontos é, mais ou menos, o dobro de uma de 1 ponto, e uma de 8 pontos é bem maior do que uma de 3. O time compara as tarefas entre si, em vez de prever quanto tempo cada uma vai levar.

## Por que não estimar em horas

Estimar em horas parece mais natural, mas tem três problemas na prática:

1. **As pessoas trabalham em ritmos diferentes.** A mesma tarefa pode levar duas horas para quem conhece aquela parte do sistema e um dia para quem nunca mexeu nela. Em pontos, as duas pessoas concordam que a tarefa é "pequena", mesmo que levem tempos diferentes.
2. **Somos ruins em prever tempo absoluto, mas bons em comparar.** É difícil dizer quantas horas uma tarefa vai levar. É fácil dizer que ela é maior do que outra que o time já fez.
3. **Horas viram compromisso.** Uma estimativa de "4 horas" logo vira cobrança de prazo, e o time passa a inflar as estimativas para se proteger. Pontos deixam claro que se trata de uma aproximação.

Com o tempo, o time descobre quantos pontos costuma entregar por sprint (a velocidade). Esse número, e não as horas de cada tarefa, é o que ajuda a planejar.

## Por que a sequência de Fibonacci

A sequência de Fibonacci começa com 1 e 2, e cada número seguinte é a soma dos dois anteriores: 1, 2, 3, 5, 8, 13, 21 e assim por diante. Muitos baralhos de Scrum Poker usam uma versão modificada dela, como 0, ½, 1, 2, 3, 5, 8, 13, 20, 40 e 100.

A razão é simples: **quanto maior a tarefa, maior a incerteza**. Entre uma tarefa de 1 e uma de 2 pontos, a diferença é clara. Entre uma de 20 e uma de 21, ninguém sabe dizer. Como os números da sequência se afastam cada vez mais, eles obrigam o time a escolher entre opções realmente diferentes nas tarefas grandes, em vez de discutir se algo vale 14 ou 15.

Na prática, isso traz duas vantagens:

- **Menos discussão sobre detalhes.** Ninguém perde dez minutos debatendo entre 7 e 8, porque o 7 nem existe.
- **Um alerta embutido.** Quando uma tarefa recebe 13 ou mais, a mensagem do time é: "isso é grande demais e incerto demais". Em geral, vale quebrar essa tarefa em partes menores antes de colocá-la numa sprint.

### E as potências de 2?

Alguns baralhos, como o do Estime Ai, usam potências de 2: 0, 1, 2, 4, 8, 16, 32 e 64. A lógica é a mesma da sequência de Fibonacci: os valores se afastam cada vez mais, então o time escolhe entre opções realmente diferentes e não perde tempo com detalhes. A diferença é que cada carta vale o dobro da anterior, o que facilita a comparação ("essa tarefa é o dobro daquela?"). O que importa é o time usar sempre o mesmo baralho, para a régua não mudar de uma sessão para outra.

## Cartas especiais

Além dos números, muitos baralhos trazem cartas para situações que não são uma estimativa:

- **Interrogação (?):** "não tenho informação suficiente para estimar". É um sinal para o time conversar mais sobre a tarefa ou para o product owner detalhá-la.
- **Café:** "precisamos de uma pausa". Sessões longas cansam, e estimativas feitas com o time cansado costumam ser piores.
- **Zero:** a tarefa já está feita ou é tão pequena que não vale contar.

## Como criar a primeira referência do time

Estimativa relativa precisa de um ponto de partida. Um jeito simples de criar o seu:

1. **Escolha uma tarefa pequena que o time já fez** e que todos conhecem. Algo como "adicionar um campo novo num formulário", com teste e revisão. Combine que ela vale **2 pontos**.
2. **Escolha uma segunda tarefa já feita, claramente maior,** e decidam juntos quanto ela vale em comparação com a primeira. Por exemplo, 5 ou 8 pontos.
3. **Use essas duas como régua.** Na sessão, a pergunta deixa de ser "quanto tempo isso leva?" e passa a ser "isso é maior ou menor do que a tarefa de referência?".

Comece a referência com 2, e não com 1, para sobrar espaço para tarefas ainda menores.

Nas primeiras sprints, as estimativas vão variar bastante. Isso é normal. Depois de algumas semanas, o time cria um entendimento comum do que é um 3 ou um 8, e as rodadas ficam mais rápidas.

## Erros comuns

- **Converter pontos em horas.** Se "1 ponto = 4 horas", vocês voltaram a estimar em horas, com um passo a mais.
- **Comparar a velocidade de times diferentes.** Cada time tem a sua própria régua. Um time que entrega 30 pontos não é melhor do que um que entrega 20.
- **Reestimar tudo depois que a tarefa terminou.** A estimativa serve para planejar. Se ela errou, use isso como aprendizado na retrospectiva, em vez de corrigir o número.

## Pratique

Monte uma mesa no [Estime Ai](https://app.estimeai.com.br), cadastre as duas tarefas de referência e mais algumas do backlog, e façam algumas rodadas comparando cada tarefa com a referência. Para organizar a sessão, veja [Como conduzir uma sessão de Scrum Poker](/guias/como-conduzir-uma-sessao).
