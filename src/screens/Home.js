import * as React from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors, device, gStyle } from '../constants';

// components
import AlbumsHorizontal from '../components/AlbumsHorizontal';

// mock data
import closure from '../mockdata/closure.json';
import similarity from '../mockdata/similarity.json';
import proximity from '../mockdata/proximity.json';
import commonFate from '../mockdata/commonFate.json';
import pastExperience from '../mockdata/pastExperience.json';
import goodFigure from '../mockdata/goodFigure.json';
import figureGround from '../mockdata/figureGround.json';

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

        {/* <Animated.View
          style={[styles.containerHeader, { opacity: opacityOut }]}
        >
          <FontAwesome color={colors.white} name="cog" size={28} />
        </Animated.View> */}
        <Animated.View style={[styles.containerHeader, { opacity: opacityOut }]}>
          <Text style={[styles.headingTitle]}>GESTALT PRINCIPLES</Text>
          <View style={gStyle.spacer2} />
          <Text style={[styles.subHeadingTitle]}>
            Gestalt is a German word that roughly means 'configuration' or the way things are put together. 
          </Text>
          <Text style={[styles.subHeadingTitle]}>
            In psychology, it suggests that 'the whole is greater than the sum of its parts'.
          </Text>
          <Text style={[styles.subHeadingTitle]}>
            There are more than ten overlapping Gestalt principles ; here are seven of the most recognized. 
          </Text>
          <Text style={[styles.subHeadingTitle]}>
            To illustrate each of them, please enjoy these album covers. 
          </Text>
          <Text style={[styles.subHeadingTitle, { marginTop: 10 }]}>
            Now, let’s dive in.
          </Text>
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
          <View style={gStyle.spacer34} />

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
            data={closure}
            heading="CLOSURE"
            tagline="The principle of closure suggests that elements that form a closed object will be perceived as a group."
          />

          <AlbumsHorizontal
            data={commonFate}
            heading="COMMON FATE"
            tagline="The principle of common fate states that objects sharing the same line seem to belong to each other : they are perceived as a single unit."
          />

          <AlbumsHorizontal
            data={pastExperience}
            heading="PAST EXPERIENCE"
            tagline="The principle of past experience implies that elements tend to be perceived according to our past experience."
          />

          <AlbumsHorizontal
            data={goodFigure}
            heading="“GOOD FIGURE”"
            tagline="The principle of “good-figure” states that we will naturally perceive things in their simplest form or organization."
          />

          <AlbumsHorizontal
            data={figureGround}
            heading="FIGURE-GROUND"
            tagline="The figure-ground principle states that we tend to separate images into 'figure' and 'ground'."
          />
        </Animated.ScrollView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  iPhoneNotch: {
    backgroundColor: colors.black70,
    height: 44,
    //position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 20
  },
  containerHeader: {
    alignItems: 'center',
    color: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 36,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10,
    flexDirection: 'column'
  },
  headingTitle: {
    ...gStyle.textSpotifyBold24,
    color: colors.white,
    textAlign: 'center'
  },
  subHeadingTitle: {
    ...gStyle.textSpotify18,
    color: colors.white,
    lineHeight: 26.6,
    textAlign: 'center'
  },
});

export default Home;
