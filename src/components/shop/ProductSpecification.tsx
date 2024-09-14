type SpecificationItem = {
  specificationName: string;
  specificationValue: string;
};

type ProductSpecificationProps = {
  specificationList: SpecificationItem[];
};
export function ProductSpecification({
  specificationList
}: ProductSpecificationProps) {
  return (
    <div>
      <h3 className="mb-6 text-[2rem] font-semibold">Specyfikacja</h3>
      <table className="w-full">
        {specificationList.map(item => (
          <tr className="h-16 odd:bg-[#F5F5F5]" key={item.specificationName}>
            <td className="w-1/4" />
            <td className="w-1/4 text-xl font-semibold">
              {item.specificationName}
            </td>
            <td className="w-1/4 text-xl font-light">
              {item.specificationValue}
            </td>
            <td className="w-1/4" />
          </tr>
        ))}
      </table>
    </div>
  );
}
