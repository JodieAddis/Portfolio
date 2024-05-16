import Button from "../Button";

const Component = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:ml-8 lg:items-start ">
      <form action="" className="mt-8 flex w-5/6 flex-col lg:w-1/4">
        <input
          type="text"
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh capitalize text-white"
          placeholder="Name"
        />
        <input
          type="text"
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh capitalize text-white"
          placeholder="Email"
        />
        <textarea
          name=""
          id=""
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh capitalize text-white"
          placeholder="Message"
        ></textarea>
      </form>
      <div className="flex justify-center">
        <Button
          content={"send"}
          onClick={() => {}}
          css="mb-6 capitalize font-Kumbh py-2 px-4 border-Charm border-solid border-2 rounded-lg hover:bg-white hover:text-Charm hover:font-extrabold"
        />
      </div>
    </div>
  );
};

export default Component;
