import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors, device, gStyle } from '../constants';

// components
import AlbumsHorizontal from '../components/AlbumsHorizontal';

// mock data
import heavyRotation from '../mockdata/heavyRotation.json';
import similarity from '../mockdata/similarity.json';
import proximity from '../mockdata/proximity.json';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  render() {
    const { scrollY } = this.state;

    const opacityIn = scrollY.interpolate({
      inputRange: [0, 128],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });

    const opacityOut = scrollY.interpolate({
      inputRange: [0, 88],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    return (
      <React.Fragment>
        {device.iPhoneNotch && (
          <Animated.View style={[styles.iPhoneNotch, { opacity: opacityIn }]} />
        )}

        <Animated.View
          style={[styles.containerHeader, { opacity: opacityOut }]}
        >
          <FontAwesome color={colors.white} name="cog" size={28} />
        </Animated.View>

        <Animated.ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={gStyle.container}
        >
          <View style={gStyle.spacer16} />

          <AlbumsHorizontal
            data={proximity}
            heading="PROXIMITY"
            tagline="The principle of proximity states that objects near each other tend to be viewed as a group."
          />

          <AlbumsHorizontal
            data={similarity}
            heading="SIMILARITY"
            tagline="The principle of similarity suggests that we naturally group similar items together."
          />

          <AlbumsHorizontal
            data={proximity}
            heading="CLOSURE"
            tagline="The principle of closure suggests that elements that form a closed object will be perceived as a group."
          />

          <AlbumsHorizontal
            data={proximity}
            heading="COMMON FATE"
            tagline="The principle of common fate states that objects are perceived as lines that move along the smoothest path."
          />

          <AlbumsHorizontal
            data={proximity}
            heading="PAST EXPERIENCE"
            tagline="The principle of past experience implies that elements tend to be perceived according to our past experience."
          />

          <AlbumsHorizontal
            data={proximity}
            heading="“GOOD FIGURE”"
            tagline="The principle of “good-figure” states that we will naturally perceive things in their simplest form or organization."
          />

          <AlbumsHorizontal
            data={proximity}
            heading="FIGURE-GROUND"
            tagline="The figure-ground principle states that we tend to separate images into figure and ground."
          />

          {/* <AlbumsHorizontal
            data={jumpBackIn}
            heading="Jump back in"
            tagline="Your top listens from the past few months."
          /> */}
        </Animated.ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  iPhoneNotch: {
    backgroundColor: colors.black70,
    height: 44,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 20
  },
  containerHeader: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: device.iPhoneNotch ? 60 : 36,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10
  }
});

export default Home;