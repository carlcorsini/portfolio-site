import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import React, { Component } from 'react'
import PhotoCards from './PhotoCards'
import FadeIn from 'react-fade-in'
import {
  Tab,
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Divider
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

const panes = [
  {
    menuItem: 'BeerMe',
    render: () => (
      <Tab.Pane
        style={{
          boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
        }}
        attached={false}>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                BeerMe
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                A hub for beer lovers created with React.
              </p>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Find your watering hole.
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Navigate through our beer database, create your own tasting
                profile, and share it with the world!
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                href="https://beer-me-react.herokuapp.com"
                bordered
                rounded
                size="large"
                src="https://i.imgur.com/AWzT3w5.png"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{ paddingTop: '2em' }} textAlign="center">
              <Button.Group basic vertical>
                <Button
                  basic
                  href="https://beer-me-react.herokuapp.com"
                  size="huge">
                  Check It Out
                </Button>
                <Button
                  basic
                  href="https://github.com/carlcorsini/BeerMe-Frontend"
                  size="huge">
                  Front-End Github
                </Button>
              </Button.Group>
              <Button.Group basic vertical>
                <Button
                  basic
                  href="https://github.com/carlcorsini/BeerMe-Backend"
                  size="huge">
                  Back-End Github
                </Button>
                <Button
                  basic
                  href="https://github.com/carlcorsini/BeerMe-Python-Backend"
                  size="huge">
                  Python Back-End Github
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'ThatSong',
    render: () => (
      <Tab.Pane
        style={{
          boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
        }}
        attached={false}>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                ThatSong
              </Header>
              <p style={{ fontSize: '1.33em' }}>Dj's best friend</p>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Never lose a track!
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Utilize a chrome extension and React-App to save, organize and
                browse your favorite tracks.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <iframe
                title="thatSong-walkthrough"
                width="350"
                height="200"
                src="https://www.youtube.com/embed/zWdKutLttWI"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen="yes"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{ paddingTop: '2em' }} textAlign="center">
              <Button.Group basic vertical>
                <Button basic href="https://that-song.com/about" size="huge">
                  Check It Out
                </Button>
                <Button
                  basic
                  href="https://github.com/carlcorsini/ThatSong_React"
                  size="huge">
                  Front-End Github
                </Button>
              </Button.Group>
              <Button.Group basic vertical>
                <Button
                  basic
                  href="https://chrome.google.com/webstore/detail/thatsong/anbbnfbonmbbfboffbagbcaoehhgkjmn"
                  size="huge">
                  Chrome Extension
                </Button>
                <Button
                  basic
                  href="https://github.com/carlcorsini/ThatSong_Backend"
                  size="huge">
                  Back-End Github
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Bay Area Writing Coach',
    render: () => (
      <Tab.Pane
        style={{
          boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
        }}
        attached={false}>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Bay Area Writing Coach
              </Header>
              <p style={{ fontSize: '1.33em' }}>Small business site example</p>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Become the best writer you can be!
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Showcasing design abilities and customization options for front
                end design. Created with React.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                href="https://bayareawritingcoach.com"
                bordered
                rounded
                size="large"
                src="https://i.imgur.com/x8x15N3.png"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{ paddingTop: '2em' }} textAlign="center">
              <Button.Group basic vertical>
                <Button
                  basic
                  href="https://bayareawritingcoach.com"
                  size="huge">
                  Check It Out
                </Button>
                <Button
                  basic
                  href="https://github.com/carlcorsini/bay-area-writing-coach"
                  size="huge">
                  Front-End Github
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Tab.Pane>
    )
  }
]

let quotes = [
  [
    'Things work out best for those who make the best of the way things work out.',
    'John Wooden'
  ],
  ['Never mistake activity for achievement.', 'John Wooden'],
  [
    'Do not let what you cannot do interfere with what you can do.',
    'John Wooden'
  ],
  [
    'Success is peace of mind which is a direct result of self-satisfaction in knowing you did your best to become the best you are capable of becoming.',
    'John Wooden'
  ],
  [
    'Do not take life too seriously. You will never get out of it alive.',
    'Elbert Hubbard'
  ],
  [
    'I have not failed. I’ve just found 10,000 ways that won’t work.',
    'Thomas Edison'
  ],
  ['Change is the only constant in life.', 'Heraclitus'],
  [
    'Work like you don’t need the money. Love like you’ve never been hurt. Dance like nobody’s watching.',
    'Satchel Paige'
  ],
  ['Not all those who wander are lost.', 'J.R.R. Tolkien'],
  ['The secret of getting ahead is getting started.', 'Mark Twain'],
  [
    'The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.',
    'William Arthur Ward'
  ]
]

