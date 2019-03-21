const initialCardState ={
  card1: {
    title: "inspect the loading boards of trello",
    id: "card1"
  },
  card2: {
    title: "create skeleton structure",
    id:"card2"
  },
};
const initiaListState ={
  qwert: {
    title: "TODO Big picture",
    id: "qwert",
    cards: ["card1"]
  }
};

const initialBoardState = {
  firstBoard: {
    title: "Test Board: firstBoard",
    id: "firstBoard",
    lists: ["qwert"]
  }
};

const cards = (state = initialCardsState, action) => {
  switch(action.type){
    default:
      return state;
  }
};

const lists = (state = initialListState, action) => {
  switch(action.type){
    default:
    return state;
  }
}; 

const boards = (state = initialBoardState, action) => {
  switch (action.type){
    default:
    return state;
  }
};

const counter = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state + 2;
    }
    default:
      return state;
  }
};

export default { counter, cards, lists, boards };
