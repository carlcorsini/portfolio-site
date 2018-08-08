import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

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
      as="h2"
      content="Software Engineer"
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />
    {/* <Button primary size="huge">
      Resume
      <Icon name="right arrow" />
    </Button> */}
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
                  href="https://github.com/carlcorsini/BeerMe-Frontend">
                  <Icon name="github" />
                </Menu.Item>
                <Menu.Item
                  style={{ textDecoration: 'none' }}
                  href="https://linkedin.com/in/carlcorsini">
                  <Icon name="linkedin" />
                </Menu.Item>
                <Menu.Item
                  style={{ textDecoration: 'none' }}
                  href="https://drive.google.com/file/d/1dm2TkDiVp3MFWCANie3iktq9KWtN1ETv/view?usp=sharing">
                  Resume
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
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              href="https://github.com/carlcorsini/BeerMe-Frontend">
              <Icon name="github" />
            </Menu.Item>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              href="https://linkedin.com/in/carlcorsini">
              <Icon name="linkedin" />
            </Menu.Item>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              href="https://drive.google.com/file/d/1dm2TkDiVp3MFWCANie3iktq9KWtN1ETv/view?usp=sharing">
              Resume
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}>
            <Segment
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
                    href="https://github.com/carlcorsini/BeerMe-Frontend">
                    <Icon name="github" />
                  </Menu.Item>
                  <Menu.Item
                    style={{ textDecoration: 'none' }}
                    href="https://linkedin.com/in/carlcorsini">
                    <Icon name="linkedin" />
                  </Menu.Item>
                  <Menu.Item
                    style={{ textDecoration: 'none' }}
                    href="https://drive.google.com/file/d/1dm2TkDiVp3MFWCANie3iktq9KWtN1ETv/view?usp=sharing">
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
  let state = {
    copied: false
  }
  return (
    <ResponsiveContainer>
      <Segment style={{ padding: '4em 0em' }} vertical>
        <Container text>
          <p style={{ textAlign: 'left', fontSize: '1.33em' }}>
            Carl Corsini is a Full-Stack Software Engineer who eats, sleeps and
            breathes JavaScript. He is passionate about bringing people
            enjoyable and life altering experiences through technology.
            Technically skilled programmer with advanced interpersonal skills
            from experience in management. Carl also enjoys producing music,
            photography, and spending time away from his laptop occasionally.
          </p>
          <Button
            primary
            href="https://drive.google.com/file/d/1dm2TkDiVp3MFWCANie3iktq9KWtN1ETv/view?usp=sharing"
            as="a"
            size="large">
            Resume
          </Button>
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
      <Segment style={{ padding: '8em 0em' }} vertical>
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
                bordered
                rounded
                size="large"
                src="https://i.imgur.com/AWzT3w5.png"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button
                secondary
                href="https://beer-me-react.herokuapp.com"
                size="huge">
                Check It Out
              </Button>
              <Button
                href="https://github.com/carlcorsini/BeerMe-Frontend"
                size="huge">
                Front-End Github
              </Button>
              <Button
                href="https://github.com/carlcorsini/BeerMe-Backend"
                size="huge">
                Back-End Github
              </Button>
              <Button
                href="https://github.com/carlcorsini/BeerMe-Python-Backend"
                size="huge">
                Python Back-End Github
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      {/* <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                "What a guy!"
              </Header>
              <p style={{ fontSize: '1.33em' }}>-Steve Jobs</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                "Absolute Genius"
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <b /> -Bill Gates
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment> */}
      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header inverted as="h4" content="More" />
                <List link inverted>
                  <List.Item href="https://github.com/carlcorsini" as="a">
                    <Icon name="github" />
                    Github
                  </List.Item>
                  <List.Item href="https://linkedin.com/in/carlcorsini" as="a">
                    <Icon name="linkedin" />
                    LinkedIn
                  </List.Item>
                  <List.Item
                    href="https://www.instagram.com/carlmemaybee"
                    as="a">
                    <Icon name="instagram" />
                    Instagram
                  </List.Item>
                  <List.Item href="https://soundcloud.com/carl-corsini" as="a">
                    <Icon name="soundcloud" /> Soundcloud
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h4" inverted>
                  Email
                </Header>
                <CopyToClipboard text={'carl.m.corsin@gmail.com'}>
                  <Button
                    primary
                    onClick={e => {
                      e.target.innerHTML = 'Copied!'
                    }}>
                    Copy to Clipboard
                  </Button>
                </CopyToClipboard>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  )
}
export default HomePage
