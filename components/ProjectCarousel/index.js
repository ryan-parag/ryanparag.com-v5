import ImageCarousel from "@/components/ImageCarousel";

const ProjectCarousel = ({ company, color, darkMode }) => {

  const owensCorning = []

  const trustlayer = [
    {
      caption: 'A redesign of the flagship product, helping manage complex organizations',
      src: '/projects/trustlayer/1.png' 
    }, {
      caption: 'A network of live data sources from which organizations can have a constant and real-time trace of coverage',
      src: '/projects/trustlayer/2.png' 
    }, {
      caption: 'A clearer experience for tasks centered around providing insurance information',
      src: '/projects/trustlayer/3.png' 
    }, {
      caption: 'An AI-powered document extraction tool',
      src: '/projects/trustlayer/4.png' 
    }, {
      caption: 'An easy-to-use visual workflow builder to automate repetitive workflows',
      src: '/projects/trustlayer/5.png' 
    }
  ]

  const chargebacks911 = [
    {
      caption: 'A design system for a product aimed at risk teams at large banks',
      src: '/projects/chargebacks911/1.png' 
    }, {
      caption: 'Email notifications',
      src: '/projects/chargebacks911/2.png' 
    }, {
      caption: 'A tool to manage chargeback alerts and cases for retailers/merchants',
      src: '/projects/chargebacks911/3.png' 
    }, {
      caption: 'An internal tool to dynamically create email signatures',
      src: '/projects/chargebacks911/4.png' 
    }, {
      caption: 'Simple onboarding for retailers and eCommerce',
      src: '/projects/chargebacks911/5.png' 
    }
  ]

  const masonite = [
    {
      caption: 'A mobile app to help control a powered, smart home door',
      src: '/projects/masonite/1.png' 
    }, {
      caption: 'A design system to help bridge our visual language across many web, mobile, and print',
      src: '/projects/masonite/2.png' 
    }, {
      caption: 'An app for door installers to test a smart door on-site of an installation',
      src: '/projects/masonite/3.png' 
    }, {
      caption: 'Complex door configuration made easy for home remodelers and homeowners',
      src: '/projects/masonite/4.png' 
    }, {
      caption: 'A sales enablement and quoting tool for contractors and door buyers',
      src: '/projects/masonite/5.png' 
    }
  ]

  const changeCompany = (company) => {
    switch (company) {
      case 'trustlayer':
        return trustlayer
        break;
      case 'owens corning':
        return owensCorning
        break;
      case 'masonite':
        return masonite
        break;
      case 'chargebacks911':
        return chargebacks911
        break;
      default:
        return trustlayer
        break;
    }
  }

  return(
    <ImageCarousel
      images={changeCompany(company)}
      company={company}
      color={color}
      darkMode={darkMode}
    />
  )
}

export default ProjectCarousel