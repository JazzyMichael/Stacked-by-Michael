export function NavLogo() {
  return (
    <a
      href="/projects"
      className="flex flex-row items-center justify-start gap-1.5"
    >
      <img
        src="/stack-ai-logo-image.svg"
        alt="Logo"
        className="h-5 w-5 flex-shrink-0 cursor-pointer group-data-[collapsible=icon]:mx-auto"
      />

      <img
        src="/stack-ai-logo-text.svg"
        alt="Logo"
        width={56}
        className="shrink-0 cursor-pointer group-data-[collapsible=icon]:hidden transition-visible duration-300"
      />
    </a>
  );
}
