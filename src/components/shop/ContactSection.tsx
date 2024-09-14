import Image from 'next/image';

import { ContactForm } from './ContactForm';
import { FindUsHere } from './FindUsHere';

export function ContactSection() {
  return (
    <section className="mx-[48px] my-[50px] flex flex-col items-center">
      <div className="flex w-full flex-row justify-between">
        <div className="my-auto flex flex-col">
          <h5 className="mb-[24px] text-[16px] font-semibold">Dane Firmy</h5>
          <p className="text-[12px] font-normal">
            <span>AKADEMIA SKATEBOARDINGU ADAM SZULC</span>
            <span>NIP 6991968199</span>
            <span>WROCŁAW, LUBUSKA 58</span>
          </p>
          <h5 className="mb-[24px] mt-[48px] text-[16px] font-semibold">
            ADRES E-MAIL
          </h5>
          <span className="text-[12px] font-normal">
            AKADEMIASKATEBOARDINGU@GMAIL.COM
          </span>
        </div>
        <Image
          src="/images/placeholder.png"
          height={296}
          width={649}
          alt="about us image"
          className="h-[296px] w-[649px] "
        />
      </div>
      <h3 className="m-[48px] text-[36px] font-black">MASZ PYTANIA?</h3>
      <div className="flex w-full flex-row justify-between">
        <Image
          src="/images/placeholder.png"
          height={705}
          width={592}
          alt="about us image"
          className="h-[705px] w-[592px] "
        />
        <ContactForm />
      </div>
      <FindUsHere />
    </section>
  );
}
