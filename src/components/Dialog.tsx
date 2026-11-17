import {
  MotionDialog,
  MotionDialogTrigger,
  MotionDialogContent,
  MotionDialogHeader,
  MotionDialogTitle,
  MotionDialogDescription,
  MotionDialogBody,
  MotionDialogFooter,

} from "./ui/motion-dialog";

export default function AboutDialog(){
    return(
        <MotionDialog animation="blur">
            <MotionDialogTrigger asChild>
                <button type="button" className="mt-2 cursor-pointer text-sm">
                    About
                </button>
            </MotionDialogTrigger>
            <MotionDialogContent className="rounded-[22px] border border-neutral-200 bg-[#FAFAFA] p-6 text-left shadow-none">
                    <MotionDialogHeader>
                        <MotionDialogTitle className="pr-8 text-xl font-normal leading-normal"> A face. A few lines.</MotionDialogTitle>
                        <MotionDialogDescription className="mt-6 text-sm leading-[1.4] text-neutral-900">
                            Stick Me is a tiny digital toy that turns your face into
                            a very expressive stick figure.
                        </MotionDialogDescription>
                    </MotionDialogHeader>
              <MotionDialogBody className="pt-10 pb-9 text-left">
                    <ol className="space-y-6 text-sm">
                        {[
                        "Choose a photo of your face.",
                        "Move, scale and tilt it into place.",
                        "Pick a move. Enjoy the nonsense.",
                        ].map((step, index) => (
                        <li key={step} className="flex items-baseline gap-5">
                            <span className="text-[10px] text-neutral-600">
                            {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{step}</span>
                        </li>
                        ))}
                    </ol>

                   <p className="my-8 text-xs text-neutral-600">
                        An experiment by Elia Toribio
                    </p>
                </MotionDialogBody>
                <MotionDialogFooter>
                    <a
                        href="https://eliatoribio.com/"
                        className="w-full rounded-full bg-[#EBEBE8] px-5 py-3 text-center text-xs transition-colors hover:bg-neutral-200"
                    >
                        Back to portfolio ↗
                    </a>

                </MotionDialogFooter>

            </MotionDialogContent>
        </MotionDialog>
    );
}