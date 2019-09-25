import React from 'react';

import AddedFeature from './AddedFeature';
import {connect} from 'react-redux'
import {addFeature} from '../actions/actions'

const AddedFeatures = props => {
 console.log("PROPS HERE", props)

 
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} add ={addFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return{
    additionalPrice: state.additionalPrice,
    car: state.car,
    features: state.car.features,
    store:state.store

  }
}

export default connect (mapStateToProps, {addFeature}) (AddedFeatures);
