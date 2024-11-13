import ContactForm from '../ContactForm';
import SectionContainer from '../SectionContainer';
import { Title } from '../Title';

export function SixthSection() {
  return (
    <SectionContainer className="flex flex-col gap-5 overflow-hidden">
      <Title
        subtitle="Napisz do mnie!"
        subtitleClassName="left-14"
        title="Masz pytania?"
        titleClassName="text-[#D7B3FD] -left-2"
      />
      <ContactForm />
    </SectionContainer>
  );
}
