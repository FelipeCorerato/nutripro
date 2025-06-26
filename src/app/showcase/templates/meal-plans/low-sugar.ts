import { omeleteVegetais, abacate, castanhas, iogurteIntegral, amendoas, peitoFrango, brocolis, abobora, azeiteOliva, paoLowCarb, hummus, salmao, couveFlor, leiteAmendoas } from './foods';

export const lowSugarMenu = {
  "totalizers": {
    "calorias": 2080,
    "carboidrato": 58,
    "gordura": 149,
    "proteina": 125
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
