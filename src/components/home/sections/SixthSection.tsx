import ContactForm from '../ContactForm';
import { Title } from '../Title';

export function SixthSection() {
  return (
    <div className="flex flex-col gap-5 overflow-hidden p-5">
      <Title
        subtitle="Napisz do mnie!"
        subtitleClassName="left-14"
        title="Masz pytania?"
        titleClassName="text-[#D7B3FD] -left-2"
      />
      <ContactForm />
    </div>
  );
}
