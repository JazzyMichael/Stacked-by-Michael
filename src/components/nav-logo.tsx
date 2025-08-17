import { SidebarTrigger } from "./ui/sidebar";

export function NavLogo() {
  return (
    <div className="flex flex-row items-center justify-start gap-1.5 mt-2 mb-4">
      <img
        src="/stack-ai-logo-image.svg"
        alt="Logo"
        className="h-5 w-5 flex-shrink-0 cursor-pointer group-data-[collapsible=icon]:mx-auto"
      />

      <img
        src="/stack-ai-logo-text.svg"
        alt="Logo"
        width={56}
        className="shrink-0 cursor-pointer group-data-[collapsible=icon]:hidden"
      />

      <SidebarTrigger className="mr-0 ml-auto group-data-[collapsible=icon]:hidden" />
    </div>
  );
}
