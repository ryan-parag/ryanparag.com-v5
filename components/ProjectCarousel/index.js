import ImageCarousel from "@/components/ImageCarousel";

const ProjectCarousel = ({ company, color }) => {

  const trustlayer = [
    {
      caption: 'this is a caption',
      src: '/projects/trustlayer/future-1.png' 
    }, {
      caption: 'this is a caption',
      src: '/projects/trustlayer/future-2.png' 
    }, {
      caption: 'this is a caption',
      src: '/projects/trustlayer/future-3.png' 
    }, {
      caption: 'this is a caption',
      src: '/projects/trustlayer/future-4.png' 
    }, {
      caption: 'this is a caption',
      src: '/projects/trustlayer/future-5.png' 
    }
  ]

  const changeCompany = (company) => {
    switch (company) {
      case 'trustlayer':
        return trustlayer
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