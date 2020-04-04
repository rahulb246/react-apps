console.clear();

// poeple dropping off a form (action creators)

const createPolicy = (name, amount) => {
  return { // action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return { // action (a form in our analogy)
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return { // action (a form in our analogy)
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      money: amountOfMoneyToCollect
    }
  };
};


// reducers (departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // numbers = [1,2,3]; 
    // [...numbers, 4] will give list [1,2,3,4]
    // always avoid modifying existing DS in reducers, only return new DS
    return [...oldListOfClaims, action.payload];
  }
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY'){
    return bagOfMoney - action.payload.amount;
  }
  return bagOfMoney;
}

const policies = (listOfPolicies=[], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY'){
    return listOfPolicies.filer(name => name != action.payload.name);
  }
  return listOfPolicies;
}


const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accouting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('name1', 50));

console.log(store.getState());
