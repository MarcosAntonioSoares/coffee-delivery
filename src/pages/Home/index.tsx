import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Image from '../../assets/Imagem.png'
import CardImage from '../../assets/Image.png'
import { Container } from '../../styles/global'
import {
  Card, CardContent, CardFooter, Cards, CartActions, Filter, HomeContainer, HomeContent, HomeImage, HomeItems,
  HomeListContaniner, HomeListHeader, HomeSpan, HomeText, Icon, Tags
} from './styles'
import List from '../../data/List.json'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Counter } from '../../components/Counter'


export function Home() {
  return (
    <div>
      <HomeContainer>
        <Container>
          <HomeContent>
            <HomeText>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
              <HomeItems>
                <HomeSpan>
                  <Icon statusColor='yellow_700'>
                    <ShoppingCart size={18} weight="fill" />
                  </Icon>
                  Compra simples e segura
                </HomeSpan>
                <HomeSpan>
                  <Icon statusColor='gray'>
                    <Package size={18} weight="fill" />
                  </Icon>
                  Embalagem mantém o café intacto
                </HomeSpan>
                <HomeSpan>
                  <Icon statusColor='yellow_500'>
                    <Timer size={18} weight="fill" />
                  </Icon>
                  Entrega rápida e rastreada
                </HomeSpan>
                <HomeSpan>
                  <Icon statusColor='purple'>
                    <Coffee size={18} weight="fill" />
                  </Icon>
                  O café chega fresquinho até você
                </HomeSpan>
              </HomeItems>
            </HomeText>
            <HomeImage>
              <img src={Image} alt="" />
            </HomeImage>
          </HomeContent>
        </Container>
      </HomeContainer>
      <HomeListContaniner>
        <Container>
          <HomeListHeader>
            <h3>Nossos cafés</h3>
            <Filter>
              <li>Tradicional</li>
              <li>Especial</li>
              <li>Com leite</li>
              <li>Alcoólico</li>
              <li>Gelado</li>
            </Filter>
          </HomeListHeader>
          <Cards>
            {List.map((list) => (
              <Card key={list.id}>
                <div>
                  <img src={list.image} alt="" />
                </div>
                <CardContent>
                  <Tags>
                    {list.tags.map((tag) => (
                      <span key={tag.id}>{tag.name}</span>
                    ))}
                  </Tags>
                  <h2>{list.name}</h2>
                  <p>{list.description}</p>
                  <CardFooter>
                    <h6>
                      <span>R$</span>
                      {new Intl.NumberFormat('pt-BR', {
                        currency: 'BRL',
                        minimumFractionDigits: 2
                      }).format(list.price)}
                    </h6>
                    <CartActions>
                      <Counter />
                      <button>
                        <ShoppingCart size={18} weight="fill" />
                      </button>
                    </CartActions>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}

          </Cards>
        </Container>
      </HomeListContaniner>
    </div>
  )
}
