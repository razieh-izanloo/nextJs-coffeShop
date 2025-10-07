import { Header } from "@/components/header";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
