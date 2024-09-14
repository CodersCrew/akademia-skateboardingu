import Image from 'next/image';

export function OurValuesSection() {
  return (
    <div className="mx-[48px] mb-[93px] flex flex-col items-center">
      <h3 className="m-[48px] text-[36px] font-black">WYZNAWANE WARTOŚCI</h3>
      <div className="flex flex-col">
        <div className="mb-[72px] mr-[144px] flex flex-row">
          <div className=" mr-[84px] flex flex-row">
            <Image
              src="/images/placeholder.png"
              height={160}
              width={200}
              alt="avalues image"
              className="mr-[62px]"
            />
            <span className="text-[12px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui
            </span>
          </div>
          <div className="flex flex-row">
            <Image
              src="/images/placeholder.png"
              height={160}
              width={200}
              alt="avalues image"
              className="mr-[62px]"
            />
            <span className="text-[12px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui
            </span>
          </div>
        </div>
        <div className="ml-[144px] flex flex-row">
          <div className="mr-[84px] flex flex-row">
            <Image
              src="/images/placeholder.png"
              height={160}
              width={200}
              alt="avalues image"
              className="mr-[62px]"
            />
            <span className="text-[12px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui
            </span>
          </div>
          <div className="flex flex-row">
            <Image
              src="/images/placeholder.png"
              height={160}
              width={200}
              alt="avalues image"
              className="mr-[62px]"
            />
            <span className="text-[12px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
