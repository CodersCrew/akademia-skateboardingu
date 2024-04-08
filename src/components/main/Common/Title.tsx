type Title = {
  title: string;
};

const Title = ({ title }: Title) => {
  return <h1 className="text-center">{title}</h1>;
};

export default Title;
