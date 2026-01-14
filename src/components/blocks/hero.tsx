import { Button } from "@/components/ui/button";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export default function Hero() {
  return ( 
    // <section className="flex flex-col items-center justify-center h-[80vh] py-24 text-center bg-sky-500">
      <div className="h-[80dvh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 mask-[radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("text-4xl md:text-5xl font-bold mb-6 text-white relative z-20")}>
        Trouvez votre formation, révélez votre potentiel
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Vox Echo Campus valorise les grandes écoles africaines et accompagne
        les jeunes dans leur orientation académique et professionnelle.
      </p>
       <div className="flex justify-center gap-4 z-20 my-10 md:text-xl">
        <Button size="lg" className="cursor-pointer">Découvrir les formations</Button>
        <Button size="lg" variant="outline" className="cursor-pointer">
          Explorer les écoles
        </Button>
      </div>
    </div>
    // </section>
  );
}
