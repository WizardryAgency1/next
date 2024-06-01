import { GetServerSideProps } from "next";
import Marquee from "../../components/ui/marquee";

interface HomePageProps {
  items: string[];
}

export default function HomePage({ items }: HomePageProps) {
  return (
    <div className="container mx-auto p-4">
      <Marquee className="bg-gray-200" pauseOnHover={true} repeat={3}>
        {items.map((item, index) => (
          <div key={index} className="p-2">
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/comments");
    const data = await res.json();
    return {
      props: {
        items: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        items: [],
      },
    };
  }
};