import Link from "next/link"
import Head from "next/head"
import { ImageContainer, SuccessContainer } from "../styles/pages/success"
import { GetServerSideProps } from "next"
import { stripe } from "../lib/stripe"
import Stripe from "stripe"
import Image from "next/image"

interface SuccessProps{
    customerName: string;
    product: {
        name: string;
        imageUrl: string;
    }
}

export default function Success({ customerName, product}: SuccessProps) {
    return(
        <>
        <Head>
            <title>Compra Efetuada | Ignite Shop</title>

            <meta name="robots" content="noindex" />
        </Head>

        <SuccessContainer>
            <h1>Compra Efetuada!</h1>

            <ImageContainer>
                <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>

            <p>
            Parabens <strong>{customerName}</strong> agradecemos por escolher nossa <strong>{product.name}</strong>. Esperamos que ele atenda todas as suas expectativas. Se precisar de ajuda,
             estamos à disposição. Aproveite ao máximo sua nova aquisição!
            </p>

            <Link href="/">
                Voltar ao catalogo
            </Link>
        </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if(!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details!.name;
    const product = session.line_items!.data[0].price!.product as Stripe.Product

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0],
            }

        }
    }
}