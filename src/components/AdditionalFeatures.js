import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {addFeature} from '../actions/actions'
import {connect} from 'react-redux'
import ADD_FEATURE from '../actions/actions'

const AdditionalFeatures = props => {

  console.log('PROPS88',props)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature = {props.addFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
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

export default connect(mapStateToProps, {addFeature})(AdditionalFeatures);
// export default AdditionalFeatures