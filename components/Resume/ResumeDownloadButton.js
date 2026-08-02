import dynamic from 'next/dynamic'
import { ResumePDFDocument } from './ResumePDFDocument'
import Data from './Data'

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
  { ssr: false, loading: () => <span className="truncate">Preparing PDF…</span> }
)

const fileName = `${Data.name.replace(/\s+/g, '')}_Resume.pdf`

const ResumeDownloadButton = ({ className }) => (
  <PDFDownloadLink
    className={className}
    document={<ResumePDFDocument data={Data} />}
    fileName={fileName}
  >
    {({ loading }) => (
      <>
        <span className="truncate">{loading ? 'Preparing PDF…' : fileName}</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
      </>
    )}
  </PDFDownloadLink>
)

export default ResumeDownloadButton
