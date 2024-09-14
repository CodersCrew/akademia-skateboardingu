import { TripleExclamationMark } from './TripleExclamationMark';

type TitleProps = {
  className?: string;
  subtitle?: string;
  subtitleClassName?: string;
  title: string;
  titleClassName?: string;
  withExclamations?: boolean;
  withQuestions?: boolean;
};

export function Title({
  className,
  subtitle,
  subtitleClassName,
  title,
  titleClassName,
  withExclamations = false,
  withQuestions = false
}: TitleProps) {
  return (
    <div
      className={`relative text-center font-poetsen-one text-white ${className}`}
    >
      {withQuestions && (
        <>
          <span
            className="absolute -top-0 left-[calc(50%-155px)] -rotate-[20deg] font-poetsen-one text-3xl text-transparent  md:left-[calc(50%-195px)] md:top-1 md:text-4xl"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-0.5 left-[calc(50%-120px)] rotate-[20deg] font-poetsen-one text-4xl text-transparent md:left-[calc(50%-155px)] md:top-0 md:text-5xl"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-1 left-[calc(50%-75px)] -rotate-[20deg] font-poetsen-one text-5xl text-transparent md:left-[calc(50%-105px)] md:text-6xl"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
        </>
      )}
      <p className={`relative text-4xl md:text-5xl ${titleClassName}`}>
        {title}
      </p>
      {subtitle && (
        <p className={`relative text-2xl md:text-4xl ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      {withExclamations && (
        <TripleExclamationMark className="left-[calc(50%+88px)] top-0 md:-top-3 md:left-[calc(50%+120px)]" />
      )}
      {withQuestions && (
        <>
          <span
            className="absolute -top-1 left-[calc(50%+50px)] rotate-[20deg] font-poetsen-one text-5xl text-transparent md:left-[calc(50%+70px)] md:text-6xl"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="absolute -top-0.5 left-[calc(50%+95px)] -rotate-[20deg] font-poetsen-one text-4xl text-transparent md:left-[calc(50%+125px)] md:top-0 md:text-5xl"
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
          <span
            className="md: absolute left-[calc(50%+130px)] top-0 rotate-[20deg] font-poetsen-one text-3xl text-transparent md:left-[calc(50%+170px)] md:top-1 md:text-4xl "
            style={{ WebkitTextStroke: '2px #FFFFFF' }}
          >
            ?
          </span>
        </>
      )}
    </div>
  );
}
