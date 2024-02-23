import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

import MapView, {UserTrackingMode} from 'react-native-maps';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class UserTrackingModes extends React.Component<any, any> {
  map: any;

  constructor(props: any) {
    super(props);

    this.state = {
      userTrackingMode: UserTrackingMode.none,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      coordinates: [
        {
          longitude: -122.442753,
          latitude: 37.79879,
        },
        {
          longitude: -122.424728,
          latitude: 37.801232,
        },
        {
          longitude: -122.422497,
          latitude: 37.790651,
        },
        {
          longitude: -122.440693,
          latitude: 37.788209,
        },
      ],
      center: {
        longitude: -122.4326648935676,
        latitude: 37.79418561114521,
      },
    };
  }

  setUserTrackingMode(mode: UserTrackingMode) {
    this.setState({userTrackingMode: mode});
  }

  render() {
    const {region} = this.state;
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          followsUserLocation={true}
          userTrackingMode={this.state.userTrackingMode}
          ref={ref => {
            this.map = ref;
          }}
          style={styles.map}
          initialRegion={region}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.setUserTrackingMode(UserTrackingMode.none)}
              style={[styles.bubble, styles.button]}>
              <Text>None</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setUserTrackingMode(UserTrackingMode.follow)}
              style={[styles.bubble, styles.button]}>
              <Text>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.setUserTrackingMode(UserTrackingMode.followWithHeading)
              }
              style={[styles.bubble, styles.button]}>
              <Text>Follow heading</Text>
            </TouchableOpacity>
          </View>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  button: {
    marginTop: 100,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default UserTrackingModes;
