import { AboutUsSection } from '@/components/aboutUs/aboutUsSection/AboutUsSection';
import VideoPlayer from '@/ui-kit/video/Video';
import Image from 'next/image';
import {
  useLayoutEffect,
  useState
} from 'react';
import { AboutUsMap } from '@/components/aboutUs/aboutUsMap/AboutUsMap';
import styles from './aboutUs.module.scss';

export const AboutUs = () => {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'intro2.mp4',
      type: 'video/mp4'
    }],
    poster: 'aboutUs2.jpg'
  };

  const [isFadeLoaded, setIsFadeLoaded] = useState(false);

  useLayoutEffect(() => {
    import('react-reveal/Fade').then(() => {
      setIsFadeLoaded(true);
    });
  }, []);

  return(
    <section className={`${styles.about} ${!isFadeLoaded && styles.about__notFade}`}>
      {isFadeLoaded &&
        <>
          <AboutUsSection
            title="A few words about us"
            subtitle="Welcome to Boatrips, your premier choice for unforgettable experiences in Lagos, Portugal. Established in the picturesque coastal town of Lagos in the year 2000, we have been passionately crafting exceptional adventures for over two decades."
            reverse={false}
          >
            <Image src="/aboutUs1.jpg" alt="" width={500} height={100} layout="responsive"/>
          </AboutUsSection>
          <AboutUsSection
            title="About BOATRIPS"
            subtitle="You can find the most beautiful and pleasan You can find the most beautiful and pleasant places at the best You can find the most beautiful and pleasant places at the best You can find the most beautiful and pleasant places at the best"
            reverse={true}
          >
            <VideoPlayer options={videoJsOptions} />
          </AboutUsSection>
          <AboutUsMap />
        </>
      }
    </section>
  )
}