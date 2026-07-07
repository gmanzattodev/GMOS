import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";

export const imagens = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
];

// Icone Dock Padrao
import TerminalPadrao from "../../img/padrao/terminalpadrao.png";
import BrowserPadrao from "../../img/padrao/browserPadrao.png";
import ConfigPadrao from "../../img/padrao/Configuracaopadrao.png";
import FilePadrao from "../../img/padrao/filepadrao.png";
import JuntoPadrao from "../../img/padrao/Padrao.png"

// Icone Dock Neon
import TerminalNeon from "../../img/Neon/terminalNeon.png";
import BrowserNeon from "../../img/Neon/BrowserNeon.png";
import FileNeon from "../../img/Neon/ConfigNeon.png";
import ConfigNeon from "../../img/Neon/FileNeon.png";
import JuntoNeon from "../../img/Neon/Neon.png"

// Icone Dock Mine
import TerminalMine from "../../img/mine/TerminalMine.png";
import BrowserMine from "../../img/mine/BrowserMine.png";
import FileMine from "../../img/mine/ConfigMine.png";
import ConfigMine from "../../img/mine/FileMine.png";
import JuntoMine from "../../img/mine/Mine.png"

// Icone Dock Ice
import TerminalIce from "../../img/Ice/TerminalIce.png";
import BrowserIce from "../../img/Ice/BrowserIce.png";
import FileIce from "../../img/Ice/FIleice.png";
import ConfigIce from "../../img/Ice/configurationIce.png";
import JuntoIce from "../../img/Ice/Ice.png"


export const icons = [
  { id: 1, img: JuntoIce, nome: "Ice",},
  { id: 2, img: JuntoNeon, nome: "Neon",},
  { id: 3, img: JuntoPadrao, nome: "Padrão",},
  { id: 4, img: JuntoMine, nome: "Minecraft",},
];

export const temas = {
  1: [
    { id: 1, nome: "Terminal", img: TerminalIce },
    { id: 2, nome: "Browser", img: BrowserIce },
    { id: 3, nome: "Files", img: FileIce },
    { id: 4, nome: "Configurações", img: ConfigIce },
  ],

  2: [
    { id: 1, nome: "Terminal", img: TerminalNeon },
    { id: 2, nome: "Browser", img: BrowserNeon },
    { id: 3, nome: "Files", img: FileNeon },
    { id: 4, nome: "Configurações", img: ConfigNeon },
  ],

  3: [
    { id: 1, nome: "Terminal", img: TerminalPadrao },
    { id: 2, nome: "Browser", img: BrowserPadrao },
    { id: 3, nome: "Files", img: FilePadrao },
    { id: 4, nome: "Configurações", img: ConfigPadrao },
  ],

  4: [
    { id: 1, nome: "Terminal", img: TerminalMine },
    { id: 2, nome: "Browser", img: BrowserMine },
    { id: 3, nome: "Files", img: FileMine },
    { id: 4, nome: "Configurações", img: ConfigMine },
  ],
};
