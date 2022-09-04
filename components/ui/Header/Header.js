export default function Header(){
    <header className="header">
                <div className="container"

                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>

                    <h1 style={{ margin: 0 }}>
                        Altea
                    </h1>
                    <nav>
                        <ul style={{
                            display: 'flex',
                            listStyleType: 'none',
                            margin: 0,
                            padding: 0,
                            gap: '1rem'
                        }}>

                            <li><a href="">Accueil</a></li>
                            <li><a href="">Projets</a></li>
                            <li><a href="">À propos</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
}