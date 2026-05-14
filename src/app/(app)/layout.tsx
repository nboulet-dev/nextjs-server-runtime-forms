import Header from "@/components/header/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">{children}</main>
    </>
  )
}
