import MainLinks from "./MainLinks"
import './Main.css'

const Main = () => {
    return(
        <main className="home">
            <p className='intro'>
                In recent years, we have witnessed a rather worrying climate changes.
                This is the reason why we need to be careful and take care of our Earth.
                So I thought, it would be nice to have an app which you can monitor
                global warming data and I developed it.
                With this app you can check: temperature anomalies, methan, carbon dioxide and
                nitrous oxide levels and polar ice caps.
            </p>

            <MainLinks />
        </main>
    )
}

export default Main