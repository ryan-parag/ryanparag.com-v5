import Image from 'next/image';

const CTA = () => {
  return(
    <section className="section px-4 md:!px-0 pt-20">
      <article className="bg-themeSurfaceVariant rounded-xl p-4 md:p-6 pt-16 md:pt-16 relative">
        <div className="bg-themeSurfaceVariant inline-flex items-center justify-center rounded-full h-28 w-28 p-2 absolute -top-12 left-6">
          <div className="bg-themeSurface w-full h-full rounded-full relative">
            <Image src="/memoji.png" layout="fill" alt="Ryan's face"/>
          </div>
        </div>
        <h3>Want a closer look into my work?</h3>
        <p>Let's chat if you&apos;d like a more in-depth view into my design process and the past projects I&apos;ve worked on.</p>
        <a href="mailto:parag.ryan@gmail.com" className="button buttonLg buttonPrimary mt-2">Send me an email!</a>
      </article>
    </section>
  )
}

export default CTA