const randomQuote = (array, max) => {
  let random = Math.floor(Math.random() * Math.floor(max))
  return array[random]
}

let quote = randomQuote(quotes, 11)

const notifyButtonClick = event => {
  event.persist()
  event.target.innerHTML = 'There it is :)'
  setTimeout(() => {
    event.target.innerHTML = 'hate to see you go'
  }, 2000)
  setTimeout(() => {
    event.target.innerHTML = 'check out BeerMe'
  }, 4000)
  setTimeout(() => {
    event.target.innerHTML = "it's pretty neat"
  }, 6000)
  setTimeout(() => {
    event.target.innerHTML = 'Have a great day!'
  }, 8000)
  setTimeout(() => {
    event.target.innerHTML = 'Bye bye now'
  }, 10000)

  setTimeout(() => {
    event.target.innerHTML = 'Copy Email to Clipboard'
  }, 12000)
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Carl Corsini"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Header
      href="#projects"
      as="a"
      content="Software "
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />
    <Header
      href="#photos"
      as="a"
      content="| Photography "
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />
    <Header
      href="#music"
      as="a"
      content="| Music"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            className="landing-image"
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large">
              <Container>
                <Menu.Item
                  style={{ textDecoration: 'none' }}
                  href="https://github.com/carlcorsini">
                  <Icon name="github" />
                </Menu.Item>
                <Menu.Item
                  style={{ textDecoration: 'none' }}
                  href="https://linkedin.com/in/carlcorsini">
                  <Icon name="linkedin" />
                </Menu.Item>
                <Menu.Item href="https://soundcloud.com/carl-corsini" as="a">
                  <Icon name="soundcloud" />
                </Menu.Item>
                <Menu.Item href="https://www.instagram.com/carlmemaybee" as="a">
                  <Icon name="instagram" />
                </Menu.Item>
                <Menu.Item href="https://beer-me-react.herokuapp.com" as="a">
                  <Icon name="beer" />
                </Menu.Item>
                <Menu.Item
                  style={{ textDecoration: 'none' }}
                  href="https://drive.google.com/file/d/1wdyDlrulX8t5qQSOBuDeHsh4k3Sb2H4u/view?usp=sharing">
                  Resume
                </Menu.Item>
                <Menu.Item
                  position="right"
                  style={{ textDecoration: 'none' }}
                  href="mailto:carl.m.corsini@gmail.com">
                  carl.m.corsini@gmail.com
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading className="landing-image" />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            className="landing-image"
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              href="https://github.com/carlcorsini">
              <Icon name="github" /> Github
            </Menu.Item>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              href="https://linkedin.com/in/carlcorsini">
              <Icon name="linkedin" /> LinkedIn
            </Menu.Item>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              href="https://drive.google.com/file/d/1wdyDlrulX8t5qQSOBuDeHsh4k3Sb2H4u/view?usp=sharing">
              <Icon name="file alternate" />
              Resume
            </Menu.Item>
            <Menu.Item href="https://www.instagram.com/carlmemaybee" as="a">
              <Icon name="instagram" />
              Instagram
            </Menu.Item>
            <Menu.Item href="https://soundcloud.com/carl-corsini" as="a">
              <Icon name="soundcloud" /> Soundcloud
            </Menu.Item>
            <Menu.Item
              href="https://github.com/carlcorsini/portfolio-site"
              as="a">
              <Icon name="code" /> Source Code
            </Menu.Item>
            <Menu.Item href="https://beer-me-react.herokuapp.com" as="a">
              <Icon name="beer" /> BeerMe
            </Menu.Item>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              href="mailto:carl.m.corsini@gmail.com">
              <Icon name="envelope" /> carl.m.corsini@gmail.com
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}>
            <Segment
              className="landing-image"
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical>
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item
                    style={{ textDecoration: 'none' }}
                    href="https://github.com/carlcorsini">
                    <Icon name="github" />
                  </Menu.Item>
                  <Menu.Item
                    style={{ textDecoration: 'none' }}
                    href="https://linkedin.com/in/carlcorsini">
                    <Icon name="linkedin" />
                  </Menu.Item>
                  <Menu.Item href="https://soundcloud.com/carl-corsini" as="a">
                    <Icon name="soundcloud" />
                  </Menu.Item>
                  <Menu.Item
                    position="right"
                    style={{ textDecoration: 'none' }}
                    href="https://drive.google.com/file/d/1wdyDlrulX8t5qQSOBuDeHsh4k3Sb2H4u/view?usp=sharing">
                    Resume
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}

