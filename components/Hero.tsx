import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-primary/75 via-blue-500 to-primary bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Trouve le produit que tu cherche
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed font-bold">
        Explore notre gamme de produits de haute qualité
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white focus:outline-none  active:text-opacity-75 sm:w-auto shadow-md"
          href="#"
        >
          Découvrir
        </Link>

        <Link
          className="block w-full rounded border border-primary/75 bg-primary/75 px-12 py-3 text-sm font-medium text-white focus:outline-none  active:text-opacity-75 sm:w-auto shadow-md"
          href="#"
        >
          Contacter
        </Link>
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero
