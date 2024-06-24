'use server';

type Props = {
  params: {
    id: string
  };
  searchParams: {
    [key: string]: string;
  };
};

const SingleAdPage = async (args: Props) => {
  return (
    // <div>{JSON.stringify(args)}</div>
    <div className="flex">
      <div className="grow bg-black">photos</div>
      <div className="w-52 p-4">
        title
      </div>
    </div>
  )
}

export default SingleAdPage