type ContentProps = {
  contentToDisplay?: string;
};

const Content: React.FC<ContentProps> = ({ contentToDisplay = "Content" }) => {
  return (
    <div
      className="
        h-screen 
        overflow-y-auto 
        bg-[color:var(--light-bg-content)] dark:bg-[color:var(--dark-bg-content)] 
        text-[color:var(--light-font-clr)] dark:text-[color:var(--dark-font-clr)]
        grid items-center text-center relative z-[-1]      
        "
    >
      <h1 className="text-[color:var(--light-font-clr)] dark:text-[color:var(--dark-font-clr)] font-bold text-7xl">
        {contentToDisplay}
      </h1>
    </div>
  );
};

export default Content;
