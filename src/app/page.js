import BookCar from "@/components/BookCar/BookCar";
import Faq from "@/components/Faq/Faq";
import Featured from "@/components/Featured/Featured";
import Header from "@/components/Header/Header";
import Offer from "@/components/Offer";
import WhyYouShould from "@/components/WhyYouShould/WhyYouShould";

export default function Home() {
  return (
    <main>
      <Header />
      <WhyYouShould/>
      <Featured/>
      <BookCar/>
      <Offer/>
      <Faq/>
    </main>
  )
}
