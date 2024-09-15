import { Dropdown } from '../Dropdown';
import { Title } from '../Title';

const colors = [
  { border: 'border-[#38BCF7]', bg: 'bg-[#7DD2FB]', primaryColor: '#0C4A6E' },
  { border: 'border-[#BF83FB]', bg: 'bg-[#D7B3FD]', primaryColor: '#581C86' },
  { border: 'border-[#FABE24]', bg: 'bg-[#FBD24D]', primaryColor: '#78350F' },
  { border: 'border-[#2DD3BE]', bg: 'bg-[#5EE9D3]', primaryColor: '#134E4A' }
];

const questions = [
  {
    title: 'Czy to jest bezpieczne?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis volutpat nisl. Donec nec nisi massa. Nulla vestibulum neque varius nulla fermentum, sed pharetra erat viverra.'
  },
  {
    title: 'Czy to jest bezpieczne?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis volutpat nisl. Donec nec nisi massa. Nulla vestibulum neque varius nulla fermentum, sed pharetra erat viverra.'
  },
  {
    title: 'Czy to jest bezpieczne?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis volutpat nisl. Donec nec nisi massa. Nulla vestibulum neque varius nulla fermentum, sed pharetra erat viverra.'
  },
  {
    title: 'Czy to jest bezpieczne?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis volutpat nisl. Donec nec nisi massa. Nulla vestibulum neque varius nulla fermentum, sed pharetra erat viverra.'
  }
];

export function FifthSection() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <Title
        title="FAQ"
        titleClassName="text-white md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem]"
        withQuestions
      />
      <div className="flex flex-col gap-2.5 py-3">
        {questions.map((qustion, index) => (
          <Dropdown
            key={index}
            title={qustion.title}
            text={qustion.text}
            {...colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
}
