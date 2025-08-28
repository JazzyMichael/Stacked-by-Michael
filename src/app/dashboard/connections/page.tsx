import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const catPics = [
    { name: "curious-desk.jpg", width: 3072, height: 4080 },
    { name: "thinking-desk.jpg", width: 3072, height: 4080 },
    { name: "resting-desk.jpg", width: 3072, height: 4080 },

    { name: "yawning.jpg", width: 2048, height: 2720 },
    { name: "throne.jpg", width: 1932, height: 2898 },

    { name: "sleeping-couch.jpg", width: 1932, height: 2898 },

    { name: "belly-chair.jpg", width: 1512, height: 2688 },
    { name: "close-up-face.jpg", width: 1932, height: 4000 },
    { name: "face-chair.jpg", width: 1512, height: 2688 },
    { name: "serious-desk.jpg", width: 1512, height: 2688 },
  ];

  return (
    <>
      <header className="flex h-12 border-b-1 shrink-0 items-center justify-between px-8 transition-[width,height] ease-linear bg-white">
        <h1 className="font-semibold">Connections</h1>
        <Button disabled>
          <Plus /> New Connection
        </Button>
      </header>

      <main className="p-8 mb-64">
        <div className="flex flex-col gap-6 p-4">
          <p>
            The official StackAI platform uses this page to manage third-party
            connections with other services, however that&apos;s a bit
            unnecessary for this project so I&apos;ll share some cat pictures
            instead! (All of the desk pictures were taken as I was building
            this).
          </p>
          <p>
            I adopted this beauty when I began my career as a software engineer
            in 2018 making touch-screen kiosk apps for an early stage startup.
            Her name is <span className="font-medium">Jazzy</span> and I
            absolutely love it. Jazz is about understanding all the factors at
            play and deliberately breaking the common structures of music theory
            to explore sounds and experiences based on curiosity; I use this as
            a metaphor for my approach to life, as I strongly value curiousity
            and integrity and taking risks. I will risk sounding awful for the
            potential to sound incredible.
          </p>
          <p>
            All this to say, I have a great{" "}
            <span className="font-bold italic">connection</span> 😉 with my cat!
          </p>
          <p>
            Anyway...
            <span className="text-lg font-medium px-1">
              {" "}
              Let&apos;s Connect!
            </span>{" "}
            and talk about tech, business, music, cats, and if I&apos;m a good
            fit to join StackAI as a high-performing software engineer
            passionate about apps & ai!
          </p>
          <p>thejazzymichael@gmail.com | 215-262-7000</p>
        </div>

        <div className="grid gap-5 items-center pt-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {catPics.map(({ name, width, height }) => (
            <a key={name} href={`/cat/${name}`} target="_blank">
              <Image
                src={`/cat/${name}`}
                alt={name.split(".")[0]}
                width={width}
                height={height}
                className="rounded-lg border-white border-2 hover:border-slate-600"
              />
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
