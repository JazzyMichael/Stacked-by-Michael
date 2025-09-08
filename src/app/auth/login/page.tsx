import { LoginForm } from "@/components/login-form";
import { NavLogo } from "@/components/nav-logo";
import { CardContainer } from "@/components/ui/3d-card";

export default function Page() {
  return (
    // <div>
    //   I was going to integrate supabase to set up auth and a db to keep building
    //   this, but then I thought - "Why continue to spend time on this when I can
    //   just move out to SF and work with the StackAI squad to build the best
    //   agent orchestration platform in the world!" Checkout the dashboard and projects route groups (/dashboard/x & /project/[id]/x)
    // </div>
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10 pb-4!">
        <div className="flex justify-center gap-2 md:justify-start">
          <NavLogo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
        <p className="whitespace-nowrap text-[10px] text-gray-400 text-center">
          By signing up, you agree to our{" "}
          <a
            target="_blank"
            className="text-muted-foreground underline hover:text-primary"
            href="https://www.stack-ai.com/terms-of-service"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            className="text-muted-foreground underline hover:text-primary"
            href="https://www.stack-ai.com/privacy"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>

      <div className="bg-muted relative hidden lg:block">
        <img
          src="/stack-ai-background-pattern.svg"
          alt="Background Pattern"
          className="absolute h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />

        <FancyCard />
      </div>
    </div>
  );
}

function FancyCard() {
  return (
    <CardContainer className="inter-var bg-[url('/stack-ai-onboarding-card.png')] bg-cover bg-center absolute w-[400px] h-64 top-[30vh] hover:scale-105">
      <img
        alt="User avatar"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        className="absolute left-8 top-8 z-10 h-[128px] w-[104px] rounded-[8px] border-[0.75px] border-gray border-opacity-[0.07] object-cover bg-transparent inset-0"
        src="/stack-ai-placeholder-avatar.svg"
      />

      <img
        alt="Avatar overlay"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        className="absolute left-8 top-8 z-10 h-[128px] w-[104px] rounded-[8px] object-cover inset-0"
        sizes="100vw"
        src="/stack-ai-avatar-pattern-overlay.webp"
      />
      {/* srcset="/_next/image?url=%2Fonboarding%2Fbusiness-avatar-pattern-overlay.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2Fonboarding%2Fbusiness-avatar-pattern-overlay.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2Fonboarding%2Fbusiness-avatar-pattern-overlay.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2Fonboarding%2Fbusiness-avatar-pattern-overlay.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2Fonboarding%2Fbusiness-avatar-pattern-overlay.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2Fonboarding%2Fbusiness-avatar-pattern-overlay.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2Fonboarding%2Fbusiness-avatar-pattern-overlay.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2Fonboarding%2Fbusiness-avatar-pattern-overlay.png&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2Fonboarding%2Fbusiness-avatar-pattern-overlay.png&amp;w=3840&amp;q=75" */}
      {/* style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;" */}

      <div className="absolute left-[168px] top-12 grid grid-cols-2 gap-2">
        <div className="flex flex-col truncate whitespace-nowrap uppercase">
          <span className="font-mono text-xs text-black opacity-40">Name</span>
          <span className="w-[94px] truncate whitespace-nowrap font-mono text-xs text-black">
            --·--
          </span>
        </div>
        <div className="flex flex-col truncate whitespace-nowrap uppercase">
          <span className="font-mono text-xs text-black opacity-40">Code</span>
          <span className="w-[94px] truncate whitespace-nowrap font-mono text-xs text-black">
            --·--
          </span>
        </div>
        <div className="flex flex-col truncate whitespace-nowrap uppercase">
          <span className="font-mono text-xs text-black opacity-40">Role</span>
          <span className="w-[94px] truncate whitespace-nowrap font-mono text-xs text-black">
            --·--
          </span>
        </div>
        <div className="flex flex-col truncate whitespace-nowrap uppercase">
          <span className="font-mono text-xs text-black opacity-40">
            Company
          </span>
          <span className="w-[94px] truncate whitespace-nowrap font-mono text-xs text-black">
            --·--
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 h-[88px] w-[400px] translate-y-[90%] bg-[url('/stack-ai-business-card-addon.png')] bg-[length:400px_88px]">
        <div className="relative h-full w-full">
          <div className="absolute top-6 mx-[48px] grid h-[40px] w-[336px] grid-cols-2 gap-1">
            <span className="text-[11px] font-light tracking-tight text-black opacity-40">
              GOAL
            </span>
            <span className="text-[11px] font-light tracking-tight text-black opacity-40">
              CAME FROM
            </span>
            <span className="truncate whitespace-nowrap font-mono text-[11px] font-light uppercase tracking-tight text-black">
              --·--
            </span>
            <span className="flex items-center gap-2 font-mono text-[11px] font-light tracking-tight text-black">
              <div className="h-5 w-5 rounded-sm border border-gray-300 bg-gray-200 opacity-50"></div>
              <span className="font-mono uppercase">--·--</span>
            </span>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}
