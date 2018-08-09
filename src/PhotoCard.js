import React, { Component } from 'react'

import { Image, Card, Modal } from 'semantic-ui-react'

class PhotoCard extends Component {
  state = {}
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <Card onClick={this.show('blurring')} image={this.props.source} />
        <Modal basic dimmer={dimmer} open={open} onClose={this.close}>
          <Image src={this.props.source} />
        </Modal>
      </div>
    )
  }
}

export default PhotoCard
