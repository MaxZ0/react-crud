import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
import { BASE_URL } from "../../constants/api";

export default function LoginPage() {
  return (
    <>
      <Heading content="Login" />
      <LoginForm />
    </>
  );
}
