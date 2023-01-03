import Head from 'next/head'

function Meta({ title, description }) {
    return (
        <Head>
            <meta name="theme-color" content="#ffffff" />
            <meta name="description" content={description} key='description'/>
            <meta name="og:title" content={title} key='title'/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Hejliv | Styling af still billeder og reklamefilm',
    description: 'Jeg styler til still billeder og til reklamefilm. Og udvikler også gerne oplæg til ny billede stil, hjælper med foto/film brief og hvad der ellers kan være brug for rundt om en optagelse.'
}

export default Meta
