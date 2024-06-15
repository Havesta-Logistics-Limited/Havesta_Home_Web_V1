import Latest from "../components/News/latest";
import FAQ from "../components/faq.";


const News = ({hero}) => {
  return (
    <>
    <img src={hero} alt="" />
      <div className="full mb-[150px]">
        <h1>news page</h1>
      </div>
      <FAQ />
    </>
  );
};
export default News;
