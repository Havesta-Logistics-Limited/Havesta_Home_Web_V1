import Latest from "../components/News/latest";
import FAQ from "../components/faq.";

const News = ({ hero }) => {
  return (
    <>
      <img src={hero} alt="harvesta" />
      <div className="full mb-[250px]">
        <Latest />
      </div>
      <FAQ />
    </>
  );
};
export default News;
