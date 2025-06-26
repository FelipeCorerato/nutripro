import { shakeProteinaVegana, aveia, leiteAmendoas, banana, iogurteVegano, castanhas, graoBico, arrozIntegral, legumesCozidos, saladaFolhas, azeiteOliva, paoIntegral, hummus, tomate, tofuGrelhado, quinoa, nozes } from './foods';

export const vegetarianMenu = {
  "totalizers": {
    "calorias": 2320,
    "carboidrato": 244,
    "gordura": 107,
    "proteina": 108
  },
  "refeicoes": [
    {
      "refeicao": "Café da Manhã",
      "alimentos": [shakeProteinaVegana, aveia, leiteAmendoas, banana]
    },
    {
      "refeicao": "Lanche da Manhã",
      "alimentos": [iogurteVegano, castanhas]
    },
    {
      "refeicao": "Almoço",
      "alimentos": [graoBico, arrozIntegral, legumesCozidos, saladaFolhas, azeiteOliva]
    },
    {
      "refeicao": "Lanche da Tarde",
      "alimentos": [paoIntegral, hummus, tomate]
    },
    {
      "refeicao": "Jantar",
      "alimentos": [tofuGrelhado, quinoa, legumesCozidos, azeiteOliva]
    },
    {
      "refeicao": "Ceia",
      "alimentos": [leiteAmendoas, nozes]
    }
  ]
}
