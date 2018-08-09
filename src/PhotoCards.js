import React from 'react'
import PhotoCard from './PhotoCard'
import { Card } from 'semantic-ui-react'

let images = [
  { id: 1, src: 'https://i.imgur.com/REkKU3Q.jpg' },
  { id: 2, src: 'https://i.imgur.com/AjYUsF7.jpg' },
  { id: 3, src: 'https://i.imgur.com/AWMAFYO.jpg' },
  { id: 4, src: 'https://i.imgur.com/7RZk9Pj.jpg' },
  { id: 5, src: 'https://i.imgur.com/IdiOBTq.jpg' },
  { id: 6, src: 'https://i.imgur.com/32lFEbB.jpg' },
  { id: 7, src: 'https://i.imgur.com/kFzsCl8.jpg' },
  { id: 8, src: 'https://i.imgur.com/OvCQLHv.jpg' },
  { id: 9, src: 'https://i.imgur.com/o8V1n90.jpg' }
]

const PhotoCards = props => {
  let imageCards = images.map(img => (
    <PhotoCard key={img.id} source={img.src} />
  ))
  return <Card.Group centered>{imageCards}</Card.Group>
}

export default PhotoCards
