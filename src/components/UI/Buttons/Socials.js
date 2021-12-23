import SocialButton from "../../SocialButton/SocialButton";

export default function Socials(props) {
  //usage iconname-buttoncolor-bg hover color
  return (
    <>
      <SocialButton name={"google"} btColor={"white"} bgColor={"red"} />
      <SocialButton name={"facebook"} btColor={"white"} bgColor={"#1778F2 "} />
      <SocialButton name={"github"} btColor={"white"} bgColor={"black"} />
      <SocialButton name={"vk"} btColor={"blue"} bgColor={"white"} />
      <SocialButton name={"twitter"} btColor={"white"} bgColor={"#1DA1F2"} />
    </>
  );
}
