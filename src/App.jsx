import Nav from "./components/Nav";
import * as Sections  from "./sections";

const App = () => {
  return(
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b ">
      <Sections.Hero/>
    </section>
    <section className="padding">
      <Sections.PopularProduct/>
    </section>
    <section className='padding'>
      <Sections.Quality />
    </section>
    <section className="padding-x py-10">
      <Sections.Service />
    </section>
    <section className="padding">
      <Sections.Offerts/>
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Sections.Suscription/>
    </section>
    <section className= 'bg-black padding-x padding-t pb-8' >
      <Sections.Footer />
    </section>

  </main>
  )
}

export default App;