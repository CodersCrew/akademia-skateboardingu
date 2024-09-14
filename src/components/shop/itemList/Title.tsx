type Title = {
  title: string;
};

export function Title({ title }: Title) {
  return <h1 className="text-center text-2xl font-semibold">{title}</h1>;
}
