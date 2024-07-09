import WordRotate from "../../MagicUi/WordRotate/index";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <div className="m-16">
      <div className="flex flex-row items-center justify-center">
        <div>
          <div className="mr-16 h-64 w-64 rounded-full border-[3px] border-solid border-Downriver"></div>
        </div>
        <Paragraph
          content={
            <div className="relative flex flex-col overflow-hidden">
              <span>
                Hi, My name is Jodie. I'm a React Developer and I'm{" "}
                <div className="absolute -bottom-2 left-16 flex justify-center self-center capitalize">
                  <WordRotate
                    words={[
                      "Sci-Fi film aficionado",
                      "fantasy story devotee",
                      "nature lover",
                      "photography enthusiast",
                      "aspiring artist",
                    ]}
                  />
                </div>
              </span>
            </div>
          }
          css="text-3xl lg:ml-16 leading-relaxed text-justify font-Kumbh flex flex-row"
        />
      </div>
      <div className="mt-16 flex flex-col items-center justify-center lg:flex-row">
        <Paragraph
          content={
            "S'intéresse à ce qui m'entoure depuis petite : comprendre comment les choses fonctionnent et pourquoi. Cursus scientifique pour la nature et les organismes et ensuite la reconversion vers l'informatique, connaissance dev qui a attisé mon interet sur le fonctionnement des sites et le code qu'il y a derrière. Depuis je code des projets et continuent à apprendre tous les jours. "
          }
          css={
            "text-xl leading-relaxed text-justify leading-relaxed font-Kumbh tracking-widest"
          }
        />
        {/* <div>
          <div className="ml-16 h-64 w-64 rounded-full border-[3px] border-solid border-Downriver"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Component;
