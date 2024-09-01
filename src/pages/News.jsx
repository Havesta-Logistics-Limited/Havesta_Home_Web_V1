import ReuseableHero from '../common/ReuseableHero';
import Latest from '../components/News/latest';
import PagesHero from '../components/News/pagesHero';
import FAQ from '../components/faq.';

const News = () => {
  return (
    <>
      <ReuseableHero
        text={
          'get the latest updates and deeper shopping experience from harvesta '
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
