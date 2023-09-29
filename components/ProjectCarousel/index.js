import ImageCarousel from "@/components/ImageCarousel";

const ProjectCarousel = ({ company }) => {

  const trustlayer = [
    '/projects/trustlayer/future-1.png',
    '/projects/trustlayer/future-2.png',
    '/projects/trustlayer/future-3.png',
    '/projects/trustlayer/future-4.png',
    '/projects/trustlayer/future-5.png'
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
    />
  )
}

export default ProjectCarousel