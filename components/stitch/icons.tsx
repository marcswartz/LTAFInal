import type { SVGProps } from "react";

type IconName =
  | "dashboard"
  | "business_center"
  | "verified_user"
  | "analytics"
  | "search"
  | "notifications"
  | "logout"
  | "add"
  | "arrow_forward"
  | "event_upcoming"
  | "location_on"
  | "category"
  | "check_circle"
  | "event_available"
  | "payments"
  | "account_balance"
  | "description"
  | "account_tree"
  | "verified"
  | "download"
  | "mail"
  | "trending_up"
  | "picture_as_pdf"
  | "upload_file"
  | "apartment"
  | "factory"
  | "chevron_right"
  | "shield"
  | "article"
  | "gavel"
  | "architecture";

type Props = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: Props) {
  const path = iconPaths[name];

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {path}
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </svg>
  );
}

const iconPaths: Record<IconName, React.ReactNode> = {
  dashboard: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="11" width="7" height="10" rx="1.5" />
      <rect x="3" y="13" width="7" height="8" rx="1.5" />
    </>
  ),
  business_center: (
    <>
      <path d="M9 6V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V6" />
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 11h18" />
    </>
  ),
  verified_user: (
    <>
      <path d="M12 3 5 6v5c0 4.1 2.4 7.9 7 10 4.6-2.1 7-5.9 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.8-4.2" />
    </>
  ),
  analytics: (
    <>
      <path d="M4 19h16" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  notifications: (
    <>
      <path d="M15 17H5.5A1.5 1.5 0 0 1 4 15.5v-.3c1.1-.8 2-2.6 2-5V9a6 6 0 1 1 12 0v1c0 2.4.9 4.2 2 5v.5A1.5 1.5 0 0 1 18.5 17H18" />
      <path d="M9.5 20a2.5 2.5 0 0 0 5 0" />
    </>
  ),
  logout: (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </>
  ),
  add: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  arrow_forward: (
    <>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </>
  ),
  event_upcoming: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
  location_on: (
    <>
      <path d="M12 21s6-5.8 6-11a6 6 0 1 0-12 0c0 5.2 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  category: (
    <>
      <path d="M3 7h8V3H3v4Zm10 14h8v-6h-8v6ZM3 21h8V11H3v10Zm10-10h8V3h-8v8Z" />
    </>
  ),
  check_circle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.3 2.3 4.7-5.3" />
    </>
  ),
  event_available: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="m8 15 2 2 5-5" />
    </>
  ),
  payments: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 10h10M7 14h6" />
    </>
  ),
  account_balance: (
    <>
      <path d="M3 9 12 4l9 5" />
      <path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" />
    </>
  ),
  description: (
    <>
      <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  account_tree: (
    <>
      <path d="M12 3v6M12 15v6M6 9h12M6 9v6M18 9v6" />
      <rect x="9" y="1.5" width="6" height="3" rx="1" />
      <rect x="3" y="15" width="6" height="3" rx="1" />
      <rect x="15" y="15" width="6" height="3" rx="1" />
    </>
  ),
  verified: (
    <>
      <path d="m12 3 2.2 1.3 2.6-.2 1.3 2.2 2.2 1.3-.2 2.6 1.3 2.2-1.3 2.2.2 2.6-2.2 1.3-1.3 2.2-2.6-.2L12 21l-2.2-1.3-2.6.2-1.3-2.2-2.2-1.3.2-2.6L2.6 12l1.3-2.2-.2-2.6 2.2-1.3 1.3-2.2 2.6.2L12 3Z" />
      <path d="m8.5 12 2 2 5-5" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  trending_up: (
    <>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  picture_as_pdf: (
    <>
      <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5M8 17h2.5a1.5 1.5 0 0 0 0-3H8v5M14 19v-5h2.5M14 16.5h2" />
    </>
  ),
  upload_file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5M12 17V11M9.5 13.5 12 11l2.5 2.5" />
    </>
  ),
  apartment: (
    <>
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M8 11h2M8 15h2M14 11h2M14 15h2M11 21v-4h2v4" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l7 4V9l7 4V7l4 2v12" />
      <path d="M3 21h18M7 21v-4M12 21v-4M17 21v-4" />
    </>
  ),
  chevron_right: <path d="m9 18 6-6-6-6" />,
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.1 2.4 7.9 7 10 4.6-2.1 7-5.9 7-10V6l-7-3Z" />
      <path d="M12 8v8" />
      <path d="M8.5 12h7" />
    </>
  ),
  article: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  gavel: (
    <>
      <path d="m14 6 4 4M12 8l4 4M3 21l8-8M10 4l6 6-2 2-6-6Z" />
      <path d="M14 19h7" />
    </>
  ),
  architecture: (
    <>
      <path d="M3 20h18" />
      <path d="M8 20V8l4-4 4 4v12" />
      <path d="M12 4v16" />
      <path d="M8 12h8" />
    </>
  ),
};
