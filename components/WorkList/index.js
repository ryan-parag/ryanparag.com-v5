import { TrustLayer, Masonite, Chargebacks911 } from '@/components/Role';

const Divider = () => {
  return(
    <div className="section px-4 md:!px-0">
      <div className="h-px bg-themeOutline w-20 my-8"/>
    </div>
  )
}

const WorkList = () => {
  return(
    <>
      <div className="section">
        <h2 className="spatial text-xl">Selected work</h2>
      </div>
      <TrustLayer/>
      <Divider/>
      <Masonite/>
      <Divider/>
      <Chargebacks911/>
      <Divider/>
    </>
  )
}

export default WorkList