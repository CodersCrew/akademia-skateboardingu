type QuoteProps = {
  className: string;
};

export function Quote({ className = '' }: QuoteProps) {
  return (
    <div
      className={`mx-auto text-pretty text-center font-poetsen-one text-xs text-white md:text-base lg:text-xl xl:text-2xl ${className}`}
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
