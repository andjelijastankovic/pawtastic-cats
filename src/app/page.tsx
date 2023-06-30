import Header  from '@component/components/Header';
import Footer from '@component/components/Footer';
import Landing from '@component/components/Landing';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-y-5 space-y-5">
      <Header />
      <Landing />
      <Footer />
    </main>
  )
}