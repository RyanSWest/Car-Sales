import App from '../App'
import {ADD_FEATURE} from '../actions/actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
 
    
 export const carReducer = (state = initialState , action)=> {
    console.log('STATE', state)
     const features = state.car.features
    console.log("Features", state.car.features)


    switch(action.type){
         case ADD_FEATURE:{
            return {...state,
                
               car: { 
                ...state.car , features: action.payload
               },
             additionalPrice: action.payload
            
        }
    }
        // case ADD_TO_TOTAL: {
        //     return {
        //         ...state,
        //         price: state.store.map((item, idx)=> {
        //             action.payload === idx
        //         })

        //     }
        // }
        default: return state;
    }
}


 