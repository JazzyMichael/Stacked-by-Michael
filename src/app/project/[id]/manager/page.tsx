import Container from "./container";
import { conversations } from "./data";

export default function Page() {
  return <Container conversations={conversations} />;
}
