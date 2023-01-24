import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import { Counter } from "../../components/Counter";
import { Container } from "../../styles/global";
import { ButtonRow, CardBase, CardItem, Divider, Form, FormInput, FormRow, FormRowWidth, FormRowWidth_2, Grid, GridCard, Header, HeaderText, List, ListContent, ListRow, ListRowFooter, ListRowHeader, PaymentHeader, Section, Title, Wrapper } from "./styles";

import Expresso from '../../assets/Expresso.png'
import Latte from '../../assets/Latte.png'
import { Button } from "../../components/Counter/Button";

export function Checkout() {
  return (
    <Section>
      <Container>
        <Grid>
          <div>
            <Title>Complete seu pedido</Title>
            <GridCard>
              <CardBase>
                <Header>
                  <MapPinLine size={22} />
                  <HeaderText>
                    <h6>Endereço de Entrega</h6>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </HeaderText>
                </Header>
                <Form action="">
                  <FormRowWidth>
                    <FormInput type="text" name="" id="" placeholder="CEP" />
                  </FormRowWidth>
                  <FormRow>
                    <FormInput type="text" name="" id="" placeholder="Rua" />
                  </FormRow>
                  <FormRowWidth>
                    <FormInput type="number" name="" id="" placeholder="Número" />
                    <Wrapper>
                      <FormInput type="text" name="" id="" placeholder="Complemento" />
                      <span>Opcional</span>
                    </Wrapper>
                  </FormRowWidth>
                  <FormRowWidth>
                    <FormInput type="text" name="" id="" placeholder="Bairro" />
                    <FormRowWidth_2>
                      <FormInput type="text" name="" id="" placeholder="Cidade" />
                      <FormInput type="text" name="" id="" placeholder="UF" />
                    </FormRowWidth_2>
                  </FormRowWidth>
                </Form>
              </CardBase>
              <CardBase>
                <PaymentHeader>
                  <CurrencyDollar size={22} />
                  <HeaderText>
                    <h6>Pagamento</h6>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                  </HeaderText>
                </PaymentHeader>
                <ButtonRow>
                  <button>
                    <CreditCard size={18} />
                    Cartão de crédito
                  </button>
                  <button>
                    <Bank size={18} />
                    cartão de débito
                  </button>
                  <button>
                    <Money size={18} />
                    dinheiro
                  </button>
                </ButtonRow>
              </CardBase>
            </GridCard>
          </div>
          <div>
            <Title>Cafés selecionados</Title>
            <CardItem>
              <List>
                <ListRow>
                  <img src={Expresso} alt="" />
                  <ListContent>
                    <ListRowHeader>
                      <h4>Expresso Tradicional</h4>
                      <span>R$ 9,90</span>
                    </ListRowHeader>
                    <ListRowFooter>
                      <Counter />
                      <Button title="Remover" icon={<Trash size={18} />} />
                    </ListRowFooter>
                  </ListContent>
                </ListRow>
                <Divider />
                <ListRow>
                  <img src={Latte} alt="" />
                  <ListContent>
                    <ListRowHeader>
                      <h4>Latte</h4>
                      <span>R$ 9,90</span>
                    </ListRowHeader>
                    <ListRowFooter>
                      <Counter />
                      <Button title="Remover" icon={<Trash size={18} />} />
                    </ListRowFooter>
                  </ListContent>
                </ListRow>
                <Divider />
                <div>Total</div>
                <button>confirmar pedido</button>
              </List>
            </CardItem>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}