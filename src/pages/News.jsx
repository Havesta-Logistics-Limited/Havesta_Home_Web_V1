import FAQ from "../components/faq.";

const News = ({hero}) => {
  return (
    <>
      <div className="full mb-[150px]">
        <img src={hero} alt="" />
        <h1>news page</h1>
      </div>
      <FAQ />
    </>
  );
};

export default News;
