import { useEffect, useState } from 'react'
import { ResumePDFDocument } from './ResumePDFDocument'
import Data from './Data'
import Spinner from '@/components/Spinner'

const fileName = `${Data.name.replace(/\s+/g, '')}_Resume.pdf`

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
)

const LoadingButton = ({ className }) => (
  <button type="button" disabled aria-busy="true" className={`${className} opacity-60 cursor-not-allowed`}>
    <span className="truncate">Preparing PDF…</span>
    <Spinner/>
  </button>
)

const ResumeDownloadButton = ({ className }) => {
  const [BlobProvider, setBlobProvider] = useState(null)

  useEffect(() => {
    import('@react-pdf/renderer').then(mod => setBlobProvider(() => mod.BlobProvider))
  }, [])

  if (!BlobProvider) return <LoadingButton className={className}/>

  return (
    <BlobProvider document={<ResumePDFDocument data={Data} />}>
      {({ url, loading }) => (loading || !url) ? (
        <LoadingButton className={className}/>
      ) : (
        <a className={className} href={url} download={fileName}>
          <span className="truncate">{fileName}</span>
          <DownloadIcon/>
        </a>
      )}
    </BlobProvider>
  )
}

export default ResumeDownloadButton
