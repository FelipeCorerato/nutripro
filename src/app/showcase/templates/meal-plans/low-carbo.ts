import { omeleteVegetais, abacate, castanhas, iogurteIntegral, amendoas, peitoFrango, brocolis, abobora, azeiteOliva, paoLowCarb, hummus, salmao, couveFlor, leiteAmendoas } from './foods';

export const lowCarboMenu = {
  "totalizers": {
    "calorias": 0,
    "carboidrato": 0,
    "gordura": 0,
    "proteina": 0
  },
  "refeicoes": [
    {
      "refeicao": "Café da Manhã",
      "alimentos": [omeleteVegetais, abacate, castanhas]
    },
    {
      "refeicao": "Lanche da Manhã",
      "alimentos": [iogurteIntegral, amendoas]
    },
    {
      "refeicao": "Almoço",
      "alimentos": [peitoFrango, brocolis, abobora, azeiteOliva]
    },
    {
      "refeicao": "Lanche da Tarde",
      "alimentos": [paoLowCarb, hummus]
    },
    {
      "refeicao": "Jantar",
      "alimentos": [salmao, couveFlor, azeiteOliva]
    },
    {
      "refeicao": "Ceia",
      "alimentos": [leiteAmendoas, amendoas]
    }
  ]
}
