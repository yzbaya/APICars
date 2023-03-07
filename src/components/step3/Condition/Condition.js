/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';

const Cond = () => {
  return (
    <div>
      <div>
        <label>
          <div className="checkbox-wrapper-1">
            <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
            <label for="example-1">Je déclare avoir lu et accepté </label> <a href='https://www.citygo.tn/assets/files/Conditions-generale-Locations-citygo.pdf'>Les conditions générales de location</a>
            </div> 
        </label> 
      </div>

            <div>
        <label>
          <div className="checkbox-wrapper-1">
            <input id="example-2" className="substituted" type="checkbox" aria-hidden="true" />
            <label for="example-2">Je déclare avoir lu et accepté <a href=''>Les conditions d'annulation et de modification</a></label>
            </div> 
        </label> 
      </div>


{/* 
          <div className="checkbox-wrapper-1">
            <input id="example-1" className="substituted" type="checkbox" aria-hidden="true" />
                       Je déclare avoir lu et accepté 
            <a href=''>Les conditions d'annulation et de modification</a>
            </div> */}

    </div>
  );
};

export default Cond;