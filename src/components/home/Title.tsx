import { TripleExclamationMark } from './TripleExclamationMark';
import { TripleQuestionMark } from './TripleQuestionMark';

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
      {withQuestions && <TripleQuestionMark side="left" />}
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
      {withQuestions && <TripleQuestionMark side="right" />}
    </div>
  );
}
