import { QuestionMark } from './QuestionMark';

type Side = 'left' | 'right';

type TripleQuestionnMarkProps = { side?: Side };

export function TripleQuestionMark({ side }: TripleQuestionnMarkProps) {
  const leftMarks = [
    {
      position: {
        top: 'top-[0px] md:top-5',
        left: 'left-[calc(50%-155px)] md:left-[calc(50%-305px)]'
      },
      rotation: 'rotate-[-20deg]',
      size: 'text-3xl',
      mdSize: 'md:text-4xl'
    },
    {
      position: {
        top: 'top[-0.5px] md:top-4',
        left: 'left-[calc(50%-120px)] md:left-[calc(50%-225px)]'
      },
      rotation: 'rotate-[20deg]',
      size: 'text-4xl',
      mdSize: 'md:text-5xl'
    },
    {
      position: {
        top: 'top-[-1px] md:top-3',
        left: 'left-[calc(50%-75px)] md:left-[calc(50%-145px)]'
      },
      rotation: 'rotate-[-20deg]',
      size: 'text-5xl',
      mdSize: 'md:text-6xl'
    }
  ];

  const rightMarks = [
    {
      position: {
        top: 'top-[-1px] md:top-3',
        left: 'left-[calc(50%+50px)] md:left-[calc(50%+120px)] md:text-6xl'
      },
      rotation: 'rotate-[20deg]',
      size: 'text-5xl',
      mdSize: 'md:text-6xl'
    },
    {
      position: {
        top: 'top-[-0.5px] md:top-4',
        left: 'left-[calc(50%+95px)] md:left-[calc(50%+200px)]'
      },
      rotation: 'rotate-[-20deg]',
      size: 'text-4xl',
      mdSize: 'md:text-5xl'
    },
    {
      position: {
        top: 'top-[0px] md:top-5',
        left: 'left-[calc(50%+130px)] md:left-[calc(50%+280px)]'
      },
      rotation: 'rotate-[20deg]',
      size: 'text-3xl',
      mdSize: 'md:text-4xl'
    }
  ];

  const marks = side === 'left' ? leftMarks : rightMarks;

  return (
    <>
      {marks.map((mark, index) => (
        <QuestionMark
          key={index}
          positionStyle={`${mark.position.top} ${mark.position.left}`}
          rotationDegree={mark.rotation}
          textSize={`${mark.size} ${mark.mdSize}`}
        />
      ))}
    </>
  );
}
