const reducer = (state = [], action) => {
	if(action.type === 'add_to_array'){
  	return [action.payload]
  
  }else if (action.type === 'add_one_more'){
  	return[...state, action.payload]
  }
	return state
}

const store = Redux.createStore(reducer)

store.getState()

const action = {
  type: 'add_to_array',
  payload: 'redux is Awesome'
}

store.getState()

store.dispatch(action)

store.getState()