import type { AppProps } from "next/app";
import { fr } from "@codegouvfr/react-dsfr";
import { createNextDsfrIntegrationApi } from "@codegouvfr/react-dsfr/next";
import Link from "next/link";
import { createEmotionSsrAdvancedApproach } from "tss-react/next";
import { createMuiDsfrThemeProvider } from "@codegouvfr/react-dsfr/mui";

// Only in TypeScript projects
declare module "@codegouvfr/react-dsfr" {
    interface RegisterLink { 
        Link: typeof Link;
    }
}

const { 
    withDsfr,
    dsfrDocumentApi
} = createNextDsfrIntegrationApi({
    defaultColorScheme: "system",
    Link
});

export { dsfrDocumentApi };

const {
  augmentDocumentWithEmotionCache,
  withAppEmotionCache
} = createEmotionSsrAdvancedApproach({ "key": "css" });

export { augmentDocumentWithEmotionCache };

const { MuiDsfrThemeProvider } = createMuiDsfrThemeProvider();

function App({ Component, pageProps }: AppProps) {
    return (
        <MuiDsfrThemeProvider>
            <Component {...pageProps} />
        </MuiDsfrThemeProvider>
    );
}

export default withAppEmotionCache(withDsfr(App));