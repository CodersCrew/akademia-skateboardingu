type QuoteProps = {
  quoteClassName: string;
};

export function Quote({ quoteClassName = '' }: QuoteProps) {
  return (
    <div
      className={`mx-auto max-w-[350px] text-pretty text-center font-poetsen-one text-xs text-white md:text-base lg:text-xl xl:text-2xl ${quoteClassName}`}
    >
      <p>
        „OGROMNĄ CZĘŚCIĄ SKATEBOARDINGU, ZARÓWNO FIZYCZNIE, JAK I KULTUROWO,
        JEST ODKRYWANIE RZECZY, O KTÓRYCH NIE WIEDZIAŁEŚ, ŻE ICH SZUKASZ”
      </p>
      <p>...</p>
      <p>JACK SABBACK</p>
    </div>
  );
}
