import style from "./index.module.css"
import { latestProjLinks } from "../../utils.js";
import DragSlider from "../dragSlider/DragSlider";
function LatestProject () {
    return (
        <section className={style.latest_project}>
            <div className={style.latest_project_wrapper}>
                <div className={style.latest_project_menu}>
                    <h2 className={style.latest_project_title}>Latest projects</h2>
                    <div>
                        <ul className={style.latest_project_list}>
                            {latestProjLinks.map((link, index) => (
                                <li key={index}><a className={style.link}>{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <DragSlider />
            </div>
            
        </section>
    )
}

export default LatestProject;