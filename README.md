# Testes E2E com Protractor (em JavaScript)

* Automação de testes na camada de UI (User Interface) das especificações descritas nos arquivos `(/.feature)` para validação das regras de negócio, e se os critérios de aceite do sistema estão confiáveis.


## Bibliotecas utilizadas
* Framework de automação: [Protractor](https://www.protractortest.org/)
* integração com cucumber: [Protractor Cucumber](https://github.com/protractor-cucumber-framework)
* Geração de steps baseados dos cenários: [protractor-cucumber-steps](https://github.com/Marketionist/protractor-cucumber-steps)
* Visualização das features: [Feature-express](https://github.com/menezes-ssz/feature-express)
* Padronização de lint: [ESLint](https://eslint.org/)



## Estrutura de organização do projeto

* Projeto estruturado em Page Objects (Design Pattern)
* Estrutura de Pastas:
    - `/features` contém os cenários de testes (a especificação dos cenários)
    -  `/page_objects` contém os elementos de tela e o comportamento esperado do cenário
    - `/step_definitions` contém os steps (Dado, Quando, Então) descritos nas features e carregadas no page-objects
    - `support` contém os arquivos que são carregados para execução dos testes


## Ambientes de teste e desenvolvimento

* dev: ambiante.de.dev

* homolog: ambiante.de.hom


## Browsers testados
* Chrome (automação)


## Rodar testes automatizados

Para rodar cenários de testes em ambientes diferentes, em `package.json`, temos os seguintes scripts:

* Ambiente localhost:3000 (padrão)

```shell
npm run local_test
```

* Ambiente de Desenvolvimento

```shell
npm run dev_test
```

* Ambiente de Homologação

```shell
npm run hom_test
```

## Variáveis de ambiente

* Se for necessário adicionar novas variáveis, lembre-se de mapeá-las no arquivo `e2e/environments_parameters`


## Tags para rodar testes automatizados

Cada `.features` está separada como funcionalidade da Aplicação. Cada Funcionalidade tem sua TAG, podendo rodar os cenários por Funcionalidade e cenários específicos

* Para rodar os testes com TAG de Smoke

```shell
npm run dev_smoke_test
```

## Pre-requisitos para rodar os testes
* Instalar [NodeJS](http://nodejs.org/)


## Setup

* Instalar dependencias do projeto com o comando padrão npm

```shell
npm install
```


## Run testes utilizando default (start-server-and-test)

* Executar testes
```shell
npm run test
```

* Executar somente relatório de testes (cucumber report)
```shell
node report.js
```

* Executar somente especificações com feature-express
```shell
feature-express ./ pt 5555
```

* Executar ESLint para ajustes automáticos
```shell
npm run lint:fix
```

* Executar ESLint para ajustes manuais
```shell
npm run lint
```



