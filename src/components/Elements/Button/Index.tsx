const Index = (props: any) => {
  const { children, classname = "bg-black" } = props;
  return (
    <button className={`${classname} h-10 px-8 text-white rounded-md`}>
      {children}
    </button>
  );
};

export default Index;
