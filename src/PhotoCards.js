import React from 'react'
import PhotoCard from './PhotoCard'
import { Container, Card, Header } from 'semantic-ui-react'

let images = [
  { src: 'https://i.imgur.com/REkKU3Q.jpg' },
  { src: 'https://i.imgur.com/AjYUsF7.jpg' },
  { src: 'https://i.imgur.com/AWMAFYO.jpg' },
  { src: 'https://i.imgur.com/7RZk9Pj.jpg' },
  { src: 'https://i.imgur.com/IdiOBTq.jpg' },
  { src: 'https://i.imgur.com/32lFEbB.jpg' },
  { src: 'https://i.imgur.com/kFzsCl8.jpg' },
  { src: 'https://i.imgur.com/OvCQLHv.jpg' },
  { src: 'https://i.imgur.com/o8V1n90.jpg' }
]

const PhotoCards = props => {
  let imageCards = images.map(img => <PhotoCard source={img.src} />)
  return <Card.Group centered>{imageCards}</Card.Group>
}

export default PhotoCards
