import StartRestartButtons from "@/app/_components/StartRestartButtons";
import Card from "@/app/_ui/Card";
import Heading from "@/app/_ui/Heading";

export default function Page() {
  return (
    <Card className="m-auto w-full max-w-xl">
      <Heading as="h1" className="mb-6 text-center">
        Phase 10
      </Heading>

      <StartRestartButtons />
    </Card>
  );
}
