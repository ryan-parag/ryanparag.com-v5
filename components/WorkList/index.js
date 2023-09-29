import { TrustLayer, Masonite, Chargebacks911 } from '@/components/Role';

const Divider = () => {
  return(
    <div className="mx-auto max-w-2xl px-4">
      <div className="h-px bg-themeOutline w-20 my-8"/>
    </div>
  )
}

const WorkList = () => {
  return(
    <>
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="spatial">Selected work</h2>
      </div>
      <TrustLayer/>
      <Divider/>
      <Masonite/>
      <Divider/>
      <Chargebacks911/>
    </>
  )
}

export default WorkList