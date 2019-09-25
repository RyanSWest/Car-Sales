import React from 'react';
import {ADD_FEATURE} from '../actions/actions'
import {addFeature} from '../actions/actions'
const AdditionalFeature = props => {

  // const addFeature = e => {
  //   e.preventDefault();
  //  props.addFeature(props.feature.id)
  // }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */
       
      
      }
      <button className="button"
       onClick = { (e)=> 
        {e.preventDefault()
          props.addFeature(props.feature.id)
                      console.log(props.feature.id, "FEATURES", props.feature.name)  
                      console.log(props)        }}>
                                  Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
