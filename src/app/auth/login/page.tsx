import { LoginForm } from "@/components/login-form";
import { NavLogo } from "@/components/nav-logo";
import { GalleryVerticalEnd } from "lucide-react";

export default function Page() {
  return (
    // <div>
    //   I was going to integrate supabase to set up auth and a db to keep building
    //   this, but then I thought - "Why continue to spend time on this when I can
    //   just move out to SF and work with the StackAI squad to build the best
    //   agent orchestration platform in the world!" Checkout the dashboard and projects route groups (/dashboard/x & /project/[id]/x)
    // </div>
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          {/* <img src="/stack-ai-logo-image.svg" alt="Image" />
            <img src="/stack-ai-logo-text.svg" alt="Image" /> */}
          <NavLogo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/stack-ai-background-pattern.svg"
          alt="Image"
          className="absolute h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
        <div className="text-black absolute bg-transparent text-lg">
          Tilt card effect using Framer Motion:
          https://examples.motion.dev/react/tilt-card
        </div>
      </div>
    </div>
  );
}
