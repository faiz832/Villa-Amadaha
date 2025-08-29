export default function CTA() {
  return (
    <section id="cta" className="h-[50vh] w-full bg-cover bg-center bg-[url(/src/assets/images/cta.png)]">
      <div className="max-w-[1110px] mx-auto px-4 md:px-8 flex justify-center md:justify-start items-center h-full">
        <div className="max-w-2xl flex flex-col items-center md:block">
          <h1 className="mx-auto w-full max-w-[212px] md:max-w-full text-center md:text-left text-xl md:text-[40px] font-bold leading-none md:leading-[60px] tracking-[-0.012em] md:tracking-[-0.023em]">Make your comfort is our happiness</h1>
          <a href="#" className="inline-block mt-6 bg-[#F1F6F6] text-center w-[144px] md:w-max px-6 py-3 text-xs md:text-xl md:rounded-[5px] text-[#106A64] hover:text-[#F1F6F6] hover:bg-[#106A64] transition duration-300">
            Book now
          </a>
        </div>
      </div>
    </section>
  );
}
