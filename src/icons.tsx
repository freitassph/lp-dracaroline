import type { ReactNode } from 'react';

const paths = {
  diagonal: <path d="M6.5 17.5 17.5 6.5M8.5 6.5h9v9" />,
  right: <path d="M4.5 12h14.75m-5.5-5.5L19.25 12l-5.5 5.5" />,
  left: <path d="M19.5 12H4.75m5.5-5.5L4.75 12l5.5 5.5" />,
  down: <path d="M12 4.5v14.75m-5.5-5.5 5.5 5.5 5.5-5.5" />,
  map: <><path d="M19.2 10.35c0 5.08-7.2 10.15-7.2 10.15S4.8 15.43 4.8 10.35a7.2 7.2 0 1 1 14.4 0Z" /><circle cx="12" cy="10.15" r="2.3" /></>,
  video: <><rect x="3" y="5.5" width="12.5" height="13" rx="2.5" /><path d="m15.5 10 4.4-2.65a.72.72 0 0 1 1.1.62v8.05a.72.72 0 0 1-1.1.63L15.5 14" /></>,
  chat: <path d="M20.75 11.5a8.55 8.55 0 0 1-8.8 8.3c-1.17 0-2.18-.2-3.17-.6l-4.88 1.3 1.25-4.25a8.03 8.03 0 0 1-1.9-5.02c0-4.55 3.94-8.23 8.8-8.23s8.7 3.76 8.7 8.5ZM8.35 11.5h7.3" />,
  menu: <path d="M4.5 8.5h15m-15 7h15" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  book: <><path d="M12 6.1C9.22 3.9 6.07 3.85 3 5.2v13.5c3.07-1.35 6.22-1.3 9 .9 2.78-2.2 5.93-2.25 9-.9V5.2c-3.07-1.35-6.22-1.3-9 .9Z" /><path d="M12 6.1v13.5" /></>,
  line: <><path d="M3 17c4.6 0 4.3-10 8.9-10 3.5 0 4.2 5 9.1 5" /><circle cx="3" cy="17" r=".75" /><circle cx="21" cy="12" r=".75" /></>,
  circles: <><circle cx="9" cy="12" r="5.5" /><circle cx="15" cy="12" r="5.5" /></>,
  moon: <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />,
  calendar: <><rect x="3.5" y="5.75" width="17" height="15" rx="2.4" /><path d="M3.5 10.5h17m-12-7v4.25m7-4.25v4.25m-7 8 2.5 2.5 4.5-4.5" /></>,
  shield: <><path d="M12 21s7.25-3.79 7.25-10.5V5.8L12 3 4.75 5.8v4.7C4.75 17.21 12 21 12 21Z" /><path d="m8.8 12 2.05 2.05 4.35-4.35" /></>,
  instagram: <><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4.5" /><circle cx="12" cy="12" r="3.65" /><path d="M17.4 6.7h.05" /></>,
} satisfies Record<string, ReactNode>;

export function Icon({ name }: { name: keyof typeof paths }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths[name]}
    </svg>
  );
}

export function Monogram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" width="64" height="64" fill="none" aria-hidden="true" focusable="false">
      <path d="M43 16c-6.2-5.8-16.3-5.1-22.2.9-7.8 7.9-7.6 20.3.2 28 5.7 5.7 14.3 6.6 21.1 2.4" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="m27 42 10.9-20.5L49 43M31.5 34h12.9" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ContourArt({ variant = 'care' }: { variant?: 'care' | 'contact' }) {
  return (
    <svg className={`contour-art contour-art--${variant}`} viewBox="0 0 600 540" fill="none" aria-hidden="true" focusable="false">
      <path d="M593 78c-103-79-238-83-354-26C123 109 67 236 89 345c23 116 120 195 231 190 139-6 218-107 201-198-16-84-98-104-161-74-48 24-58 68-41 100" />
      <path d="M582 98c-94-71-220-75-326-26-107 50-161 169-141 266 21 104 105 175 204 171 120-5 192-89 178-168-13-68-80-86-133-63-39 17-51 53-38 80" />
      <path d="M569 118c-86-63-200-68-297-24-98 44-147 151-129 239 19 93 90 155 177 151 101-5 165-76 153-140-10-52-62-68-104-51-31 13-44 40-36 59" />
      <path d="M556 138c-76-55-179-58-265-21-88 38-133 133-119 211 15 81 75 133 149 130 82-4 136-60 126-109-7-37-43-50-73-40-22 8-34 27-29 43" />
      <path className="contour-accent" d="M541 159c-67-46-155-48-231-20-79 30-121 115-110 184 11 67 58 112 121 109 64-3 108-44 101-80-5-23-27-31-45-26" pathLength="1" />
      <path d="M525 180c-59-37-133-37-197-16-69 23-111 97-101 155 9 56 46 91 94 88 48-2 80-29 76-52" />
      <path d="M508 202c-49-28-109-26-162-12-58 16-99 78-93 126 6 44 34 67 68 67 29-1 51-17 49-28" />
    </svg>
  );
}
