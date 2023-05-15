export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        style={{
          backgroundColor: "#222",
          color: "#FFF",
          height: "100%",
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
