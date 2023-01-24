import { Car, MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { Container } from '../../styles/global'
import { Location, Content, HeaderContainer, Actions, HeaderLink } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Content>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <Actions>
            <Location>
              <MapPin size={24} weight="fill" /> Florianópolis, SC
            </Location>
            <HeaderLink to="/checkout">
              <ShoppingCart size={24} weight="fill" />
            </HeaderLink>
          </Actions>
        </Content>
      </Container>
    </HeaderContainer>
  )
}
