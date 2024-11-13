type QuoteProps = {
  className: string;
};

export function Quote({ className = '' }: QuoteProps) {
  return (
    <div
      className={`mx-auto text-center font-poetsen-one text-xs text-white sm:text-base xl:text-xl ${className}`}
    >
      <p>
        „OGROMNĄ CZĘŚCIĄ SKATEBOARDINGU, ZARÓWNO FIZYCZNIE,
        JAK&nbsp;I&nbsp;KULTUROWO, JEST ODKRYWANIE RZECZY, O&nbsp;KTÓRYCH NIE
        WIEDZIAŁEŚ, ŻE&nbsp;ICH&nbsp;SZUKASZ”
      </p>
      <p>...</p>
      <p>JACK SABBACK</p>
    </div>
  );
}
