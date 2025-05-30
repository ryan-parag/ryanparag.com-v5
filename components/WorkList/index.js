import { OwensCorning, TrustLayer, Masonite, Chargebacks911, SideProjects } from '@/components/Role';
import { useTheme } from 'next-themes'
import { checkMode } from '@/utils/darkMode';

const Divider = () => {
  return(
    <div className="section px-4 md:!px-0">
      <div className="h-px bg-themeOutline w-20 my-8"/>
    </div>
  )
}

const WorkList = () => {

  const { theme, systemTheme } = useTheme();

  return(
    <>
      <div className="section">
        <h2 className="spatial text-xl">Selected work</h2>
      </div>
      <TrustLayer darkMode={checkMode(theme,systemTheme)} />
      <Divider/>
      <Masonite darkMode={checkMode(theme,systemTheme)} />
      <Divider/>
      <Chargebacks911 darkMode={checkMode(theme,systemTheme)} />
      <Divider/>
      <SideProjects/>
      <Divider/>
    </>
  )
}

export default WorkList