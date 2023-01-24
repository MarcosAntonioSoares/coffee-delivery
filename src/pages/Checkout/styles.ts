import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 0;
`

export const Grid = styled.div`
  display: grid; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1.5fr 1fr; 
  grid-template-rows: 1fr;
  gap: 2rem;
`

export const Title = styled.h3`
  font-family: 'Baloo 2',cursive;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const GridCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CardBase = styled.div`
  background: #F3F2F2;
  padding: 2.5rem;
`

export const CardItem = styled(CardBase)`
  border-radius: 6px 44px;
`

export const Header =  styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`

export const HeaderText = styled.div`
  margin-left: 0.5rem;

  h6 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
  }
`

export const PaymentHeader = styled(Header)`
  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormRow = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 1rem;

  & + div {
    margin-top: 1rem;
  }
`

export const FormRowWidth = styled(FormRow)`
  grid-template-columns: 12.5rem 1fr;
`

export const FormRowWidth_2 = styled(FormRow)`
  grid-template-columns: 1fr 3.75rem;
`

export const FormInput = styled.input`
  font-size: 0.875rem;
  font-weight: 400;
  background: ${(props) => props.theme['gray-300']};
  width: 100%;
  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  padding: 0.75rem;
  color: ${(props) => props.theme['gray-700']};

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:focus{
    box-shadow: 0 0 0px 1000px ${(props) => props.theme['gray-300']} inset;
    -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme['gray-300']} inset;
    -webkit-text-fill-color: ${(props) => props.theme['gray-700']}!important;
  }
`

export const Wrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    right: 15px;
    top: 52%;
    transform: translateY(-50%);
    font-size: 12px;
    color: ${(props) => props.theme['gray-600']};
    line-height: 12px;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    width: 14rem;
    background: ${(props)=> props.theme['gray-400']};
    border-radius: 6px;
    border: 0;

    svg {
      color: ${(props)=> props.theme['purple-500']};
    }

    &:hover {
       background: ${(props)=> props.theme['gray-500']};
    }

    &:focus {
      background: ${(props)=> props.theme['purple-100']};
      box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
    }
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #E6E5E5;
`

export const ListRow =  styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`

export const ListRowHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ListRowFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`