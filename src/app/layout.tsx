export const metadata = {
  title: "Calibes",
  description: "Calibes Crew web site",

  openGraph: {
    title: "Calibes",
    description: "Calibes Games",
    url: "https://calibes.com",
    siteName: "Calibes",
    images: [
      {
        url: "/Calibes_openGraph.png",
        width: 1200,
        height: 630,
        alt: "Calibes Logo",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },

  icons: {
    icon: "/calibes-favicon.svg",
    shortcut: "/calibes-favicon.svg",
    apple: "/calibes-favicon.svg",
  },

  keywords: ["Calibes", "Calibes Crew"],
  authors: [{ name: "Calibes Crew", url: "https://calibes.com" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
