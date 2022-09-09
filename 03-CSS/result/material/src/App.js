import {SalesOverview} from "./components/SalesOverview";
import {Header} from "./components/Header";
import UserHeader from "./components/UserHeader";

import './app.scss'
import InfoTip from "./components/InfoTip";
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
function App() {
  return (
    <div className="App">
        <Header />
        <UserHeader/>
        <div>
            <SalesOverview/>
            <div>
                <InfoTip
                    bg={'linear-gradient(135deg, rgb(56, 184, 242), rgb(132, 60, 246))'}
                    num={286}
                    desc={'Docs'}
                    icon={<FolderOpenOutlinedIcon/>}
                />
                <InfoTip
                    bg={'linear-gradient(135deg, rgb(251, 199, 154), rgb(215, 62, 104))'}
                    num={23}
                    desc={'Ideas'}
                    icon={<EmojiObjectsOutlinedIcon/>}
                />
            </div>
        </div>

    </div>
  );
}

export default App;
