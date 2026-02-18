import { ImageBackground, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'
import { VideoIcon } from '../assests/icons'

const phoneWidth = Dimensions.get("window").width
const cardWidth = (phoneWidth - s(16) * 3) / 2

interface MeditationProp {
  imageUrl: string, title: string, date: string
}
const MeditationCard: FC<MeditationProp> = ({ imageUrl, title, date }) => {
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.imageContainer}
      imageStyle={styles.image}>

      <View style={styles.overlay} />
      <View style={styles.liveBadge}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <VideoIcon />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

export default MeditationCard

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(140),
    width: cardWidth,
    overflow: "hidden",
    borderRadius: s(12)
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  cardContent: {
    position: "absolute",
    left: s(10),
    bottom: s(10)
  },
  dateText: {
    fontSize: s(12),
    color: "white",
    marginStart: s(7),
    fontWeight: "semibold"
  },
  title: {
    color: "white",
    fontSize: s(12),
    fontWeight: "semibold"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  liveBadge: {
    backgroundColor: "#E41111",
    borderRadius: s(90),
    height: vs(22),
    width: s(40),
    position: 'absolute',
    top: vs(6),
    right: s(6),
    justifyContent: "center",
    alignItems: "center"
  },
  liveText: {
    fontSize: s(11),
    fontWeight: "semibold",
    color: "#FFFFFF"
  }
})