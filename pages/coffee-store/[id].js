import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
    const router = useRouter();
    console.log("router", router);
    return (
        <div>
            Coffee Store Page {router.query.id}
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    );
};

export default CoffeeStore;