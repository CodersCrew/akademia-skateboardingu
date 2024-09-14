'use client';

type NextSectionButtonProps = { sectionId: string };

export function NextSectionButton({ sectionId }: NextSectionButtonProps) {
  const scrollToView = () =>
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <button
      onClick={scrollToView}
      className="m-auto w-min rotate-90 px-3 py-2 font-poetsen-one text-2xl tracking-widest text-transparent md:text-4xl"
      style={{ WebkitTextStroke: '2px #FFFFFF' }}
    >
      &gt;&gt;
    </button>
  );
}
