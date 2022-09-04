export default function Layout(props) {
    return (
        <div>
            <Header />

            <div>
                {props.children}
            </div>

            <Footer />

        </div>
    )
}