interface Person {
  gender: 'homem' | 'mulher' | 'nao-binario';
  goal: 'ganho' | 'perda' | 'manter';
  age: number;
  weight: number;
  height: number;
  activityFrequencyLevel: 1 | 2 | 3;
}

const person: Person = {
  gender: "homem",
  goal: "ganho",
  age: 21,
  weight: 65,
  height: 175,
  activityFrequencyLevel: 2,
};

const getFrequency = (p: Person) => {
  switch (p.activityFrequencyLevel) {
    case 1: return "de pouca atividades fisica";
    case 2: return "consistente de atividades fisica";
    case 3: default: return "de alta intensidade de atividades fisica";
  }
}

const personToContent = 
  `${person.goal} de massa para um ${person.gender} de ${person.age} anos que pesa ${person.weight}Kg, tem ${person.height}cm de altura e tem uma rotina ${getFrequency(person)}`;

const responseFormat = 
  "{ refeicoes: [{refeicao: ,alimentos: [{alimento: ,quantidade: ,proteina: ,carboidrato: ,gordura: ,calorias: }]}]}";

export const generateDayMenuMessageContent = `Monte uma dieta para ${personToContent}. A resposta deve ser dada neste formato (JSON): ${responseFormat}`;

export const changeItemFromMeal = (food: string, meal: string, observation: string) => 
  `Troque o item ${food} da refeição ${meal} por algo equivalente. A resposta deve ser apenas esse alimento neste formato (JSON): {alimento: ,quantidade: ,proteina: ,carboidrato: ,gordura: ,calorias: }. ${observation}`;