const HomePage = () => {
  return (
    <ResponsiveContainer>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Container text>
          <FadeIn>
            <p style={{ fontSize: '1.25em' }}>{quote[0]}</p>
            <p> -{quote[1]}</p>
          </FadeIn>
        </Container>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid divided columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column
              style={{
                fontSize: '1.5em',
                paddingBottom: '2em',
                paddingTop: '2em'
              }}>
              <List>
                <List.Item>Javascript | ES6</List.Item>
                <List.Item>Python</List.Item>
                <List.Item>Ruby</List.Item>
                <List.Item>HTML</List.Item>
                <List.Item>CSS</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column
              style={{
                fontSize: '1.5em',
                paddingBottom: '2em',
                paddingTop: '2em'
              }}>
              <List>
                <List.Item>Flask | SQLAlchemy</List.Item>
                <List.Item>PostgreSQL | MongoDB | NoSQL</List.Item>
                <List.Item>React | Redux | Router</List.Item>
                <List.Item>Mocha & Chai</List.Item>
                <List.Item>Node.JS | Express</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column
              style={{
                fontSize: '1.5em',
                paddingBottom: '2em',
                paddingTop: '2em'
              }}>
              <List>
                <List.Item>Object Oriented Programming (OOP)</List.Item>
                <List.Item>Agile Methodology</List.Item>
                <List.Item>Github</List.Item>
                <List.Item>Test Driven Development</List.Item>
                <List.Item>REST APIs</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment id="projects" style={{ padding: '6em 0em' }} vertical>
        <Container>
          <Grid.Row textAlign="center">
            <Grid.Column width={16}>
              <Header style={{ fontSize: '3em' }}>Projects</Header>
              <Icon size="huge" name="code" />
            </Grid.Column>
          </Grid.Row>
          <FadeIn>
            <Tab
              style={{
                marginTop: '3em',
                marginBottom: '5em'
              }}
              menu={{
                compact: true,
                pointing: true
              }}
              panes={panes}
            />
          </FadeIn>
        </Container>
      </Segment>
      <Segment id="photos" style={{ padding: '5em' }} vertical>
        <Grid stackable>
          <Grid.Row textAlign="center">
            <Grid.Column width={16}>
              <Header style={{ fontSize: '3em' }}>Photography</Header>
              <Icon style={{ marginBottom: '1em' }} size="huge" name="camera" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row textAlign="center">
            <Grid.Column width={1} />
            <Grid.Column width={14}>
              <PhotoCards />
            </Grid.Column>
            <Grid.Column width={1} />
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment id="music" inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={5} style={{}}>
                <List>
                  <List.Item>
                    <iframe
                      title="soundcloud"
                      width="100%"
                      height="50%"
                      scrolling="yes"
                      frameBorder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/310646666&color=%2300d3ff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    />
                  </List.Item>
                  <List.Item style={{ paddingTop: '1em' }}>
                    This site was built with React & Semantic-UI
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <List
                  verticalAlign="middle"
                  relaxed
                  style={{ marginTop: '1em' }}
                  link
                  inverted>
                  <List.Item href="https://github.com/carlcorsini" as="a">
                    <Icon name="github" />
                  </List.Item>
                  <List.Item href="https://linkedin.com/in/carlcorsini" as="a">
                    <Icon name="linkedin" />
                  </List.Item>
                  <List.Item
                    href="https://www.instagram.com/carlmemaybee"
                    as="a">
                    <Icon name="instagram" />
                  </List.Item>
                  <List.Item href="https://soundcloud.com/carl-corsini" as="a">
                    <Icon name="soundcloud" />
                  </List.Item>
                  <List.Item
                    href="https://github.com/carlcorsini/portfolio-site"
                    as="a">
                    <Icon name="code" />
                  </List.Item>
                  <List.Item href="https://beer-me-react.herokuapp.com" as="a">
                    <Icon name="beer" />
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header href="mailto:carl.m.corsini@gmail.com" as="a" inverted>
                  carl.m.corsini@gmail.com
                </Header>
                <br />
                <br />
                <Button.Group vertical>
                  <CopyToClipboard text={'carl.m.corsini@gmail.com'}>
                    <Button onClick={notifyButtonClick} inverted primary>
                      Copy Email to Clipboard
                    </Button>
                  </CopyToClipboard>
                  <Button
                    primary
                    inverted
                    href="https://drive.google.com/file/d/1wdyDlrulX8t5qQSOBuDeHsh4k3Sb2H4u/view?usp=sharing"
                    as="a"
                    size="large">
                    Resume
                  </Button>
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  )
}
export default HomePage
