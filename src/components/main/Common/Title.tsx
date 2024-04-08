type Title = {
  title: string;
};

const Title = ({ title }: Title) => {
  return <h1 className="text-center text-2xl font-semibold">{title}</h1>;
};

export default Title;
