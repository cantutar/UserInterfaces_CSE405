import styled from "styled-components";
// import classes from "./SocialButton.module.css";

const Butn = styled.button.attrs((props) => ({
  className: props.classname,
}))`
  margin: 0;
  display: flex;
  justify-content: center;
  align-self: center;
  border: 1px;
  color: black;
  border-color: black;
  border-style: solid;

  &:hover {
    color: ${(props) => props.btColor};
    background-color: ${(props) => props.bgColor};
    border-color: transparent;
  }
`;

function SocialButton(props) {
  return (
    <Butn
      btColor={props.btColor}
      bgColor={props.bgColor}
      className={"btn col-lg-1 col-md-1 col-sm-1 mx-auto"}
    >
      <span className={`fa fa-2x fa-${props.name}`}></span>
    </Butn>
  );
}

export default SocialButton;
