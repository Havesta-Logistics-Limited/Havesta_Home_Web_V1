import Latest from "../components/News/latest";
import PagesHero from "../components/News/pagesHero";
import FAQ from "../components/faq.";

const News = () => {
  return (
    <>
      <PagesHero
        image={
          "https://res.cloudinary.com/dtc89xi2r/image/upload/v1719768642/EatFood.com_1_ih7ulx.png"
        }
        title={"our news"}
        des={
          "get the latest updates and deeper shopping experience from harvesta "
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
