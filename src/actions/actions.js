
export const ADD_FEATURE = 'ADD_FEATURE'


export function addFeature(newFeature){

    return{
        type:ADD_FEATURE,
        payload :{newFeature}
    }
}

// export function  addToTotal(){
//     type: ADD_TO_TOTAL,
// }