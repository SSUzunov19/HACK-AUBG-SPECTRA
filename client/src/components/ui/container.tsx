interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mx-auto max-w-7xl">
      {children}
    </div>
  );
};

export default Container;
