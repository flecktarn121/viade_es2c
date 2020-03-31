import styled from 'styled-components';
import {media} from "../../utils";

export const RouteWrapper = styled.section`
  display: flex;
  flex: 1 0 auto;
  flex-direction:row !important;
  background-image: url('img/concentric-hex-pattern_2x.png');
  background-repeat: repeat;
  height: inherit;
  width: 100vw !important;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column !important;
  position: relative;

   background-image: url('img/pattern-geo.png'),
    radial-gradient(#00B020, #00B020, #00B020);
  background-repeat: repeat, no-repeat;
  padding: 30px 20px;
  max-width: 300px;
`;



export const Input = styled.input`
  margin: 5px;
`;

export const Button = styled.button`
  max-width: 128px;
  display: inline-block;
  margin-left: 5px;
`;

export const Label = styled.label`
  margin: 5px;
  color: white;
`;

export const InputFile = styled.input`
    height: 0;
    overflow: hidden;
    width: 0;
`;

export const LabelFile = styled.label`
  background: #f15d22;
  border: none;
  border-radius: 5px;
  color: #00B020;
  cursor: pointer;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-size: inherit;
  font-weight: 520;
  margin-bottom: 1rem;
  outline: none;
   padding: 1rem 50px;
  position: relative;
  transition: all 0.3s;
  vertical-align: middle;

  &:hover {
    background-color: darken(#f15d22, 10%);
  }

  &.btn-1 {
    background-color: #ffffff;
    box-shadow: 0 6px darken(#f79159, 10%);
    transition: none;

    &:hover {
      box-shadow: 0 4px darken(#f79159, 10%);
      top: 2px;
    }
  }

`;