import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import { Toast } from '@base-ui-components/react/toast';

export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider>
      <Toast.Provider timeout="2500">
        <Component {...pageProps} />
      </Toast.Provider>
    </ThemeProvider>
  )
}
