import ImageCarousel from "@/components/ImageCarousel";

const ProjectCarousel = ({ company, color }) => {

  const trustlayer = [
    {
      caption: 'this is a caption',
      src: '/projects/trustlayer/1.png' 
    }, {
      caption: 'this is a caption',
      src: '/projects/trustlayer/2.png' 
    }, {
      caption: 'this is a caption',
      src: '/projects/trustlayer/3.png' 
    }, {
      caption: 'this is a caption',
      src: '/projects/trustlayer/4.png' 
    }, {
      caption: 'this is a caption',
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
    />
  )
}

export default ProjectCarousel