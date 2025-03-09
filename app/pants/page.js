import {CatalogTopBar} from "@/components/catalog/top_bar";
import {Menu} from "@/components/catalog/menu";
import {Catalog} from "@/components/catalog/Pants";
import {Pusk} from "@/components/catalog/pusk";

export default function CatalogPage() {
    return (
        <>
            <title>Muiraje Catalog</title>
            <div className='border-r-2 border-b-2 border-stone-700  h-screen max-h-screen mb-0 font-basis33'>
                <div className='h-full w-full p-1 pb-10 flex-col flex bg-stone-200  border-l-2 border-t-2 border-white'>
                    <div className='flex-none'>
                        <CatalogTopBar/>
                        <Menu/>
                    </div>
                    <Catalog/>
                </div>
            </div>
            <Pusk/>
        </>
    );
}
