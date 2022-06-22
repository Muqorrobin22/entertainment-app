import styled from "styled-components";
import Search from "../../public/assets/icon-search.svg";
import Image from "next/image";
import { useContext } from "react";
import MoviesContext from "../../store/movies-context";

const InputCustom = ({ placeholder }) => {
  const context = useContext(MoviesContext);

  return (
    <InputWrap>
      <button>
        <Image src={Search} alt="search" />
      </button>
      <form>
        <input
          type="text"
          placeholder={placeholder}
          onChange={context.handleChangeInput}
        />
      </form>
    </InputWrap>
  );
};

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.4rem;
  button {
    background-color: transparent;
    cursor: pointer;
    border: none;
    outline: none;
  }
  form {
    margin-left: 1.6rem;
    input {
      padding: 1rem 1.2rem;
      width: 100%;
      font-size: 1.6rem;
      background-color: transparent;
      outline: none;
      border: none;
      color: white;
      width: 125%;
      font-weight: 300;
      font-family: "Outfit";
      letter-spacing: 1px;
    }
  }
`;

export default InputCustom;
