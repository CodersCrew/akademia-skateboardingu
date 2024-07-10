import { Button } from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Textarea from '../Textarea';
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
      <div className="flex flex-col items-center gap-4 py-3">
        <Input
          label="Imię i nazwisko"
          name="name"
          placeholder="Wpisz imię i nazwisko"
          required
        />
        <Input
          label="E-mail"
          name="email"
          placeholder="Wpisz adres e-mail"
          required
        />
        <Textarea
          label="Wiadomość"
          name="message"
          placeholder="Napisz wiadomość..."
          required
          rows={8}
        />
        <Checkbox
          name="rules"
          label="Zapoznałem/am się z treścią regulaminu"
          required
        />
        <Checkbox
          name="rules2"
          label="Zapoznałem/am się z treścią regulaminu"
          required
        />
        <Button color="pink">Wyślij wiadomość &gt;&gt;</Button>
      </div>
    </div>
  );
}
