import Latest from "../components/News/latest";
import PagesHero from "../components/News/pagesHero";
import FAQ from "../components/faq.";

const News = () => {
  return (
    <>
      <PagesHero
        image={
          "https://res.cloudinary.com/dtc89xi2r/image/upload/v1718625481/EatFood.com_8_bglfcw.png"
        }
      />
      <div className="full mb-[250px]">
        <Latest />
      </div>
      <FAQ />
    </>
  );
};
export default News;
