import { aveia, iogurteSemGordura, maca, chia, mixNozes, pera, peitoFrango, arrozIntegral, feijaoPreto, saladaFolhas, azeiteOliva, paoIntegral, queijoCottage, cenoura, salmao, batataDoce, brocolis, leiteDesnatado } from './foods';

export const cholesterolMenu = {
  "totalizers": {
    "calorias": 2250,
    "carboidrato": 262,
    "gordura": 76,
    "proteina": 138
  },
  "refeicoes": [
    {
      "refeicao": "Café da Manhã",
      "alimentos": [aveia, iogurteSemGordura, maca, chia]
    },
    {
      "refeicao": "Lanche da Manhã",
      "alimentos": [mixNozes, pera]
    },
    {
      "refeicao": "Almoço",
      "alimentos": [peitoFrango, arrozIntegral, feijaoPreto, saladaFolhas, azeiteOliva]
    },
    {
      "refeicao": "Lanche da Tarde",
      "alimentos": [paoIntegral, queijoCottage, cenoura]
    },
    {
      "refeicao": "Jantar",
      "alimentos": [salmao, batataDoce, brocolis, azeiteOliva]
    },
    {
      "refeicao": "Ceia",
      "alimentos": [leiteDesnatado, aveia]
    }
  ]
}
