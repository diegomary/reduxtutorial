export const increment = (delta) => ({  
  type: 'INCREMENT',
  howMuch:delta 
});

export const decrement = (delta) => ({  
  type: 'DECREMENT',
  howLess:delta 
});

export const write = (newitem) => {
	return {type: 'WRITE',newItem: newitem}
};

export const erase = (newitem) => {
	return {type: 'ERASE',itemToRemove: newitem }
};