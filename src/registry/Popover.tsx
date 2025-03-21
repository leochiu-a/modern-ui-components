const Popover = () => {
  return (
    <>
      <button popoverTarget="my-popover">Open Popover</button>
      <div popover="auto" id="my-popover">
        Greetings, one and all!
      </div>
    </>
  );
};

export default Popover;
