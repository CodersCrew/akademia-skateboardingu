import { Dropdown } from '../Dropdown';
import { Title } from '../Title';

export function FifthSection() {
  return (
    <div className="flex flex-col gap-5 p-5">
      <Title title="FAQ" titleClassName="text-white" withQuestions />
      <div className="flex flex-col gap-2.5 py-3">
        <Dropdown
          border="border-[#38BCF7]"
          bg="bg-[#7DD2FB]"
          primaryColor="#0C4A6E"
          title="Czy to jest bezpieczne?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis volutpat nisl. Donec nec nisi massa. Nulla vestibulum neque varius nulla fermentum, sed pharetra erat viverra."
        />
        <Dropdown
          border="border-[#BF83FB]"
          bg="bg-[#D7B3FD]"
          primaryColor="#581C86"
          title="Czy to jest bezpieczne?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis volutpat nisl. Donec nec nisi massa. Nulla vestibulum neque varius nulla fermentum, sed pharetra erat viverra."
        />
        <Dropdown
          border="border-[#FABE24]"
          bg="bg-[#FBD24D]"
          primaryColor="#78350F"
          title="Czy to jest bezpieczne?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis volutpat nisl. Donec nec nisi massa. Nulla vestibulum neque varius nulla fermentum, sed pharetra erat viverra."
        />
        <Dropdown
          border="border-[#2DD3BE]"
          bg="bg-[#5EE9D3]"
          primaryColor="#134E4A"
          title="Czy to jest bezpieczne?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis volutpat nisl. Donec nec nisi massa. Nulla vestibulum neque varius nulla fermentum, sed pharetra erat viverra."
        />
      </div>
    </div>
  );
}
