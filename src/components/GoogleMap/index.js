import React from 'react'
import GoogleMapReact from 'google-map-react';

import './styles.scss'

class GoogleMap extends React.Component {

  render() {
  
    const center = {
      lat: 36.848810,
      lng: -75.987580
    }
  
    const Marker = () => <span style={{ background: 'white', color: 'black', padding: '7px'}}>VMCOA</span>;

    return (
      <div className="container">
        <div className="row px-0">
          <div className="col-md-7 offset-md-5 google-map px-0">
            <GoogleMapReact
              bootstrapURLKeys={{ key: this.props.props }}
              defaultCenter={center}
              defaultZoom={11}
              className="google-map"
              options={{
                styles: [{ stylers: [{ 'saturation': -100 }] }]
            }}
            >
              <Marker
                lat={center.lat}
                lng={center.lng}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleMap