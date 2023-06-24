import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">
        Discover & share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptly is an AI open-source tool for the modern world that allows you
        to discover, create and share creative prompt ideas!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
