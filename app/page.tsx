import ButtonLink from "@/app/_ui/ButtonLink";
import Heading from "@/app/_ui/Heading";

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 -z-1 grid grid-cols-4 overflow-hidden md:-inset-[40vw] md:rotate-25 md:grid-cols-[1.5fr_1fr_1fr_1.5fr] xl:-inset-[20vw]">
        <div className="size-full animate-[slide-up_0.75s_ease-out_0s_both] bg-red-500"></div>
        <div className="size-full animate-[slide-up_0.75s_ease-out_0.1s_both] bg-blue-500"></div>
        <div className="size-full animate-[slide-up_0.75s_ease-out_0.2s_both] bg-green-500"></div>
        <div className="size-full animate-[slide-up_0.75s_ease-out_0.3s_both] bg-yellow-500"></div>
      </div>
      <div className="m-auto w-full max-w-lg animate-[fade-in_1s_ease-in-out_1s_both] bg-white/50 p-4 backdrop-blur-md md:p-8 lg:p-12">
        <Heading as="h1" className="mb-4 text-center">
          Phase 10
        </Heading>

        <div className="flex flex-col items-center gap-2">
          <ButtonLink href="/setup">Start nieuw spel</ButtonLink>
          <ButtonLink href="/game">Hervat huidig spel</ButtonLink>
        </div>
      </div>
    </>
  );
}
