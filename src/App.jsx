import FAQ from "./components/FAQ/FAQ"
import Footer from "./components/Footer/Footer"
import MainBanner from "./components/MainBanner/MainBanner"
import Reasons from "./components/Reasons/Reasons"
import SecondGetStarted from "./components/SecondGetStarted/SecondGetStarted"
import TrendingNow from "./components/TrendingNow/TrendingNow"

const App = () => {
  return (
    <>
      <MainBanner />
      <TrendingNow />
      <Reasons />
      <FAQ />
      <SecondGetStarted />
      <Footer />
    </>
  )
}

export default App