import { PropsWithChildren } from 'react'
import {
  GithubIcon,
  HomeIcon,
  LinkedinIcon,
  PasteDocumentIcon,
  PasteFolderIcon,
  XIcon,
} from '../ui/icons'
import { NavButton } from '../ui/nav-button'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-neutral-200 py-6 pr-8 pl-16">
      <div className="bg-neutral-100 bg-[url(/img/bg-grid-tile.svg)] bg-size-[64px_64px] bg-repeat">
        {children}
      </div>
      {/* Left bar */}
      <aside className="fixed top-6 bottom-6 left-0 flex flex-col justify-between gap-2 border-r border-neutral-300 bg-neutral-200 px-4">
        <div className="flex flex-col gap-2">
          <NavButton active={true}>
            <HomeIcon />
          </NavButton>
          <NavButton>
            <PasteDocumentIcon />
          </NavButton>
          <NavButton>
            <PasteFolderIcon />
          </NavButton>
        </div>
        <div className="flex flex-col gap-2">
          <NavButton>
            <LinkedinIcon />
          </NavButton>
          <NavButton>
            <GithubIcon />
          </NavButton>
          <NavButton>
            <XIcon />
          </NavButton>
        </div>
      </aside>
      {/* Right bar */}
      <div className="fixed top-6 right-0 bottom-6 w-8 border-l border-neutral-300 bg-neutral-200" />
      {/* Top bar */}
      <div className="fixed top-0 right-8 left-16 h-6 border-b border-neutral-300 bg-neutral-200">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-full left-0 size-4 -translate-x-px -translate-y-px"
        >
          <path d="M0 0H16V3H0V0Z" fill="#D8D8D8" />
          <path d="M0 16V0H3V16H0Z" fill="#D8D8D8" />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-full right-0 size-4 translate-x-0.5 -translate-y-px rotate-90"
        >
          <path d="M0 0H16V3H0V0Z" fill="#D8D8D8" />
          <path d="M0 16V0H3V16H0Z" fill="#D8D8D8" />
        </svg>
      </div>
      {/* Bottom bar */}
      <div className="fixed right-8 bottom-0 left-16 h-6 border-t border-neutral-300 bg-neutral-200">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-full left-0 size-4 -translate-x-px translate-y-px -rotate-90"
        >
          <path d="M0 0H16V3H0V0Z" fill="#D8D8D8" />
          <path d="M0 16V0H3V16H0Z" fill="#D8D8D8" />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 bottom-full size-4 translate-x-0.5 translate-y-px rotate-180"
        >
          <path d="M0 0H16V3H0V0Z" fill="#D8D8D8" />
          <path d="M0 16V0H3V16H0Z" fill="#D8D8D8" />
        </svg>
      </div>
    </div>
  )
}
