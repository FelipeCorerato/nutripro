import { ovo, aveia, banana, iogurteNatural, torradaIntegral, queijoCottage, feijaoPreto, arrozIntegral, peitoFrango, saladaFolhas, azeiteOliva, paoIntegral, queijoMussarela, tomate, atumConserva, batataDoce, brocolis, leiteDesnatado } from './foods';

export const cheaperMenu = {
  "totalizers": {
    "calorias": 2215,
    "carboidrato": 236,
    "gordura": 78,
    "proteina": 159
  },
  "refeicoes": [
    {
      "refeicao": "Café da Manhã",
      "alimentos": [ovo, aveia, banana]
    },
    {
      "refeicao": "Lanche da Manhã",
      "alimentos": [iogurteNatural, torradaIntegral, queijoCottage]
    },
    {
      "refeicao": "Almoço",
      "alimentos": [feijaoPreto, arrozIntegral, peitoFrango, saladaFolhas, azeiteOliva]
    },
    {
      "refeicao": "Lanche da Tarde",
      "alimentos": [paoIntegral, queijoMussarela, tomate]
    },
    {
      "refeicao": "Jantar",
      "alimentos": [atumConserva, batataDoce, brocolis, azeiteOliva]
    },
    {
      "refeicao": "Ceia",
      "alimentos": [leiteDesnatado, aveia]
    }
  ]
}
