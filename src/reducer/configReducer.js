import {combineReducers} from 'redux';

const prodReducer=(state=[],action)=>{

    switch(action.type)
    {
        case 'add_prod':
          return state.reverse().concat(action.payload).reverse();
        case 'load_prod':
          return action.payload.products.reverse();
        case 'del_prod':
          return state.filter(p=>p.id==action.payload)
        default:
          return state;
    }
}



const cartReducer=(state=[],action)=>{

    switch(action.type)
    {
      case 'load_cart':
        return action.payload.cart.reverse();;

        case 'inc_cart_product':
          var obj=state.find(c=>c._id==action.payload._id);
          var obj1=action.payload;
          obj1.count++;

          if(!obj)
            return state.concat(obj1);
          var newState=[];
          state.map((c,ind)=>{newState.push(c); if(c._id==obj1._id)newState[ind].count++;})
          return newState;


        case 'dec_cart_product':
          var x=state.find(cart=>cart._id==action.payload.id);
          if(x && x.count<=1)return state;
          var newState=[];
          state.map((c,ind)=>{newState.push(c); if(c._id==x._id)newState[ind].count--;})
          return newState;

        case 'remove_cart_product':
            return state.filter(c=>c._id!=action.payload.id);

        case 'clear_cart':
                return [];

        default:
          return state;
    }
}



const videoReducer=(state=[],action)=>{

    switch(action.type)
    {
       case 'load_video':
        return action.payload.reverse();
       case 'add_video':
        return state.reverse().concat(action.payload).reverse();
       case 'del_video':
        return state.filter(s=>s._id!=action.payload);
        default:
          return state;
    }
}



const orderReducer=(state=[],action)=>{

    switch(action.type)
    {
       case 'load_order':
        return action.payload.reverse();
       case 'add_order':
        return state.reverse().concat(action.payload).reverse();
       case 'clear_order':
        return [];
        default:
          return state;
    }
}
const reducer=combineReducers({prodReducer,cartReducer,orderReducer,videoReducer});
export default reducer;
