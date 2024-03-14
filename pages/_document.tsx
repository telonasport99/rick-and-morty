import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import {AppType} from "next/app";
import {AppPropsType} from "next/dist/shared/lib/utils";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();

        try {
            const enhanceApp = (App: AppType<{}>) => (props: AppPropsType<any, {}>) => {
                return sheet.collectStyles(<App {...props} />);
            };

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    {
                        // @ts-ignore
                        this.props.styleTags
                    }
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
