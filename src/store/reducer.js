const initalState = {
    stack: []
}

const reducer = (state = initalState, action) => {
    if (action.type === 'push') {
        var arr = [];
        if ((state.stack).length === 0 || state.stack===0) {
            arr.push(1);
        } else {
            arr = state.stack.slice();
            arr.push((arr.length)+1);
        }

        return ({
            ...state,
            stack: arr
          });
          
    }
    if (action.type === 'pop') {
        /*var temp = state.stack;
        temp.splice((temp.length) - 1, 1);
        state.stack = temp;
        console.log(temp);
        return {
            stack: state.stack
        }*/

        return Object.assign({}, state, {
            stack: state.stack.splice(1,(state.stack).length-1).reverse()
        });

    }
    if (action.type === 'empty') {
        var emptyTemp = [];
        state.stack = emptyTemp;
        return {
            stack: state.stack
        }
    }
    return state;
}

export default reducer;
