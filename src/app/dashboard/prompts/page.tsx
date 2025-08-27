import Container from "./container";
import { prompts } from "./data";

export default function Page() {
  return <Container data={prompts} />;
}
