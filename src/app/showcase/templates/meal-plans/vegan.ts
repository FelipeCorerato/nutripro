import { tofuMexido, aveia, leiteAmendoas, banana, iogurteVegano, castanhas, graoBico, arrozIntegral, legumesCozidos, saladaFolhas, azeiteOliva, paoIntegral, hummus, tomate, lentilhasCozidas, quinoa, nozes } from './foods';

export const veganMenu = {
  "totalizers": {
    "calorias": 2200,
    "carboidrato": 259,
    "gordura": 96,
    "proteina": 88
  },
  "refeicoes": [
    {
      "refeicao": "Café da Manhã",
      "alimentos": [tofuMexido, aveia, leiteAmendoas, banana]
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
      "alimentos": [lentilhasCozidas, quinoa, legumesCozidos, azeiteOliva]
    },
    {
      "refeicao": "Ceia",
      "alimentos": [leiteAmendoas, nozes]
    }
  ]
}
