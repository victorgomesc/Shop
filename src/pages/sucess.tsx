import { useRouter } from "next/router"

export default function Sucess() {
    const { query } = useRouter()

    return(
        <h1>Sucess</h1>
    )
}