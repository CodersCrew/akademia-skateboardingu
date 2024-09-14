import Image from 'next/image';

export function FindUsHere() {
  return (
    <div className="mb-[30px] flex w-[600px] flex-col items-center">
      <h3 className="mb-[48px] mt-[64px] text-[36px] font-black">
        ZNAJDZIESZ NAS TUTAJ
      </h3>
      <div className="felx-row flex w-full items-end justify-between">
        <div>
          <Image
            alt="Facebook icon"
            height={82}
            src="/images/Facebook.svg"
            width={82}
            className="mb-[32px]"
          />
          <span className="text-[16px] font-semibold">FACEBOOK</span>
        </div>
        <div>
          <Image
            alt="Instagram icon"
            height={82}
            src="/images/Instagram.svg"
            width={82}
            className="mb-[32px]"
          />
          <span className="text-[16px] font-semibold">INSTAGRAM</span>
        </div>
        <div>
          <Image
            alt="Youtube icon"
            height={82}
            src="/images/Youtube.svg"
            width={82}
            className="mb-[32px]"
          />
          <span className="text-[16px] font-semibold">YOUTUBE</span>
        </div>
        <div>
          <Image
            alt="Tiktok icon"
            height={82}
            src="/images/Tiktok.svg"
            width={82}
            className="mb-[32px]"
          />
          <span className="text-[16px] font-semibold">TIKTOK</span>
        </div>
      </div>
    </div>
  );
}
