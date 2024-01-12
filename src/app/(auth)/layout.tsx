import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="text-gray-100">{children}</main>;
}
